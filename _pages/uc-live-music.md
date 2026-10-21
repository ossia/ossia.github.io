---
layout: use-case
title: "Live electronic music software"
headline: "Live electronic music"
subtitle: "Synthesizers, drum machines, samplers and step sequencers on a timeline that follows tempo, MIDI clock or a timecode vinyl, with the visuals and the lights in the same set."
permalink: /live-music.html
translation: /fr/musique-live.html
category: site-score
description: "Free, open-source software for live electronic music: synths, drum machines, sampler, step sequencer, looper, plug-ins, MIDI clock and timecode vinyl."
image: /assets/social/ossia-score-og.jpg
---

ossia score is used for concerts, live electronics and audiovisual sets. A piece can be written to the bar, improvised over loops and patterns, or a bit of both, and the visuals and lights run on the same clock.

<picture><img src="/assets/blog/v3-9/skins.webp" width="1502" height="720" loading="lazy" alt="An ossia score patch with the Synthimi synthesizer, a MIDI display, a Lissajous figure and a colour automation, in one of the 3.9 skins"/></picture>

## Instruments

score comes with a multi-format sampler (SF2, GIG, DLS and Hydrogen drum kits), drum machines, an FM synthesizer, a polyphonic granulator, Synthimi, Bytebeat and Faust physical models ([synths](https://ossia.io/score-docs/examples/audio/synths.html), [granular](https://ossia.io/score-docs/examples/audio/granular.html)).
For effects there are the Airwindows collection, Faust, and built-in compressors, limiters, reverbs, filters and delays. VST, VST3, CLAP, LV2 and JSFX plug-ins load too, and CLAP parameters are automated sample-accurately ([audio plug-ins](https://ossia.io/score-docs/processes/audio-plugins.html), [audio effects](https://ossia.io/score-docs/processes/audio-effects.html)).
Scala scales and keyboard mappings handle microtonal tunings ([scales](https://ossia.io/score-docs/examples/audio/scales.html)).

## Patterns and tempo

Step sequencers have accents and slides, with libraries of 303 and drum patterns. There is also a piano roll, an arpeggiator, MIDI humanize and quantize, and Euclidean rhythms written in JavaScript ([patternist](https://ossia.io/score-docs/processes/patternist.html), [arpeggiator](https://ossia.io/score-docs/processes/arpeggiator.html)).

Tempo and time signatures apply to the whole score. Automation snaps to the musical grid, LFOs lock to the bar, the looper quantizes to bars, and a beat tracker listens to incoming audio ([musical features](https://ossia.io/score-docs/in-depth/musical.html), [looper](https://ossia.io/score-docs/processes/audio-looper.html)).

<picture><img src="/assets/features/audio.webp" width="1600" height="1122" loading="lazy" alt="Sound files and a reverb plug-in arranged in scenes on an ossia score timeline, with an automation of the reverb's wet level"/></picture>

## Playing with others

score can send or follow MIDI clock and MIDI timecode, follow LTC, and be scratched with a timecode vinyl on a turntable ([MIDI sync](https://ossia.io/score-docs/processes/midi-sync.html), [timecode vinyl](https://ossia.io/score-docs/processes/xwax-dvs.html)).
On stage it takes MIDI controllers with named knobs and faders, MCU-compatible control surfaces, the network MIDI ports your operating system provides, wind controllers, tablets and gamepads.

The same project can play audio-reactive shaders, 3D and video, and make the DMX lights follow the music (see [video](/projection-mapping.html) and [lighting](/dmx-lighting.html)).

## In short

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>You want</th><th>In ossia score</th></tr></thead>
<tbody>
<tr><td>A piece that is partly written, partly improvised</td><td>Fixed sections on the timeline, with loops, scenes and conditions that wait for you.</td></tr>
<tr><td>Instruments and effects without buying plug-ins</td><td>Synths, drum machines, a sampler, a granulator and hundreds of effects, plus your own plug-ins.</td></tr>
<tr><td>To stay in sync with other players</td><td>MIDI clock, MIDI timecode and LTC in and out, and a tempo follower.</td></tr>
<tr><td>Visuals and lights that follow the music</td><td>Audio analysis and beat tracking on the same timeline as video and DMX.</td></tr>
<tr><td>A light setup</td><td>A laptop, or a Raspberry Pi playing the set headless.</td></tr>
</tbody>
</table>
</div>

Concerts and performances made with score are in the [gallery](/gallery.html).
