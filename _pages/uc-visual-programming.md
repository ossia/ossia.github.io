---
layout: use-case
title: "Visual programming for audio and video"
headline: "Visual programming with a timeline"
subtitle: "Patch audio, video, 3D and sensors with cables, then lay the patch out in time. Your Pure Data patches run inside it."
permalink: /visual-programming.html
translation: /fr/programmation-visuelle.html
category: site-score
description: "Free, open-source visual programming for audio, video and interaction, with nodes and a timeline. Runs Pure Data patches."
image: /assets/social/ossia-score-og.jpg
---

ossia score has two views of the same project. In the nodal view you connect objects with cables. In the timeline the patch itself changes over time: objects start, stop, loop and wait for events.
You can switch from one view to the other at any moment.

<picture><source type="image/avif" srcset="/assets/feature-nodal.avif"><img src="/assets/feature-nodal.webp" width="624" height="340" loading="lazy" alt="The same ossia score project shown as a timeline, then as a patch with cables"/></picture>

## Patching

There are hundreds of objects for audio, video, 3D, MIDI, strings, files, math, analysis and synthesis, and cables may loop back for feedback.
The instruments and effects that come with score are described on the [live music](/live-music.html) page: synthesizers, drum machines, a sampler, a granulator, the Airwindows effects. VST, VST3, CLAP, LV2 and JSFX plug-ins load like any other object ([audio plug-ins](https://ossia.io/score-docs/processes/audio-plugins.html)).

Pure Data patches run inside a score through libpd, so an existing patch gets a timeline, video and 3D around it ([Pure Data](https://ossia.io/score-docs/processes/puredata.html)).

The patch can change while it plays. Drop a process on a cable or on a node to insert it there or replace what was there, without stopping; JSFX effects can be live-coded.

<picture><source type="image/avif" srcset="/assets/use-cases/hot-swap.avif"><img src="/assets/use-cases/hot-swap.webp" width="960" height="492" loading="lazy" alt="Two Airwindows amp simulations connected by a cable in ossia score, with the process library open on the left"/></picture>

## When cables are not enough

JavaScript, Faust for audio DSP, ISF and compute shaders for graphics, C++ compiled on the fly, and math expressions all live in the same patch ([JavaScript](https://ossia.io/score-docs/processes/javascript.html), [Faust](https://ossia.io/score-docs/processes/faust.html)).
On the GPU side, compute shaders and raster pipelines with instancing can be combined into your own render pipelines ([compute shaders](https://ossia.io/score-docs/processes/compute-shaders.html)).

For computer vision there are objects ported from cv.jit (blobs, optical flow, contours, homography), and ONNX models for pose detection and recognition.
Classifiers and regressors learn from a few examples you record, and gesture objects compute PCA, clustering and correlation ([classifier](https://ossia.io/score-docs/processes/classifier.html), [gestures](https://ossia.io/score-docs/processes/gestures.html)).

Interfaces are written in QML with score's own widgets, and a finished project can be packaged as a standalone app ([custom UI](https://ossia.io/score-docs/custom-ui.html), [custom apps](https://ossia.io/score-docs/development/custom-apps.html)).
The editor comes with about thirty skins, including colour-blind-safe and high-contrast ones.

## In short

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>You want</th><th>In ossia score</th></tr></thead>
<tbody>
<tr><td>A free patching environment on Windows, macOS and Linux</td><td>Open-source (GPLv3), with audio, video, 3D and control objects.</td></tr>
<tr><td>To organise a patch in time</td><td>The patch lives inside a timeline, with scenes, cues, triggers and conditions.</td></tr>
<tr><td>To keep your Pure Data patches</td><td>score runs them, and adds a timeline, video and 3D around them.</td></tr>
<tr><td>Generative visuals with little code</td><td>Shaders, computer vision and ONNX objects, with JavaScript, Faust or C++ when needed.</td></tr>
<tr><td>To control your own programs</td><td><a href="/site-libossia/about.html">libossia</a> exposes Max and Pure Data patches, and openFrameworks, Processing, Unity or Python programs, to score.</td></tr>
</tbody>
</table>
</div>
