---
layout: post
title: "Creating ossia score add-ons"
date: 2021-06-07
author: Jean-Michaël
category: Dev
image: /assets/blog/addondev/banner.png
thumbnail: "/assets/blog/addondev/banner.webp"
image-alt: Hairy C++ plug-in code
description: A tutorial for making custom ossia score add-ons, involving C++ JIT'ing
---

### Introduction

_ossia score_ is a free and open-source _intermedia_ sequencer: it allows to sequence not only sound files and MIDI like most Digital Audio Workstations, but also JavaScript scripts, videos and visual effects on the GPU, OSC, DMX and a whole lot of communication protocols.

This article is an introductory tutorial about writing and distributing add-ons for _ossia score_ ; it presents the technology used, the tools put in place to help writing such add-ons, showcases the available APIs and explains how it differs from other common plug-in APIs.

### Tech stack

_score_ add-ons are developped in C++20, like the rest of _score_. The main code-base still uses C++17 mostly to keep compatibility with Debian Stable's native compiler (GCC 8) but add-ons should not restrain themselves as the official releases are built with Clang 12 which supports most of C++20.

They are distributed in source form. We use LLVM and Clang to compile them with the most adapted settings on the users's machine, as if the add-on was built with `-Ofast -march=native` (again, with the featureset of Clang / LLVM 12).
This means that in a lot of case, math operations can be vectorized, which is really useful with audio algorithms for instance.

The implementation is based on a lot of existing work - particularly useful resources were:

