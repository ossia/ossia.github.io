---
layout: use-case
title: "Software for interactive dance and theater"
headline: "Interactive dance and theater"
subtitle: "ossia score can be used to make the performers' movements drive sound, video and light, within a written show that can be played again every night."
permalink: /dance-theatre.html
translation: /fr/danse-theatre.html
category: site-score
description: "Free, open-source software for interactive dance and theater: pose detection, depth cameras, motion sensors and tracking drive sound, video and light."
image: /assets/social/ossia-score-og.jpg
---

ossia score can be used to connect what happens on stage to sound, video, lights and machinery: the interactive parts are placed inside a written score, so that the piece keeps the structure that was rehearsed while reacting to the performers.
For instance, in *Our Bodies Know More Than We Do* (Psʌnía, WeSA Jeju residency, Daejeon, 2025), the movements of the two performers drive the sound and the lights, and the hip-hop dance show *Walking Down The Street* (Lina Rahal and Jean-Marie Colin, 2021) is entirely driven by score and controlled live with a Karlax.

<picture><img src="/assets/gallery/walking-down-the-street.webp" width="540" height="304" loading="lazy" alt="Two performers walking in opposite directions in front of a white wall, one of them holding a long digital instrument"/></picture>
<p class="figure-caption"><i>Walking Down The Street</i>, Lina Rahal &amp; Jean-Marie Colin: a hip-hop dance piece whose whole show is driven by ossia score and controlled live with a Karlax. © Jean-Marie Colin</p>

## Cameras and sensors

A webcam is enough to follow bodies, with multi-person pose detection (with smoothing), segmentation, and depth estimated from an ordinary camera ([pose detection](https://ossia.io/score-docs/examples/ai/pose-detection.html)).
Depth cameras are installed from the package manager (Orbbec, Intel RealSense, Kinect, Azure Kinect on Windows and Linux, Luxonis OAK), and tracking systems are received over PosiStageNet, RTTrP, OpenTrackIO and TUIO ([depth cameras](https://ossia.io/score-docs/devices/depth-camera-device.html), [tracking](https://ossia.io/score-docs/devices/tracking-device.html)).

Sensors worn by the performers can also be used: IMUs, Bluetooth LE sensors, Leap Motion, gamepads, Wacom tablets, and any device which sends OSC, MIDI or serial data ([Bluetooth LE](https://ossia.io/score-docs/devices/ble-device.html), [Leap Motion](https://ossia.io/score-docs/devices/leapmotion-device.html)).

## From gesture to media

The raw positions are smoothed and filtered, gestures can be analyzed, and classifiers or regressors are trained from a few recorded movements ([gestures](https://ossia.io/score-docs/processes/gestures.html), [classifier](https://ossia.io/score-docs/processes/classifier.html)).
The result can drive synthesis and spatialization, shaders, 3D, video and DMX lights, or be sent to other software as MIDI and OSC messages ([tracking to MIDI](https://ossia.io/score-docs/examples/ai/tracking-to-midi.html)).

## Structure of the piece

Scenes, cues and triggers give the piece its structure, and the GO can come either from the stage manager or from the performers themselves ([scenes](https://ossia.io/score-docs/common-practices/6-scenes.html), [cues](https://ossia.io/score-docs/cues.html)).
During rehearsals, the mappings can be changed while the piece is running, and *Play from here* restarts from any scene; for touring, the media are gathered in the project folder, and the show runs from a laptop or a Raspberry Pi on Windows, macOS or Linux.

Other dance and theater pieces are presented in the [gallery](/gallery.html).
