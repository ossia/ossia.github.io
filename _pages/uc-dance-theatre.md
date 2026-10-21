---
layout: use-case
title: "Software for interactive dance and theatre"
headline: "Interactive dance and theatre"
subtitle: "Let the performers' movements play the sound, the video and the light, inside a show that stays the same from one night to the next."
permalink: /dance-theatre.html
translation: /fr/danse-theatre.html
category: site-score
description: "Free, open-source software for interactive dance and theatre: pose detection, depth cameras, motion sensors and tracking drive sound, video and light."
image: /assets/social/ossia-score-og.jpg
---

Dance and theatre companies use ossia score to connect what happens on stage to sound, video, light and machinery.
The interactive parts sit inside a written score, so the piece keeps the structure you rehearsed and still answers the performers.

<picture><img src="/assets/gallery/walking-down-the-street.webp" width="540" height="304" loading="lazy" alt="Two performers walking in opposite directions in front of a white wall, one of them holding a long digital instrument"/></picture>
<p class="figure-caption"><i>Walking Down The Street</i>, Lina Rahal &amp; Jean-Marie Colin: a hip-hop dance piece whose whole show is driven by ossia score and controlled live with a Karlax. © Jean-Marie Colin</p>

## Reading the stage

A webcam is enough to follow bodies: multi-person pose detection with smoothing, segmentation, and depth from an ordinary camera ([pose detection](https://ossia.io/score-docs/examples/ai/pose-detection.html)).
Depth cameras come from the package manager: Orbbec, Intel RealSense, Kinect, Azure Kinect (Windows and Linux) and Luxonis OAK. Tracking systems arrive over PosiStageNet, RTTrP, OpenTrackIO and TUIO ([depth cameras](https://ossia.io/score-docs/devices/depth-camera-device.html), [tracking](https://ossia.io/score-docs/devices/tracking-device.html)).

Sensors worn by the performers work as well: IMUs, Bluetooth LE sensors, Leap Motion, gamepads, Wacom tablets, and anything that sends OSC, MIDI or serial data ([Bluetooth LE](https://ossia.io/score-docs/devices/ble-device.html), [Leap Motion](https://ossia.io/score-docs/devices/leapmotion-device.html)).

## From gesture to media

Raw positions are smoothed and filtered, gestures are analysed, and classifiers or regressors learn from a few recorded movements ([gestures](https://ossia.io/score-docs/processes/gestures.html), [classifier](https://ossia.io/score-docs/processes/classifier.html)).
The result can drive synthesis and spatialisation, shaders, 3D, video and DMX lights, or leave score as MIDI and OSC for other software ([tracking to MIDI](https://ossia.io/score-docs/examples/ai/tracking-to-midi.html)).

Scenes, cues and triggers give the piece its structure. The GO can come from the stage manager or from the performers themselves ([scenes](https://ossia.io/score-docs/common-practices/6-scenes.html), [cues](https://ossia.io/score-docs/cues.html)).
In rehearsal, mappings can be changed while the piece runs, and *Play from here* restarts from any scene.

## In short

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>You want</th><th>In ossia score</th></tr></thead>
<tbody>
<tr><td>To follow performers without putting sensors on them</td><td>Pose detection from a webcam, depth cameras and tracking systems.</td></tr>
<tr><td>Interaction that behaves the same every night</td><td>Interactive parts inside scenes and cues, with smoothing, calibration and thresholds.</td></tr>
<tr><td>Movement driving sound, video and light together</td><td>One project for spatial sound, video, 3D and DMX, mapped from the same data.</td></tr>
<tr><td>A light setup for touring</td><td>A laptop or a Raspberry Pi, on Windows, macOS or Linux, with media collected into the project.</td></tr>
</tbody>
</table>
</div>

The [gallery](/gallery.html) has more dance and theatre pieces, such as *Our Bodies Know More Than We Do* by Psʌnía, where the performers' movements drive sound and light.
