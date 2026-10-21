---
layout: use-case
title: "Escape room and attraction control software"
headline: "Escape rooms and interactive attractions"
subtitle: "Puzzles, props and sensors wired to sound, video and lights, game logic written on a timeline, and a panel in the browser for the game master."
permalink: /escape-rooms.html
translation: /fr/escape-games.html
category: site-score
description: "Free, open-source software for escape rooms and attractions: sensors and props, game logic with triggers and conditions, sound, video and DMX, unattended."
image: /assets/social/ossia-score-og.jpg
---

An escape room, a haunted house or a museum game is a show where the players decide the order.
In ossia score each scene waits for its puzzle to be solved, then plays its sound, video and light changes.

<picture><img src="/assets/use-cases/non-linear-scenario.webp" width="1200" height="689" loading="lazy" alt="An ossia score scenario where a fade-out waits on a trigger labelled From activity sensor, inside a looping timeline"/></picture>

## Writing the game

A trigger waits for a button, a sensor or a message. A condition decides what comes next. A loop keeps an ambience going until the puzzle is solved ([breaking the timeline](https://ossia.io/score-docs/quick-start/breaking-the-timeline.html), [switches](https://ossia.io/score-docs/common-practices/2-switches.html), [out-of-time triggering](https://ossia.io/score-docs/common-practices/3-out-of-time.html)).
Counters, timers, scores and house rules can be written in JavaScript when the visual tools run out ([JavaScript](https://ossia.io/score-docs/processes/javascript.html)).

## Props and puzzles

Arduino and other microcontrollers connect over serial, networked props over MQTT, HTTP or WebSocket, and Bluetooth LE sensors, gamepads and MIDI pads plug straight in ([serial](https://ossia.io/score-docs/devices/serial-device.html), [MQTT](https://ossia.io/score-docs/devices/mqtt-device.html), [BLE](https://ossia.io/score-docs/devices/ble-device.html)).
On a Raspberry Pi or another Linux board, score drives GPIO, PWM, ADC and DAC pins itself, for buttons, relays and magnetic locks ([raw I/O](https://ossia.io/score-docs/devices/rawio-device.html)).
A webcam can detect players, poses and objects (see [real-time AI](/realtime-ai.html)).

The room itself gets multichannel ambiences and effects, video and text on screens, and DMX lights, all changed by the game.

## The game master

From a browser on a phone or a tablet, the game master follows the game and triggers the hint scenes you prepared, skips a puzzle, or restarts a scene with *Play from here* ([remote control](https://ossia.io/score-docs/in-depth/remote.html)).

The room can run all day in headless mode with autoplay, on a PC or a Raspberry Pi, and report its CPU, memory and network use ([headless mode](https://ossia.io/score-docs/faq/nogui.html), [monitoring](https://ossia.io/score-docs/faq/monitor-activity.html)).

## In short

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>You want</th><th>In ossia score</th></tr></thead>
<tbody>
<tr><td>A game that follows the players</td><td>Scenes wait for triggers, and conditions choose between branches.</td></tr>
<tr><td>Props and locks from many makers</td><td>Serial, MQTT, HTTP, WebSocket, Bluetooth LE, MIDI, OSC and GPIO in the same project.</td></tr>
<tr><td>A game master who can help or reset the room</td><td>A browser panel that triggers scenes, including your hints, and restarts from any point.</td></tr>
<tr><td>To open every day without a technician</td><td>Headless autoplay on a PC or a Raspberry Pi, with system monitoring.</td></tr>
</tbody>
</table>
</div>
