---
layout: use-case
lang: fr
title: "Logiciel pour la danse et le théâtre interactifs"
headline: "Danse et théâtre interactifs"
subtitle: "ossia score permet de faire piloter le son, la vidéo et la lumière par les mouvements des interprètes, au sein d'une conduite écrite qui peut être rejouée chaque soir."
permalink: /fr/danse-theatre.html
ref: dance-theatre
nav_title: "Danse et théâtre interactifs"
blurb: "Détection de pose, caméras de profondeur, capteurs et tracking pilotent son, vidéo et lumière, dans des cues et des scènes."
category: site-score
description: "Logiciel libre pour la danse et le théâtre interactifs : détection de pose, caméras de profondeur, capteurs et tracking pilotent son, vidéo et lumière."
image: /assets/social/ossia-score-og.jpg
---

ossia score permet de relier ce qui se passe sur le plateau au son, à la vidéo, à la lumière et à la machinerie : les parties interactives sont placées à l'intérieur d'une partition écrite, de sorte que la pièce garde la structure répétée tout en réagissant aux interprètes.
Dans *Our Bodies Know More Than We Do* (Psʌnía, résidence WeSA Jeju, Daejeon, 2025), les mouvements des deux interprètes pilotent par exemple le son et la lumière, et le spectacle de danse hip-hop *Walking Down The Street* (Lina Rahal et Jean-Marie Colin, 2021) est entièrement conduit par score et contrôlé en direct avec un Karlax.

<picture><img src="/assets/gallery/walking-down-the-street.webp" width="540" height="304" loading="lazy" alt="Deux interprètes marchant en sens opposés devant un mur blanc, l'un tenant un long instrument numérique"/></picture>
<p class="figure-caption"><i>Walking Down The Street</i>, Lina Rahal et Jean-Marie Colin : une pièce de danse hip-hop entièrement conduite par ossia score et contrôlée en direct avec un Karlax. © Jean-Marie Colin</p>

## Caméras et capteurs

Une webcam suffit pour suivre les corps, grâce à la détection de pose de plusieurs personnes (avec lissage), à la segmentation et à la profondeur estimée depuis une caméra ordinaire ([détection de pose](https://ossia.io/score-docs/examples/ai/pose-detection.html)).
Les caméras de profondeur s'installent depuis le gestionnaire de paquets (Orbbec, Intel RealSense, Kinect, Azure Kinect sous Windows et Linux, Luxonis OAK), et les systèmes de tracking sont reçus via PosiStageNet, RTTrP, OpenTrackIO et TUIO ([caméras de profondeur](https://ossia.io/score-docs/devices/depth-camera-device.html), [tracking](https://ossia.io/score-docs/devices/tracking-device.html)).

On peut également utiliser des capteurs portés par les interprètes : centrales inertielles, capteurs Bluetooth LE, Leap Motion, manettes, tablettes Wacom, et tout appareil qui envoie des données OSC, MIDI ou série ([Bluetooth LE](https://ossia.io/score-docs/devices/ble-device.html), [Leap Motion](https://ossia.io/score-docs/devices/leapmotion-device.html)).

## Du geste aux médias

Les positions brutes sont lissées et filtrées, les gestes peuvent être analysés, et des classifieurs ou des régresseurs s'entraînent à partir de quelques mouvements enregistrés ([gestes](https://ossia.io/score-docs/processes/gestures.html), [classifieur](https://ossia.io/score-docs/processes/classifier.html)).
Le résultat peut piloter la synthèse et la spatialisation, des shaders, de la 3D, de la vidéo et de la lumière DMX, ou être envoyé à d'autres logiciels sous forme de messages MIDI et OSC ([tracking vers MIDI](https://ossia.io/score-docs/examples/ai/tracking-to-midi.html)).

## Structure de la pièce

Les scènes, les cues et les déclencheurs donnent sa structure à la pièce, et le top peut venir soit du régisseur, soit des interprètes eux-mêmes ([scènes](https://ossia.io/score-docs/common-practices/6-scenes.html), [cues](https://ossia.io/score-docs/cues.html)).
En répétition, les correspondances peuvent être modifiées pendant que la pièce tourne, et *Play from here* permet de reprendre à n'importe quelle scène ; pour la tournée, les médias sont rassemblés dans le dossier du projet, et le spectacle tourne sur un ordinateur portable ou un Raspberry Pi, sous Windows, macOS ou Linux.

D'autres pièces de danse et de théâtre sont présentées dans la [galerie](/gallery.html).
