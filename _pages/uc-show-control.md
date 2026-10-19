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

## Good to know

- ossia score organises cues **on a timeline** rather than in a numbered cue list: a linear show is a sequence of scenes, each waiting for a GO, and an interactive one adds conditions and branches.
- It runs **Bitfocus Companion modules** directly, so the AV equipment Companion supports can be sequenced over time.

ossia score does not try to replace every tool: it can also sit next to your existing software and drive it over OSC or MIDI —
for instance a media server, a lighting console or a DAW.

## Who uses it

Theatre and dance companies, music ensembles, museums and festivals: see the [gallery](/gallery.html) for shows and installations made with ossia score.
