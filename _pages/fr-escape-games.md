---
layout: use-case
lang: fr
title: "Logiciel pour escape games et attractions"
headline: "Escape games et attractions interactives"
subtitle: "Énigmes, accessoires et capteurs reliés au son, à la vidéo et à la lumière, une logique de jeu écrite sur une timeline, et un panneau web pour le maître du jeu."
permalink: /fr/escape-games.html
translation: /escape-rooms.html
category: site-score
description: "Logiciel libre pour escape games et attractions : capteurs et accessoires, logique de jeu avec déclencheurs et conditions, son, vidéo et DMX, en autonomie."
image: /assets/social/ossia-score-og.jpg
---

Un escape game, un train fantôme ou un jeu de musée, c'est un spectacle dont les joueurs décident l'ordre.
Dans ossia score, chaque scène attend que son énigme soit résolue, puis joue ses changements de son, de vidéo et de lumière.

<picture><img src="/assets/use-cases/non-linear-scenario.webp" width="1200" height="689" loading="lazy" alt="Un scénario ossia score où un fondu de sortie attend un déclencheur nommé From activity sensor, dans une timeline qui boucle"/></picture>

## Écrire le jeu

Un déclencheur attend un bouton, un capteur ou un message. Une condition décide de la suite. Une boucle entretient une ambiance tant que l'énigme n'est pas résolue ([timelines non linéaires](https://ossia.io/score-docs/quick-start/breaking-the-timeline.html), [aiguillages](https://ossia.io/score-docs/common-practices/2-switches.html), [déclenchement hors du temps](https://ossia.io/score-docs/common-practices/3-out-of-time.html)).
Compteurs, chronomètres, scores et règles maison s'écrivent en JavaScript quand les outils visuels ne suffisent plus ([JavaScript](https://ossia.io/score-docs/processes/javascript.html)).

## Accessoires et énigmes

Les Arduino et autres microcontrôleurs se branchent en série, les accessoires en réseau en MQTT, HTTP ou WebSocket, et les capteurs Bluetooth LE, manettes et pads MIDI directement ([série](https://ossia.io/score-docs/devices/serial-device.html), [MQTT](https://ossia.io/score-docs/devices/mqtt-device.html), [BLE](https://ossia.io/score-docs/devices/ble-device.html)).
Sur un Raspberry Pi ou une autre carte Linux, score pilote lui-même les broches GPIO, PWM, ADC et DAC, pour des boutons, des relais et des ventouses magnétiques ([entrées-sorties brutes](https://ossia.io/score-docs/devices/rawio-device.html)).
Une webcam peut détecter les joueurs, les poses et les objets (voir [IA en temps réel](/fr/ia-temps-reel.html)).

La salle reçoit des ambiances et des effets multicanaux, de la vidéo et du texte sur des écrans, et de la lumière DMX, le tout modifié par le jeu.

## Le maître du jeu

Depuis un navigateur sur téléphone ou tablette, le maître du jeu suit la partie, déclenche les scènes d'indices que vous avez préparées, saute une énigme ou relance une scène avec *Play from here* ([contrôle à distance](https://ossia.io/score-docs/in-depth/remote.html)).

La salle peut tourner toute la journée en mode sans interface avec lecture automatique, sur PC ou Raspberry Pi, en signalant l'usage du processeur, de la mémoire et du réseau ([mode sans interface](https://ossia.io/score-docs/faq/nogui.html), [supervision](https://ossia.io/score-docs/faq/monitor-activity.html)).

## En résumé

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>Vous voulez</th><th>Dans ossia score</th></tr></thead>
<tbody>
<tr><td>Un jeu qui suit les joueurs</td><td>Des scènes qui attendent des déclencheurs, et des conditions qui choisissent entre plusieurs branches.</td></tr>
<tr><td>Des accessoires et serrures de fabricants variés</td><td>Série, MQTT, HTTP, WebSocket, Bluetooth LE, MIDI, OSC et GPIO dans le même projet.</td></tr>
<tr><td>Un maître du jeu qui peut aider ou réinitialiser la salle</td><td>Un panneau web qui déclenche les scènes, y compris vos indices, et reprend depuis n'importe quel point.</td></tr>
<tr><td>Ouvrir chaque jour sans technicien</td><td>Lecture automatique sans interface sur PC ou Raspberry Pi, avec supervision.</td></tr>
</tbody>
</table>
</div>
