---
layout: use-case
lang: fr
title: "Spatialisation sonore multicanale"
headline: "Spatialisation sonore et son multicanal"
subtitle: "ossia score permet de placer et de déplacer des sons sur n'importe quel dispositif de haut-parleurs, les trajectoires étant écrites sur la même timeline que le reste de l'œuvre."
permalink: /fr/spatialisation-sonore.html
translation: /spatial-audio.html
category: site-score
description: "Spatialisation sonore libre : DBAP, GBAP, trajectoires, jusqu'à 1024 canaux, pilotage de SpatGRIS et ADM-OSC, pour concerts et installations."
image: /assets/social/ossia-score-og.jpg
---

ossia score permet de spatialiser le son pour des concerts acousmatiques, des salles immersives, des installations sonores ou du théâtre : les positions et les mouvements des sources sont écrits sur la timeline à côté des sons eux-mêmes, et peuvent réagir aux interprètes et aux visiteurs.
*METAscène* (OARA et SCRIME, MÉCA, Bordeaux, 2024) pilote par exemple depuis score cinquante haut-parleurs de son spatialisé, trois écrans vidéo et la lumière, et *Some Light in the Crumbling* de Pía Baltazar (2025) est un concert in situ dont les haut-parleurs sont répartis dans l'église Saint-Rémi de Molenbeek, à Bruxelles.

<picture><img src="/assets/gallery/metascene.webp" width="540" height="405" loading="lazy" alt="Une régie dans une salle obscure, avec une timeline ossia score sur un grand écran et une scène éclairée au fond"/></picture>
<p class="figure-caption"><i>METAscène</i>, OARA et SCRIME, musique de György Kurtág Jr., spatialisation avec Pía Baltazar et Joseph Larralde, MÉCA, Bordeaux : cinquante haut-parleurs de son spatialisé, trois écrans vidéo et la lumière, pilotés par ossia score. © OARA</p>

## Spatialiser dans score

Le DBAP fonctionne en 2D et en 3D avec des haut-parleurs placés n'importe où, et le GBAP, la spatialisation matricielle et le panoramique quadriphonique couvrent d'autres dispositifs ([DBAP](https://ossia.io/score-docs/processes/dbap.html), [GBAP](https://ossia.io/score-docs/processes/gbap.html), [matrice](https://ossia.io/score-docs/processes/matrix-spatialization.html)).
Les cartes son jusqu'à 1024 canaux sont prises en charge, chaque canal peut être routé séparément, et Faust fournit des bibliothèques de spatialisation, notamment pour l'ambisonie ([routage audio](https://ossia.io/score-docs/in-depth/audio-routing.html), [Faust](https://ossia.io/score-docs/processes/faust.html)).

Les trajectoires se dessinent avec des widgets dédiés, pour une ou plusieurs sources, puis s'automatisent, se bouclent et se varient comme n'importe quelle autre courbe ([générateur de chemins](https://ossia.io/score-docs/processes/pathgenerator.html), [multi-curseur](https://ossia.io/score-docs/processes/multicursor.html)).

<picture><img src="/assets/use-cases/dbap.webp" width="1200" height="738" loading="lazy" alt="Un patch ossia score où un générateur de chemins et un widget multi-curseur déplacent une source sonore à travers un spatialiseur DBAP et un spatialiseur matriciel vers quatre sorties"/></picture>

## Moteurs de spatialisation externes

Lorsqu'un lieu dispose déjà d'un moteur de spatialisation, score lui envoie les positions et paramètres des sources en OSC ; cela fonctionne avec SpatGRIS, SPAT Revolution et tout moteur compatible ADM-OSC ([appareil SpatGRIS](https://ossia.io/score-docs/devices/spatgris-device.html)).

Les sources peuvent aussi suivre des personnes et des objets via des systèmes de tracking (PosiStageNet, RTTrP, OpenTrackIO), des caméras de profondeur ou n'importe quel capteur, et la vidéo, la 3D et la lumière restent synchronisées avec le son puisqu'elles font partie du même projet ([guide de spatialisation](https://ossia.io/score-docs/common-practices/14-spatial-audio.html)).
Pour les installations multicanales permanentes, score fonctionne sans interface avec lecture automatique, sur un PC ou un Raspberry Pi.

D'autres œuvres spatialisées sont présentées dans la [galerie](/gallery.html).
