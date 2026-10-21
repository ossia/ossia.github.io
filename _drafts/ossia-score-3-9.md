---
layout: post
title:  "ossia score 3.9: 3D scenes, video I/O and scriptable processes"
date:   2026-10-18
author: Jean-Michaël Celerier
category: News
image: /assets/blog/v3-9/ossia-score-3-9.jpg
thumbnail: "/assets/blog/v3-9/ossia-score-3-9.webp"
image-alt: A 3D scene rendered in real time by ossia score 3.9
description: "ossia score 3.9 brings a GPU 3D scene pipeline, video capture and playout devices, scriptable processes, thirty skins and dozens of new devices and objects."
---

<picture><source type="image/avif" srcset="/assets/blog/v3-9/3d-pipeline.avif"><img src="/assets/blog/v3-9/3d-pipeline.webp" width="800" height="450" alt="A glTF model animated in a 3D scene rendered by ossia score" style="display:block; margin:0 auto; max-width:100%"/></picture>

ossia score 3.9 is out, and it is a large release: a complete 3D pipeline, new video capture, streaming and tracking devices,
processes that can be driven from anywhere in a score, a much more customizable look, and dozens of new protocols, synthesizers and objects.
It is available for Windows (now also on ARM), macOS and Linux, and as always free and open-source.

<p style="text-align:center"><a class="page-button" href="/score/download.html">Download ossia score {{ site.score_version }}</a></p>

