---
layout: use-case
title: "Live electronics for contemporary music"
headline: "Contemporary music and live electronics"
subtitle: "ossia score can be used to write the electronic part of a piece for instruments, with cues from a pedal, live processing, spatialization, and a score that waits for the musicians."
permalink: /live-electronics.html
translation: /fr/musique-mixte.html
category: site-score
description: "Free, open-source software for mixed music and live electronics: interactive scores, cues from pedals or MIDI, live processing and spatial sound."
image: /assets/social/ossia-score-og.jpg
---

ossia score comes from the research on interactive scores for music started at LaBRI and SCRIME in Bordeaux with the *i-score* project ([project history](/project.html)); it was designed for pieces where musicians and electronics play together, the timing being written while the performers decide when each section starts.
For instance, in Pía Baltazar's *The Ripples of Consequence* (Le Vivier, Montréal, 2025), a composition for the Table de Babel performed by Audréanne Filion, the electronics are run by score.

## Interactive score

A trigger holds the electronics until something happens on stage, for instance a pedal, a MIDI note, an OSC message, or the audio input crossing a threshold, and conditions choose between branches ([breaking the timeline](https://ossia.io/score-docs/quick-start/breaking-the-timeline.html)).
The cues are given from MIDI pedals, keyboards and controllers, or from a key of the computer keyboard ([MIDI input](https://ossia.io/score-docs/devices/midiin-device.html), [cues](https://ossia.io/score-docs/cues.html)); when the piece has a pulse, tempo, time signatures and quantization can be used next to the free sections driven by the performers ([musical features](https://ossia.io/score-docs/in-depth/musical.html)).

<picture><source type="image/avif" srcset="/assets/use-cases/interactive-trigger.avif"><img src="/assets/use-cases/interactive-trigger.webp" width="1200" height="750" loading="lazy" alt="Four automation intervals in an ossia score timeline, two of them held by yellow triggers that wait for a MIDI controller"/></picture>

## Processing the instruments

Live processing uses Faust, VST, VST3, CLAP, LV2 and JSFX effects or the effects built into score, and the instruments can be recorded into the score during the performance ([Faust](https://ossia.io/score-docs/processes/faust.html), [audio plug-ins](https://ossia.io/score-docs/processes/audio-plugins.html), [audio recorder](https://ossia.io/score-docs/processes/audio-recorder.html)).
Envelope following, beat tracking and audio descriptors analyze the instruments and drive the processing, sound files, video and lights ([envelope follower](https://ossia.io/score-docs/processes/envelope-follower.html), [analysis](https://ossia.io/score-docs/processes/analysis.html)).

Existing Pure Data patches run inside the score, or are controlled from it over OSC with libossia ([Pure Data](https://ossia.io/score-docs/processes/puredata.html)); the spatialization in the hall (DBAP, GBAP, trajectories, external renderers) is described on the [spatial audio](/spatial-audio.html) page.

## Rehearsals and later performances

During rehearsals, *Play from here* restarts from any point of the piece.
The whole electronic part, with its cues, processing and sound files, is a single project file which opens on every operating system, so that it can be performed again later by other musicians.

For music played with synthesizers, sequencers and loops, see the [live electronic music](/live-music.html) page; other concerts made with score, such as Alain Bonardi's *pianotronics #3*, are presented in the [gallery](/gallery.html).
