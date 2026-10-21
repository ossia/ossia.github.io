---
layout: use-case
title: "Escape room and attraction control software"
headline: "Escape rooms and interactive attractions"
subtitle: "ossia score can be used to write the game logic of an escape room or an attraction, with puzzles, props and sensors driving sound, video and lights."
permalink: /escape-rooms.html
ref: escape-rooms
nav_title: "Escape rooms and attractions"
blurb: "Puzzles, props and sensors driving sound, video and lights, with game logic and a game master panel."
category: site-score
description: "Free, open-source software for escape rooms and attractions: sensors and props, game logic with triggers and conditions, sound, video and DMX, unattended."
image: /assets/social/ossia-score-og.jpg
---

ossia score can be used to run an escape room, a haunted house or a museum game, that is, a show whose order is decided by the players: each scene of the score waits for its puzzle to be solved, then plays its sound, video and lighting changes.

<picture><img src="/assets/use-cases/non-linear-scenario.webp" width="1200" height="689" loading="lazy" alt="An ossia score scenario where a fade-out waits on a trigger labelled From activity sensor, inside a looping timeline"/></picture>

## Game logic

A trigger waits for a button, a sensor or a message, a condition decides what comes next, and a loop keeps an ambience playing until a puzzle is solved ([breaking the timeline](https://ossia.io/score-docs/quick-start/breaking-the-timeline.html), [switches](https://ossia.io/score-docs/common-practices/2-switches.html), [out-of-time triggering](https://ossia.io/score-docs/common-practices/3-out-of-time.html)).
Counters, timers, scores and specific rules can be written in JavaScript when the visual tools are not enough ([JavaScript](https://ossia.io/score-docs/processes/javascript.html)).

## Props and puzzles

Arduino and other microcontrollers are connected over serial, networked props over MQTT, HTTP or WebSocket, and Bluetooth LE sensors, gamepads and MIDI pads are supported directly ([serial](https://ossia.io/score-docs/devices/serial-device.html), [MQTT](https://ossia.io/score-docs/devices/mqtt-device.html), [BLE](https://ossia.io/score-docs/devices/ble-device.html)).
On a Raspberry Pi or another Linux board, score drives the GPIO, PWM, ADC and DAC pins itself, for instance for buttons, relays and magnetic locks ([raw I/O](https://ossia.io/score-docs/devices/rawio-device.html)), and a webcam can detect players, poses and objects (see [real-time AI](/realtime-ai.html)).

In the room itself, score plays multichannel ambiences and effects, shows video and text on screens and controls DMX lights, all of which change with the game.

## Game master and operation

From a web browser on a phone or a tablet, the game master can follow the game, trigger the hint scenes which were prepared, skip a puzzle, or restart a scene with *Play from here* ([remote control](https://ossia.io/score-docs/in-depth/remote.html)).

The room can run all day in headless mode with autoplay, on a PC or a Raspberry Pi, and report its CPU, memory and network usage ([headless mode](https://ossia.io/score-docs/faq/nogui.html), [monitoring](https://ossia.io/score-docs/faq/monitor-activity.html)).
