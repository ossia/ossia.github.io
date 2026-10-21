---
layout: use-case
title: "Software for kinetic art, motors and robotics"
headline: "Kinetic art and robotics"
subtitle: "Write the movements of motors, pumps, robots and mechanisms on a timeline, make them react to sensors, and synchronise them with sound, video and lights, from a computer or a Raspberry Pi. Free and open-source."
permalink: /kinetic-art-robotics.html
translation: /fr/art-cinetique-robotique.html
category: site-score
description: "Free, open-source software for kinetic art and robotics: motors, pumps and actuators over serial, DMX, OSC and GPIO, synced with sensors, sound and lights."
image: /assets/social/ossia-score-og.jpg
---

Kinetic sculptures, robotic installations and mechanical stage elements need movements that are precise in time, smooth, and often reactive.
ossia score treats each motor or actuator as a parameter to automate, next to the sound, video and lights of the piece.

## What you can do

- **Talk to the hardware**: microcontrollers such as Arduino and ESP32 over serial, OSC or MQTT, DMX-controlled motors and effects, and any device with its own protocol through a short script ([serial](https://ossia.io/score-docs/devices/serial-device.html), [QML protocols](https://ossia.io/score-docs/in-depth/qml-protocols.html)).
- **Drive pins directly**: GPIO, PWM, ADC and DAC on Linux boards such as the Raspberry Pi and the Orange Pi ([raw I/O](https://ossia.io/score-docs/devices/rawio-device.html)).
- **Write movements**: automation curves with musical or absolute timing, LFOs, easing curves and drawn trajectories, looped or varied over time ([automations](https://ossia.io/score-docs/quick-start/writing-automations.html), [path generator](https://ossia.io/score-docs/processes/pathgenerator.html)).
- **Keep motion safe for the mechanics**: smoothing, rate limiting and range clipping between the score and the motors ([smooth](https://ossia.io/score-docs/processes/smooth.html), [rate limiter](https://ossia.io/score-docs/processes/rate-limiter.html)).
- **React to the world**: IMUs, depth cameras, computer vision with blob and point tracking, distance and touch sensors on microcontrollers, tracking systems ([sensors to OSC](https://ossia.io/score-docs/examples/devices/sensors2osc.html), [point tracker](https://ossia.io/score-docs/processes/point-tracker.html)).
- **Read machine data**: receive CAN bus signals through a DBC database on Linux ([CAN](https://ossia.io/score-docs/devices/can-device.html)).
- **Sound, video and lights in sync** with the mechanics, on one timeline.
- **Embedded**: run the whole piece headless on a Raspberry Pi ([embedded](https://ossia.io/score-docs/in-depth/embedded.html)).

<picture><img src="/assets/gallery/recapture.webp" width="540" height="369" loading="lazy" alt="Transparent pipes suspended in the dark, lit at both ends, in front of a circular projection of trees"/></picture>
<p class="figure-caption"><i>[re]capture</i>, Alice Jarry, Brice Ammar-Khodja, Jacqueline Beaumont, Jean-Michaël Celerier, Matthew Halpenny, Asa Perlman, Philippe Vandal: cameras, video processing, lights, pumps and motors, run entirely by ossia score on a Raspberry Pi. © Alice Jarry</p>

## Kinetic art needs, and how ossia score answers them

<div class="comparison-scroll">
<table class="comparison">
<tr><th>What you need</th><th>How ossia score does it</th></tr>
<tr><td>Movements written precisely in time</td><td>Automation curves, trajectories and LFOs on a timeline, with musical or absolute time.</td></tr>
<tr><td>Smooth motion that the mechanics can follow</td><td>Smoothing, easing and rate limiting before the values reach the motors.</td></tr>
<tr><td>Mechanisms that react to visitors or to their own state</td><td>Sensors, cameras and machine data feed triggers, conditions and mappings.</td></tr>
<tr><td>Motors, sound, video and lights together</td><td>One project for all of them, from a single computer.</td></tr>
<tr><td>A small, hidden controller</td><td>Headless on a Raspberry Pi, talking to microcontrollers in the mechanism.</td></tr>
</table>
</div>

See the [gallery](/gallery.html), for instance *[re]capture*, and *Organism + Excitable Chaos*, a pendulum installation awarded the Golden Nica at Prix Ars Electronica 2025, which used ossia for the network communication between the pendulum and the computers.
