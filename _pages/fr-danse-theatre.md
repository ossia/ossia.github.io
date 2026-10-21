---
layout: use-case
lang: fr
title: "Logiciel pour la danse et le théâtre interactifs"
headline: "Danse et théâtre interactifs"
subtitle: "Les mouvements des interprètes jouent le son, la vidéo et la lumière, dans un spectacle qui reste le même d'un soir à l'autre."
permalink: /fr/danse-theatre.html
translation: /dance-theatre.html
category: site-score
description: "Logiciel libre pour la danse et le théâtre interactifs : détection de pose, caméras de profondeur, capteurs et tracking pilotent son, vidéo et lumière."
image: /assets/social/ossia-score-og.jpg
---

Des compagnies de danse et de théâtre utilisent ossia score pour relier ce qui se passe sur le plateau au son, à la vidéo, à la lumière et à la machinerie.
Les parties interactives sont écrites dans une conduite : la pièce garde la structure répétée et répond quand même aux interprètes.

<picture><img src="/assets/gallery/walking-down-the-street.webp" width="540" height="304" loading="lazy" alt="Deux interprètes qui marchent en sens opposés devant un mur blanc, l'un d'eux tenant un long instrument numérique"/></picture>
<p class="figure-caption"><i>Walking Down The Street</i>, Lina Rahal &amp; Jean-Marie Colin : une pièce de danse hip-hop dont tout le spectacle est piloté par ossia score et joué en direct avec un Karlax. © Jean-Marie Colin</p>

## Lire le plateau

Une webcam suffit pour suivre les corps : détection de pose de plusieurs personnes avec lissage, segmentation, et profondeur depuis une caméra ordinaire ([détection de pose](https://ossia.io/score-docs/examples/ai/pose-detection.html)).
Les caméras de profondeur s'installent depuis le gestionnaire de paquets : Orbbec, Intel RealSense, Kinect, Azure Kinect (Windows et Linux) et Luxonis OAK. Les systèmes de tracking arrivent en PosiStageNet, RTTrP, OpenTrackIO et TUIO ([caméras de profondeur](https://ossia.io/score-docs/devices/depth-camera-device.html), [tracking](https://ossia.io/score-docs/devices/tracking-device.html)).

Les capteurs portés par les interprètes fonctionnent aussi : centrales inertielles, capteurs Bluetooth LE, Leap Motion, manettes, tablettes Wacom, et tout ce qui envoie de l'OSC, du MIDI ou des données série ([Bluetooth LE](https://ossia.io/score-docs/devices/ble-device.html), [Leap Motion](https://ossia.io/score-docs/devices/leapmotion-device.html)).

## Du geste aux médias

Les positions brutes sont lissées et filtrées, les gestes analysés, et classifieurs ou régresseurs apprennent à partir de quelques mouvements enregistrés ([gestes](https://ossia.io/score-docs/processes/gestures.html), [classifieur](https://ossia.io/score-docs/processes/classifier.html)).
Le résultat pilote la synthèse et la spatialisation, les shaders, la 3D, la vidéo et la lumière DMX, ou sort de score en MIDI et en OSC pour d'autres logiciels ([tracking vers MIDI](https://ossia.io/score-docs/examples/ai/tracking-to-midi.html)).

Scènes, cues et déclencheurs donnent sa structure à la pièce. Le top peut venir du régisseur ou des interprètes eux-mêmes ([scènes](https://ossia.io/score-docs/common-practices/6-scenes.html), [cues](https://ossia.io/score-docs/cues.html)).
En répétition, on modifie les correspondances pendant que la pièce tourne, et *Play from here* relance depuis n'importe quelle scène.

## En résumé

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>Vous voulez</th><th>Dans ossia score</th></tr></thead>
<tbody>
<tr><td>Suivre les interprètes sans leur poser de capteurs</td><td>Détection de pose avec une webcam, caméras de profondeur et systèmes de tracking.</td></tr>
<tr><td>Une interaction qui se comporte pareil chaque soir</td><td>Des parties interactives dans des scènes et des cues, avec lissage, calibration et seuils.</td></tr>
<tr><td>Le mouvement qui pilote son, vidéo et lumière ensemble</td><td>Un seul projet pour le son spatialisé, la vidéo, la 3D et le DMX, à partir des mêmes données.</td></tr>
<tr><td>Un dispositif léger en tournée</td><td>Un ordinateur portable ou un Raspberry Pi, sous Windows, macOS ou Linux, avec les médias rassemblés dans le projet.</td></tr>
</tbody>
</table>
</div>

La [galerie](/gallery.html) présente d'autres pièces de danse et de théâtre, comme *Our Bodies Know More Than We Do* de Psʌnía, où les mouvements des interprètes pilotent le son et la lumière.
