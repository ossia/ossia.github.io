---
layout: use-case
title: "Spatial audio for multichannel sound"
headline: "Spatial audio and multichannel sound"
subtitle: "ossia score can be used to place and move sounds over any loudspeaker layout, with the trajectories written on the same timeline as the rest of the piece."
permalink: /spatial-audio.html
translation: /fr/spatialisation-sonore.html
category: site-score
description: "Free, open-source spatial audio: DBAP, GBAP, trajectories, up to 1024 channels, SpatGRIS and ADM-OSC control, for concerts and installations."
image: /assets/social/ossia-score-og.jpg
---

ossia score can be used to spatialize sound for acousmatic concerts, immersive rooms, sound installations or theater: the positions and movements of the sources are written on the timeline next to the sounds themselves, and they can react to performers and visitors.
For instance, *METAscène* (OARA and SCRIME, MÉCA, Bordeaux, 2024) runs fifty loudspeakers of spatialized sound, three video screens and lighting from score, and Pía Baltazar's *Some Light in the Crumbling* (2025) is a site-specific concert with loudspeakers spread through the Saint-Rémi church in Molenbeek, Brussels.

<picture><img src="/assets/gallery/metascene.webp" width="540" height="405" loading="lazy" alt="A control desk in a dark venue, with an ossia score timeline on a large monitor and a lit stage in the background"/></picture>
<p class="figure-caption"><i>METAscène</i>, OARA and SCRIME, music by György Kurtág Jr., spatialization with Pía Baltazar and Joseph Larralde, MÉCA, Bordeaux: fifty loudspeakers of spatialized sound, three video screens and lighting, all run from ossia score. © OARA</p>

## Spatialization in score

DBAP works in 2D and 3D with loudspeakers placed anywhere, and GBAP, matrix spatialization and quad panning cover other setups ([DBAP](https://ossia.io/score-docs/processes/dbap.html), [GBAP](https://ossia.io/score-docs/processes/gbap.html), [matrix](https://ossia.io/score-docs/processes/matrix-spatialization.html)).
Sound cards with up to 1024 channels are supported, each channel can be routed separately, and Faust provides spatialization libraries such as ambisonics ([audio routing](https://ossia.io/score-docs/in-depth/audio-routing.html), [Faust](https://ossia.io/score-docs/processes/faust.html)).

Trajectories are drawn with dedicated widgets, for one or several sources, then automated, looped and varied like any other curve ([path generator](https://ossia.io/score-docs/processes/pathgenerator.html), [multi-cursor](https://ossia.io/score-docs/processes/multicursor.html)).

<picture><img src="/assets/use-cases/dbap.webp" width="1200" height="738" loading="lazy" alt="An ossia score patch where a path generator and a multi-cursor widget move a sound source through a DBAP spatializer and a matrix spatializer to four outputs"/></picture>

## External renderers

When a venue already has a spatialization renderer, score sends it the source positions and parameters over OSC; this works with SpatGRIS, SPAT Revolution and any renderer which supports ADM-OSC ([SpatGRIS device](https://ossia.io/score-docs/devices/spatgris-device.html)).

The sources can also follow people and objects through tracking systems (PosiStageNet, RTTrP, OpenTrackIO), depth cameras or any sensor, and video, 3D and lights stay synchronized with the sound since they are in the same project ([spatial audio guide](https://ossia.io/score-docs/common-practices/14-spatial-audio.html)).
For permanent multichannel installations, score runs headless with autoplay on a PC or a Raspberry Pi.

Other spatialized pieces are presented in the [gallery](/gallery.html).
