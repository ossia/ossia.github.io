---
layout: use-case
title: "Free OSC, MIDI and DMX timeline software"
headline: "An OSC, MIDI and DMX timeline"
subtitle: "Draw automation curves for any OSC, MIDI or DMX parameter, add interactive triggers and conditions, and discover devices automatically with OSCQuery. Free and open-source, on Windows, macOS and Linux."
permalink: /osc-midi-dmx-timeline.html
translation: /fr/timeline-osc-midi-dmx.html
category: site-score
description: "Free OSC, MIDI and DMX timeline and sequencer for Windows, macOS and Linux: automation curves, OSCQuery, triggers and conditions."
image: /assets/social/ossia-score-og.jpg
---

ossia score started as a sequencer for OSC: every parameter of every device on the network becomes an address you can automate,
record, map and score over time. It is used to control patches, game engines, media servers, lights and robots.

## What you can do

- **Automation curves** on any address: OSC, MIDI CC, DMX channels, or the parameters of ossia score's own processes ([writing automations](https://ossia.io/score-docs/quick-start/writing-automations.html)).
- **OSCQuery**: browse the parameters of compatible software (for instance patches and applications using libossia) and drag them into the score, instead of typing addresses.
- **Interactive timelines**: triggers wait for an incoming message, conditions choose between branches, loops and scenes repeat until something happens ([breaking the timeline](https://ossia.io/score-docs/quick-start/breaking-the-timeline.html)).
- **Mapping**: scale, smooth and transform values between devices, with curves, JavaScript or math expressions ([mapper](https://ossia.io/score-docs/devices/mapper-device.html)).
- **Inputs everywhere**: gamepads, Wiimotes, Leap Motion, MIDI controllers, serial ports and Arduino, Bluetooth LE sensors, depth cameras and tracking protocols (PosiStageNet, TUIO, RTTrP, OpenTrackIO) ([sensors to OSC](https://ossia.io/score-docs/examples/devices/sensors2osc.html)).
- **Many protocols**: OSC over UDP, TCP, WebSockets and serial, OSCQuery, MIDI, DMX (Art-Net, sACN, DMX USB), MQTT, CoAP, HTTP, LSL, CAN.
- **Musical time**: tempo, time signatures and quantization when the score must follow a beat ([musical features](https://ossia.io/score-docs/in-depth/musical.html)).
- **Zero configuration**: OSC devices are found on the network with Bonjour/Zeroconf, and your own parameters can be published the same way or over OSCQuery.
- **Every OSC transport**: UDP, TCP client and server, SLIP and COBS framings, host names instead of IP addresses.
- **Clean sensor data**: calibrator, deadzones, noise gate, hysteresis, debounce and easing curves ([value filter](https://ossia.io/score-docs/processes/value-filter.html), [calibrator](https://ossia.io/score-docs/processes/calibrator.html)).
- **Address patterns**: combine, apply and sweep OSC address patterns to drive many devices at once ([pattern matching](https://ossia.io/score-docs/in-depth/pattern-matching.html)).
- **MIDI tools**: virtual MIDI ports, network MIDI ports provided by the operating system, MIDI file playback, filters, microtonal Scala scales, and the computer keyboard as a MIDI input ([MIDI](https://ossia.io/score-docs/in-depth/midi.html)).
- **Record and replay** any device to CSV, including incoming DMX ([recording](https://ossia.io/score-docs/in-depth/recording.html)).

<picture><source type="image/avif" srcset="/assets/feature-interaction.avif"><img src="/assets/feature-interaction.webp" width="580" height="452" loading="lazy" alt="An interactive timeline where a trigger waits for an external event in ossia score"/></picture>

## OSC sequencing needs, and how ossia score answers them

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>What you need</th><th>How ossia score does it</th></tr></thead>
<tbody>
<tr><td>Automating the parameters of another program over time</td><td>Curves on any OSC, MIDI or DMX address, and OSCQuery to browse parameters instead of typing them.</td></tr>
<tr><td>The same tool on Windows, macOS and Linux</td><td>The same features on all three and on Raspberry Pi, except for features tied to an operating system or to hardware, such as Spout, Syphon or CUDA.</td></tr>
<tr><td>A timeline that waits for events, branches and loops</td><td>Triggers, conditions and loops are part of the timeline, not an add-on.</td></tr>
<tr><td>Turning controllers and sensors into OSC</td><td>Gamepads, MIDI controllers, Arduino, depth cameras and tracking systems, mapped with curves, JavaScript or expressions.</td></tr>
<tr><td>Sound and video next to the control data</td><td>Audio, video, 3D and shaders in the same timeline as your OSC, MIDI and DMX automation.</td></tr>
<tr><td>A simple control surface on a phone or a tablet</td><td>The browser remote, without installing an app.</td></tr>
</tbody>
</table>
</div>

## Pairs well with

ossia score speaks OSCQuery natively through [libossia](/site-libossia/about.html), which also exists for Max/MSP, Pure Data, Unity, Python, SuperCollider, openFrameworks and Qt:
add a few objects to your patch or project and its parameters show up in score, ready to be automated.
