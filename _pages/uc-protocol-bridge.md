---
layout: use-case
title: "OSC, MIDI, DMX and MQTT protocol bridge"
headline: "A protocol bridge and control hub"
subtitle: "MIDI, OSC, DMX, MQTT, serial, HTTP, WebSocket and Bluetooth LE in one place: convert messages from one to another, clean them up, and leave the bridge running."
permalink: /protocol-bridge.html
translation: /fr/passerelle-protocoles.html
category: site-score
description: "Free protocol converter and control hub: MIDI to OSC, OSC to DMX, MQTT, serial, HTTP, WebSocket and Bluetooth LE, with mapping, filtering and OSCQuery."
image: /assets/social/ossia-score-og.jpg
---

Most setups mix equipment that speaks different languages: a MIDI controller, lights on Art-Net, sensors on serial or MQTT, software on OSC.
In ossia score every device becomes a tree of parameters, and any parameter can drive any other.

## What it talks to

OSC over UDP, TCP, WebSocket and serial, and OSCQuery. MIDI, through virtual ports and the network ports your operating system provides. DMX in and out over Art-Net, sACN and USB interfaces. MQTT, CoAP, HTTP, WebSocket, serial, Bluetooth LE and LSL, and CAN bus data received on Linux ([devices](https://ossia.io/score-docs/devices.html)).
Inputs also include PosiStageNet, RTTrP, OpenTrackIO and TUIO tracking, gamepads, Leap Motion and depth cameras, and Bitfocus Companion modules from the package manager drive AV equipment ([tracking](https://ossia.io/score-docs/devices/tracking-device.html), [Companion](https://ossia.io/score-docs/devices/companion-device.html)).

Devices with their own text or binary protocol are described in a short script, with SLIP, COBS, STX/ETX or size-prefix framing, over TCP, UDP, serial or Bluetooth ([QML protocols](https://ossia.io/score-docs/in-depth/qml-protocols.html)).
OSC devices are found on the network through Bonjour/Zeroconf, OSCQuery devices can be browsed, and your own parameters are published the same way ([OSCQuery](https://ossia.io/score-docs/devices/oscquery-device.html)).

## Mapping

Connecting two parameters takes a curve and a range, no programming. Values can be scaled, smoothed and filtered (deadzone, noise gate, hysteresis, debounce), and several inputs can be combined into one ([mapping overview](https://ossia.io/score-docs/examples/data/mapping-overview.html), [value filter](https://ossia.io/score-docs/processes/value-filter.html)).
An OSC address pattern sends one value to a whole group of parameters ([pattern matching](https://ossia.io/score-docs/in-depth/pattern-matching.html)).

For a bridge that runs all the time, the mapper device keeps working when no score is playing. Its mappings are written as JavaScript in a QML file ([mapper device](https://ossia.io/score-docs/devices/mapper-device.html)).
It runs headless on a PC or a Raspberry Pi, and device configurations can be exported and reused on another machine ([headless mode](https://ossia.io/score-docs/faq/nogui.html)).

<picture><img src="/assets/features/mapper.webp" width="1600" height="760" loading="lazy" alt="The device setup window of ossia score with the protocol list on the left and the script of a mapper device binding a MIDI control to a new parameter"/></picture>

## In short

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>You want</th><th>In ossia score</th></tr></thead>
<tbody>
<tr><td>A MIDI controller driving software that only speaks OSC, or the reverse</td><td>Drag a MIDI parameter onto an OSC one, with a curve and a range in between.</td></tr>
<tr><td>Sensors on serial, MQTT or Bluetooth LE controlling lights or sound</td><td>All are devices in the same tree, mapped to DMX, OSC or score's own audio and video.</td></tr>
<tr><td>To support a device with its own protocol</td><td>A short script describes it once; after that it behaves like any other device.</td></tr>
<tr><td>A bridge that is always on</td><td>The mapper device, running without a score, headless on a Raspberry Pi.</td></tr>
<tr><td>Timing as well as translation</td><td>The same project can delay, sequence and automate messages (see the <a href="/osc-midi-dmx-timeline.html">OSC, MIDI and DMX timeline</a>).</td></tr>
</tbody>
</table>
</div>
