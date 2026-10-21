---
layout: use-case
title: "Free show control software for any OS"
headline: "Show control"
subtitle: "ossia score can be used to write the cue sheet of a show on a timeline, where some parts wait for the stage manager or for something happening on stage."
permalink: /show-control.html
translation: /fr/regie-spectacle.html
category: site-score
description: "Free, open-source show control software for Windows, macOS and Linux: cue sound, video, DMX lights, OSC and MIDI on an interactive timeline."
image: /assets/social/ossia-score-og.jpg
---

ossia score can be used to run a show: sound, video, lights and OSC or MIDI devices are placed on a timeline, and some parts of this timeline wait for an external event, for instance a GO from the stage manager, a key on the keyboard, a MIDI note, an OSC message sent by another computer or a sensor on stage.
The software comes from the research on interactive scores done at LaBRI and SCRIME in Bordeaux; a show in score is thus a score where some parts are fixed in time and others are triggered during the performance.
For instance, the hip-hop dance show *Walking Down The Street* (Lina Rahal and Jean-Marie Colin, 2021) is entirely driven by score and controlled live with a Karlax.

<picture><img src="/assets/blog/v3-9/scriptable-processes.webp" width="1077" height="650" loading="lazy" alt="An ossia score timeline where the parameters of an effect are cued and automated like those of an external device"/></picture>

## Cues and scenes

A cue stores the state of the OSC, MIDI and DMX devices; it is recalled from the timeline, by hand, or from a MIDI controller ([cues](https://ossia.io/score-docs/cues.html)).
Since version 3.9, the parameters of the processes inside score (the dry/wet of a reverb, the speed of a shader, etc.) can be cued and automated the same way as those of an external device.

The show is split into scenes which each wait for their GO; during rehearsals, *Play from here* restarts from any point ([scenes](https://ossia.io/score-docs/common-practices/6-scenes.html)).
The exclusive mode of a scenario only lets one interval play at a time, which is useful in particular for sounds or videos that replace each other.

## Media and devices

A show can contain:

- multichannel sound files with time-stretching, HAP and H.264 video, VST, VST3, CLAP and LV2 plug-ins ([sound files](https://ossia.io/score-docs/processes/soundfile.html), [video](https://ossia.io/score-docs/processes/video.html));
- DMX lights over Art-Net, sACN or a DMX USB interface, with a fixture library ([DMX](https://ossia.io/score-docs/devices/artnet-device.html));
- any device that speaks OSC, OSCQuery, MIDI, HTTP, WebSockets, MQTT or goes through a serial port;
- the projectors, video switchers and cameras supported by the Bitfocus Companion modules, installed from the package manager ([Companion](https://ossia.io/score-docs/devices/companion-device.html));
- the launch of other programs or scripts ([process launcher](https://ossia.io/score-docs/processes/process-launcher.html)).

The project tools gather the media in the project folder, report missing files and make a zip archive of the show, which is handy when touring.

## Timecode

score reads and writes LTC, MIDI clock and MIDI timecode ([LTC](https://ossia.io/score-docs/processes/ltc-input.html)).
When following an incoming timecode, the synchronizer changes the playback speed progressively instead of jumping from one position to another ([timecode synchronizer](https://ossia.io/score-docs/processes/timecode-synchronizer.html)); a scenario can also be scrubbed with the mouse, or played backwards.

## During the show

The show can be started and stopped from a web browser, for instance on a phone, or from any OSC controller ([remote control](https://ossia.io/score-docs/in-depth/remote.html)).
MCU-compatible control surfaces follow the selected process, and a MIDI controller described once shows up with the name of each of its knobs and faders ([MIDI controllers](https://ossia.io/score-docs/devices/midi-controller-device.html)).

score runs on Windows, macOS, Linux and the Raspberry Pi with the same features, except those which depend on a given system or piece of hardware (Spout, Syphon, CUDA, etc.).
It can run a show on its own, or drive over OSC, MIDI or DMX what is already in place: media server, lighting desk, DAW.

More shows are presented in the [gallery](/gallery.html); the [documentation](https://ossia.io/score-docs/) details each of these features.
