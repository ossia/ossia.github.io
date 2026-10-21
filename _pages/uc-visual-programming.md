---
layout: use-case
title: "Visual programming for audio and video"
headline: "Visual programming with a timeline"
subtitle: "ossia score can be used as a visual programming environment for audio, video, 3D and sensors, where the patch itself is organized in time."
permalink: /visual-programming.html
translation: /fr/programmation-visuelle.html
category: site-score
description: "Free, open-source visual programming for audio, video and interaction, with nodes and a timeline. Runs Pure Data patches."
image: /assets/social/ossia-score-og.jpg
---

ossia score shows the same project in two views: in the nodal view, objects are connected with cables; in the timeline, the patch itself changes over time, since objects start, stop, loop and wait for events.
One can switch from one view to the other at any moment, which makes it possible for instance to write a patch whose structure changes from one scene of a piece to the next.

<picture><source type="image/avif" srcset="/assets/feature-nodal.avif"><img src="/assets/feature-nodal.webp" width="624" height="340" loading="lazy" alt="The same ossia score project shown as a timeline, then as a patch with cables"/></picture>

## Patching

There are hundreds of objects for audio, video, 3D, MIDI, strings, files, math, analysis and synthesis, and cables can loop back to create feedback.
The instruments and effects which come with score (synthesizers, drum machines, a sampler, a granulator, the Airwindows effects, etc.) are described on the [live music](/live-music.html) page; VST, VST3, CLAP, LV2 and JSFX plug-ins are loaded like any other object ([audio plug-ins](https://ossia.io/score-docs/processes/audio-plugins.html)).

Pure Data patches run inside a score through libpd, which gives an existing patch a timeline, video and 3D around it ([Pure Data](https://ossia.io/score-docs/processes/puredata.html)).

The patch can be edited while it plays: a process dropped on a cable or on a node is inserted there, or replaces the existing one, without stopping the playback; JSFX effects can also be live-coded.

<picture><source type="image/avif" srcset="/assets/use-cases/hot-swap.avif"><img src="/assets/use-cases/hot-swap.webp" width="960" height="492" loading="lazy" alt="Two Airwindows amp simulations connected by a cable in ossia score, with the process library open on the left"/></picture>

## Code

JavaScript, Faust for audio DSP, ISF and compute shaders for graphics, C++ compiled on the fly, and math expressions can all be used in the same patch ([JavaScript](https://ossia.io/score-docs/processes/javascript.html), [Faust](https://ossia.io/score-docs/processes/faust.html)).
On the GPU, compute shaders and raster pipelines with instancing can be combined into custom render pipelines ([compute shaders](https://ossia.io/score-docs/processes/compute-shaders.html)).

## Analysis and machine learning

For computer vision, there are objects ported from cv.jit (blobs, optical flow, contours, homography), and ONNX models for pose detection and recognition.
Classifiers and regressors are trained from a few recorded examples, and gesture analysis objects compute PCA, clustering and correlation ([classifier](https://ossia.io/score-docs/processes/classifier.html), [gestures](https://ossia.io/score-docs/processes/gestures.html)).

## Interfaces and other programs

Interfaces are written in QML with score's own widgets, and a finished project can be packaged as a standalone application ([custom UI](https://ossia.io/score-docs/custom-ui.html), [custom apps](https://ossia.io/score-docs/development/custom-apps.html)); the editor itself comes with about thirty skins, including color-blind-safe and high-contrast ones.

score is free and open-source (GPLv3), and through [libossia](/site-libossia/about.html), Max and Pure Data patches as well as openFrameworks, Processing, Unity or Python programs can expose their parameters to it.
