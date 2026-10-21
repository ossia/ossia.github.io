---
layout: use-case
title: "Escape room and attraction control software"
headline: "Escape rooms and interactive attractions"
subtitle: "Wire puzzles, sensors and props to sound, video and lights, describe the game logic with triggers and conditions, and run the room all day on a PC or a Raspberry Pi, with a game master panel in the browser. Free and open-source."
permalink: /escape-rooms.html
translation: /fr/escape-games.html
category: site-score
description: "Free, open-source software for escape rooms and attractions: sensors and props, game logic with triggers and conditions, sound, video and DMX, unattended."
image: /assets/social/ossia-score-og.jpg
---

An escape room, a haunted house or a museum game is a show whose order is decided by the players.
ossia score describes that logic on a timeline: each scene waits for a puzzle to be solved, then plays its sound, video and light changes.

## What you can do

- **Game logic without code**: triggers wait for a button, a sensor or a message; conditions choose what happens next; loops repeat an ambience until a puzzle is solved ([breaking the timeline](https://ossia.io/score-docs/quick-start/breaking-the-timeline.html), [switches](https://ossia.io/score-docs/common-practices/2-switches.html), [out-of-time triggering](https://ossia.io/score-docs/common-practices/3-out-of-time.html)).
- **Puzzles and props**: Arduino and microcontrollers over serial, networked props over MQTT, HTTP or WebSocket, Bluetooth LE sensors, gamepads and MIDI pads ([serial](https://ossia.io/score-docs/devices/serial-device.html), [MQTT](https://ossia.io/score-docs/devices/mqtt-device.html), [BLE](https://ossia.io/score-docs/devices/ble-device.html)).
- **Electronics on the computer itself**: GPIO, PWM, ADC and DAC on Linux boards such as the Raspberry Pi, for buttons, relays and magnetic locks ([raw I/O](https://ossia.io/score-docs/devices/rawio-device.html)).
- **Sound, video and lights**: multichannel ambiences and effects, video and text on screens, DMX lights, all changed by the game.
- **Game master panel**: follow and drive the game from a browser on a phone or a tablet: trigger the hint scenes you prepared, skip a puzzle, or restart a scene with *Play from here* ([remote control](https://ossia.io/score-docs/in-depth/remote.html)).
- **Cameras**: detect players, poses and objects with a webcam (see [real-time AI](/realtime-ai.html)).
- **Scripting when needed**: JavaScript for counters, timers, scores and custom rules ([JavaScript](https://ossia.io/score-docs/processes/javascript.html)).
- **Runs all day**: headless mode with autoplay on a PC or a Raspberry Pi, with CPU, memory and network monitoring ([headless mode](https://ossia.io/score-docs/faq/nogui.html), [monitoring](https://ossia.io/score-docs/faq/monitor-activity.html)).

## Escape room needs, and how ossia score answers them

<div class="comparison-scroll">
<table class="comparison">
<tr><th>What you need</th><th>How ossia score does it</th></tr>
<tr><td>A game that follows the players, not a fixed sequence</td><td>Scenes wait for triggers, and conditions choose between branches.</td></tr>
<tr><td>Props, locks and sensors from many makers</td><td>Serial, MQTT, HTTP, WebSocket, Bluetooth LE, MIDI, OSC and GPIO in the same project.</td></tr>
<tr><td>A game master who can help or reset the room</td><td>A browser panel to trigger scenes, including the hints you prepared, and restart from any point.</td></tr>
<tr><td>Immersive sound, video and lights</td><td>Multichannel sound, video, 3D and DMX on the same timeline as the game logic.</td></tr>
<tr><td>Running every day without a technician</td><td>Headless autoplay on a PC or a Raspberry Pi, with system monitoring.</td></tr>
</table>
</div>
