---
layout: post
title:  Achieving generic bliss with reflection in modern C++
date:   2021-07-22
author: Jean-Michaël Celerier
category: Dev
image: /assets/blog/reflection/banner.png
thumbnail: "/assets/blog/reflection/banner.webp"
image-alt: Some nifty C++20 code
description: "Techniques for reflection in C++20 applied to multimedia systems"
---

Reflection is often presented as a feature that makes software harder to understand.
In this article, I will present ways to approximate some level of static reflection in pure C++, thanks to C++17 and C++20 features, show how that tool can considerably simplify a class of programs and libraries, and more generally enable ontologies to be specified and implemented in code.
<!--more-->

## What we aim to solve

Imagine that you are writing a neat algorithm. You've worked on it for a few years ; it produces great results and is now ready to be shared to the world.
Let's say that this algorithm is a noise generator.

You'd like that noise generator to easily work in a breadth of environments: in 2D bitmap manipulation programs ([Krita](https://krita.org), GIMP, ...), in audio and multimedia software (PureData, Audacity, [ossia score](https://ossia.io), [Mixxx](https://mixxx.org/)...), 3D voxel editors, etc.

Your algorithm's implementation more-or-less looks like this:

{% highlight cpp %}
// [[pre: alpha >= -1. && alpha <= 1. ]]
// [[pre: 11 <= beta && beta < 247 ]]
// [[post ret: ret >= 0. && ret <= 1.]]
auto noise(
    float input,
    float alpha,
    int beta)
{
  // set of extremely complex operations involving the inputs to the algorithm
  return std::fmod(std::pow(input, alpha), float(beta)) / beta;
}
{% endhighlight %}

You are proud of your neat results, prepare conference papers, etc... but ! Now is the time to implement your noise algorithm in a set of software in order to have it used widely and become the next industry standard in procedural noise generation.

If you are used to working in C#, Java, Python, or any other language more recent than 1983, the solution may at this point seem trivial. Sadly, in C++, this has been unordinately hard to implement until now, especially when one aims for as close as possible to a zero-runtime cost-abstraction.

On the other hand, if you implement your algorithm in C#, Java, or Python, having it useable from any other runtime environment is a massive challenge, as two VMs, often with their own garbage collection mechanism, etc... now have to cooperate. Thus, for something really universal, a language than can compile to native binaries, with minimal dependencies, is the easiest way to have a wide reach. In particular, most multimedia host environments are written in a native language and expect plug-ins conforming to operating system DLLs, executable and dynamic linker APIs: ELF, PE, Macho-O ; `dlopen` and friends. There aren't that many suitable candidates with a high enough capacity for abstraction: C++, Rust, D without GC, Zig. Since most of the media host provide C or C++ APIs, and C does not have any interesting form of reflection, C++ is the natural, minimal-friction choice.

This post is a hint of how much better and easier life is with true reflection as available in other languages, and in particular how attribute reflection and user-defined attributes, would make one's life. And most importantly, what kind of abstracting power "reflective programming" holds over existing generic programming techniques in C++: macro-based metaprogramming, template-based metaprogramming (with e.g. CRTP being commonly used for that).

#### The problem domain

The software in which we want to embed our algorithm should be able to display UI widgets adapted for the control of `alpha` and `beta`, whose bounds you have so painstakingly and thoroughly defined. Likewise, the UI widgets should adapt to the type of the parameter ; a spinbox may make more sense for `beta`, and a slider, knob, or any kind of continuous control for `alpha`.

Maybe you'd also like to serve your algorithm over the network, or through an IPC protocol like D-Bus. Again, you'd have to specify the data format being used.

If for instance you were using the OSC protocol, to make your algorithm controllable over the network, messages may look like:

{% highlight cpp %}
/noise/input ,f 0.123
/noise/alpha ,f 13.5
/noise/beta ,i 17
{% endhighlight %}

Maybe you'd also like to serialize your algorithm's inputs, in order to have a preset system, or just to exchange with another runtime system expecting a serialized version of your data. In JSON ? YAML ? Binary ? Network-byte-order binary ? GLSL `std140` ? So many possibilities !

#### Hell on earth

For *every* protocol, host environment, plug-in system, ... that you want to provide your algorithm to, you will have to write some amount of binding code, also often called *glue code*.