This post goes through the highlights; the [full release notes](https://github.com/ossia/score/releases/tag/v3.9.0) list everything.

## Scriptable processes

This is *by far* the most important feature of this release.
Processes now have a "Scriptable" mode, which makes their parameters available as addresses in the Local device.
Anything that can talk to a device can then control them: automations, cues, states, mappings, JavaScript, or a remote over OSC.
Scoring the internal parameters of a process now works exactly like scoring the parameters of an external device, tweening included:
just drag a parameter to a state.

<img src="/assets/blog/v3-9/scriptable-processes.webp" width="1077" height="650" loading="lazy" alt="The parameters of a process exposed as addresses of the Local device in ossia score"/>

The *Process cues and automations* example, available from the new start screen, shows how to use it.

## A complete 3D pipeline

score now has its own 3D scene pipeline, which runs entirely on the GPU, without any readback to the CPU.

- An asset loader reads glTF/GLB, FBX, STL, OFF, OBJ, PLY and MagicaVoxel files, with their lights, cameras, animations and skins.
- Scene-graph processes filter, tag, group, switch, duplicate and transform scenes, with material overrides, all driven from the device tree.
- New objects include cameras and camera arrays, lights, environments, PBR meshes, an instancer, text to mesh, cubemaps, an animation player and a scene inspector.
- Point clouds, gaussian splats and volumetric textures are supported throughout, and instancing scales to massive scenes generated with compute shaders.

The engine does not impose any rendering technique: forward, deferred or clustered rendering are all shader-based and part of the score itself,
so a single score can combine several of them.
This was designed to support research on new rendering techniques, and it also makes it possible to recreate the look of a PS1 or N64.
Fulldome output supports the four usual fisheye projections.

## Video in and out

- A new video I/O add-on drives capture and playout cards, GPU-direct where the card allows it.
  AJA cards (validated up to 8K at 60 fps on a Kona 5) and V4L2 capture on Linux are built in; Blackmagic DeckLink, Magewell and NVIDIA Jetson cameras work when score is built with their SDKs.
- PipeWire video input and output with zero-copy DMA-BUF, window and screen capture, GStreamer pipelines, and gphoto2 cameras.
- The FFmpeg device reads RTSP and SRT streams, files, image sequences and cameras, and records to MP4, MKV, ProRes, DNxHD, AV1, WAV and Opus.
  A new FFmpeg Filter process runs any FFmpeg filter graph on audio and video.
- NDI is much faster (tested with 8K video), sends every format it can encode from the GPU without a copy, and lets you preview a source before connecting.

## More devices and protocols

- Depth cameras, from the package manager: colour, infrared, depth and point clouds from Orbbec, Kinect v1 and v2, Azure Kinect (Windows and Linux), Intel RealSense and Luxonis OAK cameras.
- Tracking: OpenTrackIO, PosiStageNet, RTTrP and TUIO.
- MIDI controllers described by a device description, so knobs and faders are addressed directly instead of by CC number.
- A CAN bus device driven by .dbc databases, LP-Research IMUs, and a device exposing the local machine: CPU, GPU, memory, disks, battery and network.
- The Artnet device is now called DMX, as it also speaks sACN and DMX USB.

<img src="/assets/blog/v3-9/midi-controller.webp" width="1017" height="530" loading="lazy" alt="A MIDI controller device whose knobs and faders appear as named addresses"/>

## Feedback everywhere

Cables now support feedback in every mode: a cable that closes a loop automatically becomes a delayed cable,
and graphics feedback renders one frame late instead of blanking the output.
This opens the door to effects such as reaction-diffusion, implemented here with compute shader geometry feedback:

<img src="/assets/blog/v3-9/feedback-cables.webp" width="1230" height="567" loading="lazy" alt="A reaction-diffusion effect built with a feedback cable in the nodal view"/>

## Computer vision, AI and new objects

- A new computer vision add-on, ported from Max/MSP's cv.jit and rewritten without OpenCV: GPU filters (threshold, morphology, chroma key, optical flow), analyses (centroid, moments, corners, lines) and blob, contour and homography objects.
- The ONNX pose detector tracks several people; generic nodes run any ONNX model, along with stem separation, body meshes and small language and vision models.
- New objects for strings, files, serialization (JSON, CBOR), MIDI, beat and point tracking, and new versions of the LFO, arpeggiator, ADSR, compressor and a lookahead limiter, which can all follow the tempo.
- New synthesizers: FoMo, an FM synthesizer, and Kaboom, a drum machine; Deuterium becomes a sampler reading GIG, DLS, SF2 and KORG files.

## Custom interfaces and scripting

JavaScript scripts can now build persistent, interactive interfaces from score's own widgets and Canvas2D painting, docked in the editor,
in a window or in the central view. The scripting API grew a lot: cables, process controls, presets, the undo stack, file dialogs, and
document-wide namespaces of controls, triggers and conditions, which remote control clients see too.
Custom apps can be generated for the web and for Windows on ARM.

## A new look

score now ships with about thirty skins: editor themes such as Catppuccin, Dracula, Nord, Solarized, Gruvbox or Tokyo Night,
light, greyscale and high-contrast skins, and colour-blind-safe skins.

<img src="/assets/blog/v3-9/skins.webp" width="1502" height="720" loading="lazy" alt="Several of the skins bundled with ossia score 3.9"/>

A redesigned start screen gives access to templates, examples (including the ones published on the documentation site), recent projects and archives.
Code editors can be docked or used as the central view, and the address bar is available in every view.

<img src="/assets/blog/v3-9/start-screen.webp" width="1922" height="1080" loading="lazy" alt="The new start screen of ossia score with templates and examples"/>

## Everywhere

- A Windows ARM64 build.
- Embedded Linux: Yocto support through the new [meta-ossia](https://github.com/ossia/meta-ossia) layer.
- WASAPI is now the default audio driver on Windows, and follows the system's default devices.
- The [web version](https://ossia.io/score-web) gets camera and audio input, drag-and-drop media import, project archives and the online examples.
- The Flatpak supports Wayland.
- Projects can collect their media into their own folder, find missing files, and be archived to a zip.

## Thanks

Thanks to [@edumeneses](https://github.com/edumeneses), [@bltzr](https://github.com/bltzr), [@ogauthiersat](https://github.com/ogauthiersat),
[@cbicari](https://github.com/cbicari), [@samamou](https://github.com/samamou), [@darioriccio](https://github.com/darioriccio),
[@thibaudk](https://github.com/thibaudk) and [@aklevy](https://github.com/aklevy) for their major contributions!

This release has mainly been developed thanks to projects happening at the [Société des Arts Technologiques](https://sat.qc.ca/), and is part of the [Suite SAT](https://suite.sat.qc.ca).
It has also benefited from a sponsorship from Anthropic, granting free access to a Claude Max plan during its development.

If ossia score is useful to you, please consider supporting its development on [OpenCollective](https://opencollective.com/ossia) or [GitHub Sponsors](https://github.com/sponsors/jcelerier),
or buying it on the [Microsoft Store](https://apps.microsoft.com/store/detail/ossia-score/9NGT21X5XB19).
And come say hi on [Discord](https://discord.gg/8Hzm4UduaS)!
