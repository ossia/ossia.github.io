---
layout: use-case
title: "Free DMX software to sync lights with sound and video"
headline: "DMX lighting and LEDs, in sync with sound and video"
subtitle: "Control fixtures over Art-Net, sACN and DMX USB, design LED pixel effects with shaders, and synchronise everything with music, video and sensors on one timeline. Free and open-source, on Windows, macOS, Linux and Raspberry Pi."
permalink: /dmx-lighting.html
translation: /fr/eclairage-dmx.html
category: site-score
description: "Free DMX software for Windows, macOS, Linux and Raspberry Pi: Art-Net, sACN, DMX USB, fixture library and LED pixel mapping, synchronised with sound and video."
image: /assets/social/ossia-score-og.jpg
---

ossia score drives DMX fixtures and LEDs directly: it can run all the lights of a show or an installation, on the same timeline as sound, video and interaction.
It is a good fit for theatre and dance, concerts, immersive rooms, installations and LED art, wherever lights must follow the media precisely.

## What you can do

- **DMX output** over Art-Net, sACN and DMX USB interfaces, with a fixture library based on the Open Fixture Library ([DMX device](https://ossia.io/score-docs/devices/artnet-device.html)).
- **Automate fixture parameters** with curves, cue complete looks, and fade between them on the timeline ([cues](https://ossia.io/score-docs/cues.html)).
- **LED pixel mapping**: generate LED patterns with shaders or arrays, and drive NeoPixel strips over SPI from a Raspberry Pi ([LED design](https://ossia.io/score-docs/common-practices/13-led-design.html)).
- **Sound-to-light**: drive lights from audio analysis, beat tracking or MIDI.
- **Interactivity**: trigger and change lighting from sensors, cameras, OSC or MIDI controllers.
- **Unattended**: run headless on a small computer or a Raspberry Pi, starting automatically ([headless mode](https://ossia.io/score-docs/faq/nogui.html)).

## Lighting needs, and how ossia score answers them

<div class="comparison-scroll">
<table class="comparison">
<tr><th>What you need</th><th>How ossia score does it</th></tr>
<tr><td>Running the lights of a show or an installation, with no other lighting software</td><td>DMX straight from ossia score over Art-Net, sACN or DMX USB, with a fixture library, cues and curves.</td></tr>
<tr><td>Lights precisely synchronised with sound and video</td><td>Lights, sound and video share one timeline and one clock.</td></tr>
<tr><td>LED strips and pixel effects</td><td>LED patterns from shaders or arrays, and NeoPixel strips over SPI from a Raspberry Pi.</td></tr>
<tr><td>Lights that react to music, sensors or performers</td><td>Audio analysis, beat tracking, sensors, cameras, OSC and MIDI can drive any fixture parameter.</td></tr>
<tr><td>A permanent installation on small hardware</td><td>Headless mode with autostart, on a mini PC or a Raspberry Pi.</td></tr>
</table>
</div>

Two programs cannot share the same Art-Net port on one computer: if you also use other DMX software, run them on different network interfaces or machines.
