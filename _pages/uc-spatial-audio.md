---
layout: use-case
title: "Spatial audio for multichannel sound"
headline: "Spatial audio and multichannel sound"
subtitle: "Place and move sounds over any loudspeaker layout, from a quad to hundreds of channels, write trajectories on a timeline, and drive spatialisation renderers over OSC and ADM-OSC. Free and open-source, on Windows, macOS, Linux and Raspberry Pi."
permalink: /spatial-audio.html
translation: /fr/spatialisation-sonore.html
category: site-score
description: "Free, open-source spatial audio: DBAP, GBAP, trajectories, up to 1024 channels, SpatGRIS and ADM-OSC control, for concerts and installations."
image: /assets/social/ossia-score-og.jpg
---

ossia score is used for acousmatic concerts, immersive rooms, sound installations and spatialised theatre.
Sound sources, their positions and their movements are written on the same timeline as the rest of the piece, and can react to performers and visitors.

## What you can do

- **Spatialise in ossia score itself**: DBAP in 2D and 3D, GBAP, matrix spatialisation and quad panning, for any sound source ([DBAP](https://ossia.io/score-docs/processes/dbap.html), [GBAP](https://ossia.io/score-docs/processes/gbap.html), [matrix](https://ossia.io/score-docs/processes/matrix-spatialization.html)).
- **Drive spatialisation renderers** over OSC: SpatGRIS, SPAT Revolution and any ADM-OSC compatible renderer ([SpatGRIS device](https://ossia.io/score-docs/devices/spatgris-device.html)).
- **Write trajectories**: draw paths and multi-source movements with dedicated widgets, then automate, loop and vary them ([path generator](https://ossia.io/score-docs/processes/pathgenerator.html), [multi-cursor](https://ossia.io/score-docs/processes/multicursor.html)).
- **Large loudspeaker systems**: sound cards with up to 1024 channels, per-channel routing, and Faust spatialisation libraries such as ambisonics ([audio routing](https://ossia.io/score-docs/in-depth/audio-routing.html), [Faust](https://ossia.io/score-docs/processes/faust.html)).
- **Follow people and objects**: drive sources from tracking systems (PosiStageNet, RTTrP, OpenTrackIO), depth cameras or any sensor.
- **Same timeline as the rest**: video, 3D and lights stay in sync with the sound ([spatial audio guide](https://ossia.io/score-docs/common-practices/14-spatial-audio.html)).

## Spatial audio needs, and how ossia score answers them

<div class="comparison-scroll">
<table class="comparison">
<tr><th>What you need</th><th>How ossia score does it</th></tr>
<tr><td>Spatialising on an irregular loudspeaker layout</td><td>DBAP and GBAP work with speakers placed anywhere, in 2D or 3D.</td></tr>
<tr><td>Writing movements precisely in time</td><td>Trajectories and source positions are automations on the timeline.</td></tr>
<tr><td>Sounds that follow performers or visitors</td><td>Tracking systems, depth cameras and sensors drive source positions directly.</td></tr>
<tr><td>Keeping your spatialisation renderer</td><td>ossia score sends source positions and parameters over OSC and ADM-OSC.</td></tr>
<tr><td>A permanent multichannel installation</td><td>Headless mode with autoplay, on a PC or a Raspberry Pi.</td></tr>
</table>
</div>

See the [gallery](/gallery.html), for instance *METAscène*, with fifty loudspeakers of spatialised sound, three video screens and lighting run from ossia score.
