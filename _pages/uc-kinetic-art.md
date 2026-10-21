---
layout: use-case
title: "Software for kinetic art, motors and robotics"
headline: "Kinetic art and robotics"
subtitle: "ossia score can be used to write the movements of motors, pumps and mechanisms on a timeline, reacting to sensors and in sync with sound, video and lights."
permalink: /kinetic-art-robotics.html
translation: /fr/art-cinetique-robotique.html
category: site-score
description: "Free, open-source software for kinetic art and robotics: motors, pumps and actuators over serial, DMX, OSC and GPIO, synced with sensors, sound and lights."
image: /assets/social/ossia-score-og.jpg
---

ossia score can be used for kinetic sculptures, robotic installations and stage machinery: each motor or actuator is a parameter which can be automated next to the sound, the video and the lights of the piece, react to sensors, and be smoothed so that the mechanics can follow.
For instance, in *[re]capture* (2024–2025), cameras, video processing, lights, pumps and motors are run by score on a Raspberry Pi, and in Philippe Vandal's *spectral narratives* (Eisode, Montréal, 2025), four glass and solvent modules are sequenced with score.

<picture><img src="/assets/gallery/recapture.webp" width="540" height="369" loading="lazy" alt="Transparent pipes suspended in the dark, lit at both ends, in front of a circular projection of trees"/></picture>
<p class="figure-caption"><i>[re]capture</i>, Alice Jarry, Brice Ammar-Khodja, Jacqueline Beaumont, Jean-Michaël Celerier, Matthew Halpenny, Asa Perlman, Philippe Vandal: cameras, video processing, lights, pumps and motors, run entirely by ossia score on a Raspberry Pi. © Alice Jarry</p>

## Hardware

Microcontrollers such as Arduino and ESP32 are connected over serial, OSC or MQTT, motors and effects with a DMX input are controlled like lights, and a device with its own protocol can be described in a short script ([serial](https://ossia.io/score-docs/devices/serial-device.html), [QML protocols](https://ossia.io/score-docs/in-depth/qml-protocols.html)).
On Linux boards such as the Raspberry Pi and the Orange Pi, score drives the GPIO, PWM, ADC and DAC pins directly ([raw I/O](https://ossia.io/score-docs/devices/rawio-device.html)), and CAN bus signals can be read through a DBC database on Linux ([CAN](https://ossia.io/score-docs/devices/can-device.html)).

<picture><img src="/assets/blog/airfiltration/electronics.webp" width="796" height="778" loading="lazy" alt="Microcontroller boards and wiring on a table, connected to a transparent tube fitted with flexible solar panels"/></picture>
<p class="figure-caption">Electronics of <i>[re]capture</i>, from the <a href="/posts/air-filtration/">case study</a>.</p>

## Movements

The movements are written as automation curves in musical or absolute time, LFOs, easing curves and drawn trajectories, which can be looped or varied over the piece ([automations](https://ossia.io/score-docs/quick-start/writing-automations.html), [path generator](https://ossia.io/score-docs/processes/pathgenerator.html)).
Between the score and the motors, smoothing, rate limiting and range clipping keep the values within what the mechanics can follow ([smooth](https://ossia.io/score-docs/processes/smooth.html), [rate limiter](https://ossia.io/score-docs/processes/rate-limiter.html)).

The mechanism can react to IMUs, depth cameras, computer vision with blob and point tracking, distance and touch sensors on microcontrollers, or tracking systems ([sensors to OSC](https://ossia.io/score-docs/examples/devices/sensors2osc.html), [point tracker](https://ossia.io/score-docs/processes/point-tracker.html)), and the whole piece can run headless on a Raspberry Pi hidden inside it ([embedded](https://ossia.io/score-docs/in-depth/embedded.html)).

The [gallery](/gallery.html) also presents *Organism + Excitable Chaos* (Navid Navab and Garnet Willis), a pendulum installation which received the Golden Nica at Prix Ars Electronica 2025, where ossia handles the network communication between the pendulum and the computers.
