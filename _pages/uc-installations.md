---
layout: use-case
title: "Software for interactive and sound installations"
headline: "Interactive and sound installations"
subtitle: "Connect sensors, cameras and controllers to sound, video and lights, and run the whole installation unattended on a PC or a Raspberry Pi. Free and open-source, for museums, exhibitions and public spaces."
permalink: /interactive-installations.html
translation: /fr/installations-interactives.html
category: site-score
description: "Free, open-source software for interactive and sound installations: sensors, depth cameras, spatial audio and video, unattended on PC or Raspberry Pi."
image: /assets/social/ossia-score-og.jpg
---

Installations need software that reacts to visitors, plays for months without supervision, and runs on modest hardware.
ossia score is used in museums, exhibitions, art residencies and research labs for exactly that.

## What you can do

- **Sense the audience**: depth cameras (Orbbec, Intel RealSense, Azure Kinect, Kinect, Luxonis OAK), webcams with pose detection and computer vision, Leap Motion, gamepads, Bluetooth LE and serial sensors, Arduino ([sensors to OSC](https://ossia.io/score-docs/examples/devices/sensors2osc.html)).
- **Tracking systems**: PosiStageNet, TUIO, RTTrP, OpenTrackIO and OpenXR.
- **Sound**: multichannel playback, synthesis, VST/CLAP/LV2 plug-ins, Faust, and spatial audio (DBAP, GBAP, control of SpatGRIS, SPAT Revolution and ADM-OSC renderers) ([spatial audio](https://ossia.io/score-docs/common-practices/14-spatial-audio.html), [audio](https://ossia.io/score-docs/common-practices/4-audio.html)).
- **Video, 3D and lights** in the same project (see [video and mapping](/projection-mapping.html) and [DMX lighting](/dmx-lighting.html)).
- **Non-linear behaviour**: states, conditions and loops describe how the installation evolves and reacts, instead of a fixed playlist ([breaking the timeline](https://ossia.io/score-docs/quick-start/breaking-the-timeline.html)).
- **Run unattended**: headless mode with autoplay, Raspberry Pi and embedded Linux (Yocto) support, and standalone branded apps for kiosks ([headless mode](https://ossia.io/score-docs/faq/nogui.html), [Raspberry Pi](https://ossia.io/score-docs/in-depth/embedded.html), [custom apps](https://ossia.io/score-docs/development/custom-apps.html)).
- **Data sonification**: play back CSV and HDF5 datasets as sound, light or images.

<picture><source type="image/avif" srcset="/assets/features/gamepad.avif"><img src="/assets/features/gamepad.webp" width="320" height="270" loading="lazy" alt="A gamepad controlling parameters in ossia score"/></picture>

## ossia score compared to other installation setups

<div class="comparison-scroll">
<table class="comparison">
<tr><th>Setup</th><th>Choose ossia score when…</th><th>Keep the other tool when…</th></tr>
<tr><td><b>A DAW</b> (Ableton Live, Reaper, Bitwig) running a sound installation</td><td>the installation must react to visitors, include video or lights, or run headless on a Raspberry Pi.</td><td>you produce and mix music: ossia score is not a production DAW.</td></tr>
<tr><td><b>Media players</b> (BrightSign-type players, looping video players)</td><td>you need interaction, sound spatialisation or synchronised lights, on affordable hardware.</td><td>you only loop one video file.</td></tr>
<tr><td><b>Custom code</b> (Python, openFrameworks, Unity…)</td><td>you want artists and technicians to adjust the piece without programming, while keeping scripting for specific parts.</td><td>the piece is essentially a game or a fully custom application; libossia can still expose its parameters to score.</td></tr>
</table>
</div>

See the [gallery](/gallery.html) for installations made with ossia score.
