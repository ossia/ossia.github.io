---
layout: use-case
title: "Free show control software for any OS"
headline: "Show control"
subtitle: "Sound, video, lights and any OSC or MIDI device, cued from one timeline. The show can run straight through, wait for a GO, or listen to the stage."
permalink: /show-control.html
translation: /fr/regie-spectacle.html
category: site-score
description: "Free, open-source show control software for Windows, macOS and Linux: cue sound, video, DMX lights, OSC and MIDI on an interactive timeline."
image: /assets/social/ossia-score-og.jpg
---

In ossia score a show is a timeline cut into scenes. Each scene can start on its own, wait for a GO from the operator, or wait for something on stage: a sensor, a MIDI note, an OSC message from another computer.
Theatre and dance companies, music ensembles, museums and festivals use it this way, often with the sound, the video and the lights of the show in a single file.

<picture><img src="/assets/blog/v3-9/scriptable-processes.webp" width="1077" height="650" loading="lazy" alt="An ossia score timeline where the parameters of an effect are cued and automated like those of an external device"/></picture>

## Cues and scenes

A cue stores the state of your OSC, MIDI and DMX devices, and you recall it from the timeline, by hand, or from a MIDI controller ([cues](https://ossia.io/score-docs/cues.html)).
Since 3.9 this also works for the parameters of every process inside score, so the wet level of a reverb or the speed of a shader can be cued like a fader on a desk.

Scenes split the show into parts that each wait for their GO, and *Play from here* restarts rehearsal from any point ([scenes](https://ossia.io/score-docs/common-practices/6-scenes.html)).
In exclusive mode only one interval plays at a time, which is what you want for sounds or videos that replace each other.

## What a show file can hold

- Multichannel sound files with time-stretching, video in HAP and H.264, effects and VST, VST3, CLAP or LV2 plug-ins ([sound files](https://ossia.io/score-docs/processes/soundfile.html), [video](https://ossia.io/score-docs/processes/video.html)).
- DMX over Art-Net, sACN and DMX USB, with a fixture library ([DMX](https://ossia.io/score-docs/devices/artnet-device.html)).
- OSC, OSCQuery, MIDI, HTTP, WebSockets, MQTT and serial ports, plus Bitfocus Companion modules from the package manager to drive projectors, video switchers and cameras ([Companion](https://ossia.io/score-docs/devices/companion-device.html)).
- Shell commands and other programs, launched from the timeline ([process launcher](https://ossia.io/score-docs/processes/process-launcher.html)).

Before touring, collect all media into the project folder, check for missing files and archive the show as a zip.

## Timecode and control

score reads and writes LTC, MIDI clock and MIDI timecode ([LTC](https://ossia.io/score-docs/processes/ltc-input.html)).
The timecode synchroniser follows an incoming timecode smoothly instead of jumping, and a scenario can be scrubbed or played backwards ([timecode synchroniser](https://ossia.io/score-docs/processes/timecode-synchronizer.html)).

The operator does not have to sit at the computer. The show starts and stops from a browser on a phone, or from any OSC controller ([remote control](https://ossia.io/score-docs/in-depth/remote.html)).
MCU-compatible fader banks follow the process you select, and a MIDI controller can be described once so its knobs show up with their names ([MIDI controllers](https://ossia.io/score-docs/devices/midi-controller-device.html)).

## In short

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>You want</th><th>In ossia score</th></tr></thead>
<tbody>
<tr><td>A list of cues, each started with GO</td><td>Scenes that wait for a GO from the keyboard, a MIDI controller, OSC or a browser, and <i>Play from here</i> to restart anywhere.</td></tr>
<tr><td>Windows, Linux or a Raspberry Pi, with no licence to buy</td><td>The same free software everywhere, apart from features tied to an operating system or to hardware, such as Spout, Syphon or CUDA.</td></tr>
<tr><td>A show that reacts to performers</td><td>Triggers, conditions and branching scenes fed by sensors, cameras, tracking or any OSC or MIDI message.</td></tr>
<tr><td>Projectors and switchers on the same cue</td><td>Bitfocus Companion modules, installed from the package manager, running inside score.</td></tr>
<tr><td>Locking to timecode</td><td>LTC in and out, MIDI clock and MIDI timecode.</td></tr>
</tbody>
</table>
</div>

score can run the whole show by itself. It can also sit next to what you already have, a media server, a lighting desk or a DAW, and drive it over OSC, MIDI or DMX.
The [gallery](/gallery.html) has shows and installations made this way.