How does that binding code may look, you ask ?

Let's look at some examples from around the world:

* [Making a fade algorithm in PureData](https://github.com/pure-data/externals-howto/blob/master/example4/xfade%7E.c) : a class is constructed at run-time, with custom `t_object`, `t_float`, `t_inlet` etc... types, some of which requiring calls to various runtime allocating functions. Lots of not-very-safe-looking casts (but it's C, there's not a lot of choice).
* [Noise generator for Max/MSP's Jitter, using OpenCV](https://github.com/Cycling74/cv.jit/blob/master/source/projects/cv.jit.noise/cv.jit.noise.cpp). Same as PureData, with macros sprinkled on top. Wanna get a floating-point value input by the user ? Lo and behold

{% highlight cpp %}
void cv_jit_noise_set_stddev(t_cv_jit_noise *x, t_symbol *s, short argc, t_atom *argv)
{
	if (x && argc > 0) {
		for (short i = 0; i < x->m_dims; i++) {
			short j = i < argc ? i : argc - 1;
			x->m_stddev[i] = atom_getfloat(argv + j);
            ...
        }
    }
}
{% endhighlight %}

What happens if `argv + j` isn't a float but a string ? Let's leave that for future generations to discover !

* [Audio filter suitable for use as a VST](https://github.com/SpotlightKid/faustfilters/blob/master/plugins/oberheim/Oberheim.cpp). Notice how the parameters to the algorithms are handled in `switch/case 0,1,2...` ; thankfully this is all generated code from the Faust programming language. What happens if at some point a parameter is removed ? Better have good unit tests to catch all the implicit uses of each parameter...
* [OpenFX image filter](https://openfx.readthedocs.io/en/main/Guide/ofxExample3_Gain.html#gainexample): here's how one says that the algorithm has a bounded input widget (e.g. a slider going from 0 to 10 with a default value of 1):

{% highlight cpp %}
gPropertySuite->propSetString(paramProps, kOfxParamPropDoubleType, 0, kOfxParamDoubleTypeScale);
gPropertySuite->propSetDouble(paramProps, kOfxParamPropDefault, 0, 1.0);
gPropertySuite->propSetDouble(paramProps, kOfxParamPropDisplayMin, 0, 0.0);
gPropertySuite->propSetDouble(paramProps, kOfxParamPropDisplayMax, 0, 10.0);
{% endhighlight %}

Hopefully you don't forget all the incantations's updates when you decide that this control would indeed be better as an integer !
* A very good example is the [1€ filter](https://gery.casiez.net/1euro/) input filtering algorithm. The actual algorithm can fit in a few dozen lines. The [Unreal Engine binding](https://github.com/DarioMazzanti/OneEuroFilterUnreal) is almost 600 lines !
* Things like [iPlug](https://github.com/iPlug2/iPlug2/blob/master/Examples/IPlugEffect/IPlugEffect.cpp#L8) are a bit more sane, but we still have to triplicate our parameter creation / access: in an enum in the hpp, in the constructor and finally in `ProcessBlock` where we get the actual value. This is still a whole lot of work versus **JUST ACCESSING A FLOAT IN A STRUCT !!11!1!!**
* A Krita [plug-in for noise generation](https://github.com/KDE/krita/blob/master/plugins/generators/simplexnoise/simplexnoisegenerator.cpp#L62) -- here Qt's QObject run-time property system is used to declare and use the algorithm controls. That also means inheriting from Qt's QObject, which has a non-negligible memory cost.
* Wanna receive messages through OSC ? [Make the exceptions rain !](https://github.com/RossBencina/oscpack/blob/master/examples/SimpleReceive.cpp)
* Wanna expose your algorithm to another language, such as Python ? [Get ready for some py::<>'y boilerplate](https://pybind11.readthedocs.io/en/stable/advanced/classes.html).

As such, one can see that:
- There is no current generic way for writing an audio processor in PureData, and have it work in, say, Audacity, Ardour or LMMS as a VST plug-in, expose it through the network... Writing a PureData external ties you to PureData, and so does writing a Krita plug-in.
It's the well-known ["quadratic glue"](https://www.oreilly.com/radar/thinking-about-glue/) problem: there are N algorithms and M "host systems", thus NxM glue code to write.

- All the approaches are riddled with unsafety, since the run-time environments force the inputs & outputs to the algorithm to be declared dynamically ; thus, if you make an error in your call sequence, you rely on the runtime system you are using to notice this error and notify you (e.g; if you are lucky you'll get an error message on stdout ; but most likely a crash).

- All the approaches require duplicating the actual parameters of your algorithm, e;g. our `alpha`, `beta`, once as actual C++ variables, once as facades to the runtime object system you are interacting with.

Of course, the above list is not an indictment on the code quality of those various projects: they simply all do as well as they can considering the limitations of the language at the time they were originally written, in some cases multiple decades ago.

We will show how reflection allows to improve on that, and in particular get down to N+M pieces of code to write instead of NxM.

#### Problem statement
Basically: there's a ton of environments (also called "hosts", "host APIs" in the remainder of this article) which define ad-hoc protocols or object systems. Can we find a way to make a C++ definition ("algorithm", "plug-in" in the article) which:

- Does not depend on any pre-existing code: doesn't inherit from a class, doesn't call arbitrary run-time functions, etc. The *definition* of the algorithm shall be writable without having to include *anything*, even standard headers (discounting of course whatever third-party library is required for the algorithm implementation).

- Does not use anything other than structures of trivial, standard-layout types. No tuples, no templates, no magic, just `structs` containing `float`, `int` and not much more. This is because we want to be able to give the *simplest possible expression* of a problem. C++ is often sold as a language which aims to leave no room for a lower-level language. The technique in this post is about leaving no room for a simpler and more readable implementation of an algorithm, while maintaining the ability to control its inputs and outputs at run-time. Ideally, that would lead to a collection of such algorithms not depending on any framework, except optional concept definitions for a given problem domain. Of course, once *this* works, a specific community could choose to define its core concepts and ontologies through a set of standard-library-like-types, e.g. `string_view`, `array` or `span`-like types.

- Does not duplicate parameter creation: defining a parameter should be as simple as adding a member to a structure. The parameter's value should not be of a complicated, custom library type; just using `int` or `float` should work. At no point one should have to write the name of a variable twice, e.g. with a macro system such as Boost.Fusion with `BOOST_FUSION_ADAPT_STRUCT`, with Qt / copperspice / verdigris property systems, or with pybind-like templates: remember, we do not want our algorithm code to have any dependency !

- Allows to specify metadata on parameters: as one could see, it is necessary to be able to define bounds, textual descriptions, etc... for the inputs to the algorithm. For instance, the algorithm author may want to define a help text for each of the parameters, describing how each control will affect the result.

- Allows that definition to be *automatically* used to generate binding code to any of the environments, protocols, runtime systems mentioned above, with for only tool a C++20 compiler.

## Massaging the problem

Sadly, C++ does not offer true reflection on any entity: from the generic function `noise` defined above, it would be fairly hard to extract its parameter list, and reconstruct what we need to perform the above. Likewise, due to the lack of user-defined attributes, one wouldn't be able to tag the input / output parameters, to give them a name, bounds, etc.

We will however show that with very simple transformations, we can reach our goals !

#### First transformation: function to class

This transformation is commonplace in C++: classes / structs are in general more convenient to use than straight function pointers. They are easier to pass as arguments, work better with the type system as template arguments, etc.

Let's apply it:
{% highlight cpp %}
// noise.hpp
#pragma once
struct noise
{
  float alpha;
  int beta;

  /* constexpr_in_some_future_standard */
  float operator()(float input) const
  {
    return std::fmod(std::pow(input, alpha), float(beta)) / beta;
  }
};
{% endhighlight %}

Thankfully, the actual implementation does not change ; we merely put some arguments as struct members instead. If the algorithm is complex with many settings and toggles, it is likely that this was already the case in your implementation.

What if, dear reader, I told you that, as of C++17 (and actually even 14 if using a non-legal hack), this is pretty much enough for achieving three of our four goals (with some limitations, mainly on the number of members) ?

#### Mapping our class to a run-time API automagically

Assume the following imaginary run-time API for doing some level of processing, in cross-platform C89:

{% highlight C %}
typedef void* lib_type_t;

enum lib_argument_types {
    kFloat, kInt
};

lib_type_t lib_define_type(const char* name);
void lib_add_float(lib_type_t handle, const char* name, float* ptr, float min, float max);
void lib_add_int(lib_type_t handle, const char* name, int *ptr, int min, int max);

// Vararg is a list of lib_argument_types members, defining the arguments of the function.
void lib_add_method(lib_type_t handle, const char* name, void* func, void* context, lib_argument_types input, lib_argument_types output); //some APIs may put varargs here instead
{% endhighlight %}

To register our process to thar imaginary API, one may write the following, which would then be compiled as a .dll / .so / .dylib and be loaded by our runtime system through `dlopen` and friends:

{% highlight cpp %}
noise algo;
void process(void* context, float* out, const float* in)
{
  noise& algo = *static_cast<noise*>(context);
  *out = algo(*in);
}

lib_type_t main()
{
  auto r = lib_define_type("noise");
  lib_add_float(r, "alpha", &algo.alpha, 0., 1.); // oops
  lib_add_int(r, "beta", &algo.beta, 11, 247);
  lib_add_method(r, "process", reinterpret_cast<void*>(process), &algo, kFloat, kFloat);
  return r;
}
{% endhighlight %}

What we want, is simply to use C++ to generate all the code above automatically.
That means, most importantly, to call the relevant `lib_add_*` function for each parameter with the correct arguments.

#### Enumerating members

This is trivial, thanks to a library, Boost.PFR, which technically works from C++14 and up.
Note that the library is under the Boost umbrella but does not have any dependencies and can be used stand-alone.
The technique is basically a band-aid until we get true reflection: it counts the fields by checking whether the type T is constructible by N arguments of a magic type convertible to anything, and then uses destructuring to generate tuples of the matching count.

In a nutshell:
{% highlight cpp %}
auto tie_as_tuple(auto&& t, size<1>) {
  auto&& [_1] = t;
  return std::tie(_1);
}
auto tie_as_tuple(auto&& t, size<2>) {
  auto&& [_1, _2] = t;
  return std::tie(_1, _2);
}
// etc... computer-generated
{% endhighlight %}

It opens a wealth of possibilities: iterating on every member, performing operations on them, etc. ; the only restriction being: the type must be an aggregate. Thankfully, that is not a very hard restriction to follow, especially if we want to write declarative code, which lends itself pretty well to using aggregates.

Let's for instance write a function that takes our struct and generates the `lib_add_float` / `lib_add_int` calls:

{% highlight cpp %}
struct bind_to_lib {
  lib_type_t handle;

  void register_parameters(auto& algo)
  {
    struct {
        bind_to_lib& self;
        void operator()(float& f) const noexcept {
          lib_add_float(self.handle, "???", &f, ???, ???);
        }
        void operator()(int& i) const noexcept {
          lib_add_int(self.handle, "???", &i, ???, ???);
        }
    } visitor;
    boost::pfr::for_each_field(algo, visitor);
  }
};
{% endhighlight %}

This gets us 90% there: if our C API was just `lib_add_float(lib_type_t, float*);` that blog stop would stop right there !

But, as it stands, our API also expects some additional metadata: a pretty name to show to the user, mins and maxs...

#### Second transformation: ad-hoc types for parameters

This transformation is mechanical, but complexifies our code a little bit.
We will change each of our parameters, into an anonymous structure containing the parameter:

{% highlight cpp %}
float alpha;
{% endhighlight %}
becomes
{% highlight cpp%}
struct {
  float value;
} alpha;
{% endhighlight %}

And at this point, it becomes easy to add metadata that will not have a per-instance cost, unlike a lot of runtime systems (for instance QObject properties used in Krita plug-ins):

{% highlight cpp %}
struct {
  constexpr auto name() { return "α"sv; }
  float value;
} alpha;
{% endhighlight %}

The code sadly uglifies a little bit:

{% highlight cpp %}
struct noise
{
  struct {
    constexpr auto name() { return "α"; }
    constexpr auto min() { return -1.f; }
    constexpr auto max() { return 1.f; }
    float value;
  } alpha;
  struct {
    constexpr auto name() { return "β"; }
    constexpr auto min() { return 11; }
    constexpr auto max() { return 247; }
    int value;
  } beta;

  float operator()(float input) const
  {
    return std::fmod(std::pow(input, alpha.value), float(beta.value)) / beta.value;
  }
};
{% endhighlight %}

There isn't a lot of wiggle room to improve. It is not possible to have static member variables in anonymous structs ; if one is willing to duplicate the name of the struct, it's possible to get things down to:

{% highlight cpp %}
struct alpha {
  static constexpr auto name = "α";
  static constexpr auto min  = -1.f;
  static constexpr auto max  =  1.f;
  float value;
} alpha;
{% endhighlight %}

##### How user-defined attributes and attribute reflection would help
Now, if we were in, say, C#, what we'd most likely write instead would instead just be:
{% highlight csharp %}
[Name("α")]
[Range(min = -1.f, max = 1.f)]
float alpha;
{% endhighlight %}

Simpler, isn't it ?
How neat would it be if we had [the same thing](https://manu343726.github.io/2019-07-14-reflections-on-user-defined-attributes/) in C++ ! There is some work towards that in Clang and the [lock3/meta metaclasses clang fork](https://github.com/lock3/meta/issues/215).

We could even try (okay, that's a little bit far-fetched) to read the pre/post conditions from C++ contract specification when it finally lands, in order to have to specify it only once !

Although in practice some methods may be needed: for instance, multiple APIs require the user to provide a method which will from an input value, render a string to show to the user.

#### Updating our binding code
We now have to go back and work on the binding function implementation: the main issue is that where we were using the actual type of the values, `boost::pfr::for_each_field` will give us references to anonymous types (or, even if not anonymous, types that we shouldn't have knowledge of in our binding code).

In our case, we assume (as part of our ontology), that *parameters* have a *value*. This is a compile-time protocol.

Thankfully, a C++20 feature, concepts, makes encoding compile-time protocols in code fairly easy.
Consider a member of our earlier visitor:

{% highlight cpp %}
void operator()(???& f) const noexcept
{
  lib_add_float(r, ???, ???, ???, ???);
}
{% endhighlight %}

We can for instance fill it that way :
{% highlight cpp %}
// we are writing the binding code, here everything is allowed !
#include <concepts>
...
void operator()(auto& f) const noexcept
  requires std::same_as<decltype(f.value), float>
{
  lib_add_float(r, f.name(), &f.value, f.min(), f.max());
}
{% endhighlight %}

And that would work with our current `noise` implementation.
But what if the program author forgets to implement the `name()` method ? Mainly a not-so-terrible compile error:

{% highlight cpp %}
<source>:30:23: error: no member named 'name' in 'noise::(anonymous struct at <source>:18:5)'
  lib_add_float(r, f.name(), &f.value, f.min(), f.max());
                    ~ ^
<source>:48:12: note: in instantiation of function template specialization '(anonymous struct)::operator()<noise::(anonymous struct at <source>:18:5)>' requested here
    visitor(n.alpha);
           ^
{% endhighlight %}

If our API absolutely requires a `name()`, and a `value`, concepts are very helpful:

{% highlight cpp %}
template<typename T, typename Value_T>
concept parameter = requires (T t) {
  { t.value } -> std::same_as<Value_T>;
  { t.min() } -> std::same_as<Value_T>;
  { t.max() } -> std::same_as<Value_T>;
  { t.name() } -> std::same_as<const char*>;
};
{% endhighlight %}
Our code becomes:

{% highlight cpp %}
void operator()(parameter<float> auto& f) const noexcept
{
  lib_add_float(r, f.name(), &f.value, f.min(), f.max());
}
{% endhighlight %}

Forgetting to implement `name()` now results in:

{% highlight cpp %}
<source>:44:5: error: no matching function for call to object of type 'struct (anonymous struct at <source>:34:5)'
    visitor(n.alpha);
    ^~~~~~~
<source>:35:14: note: candidate template ignored: constraints not satisfied [with f:auto = noise::(anonymous struct at <source>:18:5)]
        void operator()(parameter<float> auto& f) const noexcept
             ^
<source>:35:25: note: because 'parameter<noise::(anonymous struct at <source>:18:5), float>' evaluated to false
        void operator()(parameter<float> auto& f) const noexcept
                        ^
<source>:29:7: note: because 't.min()' would be invalid: no member named 'min' in 'noise::(anonymous struct at <source>:18:5)'
  { t.min() } -> std::same_as<Value_T>;
      ^
{% endhighlight %}

Whether that constitutes an improvement in readability of errors in our specific case is left as an exercise to the reader.

But, what if our algorithm *doesn't* actually need bounds ? We'd still want it to work in a bounded host system, right ? The host system would just choose arbitrary bounds that make sense for e.g. an input widget.

In this case, we'd get a combinatorial explosion of concepts: we'd need an overload for a parameter with a name and no range, an overload for a parameter with a range and no name, etc.

#### Handling optionality
As an algorithm author, you cannot specify every possible metadata known to man. We want our algorithm to be future-proof: even if refinements can be added, we want the code we write today to still be able to integrate into tomorrow's host.

Thankfully, the age-old notion of condition can help here ; in particular compile-time conditions depending on the existence of a member.

C++20 makes that trivial:

{% highlight cpp %}
void operator()(auto& f) const noexcept
  // We still need our "requires" here, or a simpler concept
  // in order to have the right overload be selected.
  requires std::same_as<decltype(f.value), float>
{
  const char* name = "Parameter";
  float min = 0.f, max = 1.f;
  if constexpr(requires { name = f.name(); })
    name = f.name();
  if constexpr(requires { min = f.min(); })
    min = f.min();
  if constexpr(requires { max = f.max(); })
    max = f.max();

  lib_add_float(r, name, &f.value, min, max);
}
{% endhighlight %}

This way, the algorithm has maximal flexibility: it can provide the bare minimal metadata for a proof-of-concept, or give as much information as possible.

This last part works in Clang and GCC, but MSVC's concepts implementation [does not support it yet](https://www.reddit.com/r/cpp/comments/old0t6/why_does_msvc_blatantly_lies_about_its_supported/).

#### Calling our code

There's not much difference with the previous technique when we want to call our process (`operator()`) function.

What we cannot do without reflection & code generation (metaclasses) is an entirely generic transformation from one of our algorithm's processing method, which, depending on the problem domain, could have any number of inputs / outputs of various types, to arbitrary run-time data. For instance, audio processors generally have inputs and outputs in the form of an array of channels of float / double values, plus the amount of data to be processed:

{% highlight cpp %}
void canonical_audio_processor(float** inputs, float** outputs, int frames_to_process);
{% endhighlight %}

While image processors would instead look like:
{% highlight cpp %}
void canonical_image_processor(unsigned char* data, int width, int height);
{% endhighlight %}
There's no practical way to enumerate all the possible sets of arguments.

Thus, the author of the binding code has the responsibility of adapting the expected ontology for algorithms to the API we are binding to.

{% highlight cpp %}
struct bind_to_lib {
  lib_type_t handle;

  template<typename T>
  void register_process(T& algo)
  {
    auto process = [] (void* context, float* out, const float* in) {
      T& algo = *static_cast<T*>(context);
      *out = algo(*in);
    };
    lib_add_method(handle, "process", reinterpret_cast<void*>(process), &algo, kFloat, kFloat);
  }
}
{% endhighlight %}

Nothing prevents multiple cases to be handled: for instance, some plug-ins may have a more efficient, array-based, implementation for their process ; some hosts may be able to use that if available:

{% highlight cpp %}
template<typename T>
void register_process(T& algo)
{
  if constexpr(std::invocable<T, const float*, float*, std::size_t>)
  {
    auto process = [] (void* context, float* out, const float* in, std::size_t n) {
      // ...
      algo(in, out, n);
    };
    lib_add_method(handle, "process_array", reinterpret_cast<void*>(process), &algo, kFloat, kFloat);
  }
  else if constexpr(std::invocable<T, float, float>)
  {
    auto process = [&] (void* context, float* out, const float* in) {
      // ...
      *out = algo(*in);
    };
    lib_add_method(handle, "process", reinterpret_cast<void*>(process), &algo, kFloat, kFloat);
  }
}
{% endhighlight %}

An host which only supports array-based computations would instead write:
{% highlight cpp %}
template<typename T>
void register_process(T& algo)
{
  if constexpr(std::invocable<T, const float*, float*, std::size_t>)
  {
    auto process = [&] (float* out, const float* in, std::size_t n) {
      // ...
      algo(in, out, n);
    };
    lib_add_method(handle, "process", reinterpret_cast<void*>(process), &algo, kFloat, kFloat);
  }
  else if constexpr(std::invocable<T, float, float>)
  {
    auto process = [&] (float* out, const float* in, std::size_t n) {
      // ...
      for(std::size_t i = 0U; i < n; i++)
        out[i] = algo(in[i]);
    };
    lib_add_method(handle, "process", reinterpret_cast<void*>(process), &algo, kFloat, kFloat);
  }
}
{% endhighlight %}

#### Going thread-safe

Suppose that our C host API specifies that the `process` method is run in a separate thread, for efficiency concerns.
Such an API's `lib_add_float` function could look like this:

{% highlight cpp %}
void lib_add_float(
  lib_type_t handle,
  const char* name,
  float (*getter)(void*),
  void (*setter)(void*, float),
  void* context
);
{% endhighlight %}

where `context` would be an object passed to `getter` and `setter` so that the actual float could be found.

`getter` and `setter` could be called from any of the host's threads, e.g. the main or UI thread for instance, while `process` would be called from a separate thread specifically.

Thus, our actual `float` needs some protection. Now, our program has the added requirement of not using locks: the algorithm could be used from a real-time system.

What we can do is, transform our list of parameters into `atomic<T>` types, at compile-time.
A simple way for this is through any of the common C++ type-based metaprogramming libraries, which are able to transform tuples: in our case we'll use Boost.MP11 ; other alternatives are Brigand, Metal, etc.

{% highlight cpp %}
template<typename T>
struct binding_to_lib {
  // parameters_type will look like tuple<float, int>
  using parameters_type = decltype(boost::pfr::structure_to_tuple(std::declval<const T&>()));

  // parameters_type will look like tuple<std::atomic<float>, std::atomic<int>>
  using atomic_type = mp_transform<std::atomic, parameters_type>;

  // our algorithm's aggregate struct, we're allocating it as part of the binding for more simplicity
  T implementation;

  atomic_type parameters;

  binding_to_lib() { /* register everything with the host API */ }
};
{% endhighlight %}

From this, our binding methods would be changed to look like:
{% highlight cpp %}
void register_process()
{
  auto process = [] (void* context, float* in, float* out) {
    // Get our objects back from the context pointer
    auto& self = *static_cast<decltype(this)>(context);
    T& algo = self.implementation;

    // Load all the atomics into the "algo" object
    load_all_atomics(self.parameters, boost::pfr::structure_tie(algo));

    // Apply the algo
    *out = algo(*in);
  };

  lib_add_method(handle, "process", reinterpret_cast<void*>(process), this, kFloat, kFloat);
}

void load_all_atomics(const auto& atomics, auto& actual)
{
  [&] <std::size_t... Index> (std::integer_sequence<std::size_t, Index...>) {
    using namespace boost::pfr;
    ((get<Index>(actual) = get<Index>(atomics).load(std::memory_order_relaxed)), ...);
  }(std::make_index_sequence<std::tuple_size_v<parameters_type>>());
}
{% endhighlight %}

The `load_all_atomics` function is a bit dense to read, here's a spaced-out and simplified version:

{% highlight cpp %}
void load_all_atomics(const auto& atomics, auto& actual)
{
  // Template lambda (C++20 feature): one used to have to write a separate
  // load_all_atomics_helper function as there was no way to retrieve the parameter pack,
  // which pollutes the namespace
  auto helper = [&] <std::size_t... Index> (std::integer_sequence<std::size_t, Index...>)
  {
    using namespace boost::pfr; // for `get`

    // Fold expression which goes through every member of the tuples - which have the same size.
    // If we don't choose a memory order for loading, it defaults to the safest but also least efficient sequentially-consistent order, which does not matter here: our parameters are all entirely independent, we just care about the atomic access to the variable itself (famous last words).
    ((get<Index>(actual) = get<Index>(atomics)), ...);
    // ^ equivalent to
    // get<0>(actual) = get<0>(atomics);
    // get<1>(actual) = get<1>(atomics);
    // get<2>(actual) = get<2>(atomics);
  };

  // std::integer_sequence<std::size_t, 1, 2>
  auto sequence = std::make_index_sequence<std::tuple_size_v<parameters_type>>();

  // Call our lambda
  helper(sequence);
}
{% endhighlight %}

Note that in the end, compilers will happily inline all that into a couple of [`mov` instructions](https://gcc.godbolt.org/z/K87hWfsq7) :-)

Its conjugate function, `store_all_atomics` is left as an exercise to the reader.

Another interesting function that one can write is the function that will perform an operation on the nth parameter, `n` being known only at run-time, as some APIs are index-based instead of pointer-based: parameters are identified through an index.

Here's a solution I found, which Clang is able to optimize pretty well through what looks like a loop recombination optimization, but other compilers [sadly don't manage to](https://gcc.godbolt.org/z/Y98shbccP):

{% highlight cpp %}
template <typename Parameters, typename F>
void for_nth_parameter(Parameters& params, int n, F&& func) noexcept
{
  [&]<std::size_t... Index>(std::integer_sequence<std::size_t, Index...>)
  {
    ((void)(Index == n && (func(boost::pfr::get<Index>(params)), true)), ...);
  }
  (std::make_index_sequence<boost::pfr::tuple_size_v<Parameters>>());
}
{% endhighlight %}

## Conclusion
From this, it is obvious that writing, for instance, a generic serializer, hash function, etc... that will work on any such types is trivial ; Boost.PFR already provides some amount of it. A fun exercise left to the reader would be memoization of plug-in state, for the sake of undo-redo.

Note that the algorithm could also easily be generic ; for instance, some audio plug-in APIs support working with either single- or double- precision floating-point ; one could just provide a `noise<std::floating_point>` algorithm if it fits the algorithm's spec. Otherwise, the binding library would simply perform the conversion from / to the correct floating-point type if that is a meaningful thing to do.

This concept has been prototyped in, first, an API for writing plug-ins for [ossia score](https://github.com/jcelerier/score-simple-api-2), and then in a tentative for writing audio plug-ins, [vintage](https://github.com/jcelerier/vintage/blob/main/examples/audio_effect/distortion.cpp).

There is one last drop of manual binding code to write: the code that ties the algorithm to the API.

{% highlight cpp %}
// main.cpp
#include <noise.hpp>
#include <bind_to_lib.hpp>
extern "C"
DLL_EXPORT_MACRO
void plugin_main_function() { bind_to_lib<noise>(); }
{% endhighlight %}

There is no easy way without full static reflection to bypass that drop of code: we have to reference the name of our algorithm in the same line than our binding code at least once ; full reflection would allow to enumerate the available types instead and skip that part. There are two band-aid solutions:

* State that the class containing the algorithm must have a specific name, e.g. `Plugin`. This does not really scale if for instance a software would like to build and bundle multiple such plug-ins statically, due to ODR ; it can be made to work with shared objects if one takes care of hiding all symbols except `plugin_main_function`.
* Generate that code in the build system: one could easily provide a set of e.g. `bind_algorithm(<name> <main_source_file>)` CMake function which would generate the appropriate `.cpp` ; the act of porting the algorithm to a new host platform would simply be for instance forking a template repo on GitHub, and replacing the content of an `src/algorithm.cpp` file.

So, in the end, what we have, roughly, is:
- Algorithms without dependencies on host APIs for exposing themselves to GUI software, etc.
- Independent introspection of these algorithms.

What remains is, as a community, to specify the ontologies / concepts that a given algorithm can be made to fit in: for instance, for audio plug-ins, the [LV2 specification](https://lv2plug.in/ns/) has done a great deal of work towards that ; similar work could be done for graphics algorithms, serialization systems, etc.

This work could be encoded in C++ concepts, maybe with inspiration from the various Haskell typeclasses or Rust traits libraries: then, if as an algorithm author I want to make sure that my algorithm will be able to be used by audio, video, ... software, I'd just clone a concept-checking library and see which concepts my code does (and does not) support ; an algorithm which takes a float and outputs a float would likely have a very wide applicability.

A further blog article will present how one can leverage this to build data-flow graphs either at compile-time or at run-time.