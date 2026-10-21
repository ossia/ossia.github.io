---
layout: use-case
lang: fr
title: "Logiciel pour escape games et attractions"
headline: "Escape games et attractions interactives"
subtitle: "ossia score permet d'écrire la logique de jeu d'un escape game ou d'une attraction, les énigmes, les accessoires et les capteurs pilotant le son, la vidéo et la lumière."
permalink: /fr/escape-games.html
ref: escape-rooms
nav_title: "Escape games et attractions"
blurb: "Énigmes, accessoires et capteurs qui pilotent son, vidéo et lumière, avec logique de jeu et panneau maître du jeu."
category: site-score
description: "Logiciel libre pour escape games et attractions : capteurs et accessoires, logique de jeu avec déclencheurs et conditions, son, vidéo et DMX, en autonomie."
image: /assets/social/ossia-score-og.jpg
---

ossia score permet de faire fonctionner un escape game, un train fantôme ou un jeu muséal, c'est-à-dire un spectacle dont l'ordre est décidé par les joueurs : chaque scène de la partition attend que son énigme soit résolue, puis joue ses changements de son, de vidéo et de lumière.

<picture><img src="/assets/use-cases/non-linear-scenario.webp" width="1200" height="689" loading="lazy" alt="Un scénario ossia score où un fondu attend un déclencheur nommé From activity sensor, dans une timeline qui boucle"/></picture>

## Logique de jeu

Un déclencheur attend un bouton, un capteur ou un message, une condition décide de la suite, et une boucle maintient une ambiance jusqu'à ce qu'une énigme soit résolue ([timelines non linéaires](https://ossia.io/score-docs/quick-start/breaking-the-timeline.html), [aiguillages](https://ossia.io/score-docs/common-practices/2-switches.html), [déclenchement hors du temps](https://ossia.io/score-docs/common-practices/3-out-of-time.html)).
Compteurs, chronomètres, scores et règles particulières peuvent être écrits en JavaScript lorsque les outils visuels ne suffisent pas ([JavaScript](https://ossia.io/score-docs/processes/javascript.html)).

## Accessoires et énigmes

Les Arduino et autres microcontrôleurs se connectent en série, les accessoires en réseau en MQTT, HTTP ou WebSocket, et les capteurs Bluetooth LE, les manettes et les pads MIDI sont pris en charge directement ([série](https://ossia.io/score-docs/devices/serial-device.html), [MQTT](https://ossia.io/score-docs/devices/mqtt-device.html), [BLE](https://ossia.io/score-docs/devices/ble-device.html)).
Sur un Raspberry Pi ou une autre carte Linux, score pilote lui-même les broches GPIO, PWM, ADC et DAC, par exemple pour des boutons, des relais et des ventouses magnétiques ([entrées-sorties brutes](https://ossia.io/score-docs/devices/rawio-device.html)), et une webcam peut détecter les joueurs, leurs poses et des objets (voir [IA en temps réel](/fr/ia-temps-reel.html)).

Dans la salle elle-même, score joue des ambiances et des effets multicanaux, affiche de la vidéo et du texte sur des écrans et pilote la lumière DMX, l'ensemble évoluant avec le jeu.

## Maître du jeu et exploitation

Depuis un navigateur web sur téléphone ou tablette, le maître du jeu peut suivre la partie, déclencher les scènes d'indices préparées à l'avance, passer une énigme, ou relancer une scène avec *Play from here* ([contrôle à distance](https://ossia.io/score-docs/in-depth/remote.html)).

La salle peut fonctionner toute la journée en mode sans interface avec lecture automatique, sur un PC ou un Raspberry Pi, et indiquer l'usage du processeur, de la mémoire et du réseau ([mode sans interface](https://ossia.io/score-docs/faq/nogui.html), [supervision](https://ossia.io/score-docs/faq/monitor-activity.html)).
