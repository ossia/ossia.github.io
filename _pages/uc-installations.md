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

- **Sense the audience**: depth cameras from the package manager (Orbbec, Intel RealSense, Kinect, Azure Kinect on Windows and Linux, Luxonis OAK), webcams with pose detection and computer vision, Leap Motion, gamepads, Bluetooth LE and serial sensors, Arduino ([sensors to OSC](https://ossia.io/score-docs/examples/devices/sensors2osc.html)).
- **Tracking systems**: PosiStageNet, TUIO, RTTrP and OpenTrackIO.
- **Sound**: multichannel playback, synthesis, VST/CLAP/LV2 plug-ins, Faust, and spatial audio (DBAP, GBAP, control of SpatGRIS, SPAT Revolution and ADM-OSC renderers) ([spatial audio](https://ossia.io/score-docs/common-practices/14-spatial-audio.html), [audio](https://ossia.io/score-docs/common-practices/4-audio.html)).
- **Video, 3D and lights** in the same project (see [video and mapping](/projection-mapping.html) and [DMX lighting](/dmx-lighting.html)).
- **Non-linear behaviour**: states, conditions and loops describe how the installation evolves and reacts, instead of a fixed playlist ([breaking the timeline](https://ossia.io/score-docs/quick-start/breaking-the-timeline.html)).
- **Run unattended**: headless mode with autoplay, Raspberry Pi and embedded Linux (Yocto) support, and standalone branded apps for kiosks ([headless mode](https://ossia.io/score-docs/faq/nogui.html), [Raspberry Pi](https://ossia.io/score-docs/in-depth/embedded.html), [custom apps](https://ossia.io/score-docs/development/custom-apps.html)).
- **Data sonification**: play back CSV and HDF5 datasets as sound, light or images.
- **Electronics**: GPIO, PWM, ADC and DAC on Linux boards such as the Raspberry Pi and the Orange Pi.
- **Location-based pieces**: geographic zones drawn as latitude and longitude polygons ([geo zones](https://ossia.io/score-docs/processes/geo-zones.html)).
- **Monitoring**: a system device reports CPU, GPU, memory, battery and network use of long-running installations ([monitoring](https://ossia.io/score-docs/faq/monitor-activity.html)).
- **More sensors**: LP-Research IMUs, Wacom tablets, raw Linux input devices, CAN bus.
- **Vision without special hardware**: depth from a plain camera, segmentation and multi-person pose (see [real-time AI](/realtime-ai.html)).

<picture><source type="image/avif" srcset="/assets/features/gamepad.avif"><img src="/assets/features/gamepad.webp" width="320" height="270" loading="lazy" alt="A gamepad controlling parameters in ossia score"/></picture>

## Installation needs, and how ossia score answers them

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>What you need</th><th>How ossia score does it</th></tr></thead>
<tbody>
<tr><td>A sound or video piece that reacts to visitors</td><td>Sensors, depth cameras and computer vision drive states, conditions and loops instead of a fixed playlist.</td></tr>
<tr><td>Video, lights and spatial sound in one piece</td><td>One project for multichannel and spatial audio, video, 3D and DMX.</td></tr>
<tr><td>Running for months on affordable hardware</td><td>Headless mode with autoplay, Raspberry Pi and embedded Linux, standalone kiosk apps.</td></tr>
<tr><td>Letting artists and technicians adjust the piece without programming</td><td>A visual timeline and patcher, with JavaScript, Faust, shaders or C++ for the specific parts.</td></tr>
<tr><td>Integrating a custom application</td><td><a href="/site-libossia/about.html">libossia</a> exposes its parameters to score.</td></tr>
</tbody>
</table>
</div>

See the [gallery](/gallery.html) for installations made with ossia score.
