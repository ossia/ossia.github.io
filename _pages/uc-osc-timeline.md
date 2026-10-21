---
layout: use-case
title: "Free OSC, MIDI and DMX timeline software"
headline: "An OSC, MIDI and DMX timeline"
subtitle: "Draw curves for any OSC, MIDI or DMX parameter, let the timeline wait for events, and pick up devices on the network with OSCQuery instead of typing addresses."
permalink: /osc-midi-dmx-timeline.html
translation: /fr/timeline-osc-midi-dmx.html
category: site-score
description: "Free OSC, MIDI and DMX timeline and sequencer for Windows, macOS and Linux: automation curves, OSCQuery, triggers and conditions."
image: /assets/social/ossia-score-og.jpg
---

ossia score started life as a sequencer for OSC. Every parameter of every device on the network becomes an address, and an address can be automated, recorded, mapped and placed in time.
People use it to drive patches, game engines, media servers, lights and robots.

## Curves on any address

An automation curve can target an OSC address, a MIDI CC, a DMX channel or a parameter of one of score's own processes ([writing automations](https://ossia.io/score-docs/quick-start/writing-automations.html)).
When the score has to follow a beat, switch on tempo, time signatures and quantization ([musical features](https://ossia.io/score-docs/in-depth/musical.html)).

The timeline does not have to run straight. A trigger waits for an incoming message, a condition picks a branch, a loop repeats until something happens ([breaking the timeline](https://ossia.io/score-docs/quick-start/breaking-the-timeline.html)).

<picture><source type="image/avif" srcset="/assets/feature-interaction.avif"><img src="/assets/feature-interaction.webp" width="580" height="452" loading="lazy" alt="An ossia score timeline where a trigger waits for an external event before the next part starts"/></picture>

## Finding devices

Software that speaks OSCQuery, for instance patches and applications using libossia, shows up in the device explorer with all its parameters. Drag one into the score and the address is filled in.
Plain OSC devices can be found on the local network through Bonjour/Zeroconf, and your own parameters can be published the same way.

<picture><img src="/assets/features/oscquery.webp" width="1600" height="1290" loading="lazy" alt="The OSCQuery tree of an ossia score session seen as JSON in a web browser, next to the same tree in the score device explorer"/></picture>

OSC goes over UDP, TCP (as client or server), WebSockets and serial, with SLIP and COBS framing, and host names work where an IP address would. The same project also talks MIDI, DMX (Art-Net, sACN, DMX USB), MQTT, CoAP, HTTP, LSL and CAN.

## Getting clean values

Sensors are noisy. The mapper and the value filters sit between the input and the target: calibration, deadzones, noise gate, hysteresis, debounce and easing curves ([value filter](https://ossia.io/score-docs/processes/value-filter.html), [calibrator](https://ossia.io/score-docs/processes/calibrator.html), [mapper](https://ossia.io/score-docs/devices/mapper-device.html)).
Mappings themselves can be curves, JavaScript or math expressions.
OSC address patterns send one value to a whole group of devices at once ([pattern matching](https://ossia.io/score-docs/in-depth/pattern-matching.html)).

Inputs include gamepads, Wiimotes, Leap Motion, MIDI controllers, Arduino over serial, Bluetooth LE sensors, depth cameras and tracking protocols such as PosiStageNet, TUIO, RTTrP and OpenTrackIO ([sensors to OSC](https://ossia.io/score-docs/examples/devices/sensors2osc.html)).

On the MIDI side there are virtual ports, the network MIDI ports your operating system provides, MIDI file playback, filters, Scala microtonal scales, and the computer keyboard as a MIDI input ([MIDI](https://ossia.io/score-docs/in-depth/midi.html)).
Any device can be recorded to CSV and replayed later, incoming DMX included ([recording](https://ossia.io/score-docs/in-depth/recording.html)).

## In short

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>You want</th><th>In ossia score</th></tr></thead>
<tbody>
<tr><td>To automate another program's parameters over time</td><td>Curves on any OSC, MIDI or DMX address, with OSCQuery to browse the parameters.</td></tr>
<tr><td>The same tool on Windows, macOS and Linux</td><td>The same features on all three and on Raspberry Pi, apart from those tied to an operating system or to hardware, such as Spout, Syphon or CUDA.</td></tr>
<tr><td>A timeline that waits, branches and loops</td><td>Triggers, conditions and loops are part of the timeline itself.</td></tr>
<tr><td>Sound and video next to the control data</td><td>Audio, video, 3D and shaders in the same timeline as the automation.</td></tr>
<tr><td>A control surface on a phone</td><td>The browser remote, with nothing to install.</td></tr>
</tbody>
</table>
</div>

## With your own patches

score speaks OSCQuery natively through [libossia](/site-libossia/about.html), which also exists for Max/MSP, Pure Data, Unity, Python, SuperCollider, openFrameworks and Qt.
Add a few objects to a patch or a project and its parameters appear in score, ready to automate.
