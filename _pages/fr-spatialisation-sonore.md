---
layout: use-case
lang: fr
title: "Spatialisation sonore multicanale"
headline: "Spatialisation sonore et son multicanal"
subtitle: "Placer et déplacer les sons sur n'importe quel dispositif de haut-parleurs, d'une quadriphonie à des centaines de canaux, et écrire les trajectoires sur la même timeline que le reste de l'œuvre."
permalink: /fr/spatialisation-sonore.html
translation: /spatial-audio.html
category: site-score
description: "Spatialisation sonore libre : DBAP, GBAP, trajectoires, jusqu'à 1024 canaux, pilotage de SpatGRIS et ADM-OSC, pour concerts et installations."
image: /assets/social/ossia-score-og.jpg
---

Concerts acousmatiques, salles immersives, installations sonores, théâtre spatialisé : partout, l'endroit d'où vient un son compte autant que le moment où il joue.
Dans ossia score, les positions et les mouvements des sources s'écrivent sur la timeline à côté des sons, et peuvent réagir aux interprètes et aux visiteurs.

<picture><img src="/assets/gallery/metascene.webp" width="540" height="405" loading="lazy" alt="Une régie dans une salle sombre, avec une timeline ossia score sur un grand écran et une scène éclairée au fond"/></picture>
<p class="figure-caption"><i>METAscène</i>, OARA et SCRIME, musique de György Kurtág Jr., spatialisation avec Pía Baltazar et Joseph Larralde, MÉCA, Bordeaux : cinquante haut-parleurs de son spatialisé, trois écrans vidéo et la lumière, pilotés par ossia score. © OARA</p>

## Spatialiser dans score

Le DBAP fonctionne en 2D et en 3D avec des haut-parleurs placés n'importe où, et le GBAP, la spatialisation matricielle et le panoramique quadriphonique couvrent d'autres dispositifs ([DBAP](https://ossia.io/score-docs/processes/dbap.html), [GBAP](https://ossia.io/score-docs/processes/gbap.html), [matrice](https://ossia.io/score-docs/processes/matrix-spatialization.html)).
Les cartes son jusqu'à 1024 canaux sont prises en charge, chaque canal se route séparément, et Faust apporte des bibliothèques de spatialisation comme l'ambisonie ([routage audio](https://ossia.io/score-docs/in-depth/audio-routing.html), [Faust](https://ossia.io/score-docs/processes/faust.html)).

Les trajectoires se dessinent avec des widgets dédiés, pour une source ou plusieurs, puis s'automatisent, bouclent et varient comme n'importe quelle courbe ([générateur de chemins](https://ossia.io/score-docs/processes/pathgenerator.html), [multi-curseur](https://ossia.io/score-docs/processes/multicursor.html)).

<picture><img src="/assets/use-cases/dbap.webp" width="1200" height="738" loading="lazy" alt="Un patch ossia score où un générateur de chemins et un widget multi-curseur déplacent une source sonore à travers un spatialiseur DBAP et un spatialiseur matriciel vers quatre sorties"/></picture>

## Avec votre moteur de spatialisation

Si la salle a déjà son moteur de spatialisation, score lui envoie positions et paramètres des sources en OSC : SpatGRIS, SPAT Revolution et tout moteur compatible ADM-OSC ([appareil SpatGRIS](https://ossia.io/score-docs/devices/spatgris-device.html)).

Les sources peuvent aussi suivre des personnes ou des objets grâce aux systèmes de tracking (PosiStageNet, RTTrP, OpenTrackIO), aux caméras de profondeur ou à n'importe quel capteur.
La vidéo, la 3D et la lumière restent synchronisées avec le son, puisqu'elles sont dans le même projet ([guide de spatialisation](https://ossia.io/score-docs/common-practices/14-spatial-audio.html)).

## En résumé

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>Vous voulez</th><th>Dans ossia score</th></tr></thead>
<tbody>
<tr><td>Spatialiser sur un dispositif irrégulier</td><td>DBAP et GBAP, avec des haut-parleurs n'importe où, en 2D ou en 3D.</td></tr>
<tr><td>Des mouvements écrits précisément dans le temps</td><td>Trajectoires et positions des sources sont des automations sur la timeline.</td></tr>
<tr><td>Des sons qui suivent interprètes ou visiteurs</td><td>Tracking, caméras de profondeur et capteurs pilotent la position des sources.</td></tr>
<tr><td>Garder votre moteur</td><td>Positions et paramètres envoyés en OSC et en ADM-OSC.</td></tr>
<tr><td>Une installation multicanale permanente</td><td>Mode sans interface avec lecture automatique, sur PC ou Raspberry Pi.</td></tr>
</tbody>
</table>
</div>
