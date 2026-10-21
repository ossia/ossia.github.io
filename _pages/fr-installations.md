---
layout: use-case
lang: fr
title: "Logiciel pour installations interactives et sonores"
headline: "Installations interactives et sonores"
subtitle: "Des capteurs et des caméras en entrée, du son, de la vidéo et de la lumière en sortie, sur un PC ou un Raspberry Pi que personne n'a besoin de surveiller."
permalink: /fr/installations-interactives.html
translation: /interactive-installations.html
category: site-score
description: "Logiciel libre pour installations interactives et sonores : capteurs, caméras de profondeur, son spatialisé et vidéo, en autonomie sur PC ou Raspberry Pi."
image: /assets/social/ossia-score-og.jpg
---

Une installation doit réagir aux personnes présentes, continuer à jouer quand personne ne s'en occupe, et tient souvent sur du matériel modeste.
ossia score sert à cela dans des musées, des expositions, des résidences d'artistes et des laboratoires de recherche.

<picture><img src="/assets/gallery/organism.webp" width="540" height="360" loading="lazy" alt="Un grand pendule mécanique à roues à rayons, dont le mouvement laisse des traînées de lumière verte dans une salle sombre"/></picture>
<p class="figure-caption"><i>Organism + Excitable Chaos</i>, Navid Navab et Garnet Willis, Golden Nica au Prix Ars Electronica 2025 : la communication réseau entre le pendule et les ordinateurs passe par ossia-max. © Miha Godec</p>

## Percevoir le public

Les caméras de profondeur s'installent depuis le gestionnaire de paquets : Orbbec, Intel RealSense, Kinect, Azure Kinect (sous Windows et Linux) et Luxonis OAK. Une simple webcam fonctionne aussi, avec détection de pose et vision par ordinateur, tout comme Leap Motion, les manettes, les capteurs Bluetooth LE et série, et les cartes Arduino ([capteurs vers OSC](https://ossia.io/score-docs/examples/devices/sensors2osc.html)).
Sans matériel spécial, une caméra ordinaire donne la profondeur, la segmentation et la pose de plusieurs personnes (voir [IA en temps réel](/fr/ia-temps-reel.html)).

Les systèmes de tracking arrivent en PosiStageNet, TUIO, RTTrP ou OpenTrackIO. On peut aussi brancher des centrales inertielles LP-Research, des tablettes Wacom, des périphériques d'entrée Linux bruts et le bus CAN.
Sur des cartes Linux comme le Raspberry Pi et l'Orange Pi, score lit et écrit directement les broches GPIO, PWM, ADC et DAC.
Pour une œuvre qui dépend du lieu où se trouvent les gens, il existe des zones géographiques dessinées comme polygones de latitude et longitude ([zones géographiques](https://ossia.io/score-docs/processes/geo-zones.html)).

<picture><source type="image/avif" srcset="/assets/features/gamepad.avif"><img src="/assets/features/gamepad.webp" width="320" height="270" loading="lazy" alt="Une manette de jeu qui fait varier des paramètres dans ossia score"/></picture>

## Son, image et comportement

Pour le son : lecture multicanale, synthèse, plug-ins VST, CLAP et LV2, Faust, et spatialisation en DBAP et GBAP ou via les moteurs SpatGRIS, SPAT Revolution et ADM-OSC ([spatialisation](https://ossia.io/score-docs/common-practices/14-spatial-audio.html), [audio](https://ossia.io/score-docs/common-practices/4-audio.html)).
La vidéo, la 3D et la lumière vont dans le même projet (voir [vidéo et mapping](/fr/mapping-video.html) et [éclairage DMX](/fr/eclairage-dmx.html)). Des jeux de données CSV ou HDF5 peuvent se jouer en son, en lumière ou en images.

Au lieu d'une playlist, l'œuvre se décrit par des états, des conditions et des boucles : elle évolue et répond à ce qui se passe dans la salle ([timelines non linéaires](https://ossia.io/score-docs/quick-start/breaking-the-timeline.html)).

## La laisser tourner

score ouvre le projet et le joue sans l'éditeur, sur un PC, un Raspberry Pi ou un système Linux embarqué construit avec Yocto ([mode sans interface](https://ossia.io/score-docs/faq/nogui.html), [Raspberry Pi](https://ossia.io/score-docs/in-depth/embedded.html)).
Un appareil système indique l'usage du processeur, de la carte graphique, de la mémoire, de la batterie et du réseau, pour surveiller une œuvre de longue durée à distance ([supervision](https://ossia.io/score-docs/faq/monitor-activity.html)).
Pour une borne, le projet peut devenir une application autonome avec sa propre interface ([applications](https://ossia.io/score-docs/development/custom-apps.html)).

## En résumé

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>Vous voulez</th><th>Dans ossia score</th></tr></thead>
<tbody>
<tr><td>Une œuvre qui réagit aux visiteurs</td><td>Capteurs, caméras de profondeur et vision par ordinateur pilotent états, conditions et boucles.</td></tr>
<tr><td>Vidéo, lumière et son spatialisé ensemble</td><td>Un seul projet pour l'audio multicanal et spatialisé, la vidéo, la 3D et le DMX.</td></tr>
<tr><td>La faire tourner des mois sur du matériel abordable</td><td>Mode sans interface avec lecture automatique, Raspberry Pi et Linux embarqué, applications pour bornes.</td></tr>
<tr><td>Que l'équipe l'ajuste sans programmer</td><td>Une timeline et un patcher visuels, avec JavaScript, Faust, shaders ou C++ là où il en faut.</td></tr>
<tr><td>Brancher une application sur mesure</td><td><a href="/site-libossia/about.html">libossia</a> expose ses paramètres à score.</td></tr>
</tbody>
</table>
</div>

D'autres installations sont dans la [galerie](/gallery.html).
