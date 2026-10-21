---
layout: use-case
title: "OSC, MIDI, DMX and MQTT protocol bridge"
headline: "A protocol bridge and control hub"
subtitle: "ossia score can be used to convert messages between MIDI, OSC, DMX, MQTT, serial, HTTP, WebSocket and Bluetooth LE devices, filter them, and keep the bridge running."
permalink: /protocol-bridge.html
translation: /fr/passerelle-protocoles.html
category: site-score
description: "Free protocol converter and control hub: MIDI to OSC, OSC to DMX, MQTT, serial, HTTP, WebSocket and Bluetooth LE, with mapping, filtering and OSCQuery."
image: /assets/social/ossia-score-og.jpg
---

ossia score can be used as a bridge between equipment which uses different protocols, for instance a MIDI controller, lights over Art-Net, sensors over serial or MQTT and software over OSC: every device is represented as a tree of parameters, and any parameter can drive any other.
In *VIB.E-MOTION* (Fheel Concepts and Corinne Linder, 2024), for example, the heart rates of the audience are measured by Bluetooth sensors and score handles the network and the sound of this participatory circus performance.

## Protocols

score supports OSC over UDP, TCP, WebSocket and serial, and OSCQuery; MIDI, through virtual ports and the network ports provided by the operating system; DMX input and output over Art-Net, sACN and USB interfaces; as well as MQTT, CoAP, HTTP, WebSocket, serial, Bluetooth LE, LSL, and CAN bus data received on Linux ([devices](https://ossia.io/score-docs/devices.html)).
The inputs also include the PosiStageNet, RTTrP, OpenTrackIO and TUIO tracking protocols, gamepads, Leap Motion and depth cameras, and AV equipment can be controlled through the Bitfocus Companion modules installed from the package manager ([tracking](https://ossia.io/score-docs/devices/tracking-device.html), [Companion](https://ossia.io/score-docs/devices/companion-device.html)).

Devices with their own text or binary protocol are described in a short script, with SLIP, COBS, STX/ETX or size-prefix framing, over TCP, UDP, serial or Bluetooth ([QML protocols](https://ossia.io/score-docs/in-depth/qml-protocols.html)).
OSC devices are discovered on the network through Bonjour/Zeroconf, OSCQuery devices can be browsed, and the parameters of a score can be published the same way ([OSCQuery](https://ossia.io/score-docs/devices/oscquery-device.html)).

## Mapping

Connecting two parameters only requires a curve and a range: values can be scaled, smoothed and filtered (deadzone, noise gate, hysteresis, debounce), several inputs can be combined into one, and an OSC address pattern sends a value to a whole group of parameters ([mapping overview](https://ossia.io/score-docs/examples/data/mapping-overview.html), [value filter](https://ossia.io/score-docs/processes/value-filter.html), [pattern matching](https://ossia.io/score-docs/in-depth/pattern-matching.html)).

For a bridge which must run permanently, the mapper device keeps working when no score is playing; its mappings are written in JavaScript in a QML file ([mapper device](https://ossia.io/score-docs/devices/mapper-device.html)).
It runs headless on a PC or a Raspberry Pi, and device configurations can be exported and reused on another machine ([headless mode](https://ossia.io/score-docs/faq/nogui.html)).

<picture><img src="/assets/features/mapper.webp" width="1600" height="760" loading="lazy" alt="The device setup window of ossia score with the protocol list on the left and the script of a mapper device binding a MIDI control to a new parameter"/></picture>

When messages also have to be delayed, sequenced or automated over time, the same project can do it (see the [OSC, MIDI and DMX timeline](/osc-midi-dmx-timeline.html) page).
