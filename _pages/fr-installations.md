---
layout: use-case
lang: fr
title: "Logiciel pour installations interactives et sonores"
headline: "Installations interactives et sonores"
subtitle: "ossia score permet de faire fonctionner des installations interactives et sonores, des capteurs et caméras jusqu'au son, à la vidéo et à la lumière, sur un PC ou un Raspberry Pi."
permalink: /fr/installations-interactives.html
ref: installations
nav_title: "Installations interactives"
blurb: "Capteurs, caméras et tracking, son et vidéo, en fonctionnement autonome sur un PC ou un Raspberry Pi."
category: site-score
description: "Logiciel libre pour installations interactives et sonores : capteurs, caméras de profondeur, son spatialisé et vidéo, en autonomie sur PC ou Raspberry Pi."
image: /assets/social/ossia-score-og.jpg
---

ossia score permet de faire fonctionner une installation : d'une part des capteurs et des caméras, d'autre part du son, de la vidéo et de la lumière, avec une partition qui décrit comment l'œuvre réagit aux visiteurs et évolue dans le temps, sans que personne n'ait à la conduire.
*A Breathing Void* (Pía Baltazar, Centre Clark, Montréal, 2024) anime par exemple un voile de plastique avec des ventilateurs, des LED et du son spatialisé, et dans *[re]capture* (Eisode, Montréal, et Centre culturel canadien, Paris, 2024–2025), les caméras, le traitement vidéo, la lumière, les pompes et les moteurs sont pilotés par score sur un Raspberry Pi.

<picture><img src="/assets/gallery/organism.webp" width="540" height="360" loading="lazy" alt="Un grand pendule mécanique à roues à rayons, dont le mouvement est tracé par des traînées de lumière verte dans une salle obscure"/></picture>
<p class="figure-caption"><i>Organism + Excitable Chaos</i>, Navid Navab et Garnet Willis, Golden Nica au Prix Ars Electronica 2025 : la communication réseau entre le pendule et les ordinateurs passe par ossia-max. © Miha Godec</p>

## Capteurs et caméras

Les caméras de profondeur s'installent depuis le gestionnaire de paquets : Orbbec, Intel RealSense, Kinect, Azure Kinect (sous Windows et Linux) et Luxonis OAK ; on peut aussi utiliser de simples webcams, avec la détection de pose et la vision par ordinateur, ainsi que le Leap Motion, les manettes, les capteurs Bluetooth LE et série, et les cartes Arduino ([capteurs vers OSC](https://ossia.io/score-docs/examples/devices/sensors2osc.html)).
Sans matériel particulier, une simple caméra peut également fournir la profondeur, la segmentation et la pose de plusieurs personnes (voir [IA en temps réel](/fr/ia-temps-reel.html)).

Les systèmes de tracking sont pris en charge via PosiStageNet, TUIO, RTTrP et OpenTrackIO ; parmi les autres entrées, on trouve les centrales inertielles LP-Research, les tablettes Wacom, les périphériques d'entrée Linux bruts et le bus CAN.
Sur les cartes Linux comme le Raspberry Pi et l'Orange Pi, score lit et écrit les broches GPIO, PWM, ADC et DAC, et les œuvres qui dépendent de la position des personnes peuvent utiliser des zones géographiques, dessinées comme des polygones de latitude et de longitude ([zones géographiques](https://ossia.io/score-docs/processes/geo-zones.html)).

<picture><source type="image/avif" srcset="/assets/features/gamepad.avif"><img src="/assets/features/gamepad.webp" width="320" height="270" loading="lazy" alt="Une manette de jeu qui fait varier des paramètres dans ossia score"/></picture>

## Son, image et comportement

Pour le son, score gère la lecture multicanale, la synthèse, les plug-ins VST, CLAP et LV2, Faust, et la spatialisation, soit par DBAP et GBAP, soit par l'intermédiaire de SpatGRIS, de SPAT Revolution et des moteurs ADM-OSC ([spatialisation](https://ossia.io/score-docs/common-practices/14-spatial-audio.html), [audio](https://ossia.io/score-docs/common-practices/4-audio.html)).
La vidéo, la 3D et la lumière se trouvent dans le même projet (voir [vidéo et mapping](/fr/mapping-video.html) et [éclairage DMX](/fr/eclairage-dmx.html)), et des jeux de données CSV ou HDF5 peuvent être joués sous forme de son, de lumière ou d'images.

Plutôt qu'une playlist, l'œuvre est décrite par des états, des conditions et des boucles, de sorte qu'elle puisse évoluer et réagir à ce qui se passe dans la salle ([timelines non linéaires](https://ossia.io/score-docs/quick-start/breaking-the-timeline.html)) ; les parties qui le nécessitent peuvent être écrites en JavaScript, en Faust, en shaders ou en C++, et une application sur mesure peut exposer ses paramètres à score grâce à [libossia](/fr/libossia.html).

## Fonctionnement autonome

score ouvre le projet et le joue sans l'éditeur, sur un PC, un Raspberry Pi ou un système Linux embarqué construit avec Yocto ([mode sans interface](https://ossia.io/score-docs/faq/nogui.html), [Raspberry Pi](https://ossia.io/score-docs/in-depth/embedded.html)).
Un appareil système indique l'usage du processeur, de la carte graphique, de la mémoire, de la batterie et du réseau, ce qui permet de surveiller à distance une œuvre qui tourne longtemps ([supervision](https://ossia.io/score-docs/faq/monitor-activity.html)), et pour une borne, le projet peut être empaqueté en application autonome avec sa propre interface ([applications](https://ossia.io/score-docs/development/custom-apps.html)).

D'autres installations sont présentées dans la [galerie](/fr/galerie.html).
