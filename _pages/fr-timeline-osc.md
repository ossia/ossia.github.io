---
layout: use-case
lang: fr
title: "Séquenceur et timeline OSC, MIDI et DMX gratuit"
headline: "Une timeline OSC, MIDI et DMX"
subtitle: "Dessinez des courbes d'automation pour n'importe quel paramètre OSC, MIDI ou DMX, ajoutez des déclencheurs et des conditions, et découvrez vos appareils automatiquement grâce à OSCQuery. Libre et gratuit, sous Windows, macOS et Linux."
permalink: /fr/timeline-osc-midi-dmx.html
translation: /osc-midi-dmx-timeline.html
category: site-score
description: "Séquenceur OSC, MIDI et DMX libre pour Windows, macOS et Linux : courbes d'automation, OSCQuery, déclencheurs et conditions."
image: /assets/social/ossia-score-og.jpg
---

ossia score est né comme un séquenceur OSC : chaque paramètre de chaque appareil du réseau devient une adresse que l'on peut automatiser,
enregistrer, transformer et écrire dans le temps. Il sert à piloter des patchs, des moteurs de jeu, des serveurs média, de la lumière ou des robots.

## Ce que vous pouvez faire

- **Des courbes d'automation** sur n'importe quelle adresse : OSC, CC MIDI, canaux DMX, ou paramètres des processus d'ossia score ([automations](https://ossia.io/score-docs/quick-start/writing-automations.html)).
- **OSCQuery** : parcourez les paramètres des logiciels compatibles (par exemple les patchs et applications qui utilisent libossia) et glissez-les dans la partition au lieu de taper les adresses.
- **Des timelines interactives** : les déclencheurs attendent un message, les conditions choisissent entre plusieurs branches, les boucles et les scènes se répètent jusqu'à un événement ([timelines non linéaires](https://ossia.io/score-docs/quick-start/breaking-the-timeline.html)).
- **Mapping** : mettez à l'échelle, lissez et transformez les valeurs entre appareils, avec des courbes, du JavaScript ou des expressions mathématiques ([mapper](https://ossia.io/score-docs/devices/mapper-device.html)).
- **Toutes les entrées** : manettes de jeu, Wiimote, Leap Motion, contrôleurs MIDI, ports série et Arduino, capteurs Bluetooth LE, caméras de profondeur et protocoles de tracking (PosiStageNet, TUIO, RTTrP, OpenXR) ([capteurs vers OSC](https://ossia.io/score-docs/examples/devices/sensors2osc.html)).
- **De nombreux protocoles** : OSC en UDP, TCP, WebSockets et série, OSCQuery, MIDI, DMX (Art-Net, sACN, DMX USB), MQTT, CoAP, HTTP, LSL, CAN.
- **Temps musical** : tempo, mesures et quantification quand la partition doit suivre un tempo ([temps musical](https://ossia.io/score-docs/in-depth/musical.html)).

<picture><source type="image/avif" srcset="/assets/feature-interaction.avif"><img src="/assets/feature-interaction.webp" width="580" height="452" loading="lazy" alt="Une timeline interactive où un déclencheur attend un événement externe dans ossia score"/></picture>

## Bon à savoir

- Au-delà de l'automation linéaire, une timeline peut **attendre, bifurquer et boucler**, et contenir son, vidéo et 3D à côté des données de contrôle.
- La **télécommande web** offre une surface de contrôle simple sur téléphone ou tablette, sans application à installer.

## Fonctionne avec

ossia score parle nativement OSCQuery grâce à [libossia](/site-libossia/about.html), disponible aussi pour Max/MSP, Pure Data, Unity, Python, SuperCollider, openFrameworks et Qt :
ajoutez quelques objets à votre patch ou à votre projet et ses paramètres apparaissent dans score, prêts à être automatisés.
