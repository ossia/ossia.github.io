---
layout: use-case
title: "Software for interactive and sound installations"
headline: "Interactive and sound installations"
subtitle: "ossia score can be used to run interactive and sound installations, from sensors and cameras to sound, video and lights, on a PC or a Raspberry Pi."
permalink: /interactive-installations.html
translation: /fr/installations-interactives.html
category: site-score
description: "Free, open-source software for interactive and sound installations: sensors, depth cameras, spatial audio and video, unattended on PC or Raspberry Pi."
image: /assets/social/ossia-score-og.jpg
---

ossia score can be used to run an installation: sensors and cameras on one side, sound, video and lights on the other, with a score that describes how the piece reacts to the visitors and evolves over time, without anyone having to operate it.
For instance, *A Breathing Void* (Pía Baltazar, Centre Clark, Montréal, 2024) animates a veil of plastic with fans, LED lights and spatialized sound, and in *[re]capture* (Eisode, Montréal and Centre culturel canadien, Paris, 2024–2025) cameras, video processing, lights, pumps and motors are run by score on a Raspberry Pi.

<picture><img src="/assets/gallery/organism.webp" width="540" height="360" loading="lazy" alt="A large mechanical pendulum with spoked wheels, its motion traced by trails of green light in a dark room"/></picture>
<p class="figure-caption"><i>Organism + Excitable Chaos</i>, Navid Navab and Garnet Willis, Golden Nica at Prix Ars Electronica 2025: the network communication between the pendulum and the computers uses ossia-max. © Miha Godec</p>

## Sensors and cameras

Depth cameras are installed from the package manager: Orbbec, Intel RealSense, Kinect, Azure Kinect (on Windows and Linux) and Luxonis OAK; ordinary webcams can be used too, with pose detection and computer vision, as well as Leap Motion, gamepads, Bluetooth LE and serial sensors, and Arduino boards ([sensors to OSC](https://ossia.io/score-docs/examples/devices/sensors2osc.html)).
Without any specific hardware, a simple camera can also give depth, segmentation and multi-person poses (see [real-time AI](/realtime-ai.html)).

Tracking systems are supported through PosiStageNet, TUIO, RTTrP and OpenTrackIO; other inputs include LP-Research IMUs, Wacom tablets, raw Linux input devices and the CAN bus.
On Linux boards such as the Raspberry Pi and the Orange Pi, score reads and writes GPIO, PWM, ADC and DAC pins, and pieces which depend on where people are can use geographic zones, drawn as latitude and longitude polygons ([geo zones](https://ossia.io/score-docs/processes/geo-zones.html)).

<picture><source type="image/avif" srcset="/assets/features/gamepad.avif"><img src="/assets/features/gamepad.webp" width="320" height="270" loading="lazy" alt="A gamepad moving parameters in ossia score"/></picture>

## Sound, image and behavior

For sound, score supports multichannel playback, synthesis, VST, CLAP and LV2 plug-ins, Faust, and spatialization, either with DBAP and GBAP or through SpatGRIS, SPAT Revolution and ADM-OSC renderers ([spatial audio](https://ossia.io/score-docs/common-practices/14-spatial-audio.html), [audio](https://ossia.io/score-docs/common-practices/4-audio.html)).
Video, 3D and lights are in the same project (see [video and mapping](/projection-mapping.html) and [DMX lighting](/dmx-lighting.html)), and datasets in CSV or HDF5 can be played as sound, light or images.

Rather than a playlist, the piece is described with states, conditions and loops, so that it can evolve and react to what happens in the room ([breaking the timeline](https://ossia.io/score-docs/quick-start/breaking-the-timeline.html)); the parts which need it can be written in JavaScript, Faust, shaders or C++, and custom applications can expose their parameters to score through [libossia](/site-libossia/about.html).

## Running unattended

score opens the project and plays it without the editor, on a PC, a Raspberry Pi or an embedded Linux system built with Yocto ([headless mode](https://ossia.io/score-docs/faq/nogui.html), [Raspberry Pi](https://ossia.io/score-docs/in-depth/embedded.html)).
A system device reports the CPU, GPU, memory, battery and network usage, so that a long-running piece can be monitored remotely ([monitoring](https://ossia.io/score-docs/faq/monitor-activity.html)), and for a kiosk, the project can be packaged as a standalone application with its own interface ([custom apps](https://ossia.io/score-docs/development/custom-apps.html)).

Other installations are presented in the [gallery](/gallery.html).