- [JitFromScratch](https://github.com/weliveindetail/JitFromScratch)
- [NERVTech Wiki](https://wiki.nervtech.org)
- Following the LLVM mailing-list and the various ORC-JIT related topics.

The source code for the JIT plug-in loading is entirely contained [in this part of the score repository](https://github.com/ossia/score/tree/master/src/plugins/score-plugin-jit/JitCpp).

SDK headers are provided from the _score_ package manager ; they are generated automatically for each release of _score_ by the CI service. They are extracted into the user library automatically when downloaded from the package manager: `Documents/ossia score library/SDK/3.0.0-a39/usr/include/...`. It is currently possible to override that path with the `SCORE_JIT_SDK` environment variable, though a graphical configuration may make sense. They contain _ossia score_ and _libossia_'s headers of course, but also Qt 5.15, boost 1.76, libav (ffmpeg 4.4), libc++, libc, etc... everything needed to create neat stuff.

The most important thing is that the user does not have to install any compiler ; no tens-of-gigabytes of Visual Studio or XCode toolchains to install, just the _score_ binary (a few hundred megabytes) and the SDK headers (another few hundred megabytes).

#### Features provided

The Clang / LLVM JIT feature is used for:
* Compiling add-ons which add new processes, features, etc. to the software. Pretty much the entirety of *ossia score* can be changed that way.
* Compiling [Bytebeat](https://ossia.io/score-docs/processes/bytebeat.html) expressions.
* A simple [CPU texture generator](https://ossia.io/score-docs/processes/texgen.html) for retro, analog video synth-like effects.
* The [C++ JIT Process](https://ossia.io/score-docs/processes/cpp_jit.html) is an experiment in providing very simple computation nodes without much type safety. It uses the libossia API for graph nodes ([example](https://github.com/ossia/libossia/blob/master/src/ossia/dataflow/nodes/merger.hpp)).

#### Current restrictions

Since LLVM's LLJIT work is still an ongoing work-in-progress, some features may be missing (or slightly more buggy :p).

##### No thread_local

For instance, I encountered issues with `thread_local` on macOS -- apparently, the relocations used aren't supported by LLJIT yet, given the `MachO TLV relocations not yet supported` error I was getting whenever `thread_local` or `__thread` were used.

Thankfully, it was used in only two places: in the [spdlog](https://github.com/gabime/spdlog) library used for logging (which could be disabled with `-DSPDLOG_NO_TLS=1`) and in Cameron Desrochers's well-known [lock-free MPMC queue](https://github.com/cameron314/concurrentqueue), which needed a small patch that the author kindly merged in less than an hour !

In order to make the issue explicit, when building add-ons, using `thread_local` will give a compile error as the symbol has been redefined to `__do_not_use_thread_local__`.

##### Exceptions ?

Exceptions especially on Windows are still iffy from what can be read on various LLVM mailing-list topics -- but you wouldn't throw an exception from the audio thread anyways, would you :-)

On Linux and Mac they seem to work.

#### What we gain : performance

The main benefit is the performance win of building add-ons in a way that will leverage (as much as LLVM and Clang's optimizers permit) the users's CPU features.

In particular, even in 2021 we found out that it isn't possible to raise the baseline for distributed binaries past the x86_64 defaults (`-march=x86_64`): I had tried to release versions with a Sandy Bridge (yes, a ten year old CPU) baseline and even that was too much for some users:

- [Issue #1140](https://github.com/ossia/score/issues/1140)
- [Issue #1013](https://github.com/ossia/score/issues/1013)

Thus, the main x86_64 binaries aren't particularly optimized besides what SSE2 (mandatory with x86_64) offers in order to allow everyone to use it. For reference, the official ARM binaries use a Raspberry Pi 3 baseline, tuned for the Pi 4 CPU - they will work on Pi 3 and Pi 4 but the performance on the Pi 4 is much better as we are able to handle OSC, video processing, multi-channel audio without issues.

When doing tests [back in 2019](https://lac.linuxaudio.org/2019/doc/celerier.pdf), the benefits of using more recent vector instructions was a no-brainer ; going from `-march=x86_64` to `-march=native` makes some effects run roughly twice as fast (which means that as musicians, we can stack a few dozen more choruses and reverbs in that effect chain ;p).

#### What we gain : simplicity and coherence

As mentioned before, _score_'s official releases are built against one single platform: Clang / LLVM 12 (which implies lld-12, and libc++-12). This is the case on Windows (thanks to [the llvm-mingw project of Martin Storsjö](https://github.com/mstorsjo/llvm-mingw)), on Linux with custom-built toolchains (build scripts [in the ossia/sdk repo](https://github.com/ossia/sdk)) and on Mac ; on Mac this is already the version shipped by Xcode so we use that one. We also use Emscripten for the [WebAssembly builds](https://ossia.io/score-web) which are right now on a patched version of LLVM 13, but this is more of an experiment than an actual product.

macOS using libc++ actually make things harder -- at some point I tried to built my own libc++ (in order to be able to provide `std::optional` and `std::variant` before 10.14 ; see e.g. [this StackOverflow question](https://stackoverflow.com/questions/52521388/stdvariantget-does-not-compile-with-apple-llvm-10-0)for the issues caused by Apple tying standard C++ library version to operating system versions). Sadly this caused a lot of obscure crashes when linking against Apple frameworks: a few of them are implemented in C++ (in particular I noticed a stack trace going into `nlohmann::json` recently in one of these frameworks). Thus using multiple different versions of the standard library caused deep ODR issues which mainly manifested as crashes when using those frameworks (which Qt does heavily for instance).

The main benefit is that one can expect a plug-in to perform the same no matter the platform: no surprises because of implementation differences of `std::regex` or `std::unordered_map` (which generally tend to manifest in rare and hard-to-debug edge cases), implementation-defined behaviour, or features being implemented or not depending on the stdlib used.

Building the add-ons from source also mean that there won't be any ABI issues (as _score_'s API is C++ without any feature restriction). Add-ons are built against exactly the same headers, flags and defines than _score_ itself. If there is a _score_ update, the add-ons will be rebuilt automatically, which gives us some leeway as this means that only API compatibility is needed, a much easier guarantee to provide. This also means that if we improve the performance of some _score_ feature or provided library, plug-ins will automatically benefit from it. That could mean, for instance, marking a _score_ data type as using the `[[trivial_abi]]` attribute [provided by Clang](https://quuxplusone.github.io/blog/2018/05/02/trivial-abi-101/) without fear that it breaks plug-ins, optimizing the field packing of a data type, switching to more efficient implementation of containers, etc.

Some recent interesting discussions on C++ ABI comptibility (and what it implies) can be read / listened here:

- On the recent [cppcast with Marshall Clow](https://www.youtube.com/watch?v=PueTm4nFrSQ).
- On Cor3ntin's very good blog post, [The Day The Standard Library Died](https://cor3ntin.github.io/posts/abi/).

#### What we lose : binary size

Since _score_ add-ons can use any part of score or the libraries it uses (Qt, libav, boost, and even LLVM and libclang themselves), this means that most symbols need to be exported from _score_, which makes the executable... chonky. LLVM and libclang themselves account for roughly 60% of the chonk, it's likely that this could be optimized a bit more.

Needing to export symbols from a binary which statically-link against all its non-operating-system-provided dependencies made it clear that there is a _big_ confusion out there on static libraries.

For instance, it is necessary to patch Qt for it to export symbols even from static builds.

A lot of other libraries have the following logic hardcoded:

{% highlight cpp %}
#if defined(_WIN32)
  #if MYLIB_SHARED
    #if MYLIB_BUILD
      #define MYLIB_EXPORT __declspec(dllexport)
    #else
      #define MYLIB_EXPORT __declspec(dllimport)
    #endif
  #else
    #define MYLIB_EXPORT
  #endif
#else // if we're lucky - a lot of libraries just assume that people don't use -fvisibility=hidden at all on non-DLL platforms
  #if MYLIB_SHARED
    #if MYLIB_BUILD
      #define MYLIB_EXPORT __attribute__((visibility=default))
    #else
      #define MYLIB_EXPORT __attribute__((visibility=hidden))
    #endif
  #else
    #define MYLIB_EXPORT
  #endif
#endif
{% endhighlight %}

This logic is **wrong** - one can build static libraries, or even executables, and still want to export symbols !

In _score_ there is a fork of the [GenerateExportHeader](https://github.com/ossia/libossia/blob/master/cmake/GenerateStaticExport.cmake) CMake function where I added a parameter to allow exporting symbols from static libraries, maybe I should upstream it.

#### How it works

The actual design is very simple:

- _score_ looks for add-ons in the user library, in the Addons and Nodes subfolders.
- When any is found, first we hash the preprocessed source. This generally only takes a few hundred milliseconds.
- If we find a bitcode file with the corresponding hash (stored in the users's cache folder) we pass it to LLJIT directly.
- Otherwise we invoke clang and ask it to generate LLVM bitcode, which is cached in the users's computer. This part can take some time. At some point I tried threading it but encountered failures ; this should definitely be revisited (along with a notification to the user that things are happening as right now it just blocks the UI thread).
- We look for a pointer to a factory function and invoke that ; it creates a factory object which is passed to the usual score's plug-in loading mechanism.
- Done !

#### Long-term plans

Right now, single processes are compiled independently.
The next step is obviously to compile the execution graph, currently dynamic, itself, directly from _score_.
This would ideally enable inter-procedural optimizations between execution nodes and other similar niceties.

#### Frequently Asked Questions

One may ask, very reasonably, the following questions:

- Why not ship LLVM & clang as a separate binary ?
- Why not just create dynamic libraries and load them with `dlopen` ?

To the first question: one of the original plans was also to add potential language extensions and lints
in order to make some patterns more easy. We're not there yet but it is much easier if we have access to Clang's API directly from score. But shipping clang in the SDK would greatly reduce the current binary size so the option is still being assessed. For LLVM, we were already using Faust which uses LLVM itself so the dependency was already there, ready to be used.

To the second: this would mean shipping a linker too. This is relatively easy on Linux and Windows, but much much harder on Mac where until recently with the work on [zld](https://github.com/michaeleisel/zld) and on the Zig project, the only workable linker was the one provided with Xcode, and we explicitely do not want our users to have to install Xcode.
Loading the code with LLJIT also allows us to have more fine-grained control on what symbols are exposed to the plug-ins ; a further step would be to look into generating and using profile data to recompile plug-ins on-the-fly.

### Developping add-ons

The simplest way to develop or change an add-on is to do a clone of the score repository and put the add-on folder inside the `src/addons` directory.
The next time CMake is run, it will pick up the add-on and build it along with the rest. It will be treated like any other part of _score_, which is built almost entirely [around plug-ins providing every feature](https://github.com/ossia/score/tree/master/src/plugins).

An introductory video guiding the development environment installation, and showing how to create a simple effect has been made and should still be up-to-date: [you can watch it on Youtube](https://www.youtube.com/watch?v=LSifHFbuky0). Note that while developing score works on Mac, Windows and Linux, we heavily recommend using Linux as a development environment ; on the very same computer, SSD drive, using the same version of Clang... building _score_ from scratch takes me 4/5 minutes on Linux and 30 minutes on Windows, due to the very very very slow NTFS filesystem most likely (plus whatever malevolent antiviral mess is running on there).

The user manual of _score_ has a very incomplete section on [development of score extensions](https://ossia.io/score-docs/development) ; in particular the Doxygen has some information. But a lot more work is needed in that area :-)

#### Add-on templates

We provide a few templates to get started writing custom _score_ add-ons in the [ossia-templates](https://github.com/ossia-templates/) GitHub organization:

- [Audio node simple template](https://github.com/ossia-templates/score-audio-node-template): a simple, self-contained, one-file extension providing one process. This uses the "Simple API": a very high-level API that tries its best to enforce type-safety for the input/output ports of a node. As such, it is impossible for instance to mistakenly interpret an "audio" port as a "value" or "MIDI" port, thanks to various C++17 features. Some examples of such nodes are available in the [score git repo](https://github.com/ossia/score/tree/master/src/plugins/score-plugin-fx/Fx). This API is only used to provide execution processes with very simple controls and no particular graphical interface other than the controls. It is what one should use for instance to create audio, MIDI or data effects / filters / generators.

- [Audio node add-on template](https://github.com/ossia-templates/score-audio-addon-template): uses the same API than above but gives access to more features: it is possible to use multiple files, control the factories, etc. For instance, the [Analysis](https://github.com/ossia/score-addon-analysis) add-on, which provides classes to extract various audio features with the [Gist](https://github.com/adamstark/Gist) library, is a good example of what can be achieved with that template.

- [VFX template](https://github.com/ossia-templates/score-vfx-template): an example of providing a visual effect. Visual effects in score use the [Qt RHI](https://www.qt.io/blog/qt-quick-on-vulkan-metal-direct3d) in order to be portable to OpenGL, D3D, Vulkan and Metal. Note that for now the code is still pretty rough around the edges and not very commented.

- [Process template](https://github.com/ossia-templates/score-process-template): an example of providing a process with the "manual" API. This grants much more power to the add-on author: it is possible to design custom inspectors and process user interfaces, expose custom parameters through _score_'s OSC tree (the LocalTree), provide custom undo-redo actions, etc.
  Most of score's actual processes use that API. For instance, this is what one would use to integrate a custom programming language.

- [Device template](https://github.com/ossia-templates/score-device-template): an example of providing a new device type that can be added to the explorer, like OSC, MIDI, etc... inputs / outputs.

To use the templates, simply clone the repo and run `./init.sh YourAddonName`: this will rename everything and make sure that you start from something that builds.
Every template has a simple example built-in in order to get started quickly.
They also come with Github actions which will test your code on macOS, Windows and Linux automatically.

Note that the templates would definitely benefit from more polish ; any contribution is welcome !

#### Future APIs

For the upcoming v3 release of _score_, the core API may still be in fluctuation. In particular, recording, and in general the way information is passed back from the execution threads to the UI thread is to be reworked ; likewise the graphics pipeline is likely to still change a bit in order to accomodate for more use-cases: it started as a simple "apply an effect on a full-screen quad" thing but is likely going to grow a bit.

In particular, we are waiting for C++ to support reflection and [metaclasses](https://herbsutter.com/2017/07/26/metaclasses-thoughts-on-generative-c/) as this would _really_ simplify the Simple API all the while making it more powerful and faster to compile ; right now it relies on a large amount of template instantations to generate all the "Process" code from a few structs at compile-time, which leads to symbol bloat and very long builds.

Ideally, the final, end-game API would look like:

{% highlight cpp %}
struct Node {
    AudioInput input;
    AudioInput sidechain;
    AudioOutput output;

    [[min: 0, max: 100]]
    LogSlider frequency;

    [[values: {"foo", "bar"}]]
    ComboBox mode;

    void run(
        const ossia::token_request& tk,
        ossia::execution_state& state) {
      // Do things using the controls & ports defined in the struct
    }
};
{% endhighlight %}

### Sharing add-ons

Once your add-on is ready to be shared to the greater public, it can be submitted to the package manager.
The package manager simply uses a JSON file which references [add-ons metadatas](https://github.com/ossia/score-addons/blob/master/addons.json) ; create a PR to the repository which adds your add-on.

When it is merged, _score_ users will be able to see the node in their library.

Note that this design is likely to evolve and be made more robust, when the need shall arise !

Thanks for reading, and please come to the [chat](https://gitter.im/ossia/score) & [forum](https://forum.ossia.io) for any question !
