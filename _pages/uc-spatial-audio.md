---
layout: use-case
title: "Spatial audio for multichannel sound"
headline: "Spatial audio and multichannel sound"
subtitle: "Place and move sounds over any loudspeaker layout, from a quad to hundreds of channels, and write the trajectories on the same timeline as the rest of the piece."
permalink: /spatial-audio.html
translation: /fr/spatialisation-sonore.html
category: site-score
description: "Free, open-source spatial audio: DBAP, GBAP, trajectories, up to 1024 channels, SpatGRIS and ADM-OSC control, for concerts and installations."
image: /assets/social/ossia-score-og.jpg
---

Acousmatic concerts, immersive rooms, sound installations and spatialised theatre have one thing in common: where a sound is matters as much as when it plays.
In ossia score the positions and movements of the sources are written on the timeline next to the sounds, and they can react to performers and visitors.

<picture><img src="/assets/gallery/metascene.webp" width="540" height="405" loading="lazy" alt="A control desk in a dark venue, with an ossia score timeline on a large monitor and a lit stage in the background"/></picture>
<p class="figure-caption"><i>METAscène</i>, OARA and SCRIME, music by György Kurtág Jr., spatialisation with Pía Baltazar and Joseph Larralde, MÉCA, Bordeaux: fifty loudspeakers of spatialised sound, three video screens and lighting, all run from ossia score. © OARA</p>

## Spatialising in score

DBAP works in 2D and 3D with loudspeakers placed anywhere, and GBAP, matrix spatialisation and quad panning cover other setups ([DBAP](https://ossia.io/score-docs/processes/dbap.html), [GBAP](https://ossia.io/score-docs/processes/gbap.html), [matrix](https://ossia.io/score-docs/processes/matrix-spatialization.html)).
Sound cards with up to 1024 channels are supported, each channel can be routed separately, and Faust brings spatialisation libraries such as ambisonics ([audio routing](https://ossia.io/score-docs/in-depth/audio-routing.html), [Faust](https://ossia.io/score-docs/processes/faust.html)).

Trajectories are drawn with dedicated widgets, for one source or several, then automated, looped and varied like any other curve ([path generator](https://ossia.io/score-docs/processes/pathgenerator.html), [multi-cursor](https://ossia.io/score-docs/processes/multicursor.html)).

<picture><img src="/assets/use-cases/dbap.webp" width="1200" height="738" loading="lazy" alt="An ossia score patch where a path generator and a multi-cursor widget move a sound source through a DBAP spatialiser and a matrix spatialiser to four outputs"/></picture>

## With a renderer you already use

If the room already has a spatialisation renderer, score sends it source positions and parameters over OSC: SpatGRIS, SPAT Revolution and any renderer that speaks ADM-OSC ([SpatGRIS device](https://ossia.io/score-docs/devices/spatgris-device.html)).

Sources can also follow people and objects through tracking systems (PosiStageNet, RTTrP, OpenTrackIO), depth cameras or any sensor.
Video, 3D and lights stay in sync with the sound because they are in the same project ([spatial audio guide](https://ossia.io/score-docs/common-practices/14-spatial-audio.html)).

## In short

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>You want</th><th>In ossia score</th></tr></thead>
<tbody>
<tr><td>To spatialise over an irregular loudspeaker layout</td><td>DBAP and GBAP, with speakers anywhere, in 2D or 3D.</td></tr>
<tr><td>Movements written precisely in time</td><td>Trajectories and source positions are automations on the timeline.</td></tr>
<tr><td>Sounds that follow performers or visitors</td><td>Tracking systems, depth cameras and sensors drive the source positions.</td></tr>
<tr><td>To keep your renderer</td><td>Positions and parameters sent over OSC and ADM-OSC.</td></tr>
<tr><td>A permanent multichannel installation</td><td>Headless mode with autoplay, on a PC or a Raspberry Pi.</td></tr>
</tbody>
</table>
</div>
