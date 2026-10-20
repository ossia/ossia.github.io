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
- **Zéro configuration** : les appareils OSC sont découverts sur le réseau via Bonjour/Zeroconf, et vos propres paramètres peuvent être publiés de la même façon ou en OSCQuery.
- **Tous les transports OSC** : UDP, TCP client et serveur, encapsulations SLIP et COBS, noms d'hôtes au lieu d'adresses IP.
- **Des données de capteurs propres** : calibration, zones mortes, noise gate, hystérésis, anti-rebond et courbes d'easing ([filtre de valeurs](https://ossia.io/score-docs/processes/value-filter.html), [calibrateur](https://ossia.io/score-docs/processes/calibrator.html)).
- **Motifs d'adresses** : combinez, appliquez et balayez des motifs d'adresses OSC pour piloter de nombreux appareils à la fois ([motifs](https://ossia.io/score-docs/in-depth/pattern-matching.html)).
- **Outils MIDI** : ports MIDI virtuels et réseau, lecture de fichiers MIDI, filtres, gammes microtonales Scala, et le clavier de l'ordinateur comme entrée MIDI ([MIDI](https://ossia.io/score-docs/in-depth/midi.html)).
- **Enregistrez et rejouez** n'importe quel appareil en CSV, y compris le DMX entrant ([enregistrement](https://ossia.io/score-docs/in-depth/recording.html)).

<picture><source type="image/avif" srcset="/assets/feature-interaction.avif"><img src="/assets/feature-interaction.webp" width="580" height="452" loading="lazy" alt="Une timeline interactive où un déclencheur attend un événement externe dans ossia score"/></picture>

## Les besoins du séquençage OSC, et les réponses d'ossia score

<div class="comparison-scroll">
<table class="comparison">
<tr><th>Ce dont vous avez besoin</th><th>Comment ossia score y répond</th></tr>
<tr><td>Automatiser dans le temps les paramètres d'un autre logiciel</td><td>Des courbes sur n'importe quelle adresse OSC, MIDI ou DMX, et OSCQuery pour parcourir les paramètres au lieu de les taper.</td></tr>
<tr><td>Le même outil sous Windows, macOS et Linux</td><td>Les mêmes fonctions sur les trois, et sur Raspberry Pi.</td></tr>
<tr><td>Une timeline qui attend des événements, bifurque et boucle</td><td>Déclencheurs, conditions et boucles font partie de la timeline.</td></tr>
<tr><td>Transformer contrôleurs et capteurs en OSC</td><td>Manettes, contrôleurs MIDI, Arduino, caméras de profondeur et systèmes de tracking, transformés avec des courbes, du JavaScript ou des expressions.</td></tr>
<tr><td>Du son et de la vidéo à côté des données de contrôle</td><td>Audio, vidéo, 3D et shaders dans la même timeline que vos automations OSC, MIDI et DMX.</td></tr>
<tr><td>Une surface de contrôle simple sur téléphone ou tablette</td><td>La télécommande web, sans application à installer.</td></tr>
</table>
</div>

## Fonctionne avec

ossia score parle nativement OSCQuery grâce à [libossia](/site-libossia/about.html), disponible aussi pour Max/MSP, Pure Data, Unity, Python, SuperCollider, openFrameworks et Qt :
ajoutez quelques objets à votre patch ou à votre projet et ses paramètres apparaissent dans score, prêts à être automatisés.
