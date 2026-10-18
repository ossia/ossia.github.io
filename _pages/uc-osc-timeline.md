---
layout: use-case
title: "Free OSC, MIDI and DMX timeline software"
headline: "An OSC, MIDI and DMX timeline"
subtitle: "Draw automation curves for any OSC, MIDI or DMX parameter, add interactive triggers and conditions, and discover devices automatically with OSCQuery. Free and open-source, an alternative to Vezér and a timeline companion to Chataigne."
permalink: /osc-midi-dmx-timeline.html
translation: /fr/timeline-osc-midi-dmx.html
category: site-score
description: "Free OSC, MIDI and DMX timeline and sequencer for Windows, macOS and Linux: automation curves, OSCQuery, triggers and conditions. An alternative to Vezér."
image: /assets/social/ossia-score-og.jpg
---

ossia score started as a sequencer for OSC: every parameter of every device on the network becomes an address you can automate,
record, map and score over time. It is used to control Max/MSP and Pure Data patches, TouchDesigner, Unity, Unreal Engine, Millumin, lights and robots.

## What you can do

- **Automation curves** on any address: OSC, MIDI CC, DMX channels, or the parameters of ossia score's own processes ([writing automations](https://ossia.io/score-docs/quick-start/writing-automations.html)).
- **OSCQuery**: browse the parameters of compatible software (Max and Pure Data with ossia, TouchDesigner, VDMX…) and drag them into the score, instead of typing addresses.
- **Interactive timelines**: triggers wait for an incoming message, conditions choose between branches, loops and scenes repeat until something happens ([breaking the timeline](https://ossia.io/score-docs/quick-start/breaking-the-timeline.html)).
- **Mapping**: scale, smooth and transform values between devices, with curves, JavaScript or math expressions ([mapper](https://ossia.io/score-docs/devices/mapper-device.html)).
- **Inputs everywhere**: gamepads, Wiimotes, Leap Motion, MIDI controllers, serial ports and Arduino, Bluetooth LE sensors, depth cameras and tracking protocols (PosiStageNet, TUIO, RTTrP, OpenXR) ([sensors to OSC](https://ossia.io/score-docs/examples/devices/sensors2osc.html)).
- **Many protocols**: OSC over UDP, TCP, WebSockets and serial, OSCQuery, MIDI, DMX (Art-Net, sACN, DMX USB), MQTT, CoAP, HTTP, LSL, CAN.
- **Musical time**: tempo, time signatures and quantization when the score must follow a beat ([musical features](https://ossia.io/score-docs/in-depth/musical.html)).

<picture><source type="image/avif" srcset="/assets/feature-interaction.avif"><img src="/assets/feature-interaction.webp" width="580" height="452" loading="lazy" alt="An interactive timeline where a trigger waits for an external event in ossia score"/></picture>

## ossia score compared to other OSC timelines

<div class="comparison-scroll">
<table class="comparison">
<tr><th>Tool</th><th>Choose ossia score when…</th><th>Keep the other tool when…</th></tr>
<tr><td><b>Vezér</b> (macOS)</td><td>you need Windows or Linux, interactivity (triggers, conditions, branching), or sound and video in the same timeline.</td><td>you are used to its layer-based workflow on macOS and only need linear automation.</td></tr>
<tr><td><b>Chataigne</b></td><td>you want a full timeline with audio, video, 3D, shaders and plug-in hosting next to your OSC and MIDI routing.</td><td>you mostly build state machines and module-based routing; both are free and can talk to each other over OSC.</td></tr>
<tr><td><b>OSCulator, Open Stage Control, TouchOSC</b></td><td>you want to map controllers to OSC and also sequence the result over time.</td><td>you need a mobile control surface app; ossia score's browser remote covers simpler cases.</td></tr>
<tr><td><b>IanniX</b></td><td>you want a maintained, cross-platform sequencer with a large protocol library.</td><td>you specifically need IanniX's graphical score paradigm.</td></tr>
</table>
</div>

## Pairs well with

ossia score speaks OSCQuery natively through [libossia](/site-libossia/about.html), which also exists for Max/MSP, Pure Data, Unity, Python, SuperCollider, openFrameworks and Qt:
add a few objects to your patch or project and its parameters show up in score, ready to be automated.
