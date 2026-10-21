---
layout: use-case
lang: fr
title: "Logiciel pour escape games et attractions"
headline: "Escape games et attractions interactives"
subtitle: "Reliez énigmes, capteurs et accessoires au son, à la vidéo et à la lumière, décrivez la logique du jeu avec des déclencheurs et des conditions, et faites tourner la salle toute la journée sur un PC ou un Raspberry Pi, avec un panneau maître du jeu dans le navigateur. Libre et gratuit."
permalink: /fr/escape-games.html
translation: /escape-rooms.html
category: site-score
description: "Logiciel libre pour escape games et attractions : capteurs et accessoires, logique de jeu avec déclencheurs et conditions, son, vidéo et DMX, en autonomie."
image: /assets/social/ossia-score-og.jpg
---

Un escape game, une maison hantée ou un jeu de musée est un spectacle dont l'ordre est décidé par les joueurs.
ossia score décrit cette logique sur une timeline : chaque scène attend qu'une énigme soit résolue, puis joue ses changements de son, de vidéo et de lumière.

## Ce que vous pouvez faire

- **Une logique de jeu sans code** : les déclencheurs attendent un bouton, un capteur ou un message ; les conditions choisissent la suite ; les boucles répètent une ambiance jusqu'à la résolution d'une énigme ([timelines non linéaires](https://ossia.io/score-docs/quick-start/breaking-the-timeline.html), [aiguillages](https://ossia.io/score-docs/common-practices/2-switches.html), [déclenchement hors timeline](https://ossia.io/score-docs/common-practices/3-out-of-time.html)).
- **Énigmes et accessoires** : Arduino et microcontrôleurs en série, accessoires en réseau en MQTT, HTTP ou WebSocket, capteurs Bluetooth LE, manettes et pads MIDI ([série](https://ossia.io/score-docs/devices/serial-device.html), [MQTT](https://ossia.io/score-docs/devices/mqtt-device.html), [BLE](https://ossia.io/score-docs/devices/ble-device.html)).
- **L'électronique sur l'ordinateur lui-même** : GPIO, PWM, ADC et DAC sur des cartes Linux comme le Raspberry Pi, pour des boutons, des relais et des ventouses magnétiques ([entrées-sorties brutes](https://ossia.io/score-docs/devices/rawio-device.html)).
- **Son, vidéo et lumière** : ambiances et effets multicanaux, vidéo et texte sur écrans, lumière DMX, tous modifiés par le jeu.
- **Panneau maître du jeu** : suivez et pilotez la partie depuis un navigateur sur téléphone ou tablette : déclenchez les scènes d'indices que vous avez préparées, passez une énigme ou relancez une scène avec *Play from here* ([contrôle à distance](https://ossia.io/score-docs/in-depth/remote.html)).
- **Caméras** : détectez les joueurs, leurs poses et des objets avec une webcam (voir [IA en temps réel](/fr/ia-temps-reel.html)).
- **Du script si besoin** : JavaScript pour les compteurs, minuteurs, scores et règles particulières ([JavaScript](https://ossia.io/score-docs/processes/javascript.html)).
- **Tourne toute la journée** : mode sans interface avec lecture automatique sur PC ou Raspberry Pi, avec supervision du processeur, de la mémoire et du réseau ([mode sans interface](https://ossia.io/score-docs/faq/nogui.html), [supervision](https://ossia.io/score-docs/faq/monitor-activity.html)).

## Les besoins d'un escape game, et les réponses d'ossia score

<div class="comparison-scroll">
<table class="comparison">
<tr><th>Ce dont vous avez besoin</th><th>Comment ossia score y répond</th></tr>
<tr><td>Un jeu qui suit les joueurs, pas une séquence fixe</td><td>Les scènes attendent des déclencheurs, et des conditions choisissent entre plusieurs branches.</td></tr>
<tr><td>Des accessoires, serrures et capteurs de fabricants variés</td><td>Série, MQTT, HTTP, WebSocket, Bluetooth LE, MIDI, OSC et GPIO dans le même projet.</td></tr>
<tr><td>Un maître du jeu qui peut aider ou réinitialiser la salle</td><td>Un panneau web pour déclencher les scènes, y compris les indices préparés, et reprendre depuis n'importe quel point.</td></tr>
<tr><td>Un son, une vidéo et une lumière immersifs</td><td>Son multicanal, vidéo, 3D et DMX sur la même timeline que la logique du jeu.</td></tr>
<tr><td>Fonctionner tous les jours sans technicien</td><td>Lecture automatique sans interface sur PC ou Raspberry Pi, avec supervision du système.</td></tr>
</table>
</div>
