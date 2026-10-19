---
layout: use-case
title: "Free show control software for Windows, macOS and Linux"
headline: "Show control software, free and open-source"
subtitle: "Cue sound, video, lights and any OSC or MIDI device from one interactive timeline. ossia score runs on Windows, macOS, Linux and Raspberry Pi."
permalink: /show-control.html
translation: /fr/regie-spectacle.html
category: site-score
description: "Free, open-source show control software for Windows, macOS and Linux: cue sound, video, DMX lights, OSC and MIDI on an interactive timeline."
image: /assets/social/ossia-score-og.jpg
---

ossia score is used to run theatre and dance shows, concerts, museum installations and events.
It combines a timeline with **cues, triggers and conditions**, so a show can follow a fixed sequence, wait for the stage manager,
or react to sensors and performers — all in the same score.

## What you can do

- **Cues for everything**: store and recall the state of your OSC, MIDI and DMX devices as cues, play them from the timeline, by hand, or from an external trigger such as a MIDI controller ([cues](https://ossia.io/score-docs/cues.html)).
- **Scenes and jumps**: split a show into scenes, wait for a GO from a trigger, and restart from any point with *Play from here* ([scenes](https://ossia.io/score-docs/common-practices/6-scenes.html)).
- **Sound and video playback**: multichannel sound files with time-stretching, video with HAP and H.264, effects and plug-ins (VST, VST3, CLAP, LV2) ([sound files](https://ossia.io/score-docs/processes/soundfile.html), [video](https://ossia.io/score-docs/processes/video.html)).
- **Lights**: DMX over Art-Net, sACN and DMX USB, with a fixture library ([DMX](https://ossia.io/score-docs/devices/artnet-device.html)).
- **Timecode**: LTC input and output, MIDI clock and MIDI timecode ([LTC](https://ossia.io/score-docs/processes/ltc-input.html)).
- **Control anything**: OSC, OSCQuery, MIDI, HTTP, WebSockets, MQTT, serial ports, and Bitfocus Companion modules to drive AV equipment ([Companion](https://ossia.io/score-docs/devices/companion-device.html)).
- **Cue any parameter**: since version 3.9, the parameters of every process (an effect, a shader, a synthesizer…) can be cued and automated like those of an external device.
- **Remote control**: start and stop the show from a browser, a phone or any OSC controller ([remote control](https://ossia.io/score-docs/in-depth/remote.html)).

<img src="/assets/blog/v3-9/scriptable-processes.webp" width="1077" height="650" loading="lazy" alt="Cues and automations of process parameters in an ossia score timeline"/>

## Show control needs, and how ossia score answers them

<div class="comparison-scroll">
<table class="comparison">
<tr><th>What you need</th><th>How ossia score does it</th></tr>
<tr><td>A sequence of cues, each started with GO</td><td>Scenes that each wait for a GO from the keyboard, a MIDI controller, OSC or a browser, and <i>Play from here</i> to restart anywhere.</td></tr>
<tr><td>Running on Windows, Linux or a Raspberry Pi, with no licence to buy</td><td>Free and open-source on every operating system, with the same features everywhere.</td></tr>
<tr><td>Shows that react to performers or the audience</td><td>Triggers, conditions and branching scenes, fed by sensors, cameras, tracking systems or any OSC or MIDI message.</td></tr>
<tr><td>Sound, video and lights in one show file</td><td>Multichannel sound, video, 3D, DMX lights and OSC/MIDI devices on the same timeline.</td></tr>
<tr><td>Controlling AV equipment: projectors, video switchers, cameras</td><td>Bitfocus Companion modules run directly inside ossia score.</td></tr>
<tr><td>Following timecode</td><td>LTC in and out, MIDI clock and MIDI timecode.</td></tr>
</table>
</div>

ossia score can run a whole show on its own, and it can also drive the software and hardware you already have over OSC, MIDI or DMX —
for instance a media server, a lighting desk or a DAW.

## Who uses it

Theatre and dance companies, music ensembles, museums and festivals: see the [gallery](/gallery.html) for shows and installations made with ossia score.
