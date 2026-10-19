---
layout: use-case
lang: fr
title: "Logiciel pour installations interactives et sonores"
headline: "Installations interactives et sonores"
subtitle: "Reliez capteurs, caméras et contrôleurs au son, à la vidéo et à la lumière, et faites fonctionner l'installation en autonomie sur un PC ou un Raspberry Pi. Libre et gratuit, pour les musées, les expositions et l'espace public."
permalink: /fr/installations-interactives.html
translation: /interactive-installations.html
category: site-score
description: "Logiciel libre pour installations interactives et sonores : capteurs, caméras de profondeur, son spatialisé et vidéo, en autonomie sur PC ou Raspberry Pi."
image: /assets/social/ossia-score-og.jpg
---

Une installation demande un logiciel qui réagit au public, tourne des mois sans surveillance et fonctionne sur du matériel modeste.
ossia score est utilisé pour cela dans des musées, des expositions, des résidences d'artistes et des laboratoires de recherche.

## Ce que vous pouvez faire

- **Percevoir le public** : caméras de profondeur (Orbbec, Intel RealSense, Azure Kinect, Kinect, Luxonis OAK), webcams avec détection de pose et vision par ordinateur, Leap Motion, manettes, capteurs Bluetooth LE et série, Arduino ([capteurs vers OSC](https://ossia.io/score-docs/examples/devices/sensors2osc.html)).
- **Systèmes de tracking** : PosiStageNet, TUIO, RTTrP, OpenTrackIO et OpenXR.
- **Son** : lecture multicanale, synthèse, plug-ins VST/CLAP/LV2, Faust, et spatialisation (DBAP, GBAP, pilotage de SpatGRIS, SPAT Revolution et des moteurs ADM-OSC) ([spatialisation](https://ossia.io/score-docs/common-practices/14-spatial-audio.html), [audio](https://ossia.io/score-docs/common-practices/4-audio.html)).
- **Vidéo, 3D et lumière** dans le même projet (voir [vidéo et mapping](/fr/mapping-video.html) et [éclairage DMX](/fr/eclairage-dmx.html)).
- **Un comportement non linéaire** : états, conditions et boucles décrivent comment l'installation évolue et réagit, au lieu d'une simple playlist ([timelines non linéaires](https://ossia.io/score-docs/quick-start/breaking-the-timeline.html)).
- **En autonomie** : mode sans interface avec lecture automatique, Raspberry Pi et Linux embarqué (Yocto), et applications autonomes personnalisées pour les bornes ([mode sans interface](https://ossia.io/score-docs/faq/nogui.html), [Raspberry Pi](https://ossia.io/score-docs/in-depth/embedded.html), [applications](https://ossia.io/score-docs/development/custom-apps.html)).
- **Sonification de données** : jouez des jeux de données CSV et HDF5 en son, en lumière ou en images.

<picture><source type="image/avif" srcset="/assets/features/gamepad.avif"><img src="/assets/features/gamepad.webp" width="320" height="270" loading="lazy" alt="Une manette de jeu qui contrôle des paramètres dans ossia score"/></picture>

## Bon à savoir

- ossia score **n'est pas une station de production musicale** : il sert à jouer, spatialiser et faire réagir le son, que vous produisez avec vos outils habituels.
- Il convient aux œuvres que les artistes et techniciens doivent pouvoir ajuster **sans programmer**, tout en gardant du script (JavaScript, Faust, shaders, C++) pour certaines parties.
- Pour une application entièrement sur mesure, [libossia](/site-libossia/about.html) peut exposer ses paramètres à score.

Voyez la [galerie](/gallery.html) des installations réalisées avec ossia score.
