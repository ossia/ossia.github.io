---
layout: use-case
lang: fr
title: "Séquenceur et timeline OSC, MIDI et DMX gratuit"
headline: "Une timeline OSC, MIDI et DMX"
subtitle: "Des courbes pour n'importe quel paramètre OSC, MIDI ou DMX, une timeline qui sait attendre un événement, et les appareils du réseau trouvés par OSCQuery plutôt que tapés à la main."
permalink: /fr/timeline-osc-midi-dmx.html
translation: /osc-midi-dmx-timeline.html
category: site-score
description: "Séquenceur OSC, MIDI et DMX libre pour Windows, macOS et Linux : courbes d'automation, OSCQuery, déclencheurs et conditions."
image: /assets/social/ossia-score-og.jpg
---

ossia score a commencé comme un séquenceur OSC. Chaque paramètre de chaque appareil du réseau devient une adresse, et une adresse peut être automatisée, enregistrée, transformée et placée dans le temps.
On s'en sert pour piloter des patchs, des moteurs de jeu, des serveurs média, de la lumière ou des robots.

## Des courbes sur n'importe quelle adresse

Une courbe d'automation peut viser une adresse OSC, un CC MIDI, un canal DMX ou un paramètre d'un processus de score ([automations](https://ossia.io/score-docs/quick-start/writing-automations.html)).
Quand la partition doit suivre un tempo, il suffit d'activer tempo, mesures et quantification ([temps musical](https://ossia.io/score-docs/in-depth/musical.html)).

La timeline n'est pas obligée de défiler tout droit. Un déclencheur attend un message, une condition choisit une branche, une boucle se répète jusqu'à ce qu'il se passe quelque chose ([timelines non linéaires](https://ossia.io/score-docs/quick-start/breaking-the-timeline.html)).

<picture><source type="image/avif" srcset="/assets/feature-interaction.avif"><img src="/assets/feature-interaction.webp" width="580" height="452" loading="lazy" alt="Une timeline ossia score où un déclencheur attend un événement externe avant la partie suivante"/></picture>

## Trouver les appareils

Les logiciels qui parlent OSCQuery, par exemple les patchs et applications qui utilisent libossia, apparaissent dans l'explorateur d'appareils avec tous leurs paramètres. On en glisse un dans la partition et l'adresse est remplie.
Les appareils OSC classiques se découvrent sur le réseau local via Bonjour/Zeroconf, et vos propres paramètres peuvent être publiés de la même manière.

<picture><img src="/assets/features/oscquery.webp" width="1600" height="1290" loading="lazy" alt="L'arbre OSCQuery d'une session ossia score affiché en JSON dans un navigateur, à côté du même arbre dans l'explorateur d'appareils"/></picture>

L'OSC passe en UDP, en TCP (client ou serveur), en WebSockets et en série, avec les encapsulations SLIP et COBS, et un nom d'hôte remplace l'adresse IP. Le même projet parle aussi MIDI, DMX (Art-Net, sACN, DMX USB), MQTT, CoAP, HTTP, LSL et CAN.

## Des valeurs propres

Les capteurs sont bruyants. Le mapper et les filtres se placent entre l'entrée et la cible : calibration, zones mortes, noise gate, hystérésis, anti-rebond et courbes d'easing ([filtre de valeurs](https://ossia.io/score-docs/processes/value-filter.html), [calibrateur](https://ossia.io/score-docs/processes/calibrator.html), [mapper](https://ossia.io/score-docs/devices/mapper-device.html)).
Les correspondances elles-mêmes s'écrivent en courbes, en JavaScript ou en expressions mathématiques.
Un motif d'adresses OSC envoie une même valeur à tout un groupe d'appareils ([motifs](https://ossia.io/score-docs/in-depth/pattern-matching.html)).

En entrée : manettes, Wiimote, Leap Motion, contrôleurs MIDI, Arduino en série, capteurs Bluetooth LE, caméras de profondeur et protocoles de tracking comme PosiStageNet, TUIO, RTTrP et OpenTrackIO ([capteurs vers OSC](https://ossia.io/score-docs/examples/devices/sensors2osc.html)).

Côté MIDI, il y a les ports virtuels, les ports MIDI réseau fournis par le système d'exploitation, la lecture de fichiers MIDI, des filtres, les gammes microtonales Scala et le clavier de l'ordinateur comme entrée MIDI ([MIDI](https://ossia.io/score-docs/in-depth/midi.html)).
N'importe quel appareil s'enregistre en CSV pour être rejoué plus tard, DMX entrant compris ([enregistrement](https://ossia.io/score-docs/in-depth/recording.html)).

## En résumé

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>Vous voulez</th><th>Dans ossia score</th></tr></thead>
<tbody>
<tr><td>Automatiser dans le temps les paramètres d'un autre logiciel</td><td>Des courbes sur toute adresse OSC, MIDI ou DMX, et OSCQuery pour parcourir les paramètres.</td></tr>
<tr><td>Le même outil sous Windows, macOS et Linux</td><td>Les mêmes fonctions sur les trois et sur Raspberry Pi, sauf celles liées à un système ou à un matériel, comme Spout, Syphon ou CUDA.</td></tr>
<tr><td>Une timeline qui attend, bifurque et boucle</td><td>Déclencheurs, conditions et boucles font partie de la timeline.</td></tr>
<tr><td>Du son et de la vidéo à côté des données de contrôle</td><td>Audio, vidéo, 3D et shaders dans la même timeline que les automations.</td></tr>
<tr><td>Une surface de contrôle sur téléphone</td><td>La télécommande web, sans rien installer.</td></tr>
</tbody>
</table>
</div>

## Avec vos propres patchs

score parle nativement OSCQuery grâce à [libossia](/site-libossia/about.html), disponible aussi pour Max/MSP, Pure Data, Unity, Python, SuperCollider, openFrameworks et Qt.
Quelques objets ajoutés à un patch ou à un projet, et ses paramètres apparaissent dans score, prêts à être automatisés.
