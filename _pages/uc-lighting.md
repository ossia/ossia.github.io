---
layout: use-case
title: "Free DMX software: lights in sync with media"
headline: "DMX lighting and LEDs"
subtitle: "ossia score can be used to control DMX fixtures and LED strips from the same timeline as the sound and the video of a show or an installation."
permalink: /dmx-lighting.html
ref: lighting
nav_title: "DMX lighting and LEDs"
blurb: "Art-Net, sACN and DMX USB with a fixture library, LED pixel mapping, all in sync with sound and video."
category: site-score
description: "Free DMX software for Windows, macOS, Linux and Raspberry Pi: Art-Net, sACN, DMX USB, fixture library and LED pixel mapping, synchronized with sound and video."
image: /assets/social/ossia-score-og.jpg
---

ossia score controls DMX fixtures and LEDs directly, which makes it possible to run all the lights of a show or an installation from the timeline that also plays the sound and the video, in particular when the lights have to follow the media precisely.
For instance, Erin Gee's BioSynth light show (2025) uses score as an LED and DMX lighting console running headless on a Raspberry Pi and driven by biosignals, and the sound and lighting students of ENSATT in Lyon used it for the spatialized sound, video and DMX lighting of *Dô d'eau* (2023).

## Fixtures

The output goes over Art-Net, sACN or a DMX USB interface such as the Enttec DMX USB Pro and Pro Mk2, and fixtures come from a library based on the Open Fixture Library ([DMX device](https://ossia.io/score-docs/devices/artnet-device.html)).
16-bit channels, named color and gobo wheels and fixtures with LED matrices are supported, and simple dimmers or RGB pars can be created directly.

Each fixture parameter can be automated with a curve; complete looks are stored as cues, and the timeline fades from one to the next ([cues](https://ossia.io/score-docs/cues.html)).
DMX can also be received: score records incoming Art-Net and sACN, which can then be replayed or transformed.

## LEDs and pixels

LED patterns can be generated with shaders or arrays: the Lightness Computer converts any shader into RGB or RGBW values in the channel order of a given strip, the LED view gives a preview, and the colors are sent to Art-Net universes of any size ([LED design](https://ossia.io/score-docs/common-practices/13-led-design.html), [LED view](https://ossia.io/score-docs/processes/led-view.html)).
From a Raspberry Pi, NeoPixel strips can be driven directly over SPI ([LED device](https://ossia.io/score-docs/devices/led-device.html)).

<picture><img src="/assets/use-cases/led-shaders.webp" width="1200" height="581" loading="lazy" alt="An ossia score patch where a noise shader goes through the Lightness computer to a 10 by 10 LED preview and out to Art-Net"/></picture>

## Interaction and permanent installations

The lights can follow audio analysis, beat tracking or MIDI, and react to sensors, cameras, OSC or MIDI controllers.
For permanent pieces, score runs headless on a small computer or a Raspberry Pi and starts automatically ([headless mode](https://ossia.io/score-docs/faq/nogui.html)).

Note that when another program on the same computer also receives Art-Net, only one of them can listen on the Art-Net port, so each needs its own network interface or machine; sending is not affected.
