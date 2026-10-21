---
layout: use-case
title: "Free OSC, MIDI and DMX timeline software"
headline: "An OSC, MIDI and DMX timeline"
subtitle: "ossia score can be used to write automations for any OSC, MIDI or DMX parameter on a timeline, which can also wait for external events."
permalink: /osc-midi-dmx-timeline.html
ref: osc-timeline
nav_title: "OSC, MIDI and DMX timeline"
blurb: "Automate any OSC, MIDI or DMX parameter on an interactive timeline, with triggers and conditions."
category: site-score
description: "Free OSC, MIDI and DMX timeline and sequencer for Windows, macOS and Linux: automation curves, OSCQuery, triggers and conditions."
image: /assets/social/ossia-score-og.jpg
---

ossia score started as a sequencer for OSC: every parameter of every device on the network is an address, which can be automated, recorded, mapped and placed in time.
It is used to drive patches, game engines, media servers, lights or robots, and the same timeline can also contain sound, video, 3D and shaders.

## Automations

An automation curve can target an OSC address, a MIDI CC, a DMX channel or a parameter of one of score's own processes ([writing automations](https://ossia.io/score-docs/quick-start/writing-automations.html)); when the score has to follow a beat, tempo, time signatures and quantization can be enabled ([musical features](https://ossia.io/score-docs/in-depth/musical.html)).

The timeline does not have to be linear: a trigger waits for an incoming message, a condition chooses between branches, and a loop repeats until something happens ([breaking the timeline](https://ossia.io/score-docs/quick-start/breaking-the-timeline.html)).

<picture><source type="image/avif" srcset="/assets/feature-interaction.avif"><img src="/assets/feature-interaction.webp" width="580" height="452" loading="lazy" alt="An ossia score timeline where a trigger waits for an external event before the next part starts"/></picture>

## Devices and protocols

Software which supports OSCQuery, for instance patches and applications using libossia, appears in the device explorer with all its parameters; dragging a parameter into the score fills in its address.
Plain OSC devices can be discovered on the local network through Bonjour/Zeroconf, and the parameters of a score can be published the same way.

<picture><img src="/assets/features/oscquery.webp" width="1600" height="1290" loading="lazy" alt="The OSCQuery tree of an ossia score session seen as JSON in a web browser, next to the same tree in the score device explorer"/></picture>

OSC is supported over UDP, TCP (as client or server), WebSockets and serial ports, with SLIP and COBS framing, and host names can be used instead of IP addresses.
The same project can also use MIDI, DMX (Art-Net, sACN, DMX USB), MQTT, CoAP, HTTP, LSL and CAN.

The inputs include gamepads, Wiimotes, Leap Motion, MIDI controllers, Arduino over serial, Bluetooth LE sensors, depth cameras, and tracking protocols such as PosiStageNet, TUIO, RTTrP and OpenTrackIO ([sensors to OSC](https://ossia.io/score-docs/examples/devices/sensors2osc.html)).
For MIDI, score supports virtual ports, the network MIDI ports provided by the operating system, MIDI file playback, filters, Scala microtonal scales, and the computer keyboard as a MIDI input ([MIDI](https://ossia.io/score-docs/in-depth/midi.html)).

## Mapping and filtering

The mapper and the value filters are placed between an input and its target: calibration, deadzones, noise gate, hysteresis, debounce and easing curves are available, which is in particular useful for sensors ([value filter](https://ossia.io/score-docs/processes/value-filter.html), [calibrator](https://ossia.io/score-docs/processes/calibrator.html), [mapper](https://ossia.io/score-docs/devices/mapper-device.html)).
Mappings can be written as curves, in JavaScript or as math expressions, and OSC address patterns send a value to a whole group of devices at once ([pattern matching](https://ossia.io/score-docs/in-depth/pattern-matching.html)).

Any device can be recorded to CSV and replayed later, including incoming DMX ([recording](https://ossia.io/score-docs/in-depth/recording.html)); the browser remote gives a simple control surface on a phone, with nothing to install.

score has the same features on Windows, macOS, Linux and the Raspberry Pi, except those which depend on a given system or piece of hardware (Spout, Syphon, CUDA, etc.).

## With your own software

score supports OSCQuery natively through [libossia](/site-libossia/about.html), which also exists for Max/MSP, Pure Data, Unity, Python, SuperCollider, openFrameworks and Qt: adding a few objects to a patch or a project is enough for its parameters to appear in score.
