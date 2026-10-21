---
layout: use-case
title: "Software for interactive dance and theatre"
headline: "Interactive dance and theatre"
subtitle: "Let movement drive sound, video and light: pose detection from a webcam, depth cameras, motion sensors and tracking systems, with cues and scenes that keep the show reproducible. Free and open-source, on Windows, macOS, Linux and Raspberry Pi."
permalink: /dance-theatre.html
translation: /fr/danse-theatre.html
category: site-score
description: "Free, open-source software for interactive dance and theatre: pose detection, depth cameras, motion sensors and tracking drive sound, video and light."
image: /assets/social/ossia-score-og.jpg
---

ossia score is used by dance and theatre companies to connect performers' movements to the stage: sound, video, light and machinery.
The interactive parts live inside a written score, so the show can follow the rehearsed structure and still respond to what happens on stage.

## What you can do

- **Track bodies with a webcam**: multi-person pose detection with smoothing, segmentation, and depth from an ordinary camera ([pose detection](https://ossia.io/score-docs/examples/ai/pose-detection.html)).
- **Depth cameras and tracking systems**: Orbbec, Intel RealSense, Kinect, Azure Kinect (Windows and Linux) and Luxonis OAK cameras, from the package manager; PosiStageNet, RTTrP, OpenTrackIO and TUIO ([depth cameras](https://ossia.io/score-docs/devices/depth-camera-device.html), [tracking](https://ossia.io/score-docs/devices/tracking-device.html)).
- **Sensors on the performers**: IMUs, Bluetooth LE sensors, Leap Motion, gamepads, Wacom tablets, and anything sending OSC, MIDI or serial data ([Bluetooth LE](https://ossia.io/score-docs/devices/ble-device.html), [Leap Motion](https://ossia.io/score-docs/devices/leapmotion-device.html)).
- **Understand gestures**: gesture analysis, smoothing and filtering, and classifiers or regressors trained from a few recorded movements ([gestures](https://ossia.io/score-docs/processes/gestures.html), [classifier](https://ossia.io/score-docs/processes/classifier.html)).
- **Turn movement into media**: positions and gestures drive sound synthesis and spatialisation, shaders, 3D, video and DMX lights, or become MIDI and OSC for other software ([tracking to MIDI](https://ossia.io/score-docs/examples/ai/tracking-to-midi.html)).
- **Keep it a show**: scenes, cues and triggers structure the piece, with a GO from the stage manager or from the performers themselves ([scenes](https://ossia.io/score-docs/common-practices/6-scenes.html), [cues](https://ossia.io/score-docs/cues.html)).

<picture><img src="/assets/gallery/walking-down-the-street.webp" width="540" height="304" loading="lazy" alt="Two performers walking in opposite directions in front of a white wall, one of them holding a long digital instrument"/></picture>
<p class="figure-caption"><i>Walking Down The Street</i>, Lina Rahal &amp; Jean-Marie Colin: a hip-hop dance piece whose whole show is driven by ossia score and controlled live with a Karlax. © Jean-Marie Colin</p>

## Dance and theatre needs, and how ossia score answers them

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>What you need</th><th>How ossia score does it</th></tr></thead>
<tbody>
<tr><td>Following performers without putting sensors on them</td><td>Pose detection from a webcam, depth cameras and tracking systems.</td></tr>
<tr><td>Interaction that stays the same from one night to the next</td><td>Interactive parts are written inside scenes and cues, with smoothing, calibration and thresholds.</td></tr>
<tr><td>Movements that drive sound, video and light together</td><td>One project for spatial sound, video, 3D and DMX, all mapped from the same data.</td></tr>
<tr><td>Rehearsing and adjusting quickly</td><td>Change mappings while the piece runs, and restart from any scene with <i>Play from here</i>.</td></tr>
<tr><td>Touring with a light setup</td><td>A laptop or a Raspberry Pi, on Windows, macOS or Linux, with media collected into the project.</td></tr>
</tbody>
</table>
</div>

See the [gallery](/gallery.html) for dance and theatre pieces made with ossia score, such as *Our Bodies Know More Than We Do* by Psʌnía, where the performers' movements drive sound and light.
