---
layout: use-case
lang: fr
title: "Logiciel pour la danse et le théâtre interactifs"
headline: "Danse et théâtre interactifs"
subtitle: "Faites piloter le son, la vidéo et la lumière par le mouvement : détection de pose avec une webcam, caméras de profondeur, capteurs de mouvement et systèmes de tracking, avec des cues et des scènes qui gardent le spectacle reproductible. Libre et gratuit, sous Windows, macOS, Linux et Raspberry Pi."
permalink: /fr/danse-theatre.html
translation: /dance-theatre.html
category: site-score
description: "Logiciel libre pour la danse et le théâtre interactifs : détection de pose, caméras de profondeur, capteurs et tracking pilotent son, vidéo et lumière."
image: /assets/social/ossia-score-og.jpg
---

ossia score est utilisé par des compagnies de danse et de théâtre pour relier les mouvements des interprètes à la scène : son, vidéo, lumière et machinerie.
Les parties interactives vivent dans une partition écrite : le spectacle suit la structure répétée tout en réagissant à ce qui se passe sur scène.

## Ce que vous pouvez faire

- **Suivre les corps avec une webcam** : détection de pose de plusieurs personnes avec lissage, segmentation, et profondeur depuis une caméra ordinaire ([détection de pose](https://ossia.io/score-docs/examples/ai/pose-detection.html)).
- **Caméras de profondeur et systèmes de tracking** : caméras Orbbec, Intel RealSense, Kinect, Azure Kinect (Windows et Linux) et Luxonis OAK, depuis le gestionnaire de paquets ; PosiStageNet, RTTrP, OpenTrackIO et TUIO ([caméras de profondeur](https://ossia.io/score-docs/devices/depth-camera-device.html), [tracking](https://ossia.io/score-docs/devices/tracking-device.html)).
- **Des capteurs sur les interprètes** : centrales inertielles, capteurs Bluetooth LE, Leap Motion, manettes, tablettes Wacom, et tout ce qui envoie de l'OSC, du MIDI ou des données série ([Bluetooth LE](https://ossia.io/score-docs/devices/ble-device.html), [Leap Motion](https://ossia.io/score-docs/devices/leapmotion-device.html)).
- **Comprendre les gestes** : analyse du geste, lissage et filtrage, et classifieurs ou régresseurs entraînés à partir de quelques mouvements enregistrés ([gestes](https://ossia.io/score-docs/processes/gestures.html), [classifieur](https://ossia.io/score-docs/processes/classifier.html)).
- **Du mouvement vers les médias** : positions et gestes pilotent la synthèse et la spatialisation sonore, les shaders, la 3D, la vidéo et la lumière DMX, ou deviennent du MIDI et de l'OSC pour d'autres logiciels ([tracking vers MIDI](https://ossia.io/score-docs/examples/ai/tracking-to-midi.html)).
- **Garder un spectacle** : scènes, cues et déclencheurs structurent la pièce, avec un GO donné par la régie ou par les interprètes eux-mêmes ([scènes](https://ossia.io/score-docs/common-practices/6-scenes.html), [cues](https://ossia.io/score-docs/cues.html)).

<picture><img src="/assets/gallery/walking-down-the-street.webp" width="540" height="304" loading="lazy" alt="Deux interprètes marchant en sens opposés devant un mur blanc, l'un tenant un long instrument numérique"/></picture>
<p class="figure-caption"><i>Walking Down The Street</i>, Lina Rahal &amp; Jean-Marie Colin : une pièce de danse hip-hop dont tout le spectacle est piloté par ossia score et contrôlé en direct avec un Karlax. © Jean-Marie Colin</p>

## Les besoins de la danse et du théâtre, et les réponses d'ossia score

<div class="comparison-scroll">
<table class="comparison">
<tr><th>Ce dont vous avez besoin</th><th>Comment ossia score y répond</th></tr>
<tr><td>Suivre les interprètes sans leur poser de capteurs</td><td>Détection de pose avec une webcam, caméras de profondeur et systèmes de tracking.</td></tr>
<tr><td>Une interaction identique d'un soir à l'autre</td><td>Les parties interactives sont écrites dans des scènes et des cues, avec lissage, calibration et seuils.</td></tr>
<tr><td>Des mouvements qui pilotent ensemble son, vidéo et lumière</td><td>Un seul projet pour le son spatialisé, la vidéo, la 3D et le DMX, tous pilotés par les mêmes données.</td></tr>
<tr><td>Répéter et ajuster rapidement</td><td>Modifiez les correspondances pendant l'exécution, et reprenez depuis n'importe quelle scène avec <i>Play from here</i>.</td></tr>
<tr><td>Partir en tournée avec un dispositif léger</td><td>Un ordinateur portable ou un Raspberry Pi, sous Windows, macOS ou Linux, avec les médias rassemblés dans le projet.</td></tr>
</table>
</div>

Voyez la [galerie](/gallery.html) des pièces de danse et de théâtre réalisées avec ossia score, comme *Our Bodies Know More Than We Do* de Psʌnía, où les mouvements des interprètes pilotent le son et la lumière.
