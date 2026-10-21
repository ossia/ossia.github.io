---
layout: use-case
title: "Software for interactive and sound installations"
headline: "Interactive and sound installations"
subtitle: "Sensors and cameras in, sound, video and lights out, on a PC or a Raspberry Pi that nobody has to watch."
permalink: /interactive-installations.html
translation: /fr/installations-interactives.html
category: site-score
description: "Free, open-source software for interactive and sound installations: sensors, depth cameras, spatial audio and video, unattended on PC or Raspberry Pi."
image: /assets/social/ossia-score-og.jpg
---

An installation has to react to the people in the room, keep playing when nobody is there to look after it, and often fit on modest hardware.
ossia score is used for this in museums, exhibitions, art residencies and research labs.

<picture><img src="/assets/gallery/organism.webp" width="540" height="360" loading="lazy" alt="A large mechanical pendulum with spoked wheels, its motion traced by trails of green light in a dark room"/></picture>
<p class="figure-caption"><i>Organism + Excitable Chaos</i>, Navid Navab and Garnet Willis, Golden Nica at Prix Ars Electronica 2025: the network communication between the pendulum and the computers uses ossia-max. © Miha Godec</p>

## Sensing visitors

Depth cameras come from the package manager: Orbbec, Intel RealSense, Kinect, Azure Kinect (on Windows and Linux) and Luxonis OAK. Ordinary webcams work too, with pose detection and computer vision, and so do Leap Motion, gamepads, Bluetooth LE and serial sensors, and Arduino boards ([sensors to OSC](https://ossia.io/score-docs/examples/devices/sensors2osc.html)).
Without any special hardware, a plain camera can give depth, segmentation and multi-person poses (see [real-time AI](/realtime-ai.html)).

Tracking systems speak PosiStageNet, TUIO, RTTrP or OpenTrackIO. Other inputs include LP-Research IMUs, Wacom tablets, raw Linux input devices and the CAN bus.
On Linux boards such as the Raspberry Pi and the Orange Pi, score reads and writes GPIO, PWM, ADC and DAC pins.
Pieces that depend on where people are can use geographic zones, drawn as latitude and longitude polygons ([geo zones](https://ossia.io/score-docs/processes/geo-zones.html)).

<picture><source type="image/avif" srcset="/assets/features/gamepad.avif"><img src="/assets/features/gamepad.webp" width="320" height="270" loading="lazy" alt="A gamepad moving parameters in ossia score"/></picture>

## Sound, image and behaviour

For sound there is multichannel playback, synthesis, VST, CLAP and LV2 plug-ins, Faust, and spatialisation with DBAP and GBAP or through SpatGRIS, SPAT Revolution and ADM-OSC renderers ([spatial audio](https://ossia.io/score-docs/common-practices/14-spatial-audio.html), [audio](https://ossia.io/score-docs/common-practices/4-audio.html)).
Video, 3D and lights go in the same project (see [video and mapping](/projection-mapping.html) and [DMX lighting](/dmx-lighting.html)). Datasets in CSV or HDF5 can be played as sound, light or images.

Instead of a playlist, the piece is described with states, conditions and loops, so it can evolve and answer what happens in the room ([breaking the timeline](https://ossia.io/score-docs/quick-start/breaking-the-timeline.html)).

## Leaving it alone

score opens the project and plays it without the editor, on a PC, a Raspberry Pi or an embedded Linux system built with Yocto ([headless mode](https://ossia.io/score-docs/faq/nogui.html), [Raspberry Pi](https://ossia.io/score-docs/in-depth/embedded.html)).
A system device reports CPU, GPU, memory, battery and network use, so a long-running piece can be watched from elsewhere ([monitoring](https://ossia.io/score-docs/faq/monitor-activity.html)).
For a kiosk, the project can become a standalone app with its own interface ([custom apps](https://ossia.io/score-docs/development/custom-apps.html)).

## In short

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>You want</th><th>In ossia score</th></tr></thead>
<tbody>
<tr><td>A piece that reacts to visitors</td><td>Sensors, depth cameras and computer vision drive states, conditions and loops.</td></tr>
<tr><td>Video, lights and spatial sound together</td><td>One project for multichannel and spatial audio, video, 3D and DMX.</td></tr>
<tr><td>To run it for months on affordable hardware</td><td>Headless mode with autoplay, Raspberry Pi and embedded Linux, kiosk apps.</td></tr>
<tr><td>Artists and technicians who adjust it without programming</td><td>A visual timeline and patcher, with JavaScript, Faust, shaders or C++ for the parts that need it.</td></tr>
<tr><td>To connect a custom application</td><td><a href="/site-libossia/about.html">libossia</a> exposes its parameters to score.</td></tr>
</tbody>
</table>
</div>

More installations are in the [gallery](/gallery.html).
