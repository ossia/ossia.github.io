---
layout: use-case
title: "Visual programming for audio and video"
headline: "Visual programming with a timeline"
subtitle: "Patch audio, video, 3D and sensors with nodes, then organise them in time. ossia score is free and open-source, and it runs your Pure Data patches."
permalink: /visual-programming.html
translation: /fr/programmation-visuelle.html
category: site-score
description: "Free, open-source visual programming for audio, video and interaction, with nodes and a timeline. Runs Pure Data patches."
image: /assets/social/ossia-score-og.jpg
---

ossia score mixes two ways of working: a **nodal patcher**, where you connect objects with cables, and a **timeline**,
where the patch itself can change over time. You can switch between both views at any point.

## What you can do

- **Patch** audio, video, 3D and control objects with cables, including feedback loops; hundreds of objects for MIDI, strings, files, math, analysis and synthesis.
- **Program** when patching is not enough: JavaScript, Faust for audio DSP, ISF and compute shaders for graphics, C++ compiled on the fly, math expressions ([JavaScript](https://ossia.io/score-docs/processes/javascript.html), [Faust](https://ossia.io/score-docs/processes/faust.html)).
- **Run Pure Data patches** directly inside a score through libpd ([Pure Data](https://ossia.io/score-docs/processes/puredata.html)).
- **Host plug-ins**: VST, VST3, CLAP, LV2 and JSFX ([audio plug-ins](https://ossia.io/score-docs/processes/audio-plugins.html)).
- **Computer vision and AI**: objects ported from cv.jit (blobs, optical flow, contours, homography), ONNX models for pose detection and recognition.
- **Build interfaces** with QML and score's own widgets, and package a project as a standalone app ([custom UI](https://ossia.io/score-docs/custom-ui.html), [custom apps](https://ossia.io/score-docs/development/custom-apps.html)).
- **Edit while it plays**: drop a process on a cable or a node to insert or replace it without stopping, and live-code JSFX effects.
- **Interactive machine learning**: train a classifier or a regressor by example, and analyse gestures (PCA, clustering, correlation) ([classifier](https://ossia.io/score-docs/processes/classifier.html), [gestures](https://ossia.io/score-docs/processes/gestures.html)).
- **Instruments and effects included**: synthesizers, drum machines, a sampler, a granulator and the Airwindows effects (see [live music](/live-music.html)).
- **GPU programming**: compute shaders, raster pipelines with instancing, and your own render pipelines ([compute shaders](https://ossia.io/score-docs/processes/compute-shaders.html)).
- **About thirty skins**, including colour-blind-safe and high-contrast ones.

<picture><source type="image/avif" srcset="/assets/feature-nodal.avif"><img src="/assets/feature-nodal.webp" width="624" height="340" loading="lazy" alt="Switching between the timeline and the nodal view in ossia score"/></picture>

## Patching needs, and how ossia score answers them

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>What you need</th><th>How ossia score does it</th></tr></thead>
<tbody>
<tr><td>A free patching environment on Windows, macOS and Linux</td><td>Open-source (GPLv3), with audio, video, 3D and control objects.</td></tr>
<tr><td>Organising a patch in time: scenes, sections, show control</td><td>The patch lives inside a timeline, with scenes, cues, triggers and conditions.</td></tr>
<tr><td>Reusing existing Pure Data patches</td><td>ossia score runs them directly, and adds a timeline, video and 3D around them.</td></tr>
<tr><td>Generative visuals and interaction with little or no code</td><td>Shaders, computer vision and ONNX objects, with JavaScript, Faust or C++ when needed.</td></tr>
<tr><td>Exposing your own programs and patches</td><td><a href="/site-libossia/about.html">libossia</a> makes Max and Pure Data patches, openFrameworks, Processing, Unity or Python programs controllable from score.</td></tr>
</tbody>
</table>
</div>
