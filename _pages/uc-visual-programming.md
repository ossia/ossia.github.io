---
layout: use-case
title: "Free visual programming for audio, video and interaction"
headline: "Visual programming with a timeline"
subtitle: "Patch audio, video, 3D and sensors with nodes, then organise them in time. ossia score is a free, open-source complement or alternative to Max/MSP, and it runs your Pure Data patches."
permalink: /visual-programming.html
translation: /fr/programmation-visuelle.html
category: site-score
description: "Free, open-source visual programming for audio, video and interaction, with nodes and a timeline. Runs Pure Data patches. A Max/MSP alternative."
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

<picture><source type="image/avif" srcset="/assets/feature-nodal.avif"><img src="/assets/feature-nodal.webp" width="624" height="340" loading="lazy" alt="Switching between the timeline and the nodal view in ossia score"/></picture>

## ossia score compared to patching environments

<div class="comparison-scroll">
<table class="comparison">
<tr><th>Tool</th><th>Choose ossia score when…</th><th>Keep the other tool when…</th></tr>
<tr><td><b>Max/MSP</b></td><td>you want a free, open-source tool on Windows, macOS and Linux, or your piece needs a timeline, scenes and show control.</td><td>you depend on Max's object library, Jitter or Max for Live. Max and ossia score also work together: the ossia package for Max exposes your patches to score.</td></tr>
<tr><td><b>Pure Data</b></td><td>you want to add a timeline, video and 3D around your existing patches: score runs them.</td><td>you only need Pd's lightweight patching.</td></tr>
<tr><td><b>vvvv, Processing, openFrameworks</b></td><td>you want generative visuals and interaction with little or no code, synchronised with sound and lights.</td><td>you prefer writing a full program; libossia exposes openFrameworks and Processing parameters to score.</td></tr>
<tr><td><b>TouchDesigner</b></td><td>you need a free, open-source tool with a timeline, audio plug-ins and show control.</td><td>you rely on its ecosystem and community; both can exchange video and data over NDI, Spout and OSC.</td></tr>
</table>
</div>
