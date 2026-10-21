---
layout: use-case
title: "Live electronics for contemporary music"
headline: "Contemporary music and live electronics"
subtitle: "Write the electronic part of a piece for instruments: cues from a pedal, live processing, spatialisation, and a score that waits for the musicians."
permalink: /live-electronics.html
translation: /fr/musique-mixte.html
category: site-score
description: "Free, open-source software for mixed music and live electronics: interactive scores, cues from pedals or MIDI, live processing and spatial sound."
image: /assets/social/ossia-score-og.jpg
---

ossia score comes out of research on interactive scores for music, begun at LaBRI and SCRIME in Bordeaux with the *i-score* project ([project history](/project.html)).
It was built for pieces where musicians and electronics play together: the timing is written down, and the performers decide when each moment arrives.

## A score that waits

A trigger holds the electronics until something happens on stage: a pedal, a MIDI note, an OSC message, or the audio input crossing a threshold. Conditions choose between branches ([breaking the timeline](https://ossia.io/score-docs/quick-start/breaking-the-timeline.html)).
The cues themselves come from MIDI pedals, keyboards and controllers, or a key on the computer keyboard ([MIDI input](https://ossia.io/score-docs/devices/midiin-device.html), [cues](https://ossia.io/score-docs/cues.html)).
Where the piece does have a pulse, tempo, time signatures and quantization can sit next to the free, performer-driven sections ([musical features](https://ossia.io/score-docs/in-depth/musical.html)).

<picture><source type="image/avif" srcset="/assets/use-cases/interactive-trigger.avif"><img src="/assets/use-cases/interactive-trigger.webp" width="1200" height="750" loading="lazy" alt="Four automation intervals in an ossia score timeline, two of them held by yellow triggers that wait for a MIDI controller"/></picture>

## Processing the instruments

Live processing uses Faust, VST, VST3, CLAP, LV2 and JSFX effects or the ones built into score, and the instruments can be recorded into the score as it plays ([Faust](https://ossia.io/score-docs/processes/faust.html), [audio plug-ins](https://ossia.io/score-docs/processes/audio-plugins.html), [audio recorder](https://ossia.io/score-docs/processes/audio-recorder.html)).
Envelope following, beat tracking and audio descriptors listen to the instruments and drive the processing, sound files, video and light ([envelope follower](https://ossia.io/score-docs/processes/envelope-follower.html), [analysis](https://ossia.io/score-docs/processes/analysis.html)).

Existing Pure Data patches run inside the score, or are controlled from it over OSC with libossia ([Pure Data](https://ossia.io/score-docs/processes/puredata.html)).
For the hall, DBAP, GBAP, trajectories and spatialisation renderers are covered on the [spatial audio](/spatial-audio.html) page.

<picture><img src="/assets/gallery/pocius-on-the-edge.webp" width="540" height="304" loading="lazy" alt="A performer seated at a table on a dark stage, under a large projected image"/></picture>
<p class="figure-caption"><i>On the Edge</i>, Kasey Pocius, Sound Symposium XXI, St. John's: an audiovisual work for video, T-Stick and surround sound.</p>

## In short

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>You want</th><th>In ossia score</th></tr></thead>
<tbody>
<tr><td>Electronics that follow the musicians</td><td>Triggers and conditions that wait for pedals, MIDI, OSC or audio thresholds.</td></tr>
<tr><td>A part that the next performers can play again</td><td>The whole electronic part, with its cues, processing and sound files, in one project file that opens on every operating system.</td></tr>
<tr><td>To rehearse one passage</td><td>Start from any point with <i>Play from here</i>.</td></tr>
<tr><td>Video or light in the piece</td><td>Video, shaders and DMX lights on the same cues.</td></tr>
</tbody>
</table>
</div>

For music played from synthesizers, sequencers and loops, see [live electronic music](/live-music.html).
The [gallery](/gallery.html) has concerts made with score, such as Pía Baltazar's *The Ripples of Consequence* or Alain Bonardi's *pianotronics #3*.
