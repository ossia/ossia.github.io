---
layout: use-case
title: "Software for kinetic art, motors and robotics"
headline: "Kinetic art and robotics"
subtitle: "Motors, pumps and mechanisms written on a timeline like any other parameter, reacting to sensors, in time with the sound, video and lights."
permalink: /kinetic-art-robotics.html
translation: /fr/art-cinetique-robotique.html
category: site-score
description: "Free, open-source software for kinetic art and robotics: motors, pumps and actuators over serial, DMX, OSC and GPIO, synced with sensors, sound and lights."
image: /assets/social/ossia-score-og.jpg
---

Kinetic sculptures, robotic installations and stage machinery need movement that is precise in time and smooth enough for the mechanics, and they often have to react to what is around them.
ossia score treats each motor or actuator as a parameter to automate, next to the sound, the video and the lights of the piece.

<picture><img src="/assets/gallery/recapture.webp" width="540" height="369" loading="lazy" alt="Transparent pipes suspended in the dark, lit at both ends, in front of a circular projection of trees"/></picture>
<p class="figure-caption"><i>[re]capture</i>, Alice Jarry, Brice Ammar-Khodja, Jacqueline Beaumont, Jean-Michaël Celerier, Matthew Halpenny, Asa Perlman, Philippe Vandal: cameras, video processing, lights, pumps and motors, run entirely by ossia score on a Raspberry Pi. © Alice Jarry</p>

## Talking to the hardware

Microcontrollers such as Arduino and ESP32 connect over serial, OSC or MQTT. Motors and effects with a DMX input are driven like lights, and a device with its own protocol can be described in a short script ([serial](https://ossia.io/score-docs/devices/serial-device.html), [QML protocols](https://ossia.io/score-docs/in-depth/qml-protocols.html)).
On Linux boards such as the Raspberry Pi and the Orange Pi, score drives GPIO, PWM, ADC and DAC pins directly ([raw I/O](https://ossia.io/score-docs/devices/rawio-device.html)).
CAN bus signals can be read through a DBC database on Linux ([CAN](https://ossia.io/score-docs/devices/can-device.html)).

<picture><img src="/assets/blog/airfiltration/electronics.webp" width="796" height="778" loading="lazy" alt="Microcontroller boards and wiring on a table, connected to a transparent tube fitted with flexible solar panels"/></picture>
<p class="figure-caption">Electronics of <i>[re]capture</i>, from the <a href="/posts/air-filtration/">case study</a>.</p>

## Writing movement

Movements are automation curves in musical or absolute time, LFOs, easing curves and drawn trajectories, looped or varied over the piece ([automations](https://ossia.io/score-docs/quick-start/writing-automations.html), [path generator](https://ossia.io/score-docs/processes/pathgenerator.html)).
Between the score and the motors, smoothing, rate limiting and range clipping keep the values within what the mechanics can follow ([smooth](https://ossia.io/score-docs/processes/smooth.html), [rate limiter](https://ossia.io/score-docs/processes/rate-limiter.html)).

The mechanism can react to IMUs, depth cameras, computer vision with blob and point tracking, distance and touch sensors on microcontrollers, or tracking systems ([sensors to OSC](https://ossia.io/score-docs/examples/devices/sensors2osc.html), [point tracker](https://ossia.io/score-docs/processes/point-tracker.html)).
The whole piece can run headless on a Raspberry Pi hidden inside it ([embedded](https://ossia.io/score-docs/in-depth/embedded.html)).

## In short

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>You want</th><th>In ossia score</th></tr></thead>
<tbody>
<tr><td>Movements written precisely in time</td><td>Curves, trajectories and LFOs on a timeline, in musical or absolute time.</td></tr>
<tr><td>Motion the mechanics can follow</td><td>Smoothing, easing and rate limiting before the values reach the motors.</td></tr>
<tr><td>Mechanisms that react to visitors or to their own state</td><td>Sensors, cameras and machine data feed triggers, conditions and mappings.</td></tr>
<tr><td>A small controller hidden in the piece</td><td>Headless on a Raspberry Pi, talking to the microcontrollers in the mechanism.</td></tr>
</tbody>
</table>
</div>

The [gallery](/gallery.html) also has *Organism + Excitable Chaos*, a pendulum installation that won the Golden Nica at Prix Ars Electronica 2025, where ossia carries the network communication between the pendulum and the computers.
