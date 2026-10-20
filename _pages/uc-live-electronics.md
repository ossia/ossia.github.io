---
layout: use-case
title: "Software for contemporary music and live electronics"
headline: "Contemporary music and live electronics"
subtitle: "Write the electronic part of a piece for instruments: cues triggered from a pedal or a MIDI controller, live processing of the instruments, spatialisation, and a score that waits for the performers. Free and open-source, on Windows, macOS and Linux."
permalink: /live-electronics.html
translation: /fr/musique-mixte.html
category: site-score
description: "Free, open-source software for mixed music and live electronics: interactive scores, cues from pedals or MIDI, live processing, Pure Data and spatial sound."
image: /assets/social/ossia-score-og.jpg
---

ossia score comes from research on **interactive scores** for music, started at LaBRI and SCRIME in Bordeaux with the *i-score* project ([project history](/project.html)).
It is made for pieces where musicians and electronics play together: the timing is written, but the performers decide when things happen.

## What you can do

- **A score that waits for the performers**: triggers wait for a pedal, a MIDI note, an OSC message or a threshold on the audio input, and conditions choose between branches ([breaking the timeline](https://ossia.io/score-docs/quick-start/breaking-the-timeline.html)).
- **Cues from the stage**: MIDI pedals, keyboards and controllers, or a keyboard key, start each section ([MIDI input](https://ossia.io/score-docs/devices/midiin-device.html), [cues](https://ossia.io/score-docs/cues.html)).
- **Live processing of the instruments**: Faust, VST, VST3, CLAP, LV2 and JSFX effects, built-in effects, and recording of the instruments into the score ([Faust](https://ossia.io/score-docs/processes/faust.html), [audio plug-ins](https://ossia.io/score-docs/processes/audio-plugins.html), [audio recorder](https://ossia.io/score-docs/processes/audio-recorder.html)).
- **Listen to the instruments**: envelope following, beat tracking and audio descriptors drive processing, sound files, video and light ([envelope follower](https://ossia.io/score-docs/processes/envelope-follower.html), [analysis](https://ossia.io/score-docs/processes/analysis.html)).
- **Keep your Pure Data patches**: run them inside the score, or control them over OSC with libossia ([Pure Data](https://ossia.io/score-docs/processes/puredata.html)).
- **Spatialise**: DBAP, GBAP, trajectories and control of spatialisation renderers, for concert halls and multichannel systems (see [spatial audio](/spatial-audio.html)).
- **Musical time when needed**: tempo, time signatures and quantization next to free, performer-driven time ([musical features](https://ossia.io/score-docs/in-depth/musical.html)).

<picture><img src="/assets/gallery/pocius-on-the-edge.webp" width="540" height="304" loading="lazy" alt="A performer seated at a table on a dark stage, under a large projected image"/></picture>
<p class="figure-caption"><i>On the Edge</i>, Kasey Pocius, Sound Symposium XXI, St. John's: an audiovisual work for video, T-Stick and surround sound.</p>

## Live electronics needs, and how ossia score answers them

<div class="comparison-scroll">
<table class="comparison">
<tr><th>What you need</th><th>How ossia score does it</th></tr>
<tr><td>Electronics that follow the musicians, not a click track</td><td>Triggers and conditions on the timeline wait for pedals, MIDI, OSC or audio thresholds.</td></tr>
<tr><td>A part that the next performers can play again</td><td>The whole electronic part, with its cues, processing and sound files, is one project file, on every operating system.</td></tr>
<tr><td>Rehearsing a passage</td><td>Start from any point with <i>Play from here</i>.</td></tr>
<tr><td>Processing and spatialising the instruments</td><td>Plug-ins, Faust, Pure Data patches and spatialisation in the same score.</td></tr>
<tr><td>Video or light in the piece</td><td>Video, shaders and DMX lights follow the same cues.</td></tr>
</table>
</div>

For electronic music played from synthesizers, sequencers and loops, see [live electronic music](/live-music.html).
See the [gallery](/gallery.html) for concerts made with ossia score, such as Pía Baltazar's *The Ripples of Consequence* or Alain Bonardi's *pianotronics #3*.
