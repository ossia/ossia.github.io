---
layout: use-case
lang: fr
title: "Spatialisation sonore multicanale"
headline: "Spatialisation sonore et son multicanal"
subtitle: "Placez et déplacez les sons sur n'importe quel dispositif de haut-parleurs, d'une quadriphonie à des centaines de canaux, écrivez des trajectoires sur une timeline, et pilotez des moteurs de spatialisation en OSC et ADM-OSC. Libre et gratuit, sous Windows, macOS, Linux et Raspberry Pi."
permalink: /fr/spatialisation-sonore.html
translation: /spatial-audio.html
category: site-score
description: "Spatialisation sonore libre : DBAP, GBAP, trajectoires, jusqu'à 1024 canaux, pilotage de SpatGRIS et ADM-OSC, pour concerts et installations."
image: /assets/social/ossia-score-og.jpg
---

ossia score sert aux concerts acousmatiques, aux salles immersives, aux installations sonores et au théâtre spatialisé.
Les sources sonores, leurs positions et leurs mouvements s'écrivent sur la même timeline que le reste de l'œuvre, et peuvent réagir aux interprètes et aux visiteurs.

## Ce que vous pouvez faire

- **Spatialiser dans ossia score** : DBAP en 2D et en 3D, GBAP, spatialisation matricielle et panoramique quadriphonique, pour n'importe quelle source ([DBAP](https://ossia.io/score-docs/processes/dbap.html), [GBAP](https://ossia.io/score-docs/processes/gbap.html), [matrice](https://ossia.io/score-docs/processes/matrix-spatialization.html)).
- **Piloter des moteurs de spatialisation** en OSC : SpatGRIS, SPAT Revolution et tout moteur compatible ADM-OSC ([appareil SpatGRIS](https://ossia.io/score-docs/devices/spatgris-device.html)).
- **Écrire des trajectoires** : dessinez des chemins et des mouvements de plusieurs sources avec des widgets dédiés, puis automatisez-les, bouclez-les et variez-les ([générateur de chemins](https://ossia.io/score-docs/processes/pathgenerator.html), [multi-curseur](https://ossia.io/score-docs/processes/multicursor.html)).
- **Grands systèmes de haut-parleurs** : cartes son jusqu'à 1024 canaux, routage par canal, et bibliothèques de spatialisation Faust comme l'ambisonie ([routage audio](https://ossia.io/score-docs/in-depth/audio-routing.html), [Faust](https://ossia.io/score-docs/processes/faust.html)).
- **Suivre les personnes et les objets** : pilotez les sources depuis des systèmes de tracking (PosiStageNet, RTTrP, OpenTrackIO), des caméras de profondeur ou n'importe quel capteur.
- **Sur la même timeline que le reste** : vidéo, 3D et lumière restent synchronisées avec le son ([guide de spatialisation](https://ossia.io/score-docs/common-practices/14-spatial-audio.html)).

## Les besoins de la spatialisation, et les réponses d'ossia score

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>Ce dont vous avez besoin</th><th>Comment ossia score y répond</th></tr></thead>
<tbody>
<tr><td>Spatialiser sur un dispositif de haut-parleurs irrégulier</td><td>DBAP et GBAP fonctionnent avec des haut-parleurs placés n'importe où, en 2D ou en 3D.</td></tr>
<tr><td>Écrire des mouvements précisément dans le temps</td><td>Trajectoires et positions des sources sont des automations sur la timeline.</td></tr>
<tr><td>Des sons qui suivent interprètes ou visiteurs</td><td>Systèmes de tracking, caméras de profondeur et capteurs pilotent directement la position des sources.</td></tr>
<tr><td>Garder votre moteur de spatialisation</td><td>ossia score envoie positions et paramètres des sources en OSC et en ADM-OSC.</td></tr>
<tr><td>Une installation multicanale permanente</td><td>Mode sans interface avec lecture automatique, sur PC ou Raspberry Pi.</td></tr>
</tbody>
</table>
</div>

Voyez la [galerie](/gallery.html), par exemple *METAscène*, avec cinquante haut-parleurs de son spatialisé, trois écrans vidéo et la lumière pilotés par ossia score.
