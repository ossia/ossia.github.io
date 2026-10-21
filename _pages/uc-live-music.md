---
layout: use-case
title: "Live electronic music software"
headline: "Live electronic music"
subtitle: "ossia score can be used to play electronic music live, with instruments, step sequencers and plug-ins on a timeline that follows a tempo, MIDI clock or a timecode vinyl."
permalink: /live-music.html
translation: /fr/musique-live.html
category: site-score
description: "Free, open-source software for live electronic music: synths, drum machines, sampler, step sequencer, looper, plug-ins, MIDI clock and timecode vinyl."
image: /assets/social/ossia-score-og.jpg
---

ossia score can be used to play electronic music live: a piece can be written to the bar on the timeline, improvised over loops and patterns, or mix both, for instance a written section followed by a loop which repeats until a pad is hit, with the visuals and the lights following the same clock.
Jean-Marie Colin's *Solo.K* (Festival Haizebegi, Bayonne, 2019) is an example of this: a Karlax solo where score drives both the music and the images.

<picture><img src="/assets/blog/v3-9/skins.webp" width="1502" height="720" loading="lazy" alt="An ossia score patch with the Synthimi synthesizer, a MIDI display, a Lissajous figure and a color automation, in one of the 3.9 skins"/></picture>

## Instruments and effects

score comes with a multi-format sampler (SF2, GIG, DLS and Hydrogen drum kits), drum machines, an FM synthesizer, a polyphonic granulator, Synthimi, Bytebeat and the Faust physical models ([synths](https://ossia.io/score-docs/examples/audio/synths.html), [granular](https://ossia.io/score-docs/examples/audio/granular.html)).
The effects include the Airwindows collection, Faust, and built-in compressors, limiters, reverbs, filters and delays; VST, VST3, CLAP, LV2 and JSFX plug-ins can also be loaded, and CLAP parameters are automated with sample accuracy ([audio plug-ins](https://ossia.io/score-docs/processes/audio-plugins.html), [audio effects](https://ossia.io/score-docs/processes/audio-effects.html)).
Microtonal tunings are handled through Scala scales and keyboard mappings ([scales](https://ossia.io/score-docs/examples/audio/scales.html)).

## Patterns and tempo

The step sequencers support accents and slides, with libraries of 303 and drum patterns; there is also a piano roll, an arpeggiator, MIDI humanize and quantize objects, and Euclidean rhythms can be generated in JavaScript ([patternist](https://ossia.io/score-docs/processes/patternist.html), [arpeggiator](https://ossia.io/score-docs/processes/arpeggiator.html)).

Tempo and time signatures apply to the whole score: automations snap to the musical grid, LFOs are locked to the bar, the looper quantizes to bars, and a beat tracker follows the incoming audio ([musical features](https://ossia.io/score-docs/in-depth/musical.html), [looper](https://ossia.io/score-docs/processes/audio-looper.html)).

<picture><img src="/assets/features/audio.webp" width="1600" height="1122" loading="lazy" alt="Sound files and a reverb plug-in arranged in scenes on an ossia score timeline, with an automation of the reverb's wet level"/></picture>

## Synchronization and controllers

score generates and follows MIDI clock and MIDI timecode, follows LTC, and the timeline can be controlled with a timecode vinyl on a turntable ([MIDI sync](https://ossia.io/score-docs/processes/midi-sync.html), [timecode vinyl](https://ossia.io/score-docs/processes/xwax-dvs.html)).
On stage, it supports MIDI controllers with named knobs and faders, MCU-compatible control surfaces, the network MIDI ports provided by the operating system, wind controllers, tablets and gamepads.

The same project can also contain audio-reactive shaders, 3D and video, and DMX lights driven by the music (see [video](/projection-mapping.html) and [lighting](/dmx-lighting.html)); a set can be played from a laptop, or headless from a Raspberry Pi.

Other concerts and performances made with score are presented in the [gallery](/gallery.html).
