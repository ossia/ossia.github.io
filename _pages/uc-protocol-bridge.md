---
layout: use-case
title: "OSC, MIDI, DMX and MQTT protocol bridge"
headline: "A protocol bridge and control hub"
subtitle: "Connect MIDI, OSC, DMX, MQTT, serial, HTTP, WebSocket, Bluetooth LE and more: convert messages from one to another, clean and rescale them, and keep the bridge running on a small computer. Free and open-source, on Windows, macOS, Linux and Raspberry Pi."
permalink: /protocol-bridge.html
translation: /fr/passerelle-protocoles.html
category: site-score
description: "Free protocol converter and control hub: MIDI to OSC, OSC to DMX, MQTT, serial, HTTP, WebSocket and Bluetooth LE, with mapping, filtering and OSCQuery."
image: /assets/social/ossia-score-og.jpg
---

Most projects mix equipment that speaks different languages: a MIDI controller, a lighting desk on Art-Net, sensors on serial or MQTT, software on OSC.
ossia score sits in the middle: every device becomes a tree of parameters, and any parameter can drive any other.

## What you can do

- **Many protocols in one place**: OSC over UDP, TCP, WebSocket and serial, OSCQuery, MIDI (virtual ports, and network ports provided by the operating system), DMX in and out over Art-Net, sACN and USB interfaces, MQTT, CoAP, HTTP, WebSocket, serial, Bluetooth LE, LSL, and receiving CAN bus data on Linux ([devices](https://ossia.io/score-docs/devices.html)).
- **Tracking and control**: PosiStageNet, RTTrP, OpenTrackIO, TUIO, gamepads, Leap Motion and depth cameras as inputs; Bitfocus Companion modules from the package manager to drive AV equipment ([tracking](https://ossia.io/score-docs/devices/tracking-device.html), [Companion](https://ossia.io/score-docs/devices/companion-device.html)).
- **Map without programming**: connect parameters with curves, scale, smooth and filter them (deadzone, noise gate, hysteresis, debounce), combine several inputs into one ([mapping overview](https://ossia.io/score-docs/examples/data/mapping-overview.html), [value filter](https://ossia.io/score-docs/processes/value-filter.html)).
- **Permanent mappings**: the mapper device keeps a bridge running even when no score is playing, with mappings written in JavaScript ([mapper device](https://ossia.io/score-docs/devices/mapper-device.html)).
- **Your own protocols**: describe a device with a text or binary protocol in a short script, with framings such as SLIP, COBS, STX/ETX or size prefixes, over TCP, UDP, serial or Bluetooth ([QML protocols](https://ossia.io/score-docs/in-depth/qml-protocols.html)).
- **Discovery**: find OSC devices on the network with Bonjour/Zeroconf, browse OSCQuery devices, and publish your own parameters the same way ([OSCQuery](https://ossia.io/score-docs/devices/oscquery-device.html)).
- **Many devices at once**: OSC address patterns apply one value to a whole group of parameters ([pattern matching](https://ossia.io/score-docs/in-depth/pattern-matching.html)).
- **Always on**: headless mode on a PC or a Raspberry Pi, and device configurations that can be exported and reused ([headless mode](https://ossia.io/score-docs/faq/nogui.html)).

## Bridging needs, and how ossia score answers them

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>What you need</th><th>How ossia score does it</th></tr></thead>
<tbody>
<tr><td>A MIDI controller driving software that only speaks OSC, or the reverse</td><td>Drag a MIDI parameter onto an OSC one, with a curve and a range in between.</td></tr>
<tr><td>Sensors on serial, MQTT or Bluetooth LE controlling lights or sound</td><td>All are devices in the same tree, mapped to DMX, OSC or the built-in audio and video.</td></tr>
<tr><td>A device with its own text or binary protocol</td><td>A short script describes it once, then it behaves like any other device.</td></tr>
<tr><td>A bridge that runs on its own, all the time</td><td>The mapper device works without playing a score, headless on a Raspberry Pi.</td></tr>
<tr><td>Timing as well as translation</td><td>The same project can sequence, delay and automate the messages on a timeline (see the <a href="/osc-midi-dmx-timeline.html">OSC, MIDI and DMX timeline</a>).</td></tr>
</tbody>
</table>
</div>
