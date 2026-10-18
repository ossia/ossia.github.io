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

ossia score is not a lighting console: it is a timeline where lights live next to sound, video and interaction.
It is a good fit for installations, concerts with backing tracks, immersive rooms and LED art, where lights must follow the media precisely.

## What you can do

- **DMX output** over Art-Net, sACN and DMX USB interfaces, with a fixture library based on the Open Fixture Library ([DMX device](https://ossia.io/score-docs/devices/artnet-device.html)).
- **Automate fixture parameters** with curves, cue complete looks, and fade between them on the timeline ([cues](https://ossia.io/score-docs/cues.html)).
- **LED pixel mapping**: generate LED patterns with shaders or arrays, and drive NeoPixel strips over SPI from a Raspberry Pi ([LED design](https://ossia.io/score-docs/common-practices/13-led-design.html)).
- **Sound-to-light**: drive lights from audio analysis, beat tracking or MIDI.
- **Interactivity**: trigger and change lighting from sensors, cameras, OSC or MIDI controllers.
- **Unattended**: run headless on a small computer or a Raspberry Pi, starting automatically ([headless mode](https://ossia.io/score-docs/faq/nogui.html)).

## ossia score compared to DMX software

<div class="comparison-scroll">
<table class="comparison">
<tr><th>Tool</th><th>Choose ossia score when…</th><th>Keep the other tool when…</th></tr>
<tr><td><b>QLC+, Freestyler, Lightkey</b></td><td>lights must be precisely synchronised with sound, video or interaction, in one timeline.</td><td>you operate lights live with a console-style workflow, palettes, an effects engine or a 3D visualiser.</td></tr>
<tr><td><b>Lighting consoles</b> (grandMA, ETC Eos…)</td><td>you want to send media-driven or sensor-driven changes to the console over OSC, MIDI or timecode.</td><td>you run a full lighting rig with an operator: ossia score complements a console, it does not replace one.</td></tr>
</table>
</div>

Note that two programs cannot share the same Art-Net port on one computer: if you also use QLC+, run them on different interfaces or machines.
