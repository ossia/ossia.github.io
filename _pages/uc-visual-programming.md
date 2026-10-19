---
layout: use-case
title: "Free visual programming for audio, video and interaction"
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

<picture><source type="image/avif" srcset="/assets/feature-nodal.avif"><img src="/assets/feature-nodal.webp" width="624" height="340" loading="lazy" alt="Switching between the timeline and the nodal view in ossia score"/></picture>

## Pairs well with

- **Pure Data**: score runs your existing patches, and adds a timeline, video and 3D around them.
- **Your own code**: [libossia](/site-libossia/about.html) exposes the parameters of Max and Pure Data patches, openFrameworks, Processing, Unity or Python programs to score, ready to be automated.
- **Other software** over OSC, NDI, Spout and Syphon.
