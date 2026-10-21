---
layout: use-case
title: "Free DMX software: lights in sync with media"
headline: "DMX lighting and LEDs"
subtitle: "Fixtures over Art-Net, sACN and DMX USB, LED strips fed by shaders, and every light on the same clock as the sound and the video."
permalink: /dmx-lighting.html
translation: /fr/eclairage-dmx.html
category: site-score
description: "Free DMX software for Windows, macOS, Linux and Raspberry Pi: Art-Net, sACN, DMX USB, fixture library and LED pixel mapping, synchronised with sound and video."
image: /assets/social/ossia-score-og.jpg
---

ossia score talks to DMX fixtures and LEDs directly, so it can run all the lights of a show or an installation from the timeline that also plays the sound and the video.
That makes it handy wherever lights have to land exactly with the media: theatre and dance, concerts, immersive rooms, installations, LED art.

## Fixtures

Output goes over Art-Net, sACN or a DMX USB interface such as the Enttec DMX USB Pro and Pro Mk2. Fixtures come from a library based on the Open Fixture Library ([DMX device](https://ossia.io/score-docs/devices/artnet-device.html)).
16-bit channels, named colour and gobo wheels and fixtures with LED matrices are supported, and plain dimmers or RGB pars can be added in a couple of clicks.

Each fixture parameter takes an automation curve. Full looks are stored as cues, and the timeline fades from one to the next ([cues](https://ossia.io/score-docs/cues.html)).
DMX also comes in: score receives and records Art-Net and sACN, which you can replay or transform later.

## LEDs and pixels

LED patterns can be generated with shaders or arrays. The Lightness Computer turns any shader into RGB or RGBW values in the channel order of your strip, the LED view previews it, and the colours go out to Art-Net universes of any size ([LED design](https://ossia.io/score-docs/common-practices/13-led-design.html), [LED view](https://ossia.io/score-docs/processes/led-view.html)).
From a Raspberry Pi, NeoPixel strips can be driven directly over SPI ([LED device](https://ossia.io/score-docs/devices/led-device.html)).

<picture><img src="/assets/use-cases/led-shaders.webp" width="1200" height="581" loading="lazy" alt="An ossia score patch where a noise shader goes through the Lightness computer to a 10 by 10 LED preview and out to Art-Net"/></picture>

## Lights that listen

Lights can follow audio analysis, beat tracking or MIDI, and change with sensors, cameras, OSC or MIDI controllers.
For a permanent piece, score runs headless on a small computer or a Raspberry Pi and starts on its own ([headless mode](https://ossia.io/score-docs/faq/nogui.html)).

## In short

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>You want</th><th>In ossia score</th></tr></thead>
<tbody>
<tr><td>To run the lights of a show with no other lighting software</td><td>DMX straight from score over Art-Net, sACN or DMX USB, with a fixture library, cues and curves.</td></tr>
<tr><td>Lights locked to sound and video</td><td>One timeline and one clock for all three.</td></tr>
<tr><td>LED strips and pixel effects</td><td>Patterns from shaders or arrays, and NeoPixel strips over SPI from a Raspberry Pi.</td></tr>
<tr><td>Lights that react to music or performers</td><td>Audio analysis, beat tracking, sensors, cameras, OSC and MIDI on any fixture parameter.</td></tr>
<tr><td>A permanent installation on small hardware</td><td>Headless mode with autostart, on a mini PC or a Raspberry Pi.</td></tr>
</tbody>
</table>
</div>

One thing to know when another program also receives Art-Net on the same computer: only one program can listen on the Art-Net port, so give each its own network interface or machine. Sending is not affected.
