---
layout: use-case
lang: fr
title: "Séquenceur et timeline OSC, MIDI et DMX gratuit"
headline: "Une timeline OSC, MIDI et DMX"
subtitle: "ossia score permet d'écrire des automations pour n'importe quel paramètre OSC, MIDI ou DMX sur une timeline, qui peut aussi attendre des événements extérieurs."
permalink: /fr/timeline-osc-midi-dmx.html
ref: osc-timeline
nav_title: "Timeline OSC, MIDI et DMX"
blurb: "Automatisez n'importe quel paramètre OSC, MIDI ou DMX sur une timeline interactive, avec déclencheurs et conditions."
category: site-score
description: "Séquenceur OSC, MIDI et DMX libre pour Windows, macOS et Linux : courbes d'automation, OSCQuery, déclencheurs et conditions."
image: /assets/social/ossia-score-og.jpg
---

ossia score est à l'origine un séquenceur OSC : chaque paramètre de chaque appareil du réseau est une adresse, que l'on peut automatiser, enregistrer, transformer et placer dans le temps.
On s'en sert notamment pour piloter des patchs, des moteurs de jeu, des serveurs média, de la lumière ou des robots, la même timeline pouvant aussi contenir du son, de la vidéo, de la 3D et des shaders.

## Automations

Une courbe d'automation peut viser une adresse OSC, un CC MIDI, un canal DMX ou un paramètre de l'un des processus de score ([automations](https://ossia.io/score-docs/quick-start/writing-automations.html)) ; lorsque la partition doit suivre une pulsation, on peut activer le tempo, les mesures et la quantification ([temps musical](https://ossia.io/score-docs/in-depth/musical.html)).

La timeline n'est pas nécessairement linéaire : un déclencheur attend un message entrant, une condition choisit entre plusieurs branches, et une boucle se répète jusqu'à ce qu'un événement se produise ([timelines non linéaires](https://ossia.io/score-docs/quick-start/breaking-the-timeline.html)).

<picture><source type="image/avif" srcset="/assets/feature-interaction.avif"><img src="/assets/feature-interaction.webp" width="580" height="452" loading="lazy" alt="Une timeline ossia score où un déclencheur attend un événement extérieur avant la partie suivante"/></picture>

## Appareils et protocoles

Les logiciels compatibles OSCQuery, par exemple les patchs et applications qui utilisent libossia, apparaissent dans l'explorateur d'appareils avec tous leurs paramètres ; il suffit de glisser un paramètre dans la partition pour que son adresse soit renseignée.
Les appareils OSC classiques peuvent être découverts sur le réseau local via Bonjour/Zeroconf, et les paramètres d'une partition peuvent être publiés de la même manière.

<picture><img src="/assets/features/oscquery.webp" width="1600" height="1290" loading="lazy" alt="L'arbre OSCQuery d'une session ossia score affiché en JSON dans un navigateur, à côté du même arbre dans l'explorateur d'appareils"/></picture>

L'OSC est pris en charge en UDP, en TCP (client ou serveur), en WebSockets et sur port série, avec les encapsulations SLIP et COBS, et les noms d'hôtes peuvent remplacer les adresses IP.
Le même projet peut également utiliser le MIDI, le DMX (Art-Net, sACN, DMX USB), MQTT, CoAP, HTTP, LSL et CAN.

Parmi les entrées, on trouve les manettes de jeu, les Wiimote, le Leap Motion, les contrôleurs MIDI, les Arduino en série, les capteurs Bluetooth LE, les caméras de profondeur, ainsi que des protocoles de tracking comme PosiStageNet, TUIO, RTTrP et OpenTrackIO ([capteurs vers OSC](https://ossia.io/score-docs/examples/devices/sensors2osc.html)).
Pour le MIDI, score gère les ports virtuels, les ports MIDI réseau fournis par le système d'exploitation, la lecture de fichiers MIDI, les filtres, les gammes microtonales Scala, et le clavier de l'ordinateur comme entrée MIDI ([MIDI](https://ossia.io/score-docs/in-depth/midi.html)).

## Mapping et filtrage

Le mapper et les filtres de valeurs se placent entre une entrée et sa cible : calibration, zones mortes, noise gate, hystérésis, anti-rebond et courbes d'easing sont disponibles, ce qui sert en particulier pour les capteurs ([filtre de valeurs](https://ossia.io/score-docs/processes/value-filter.html), [calibrateur](https://ossia.io/score-docs/processes/calibrator.html), [mapper](https://ossia.io/score-docs/devices/mapper-device.html)).
Les correspondances s'écrivent sous forme de courbes, en JavaScript ou avec des expressions mathématiques, et les motifs d'adresses OSC envoient une valeur à tout un groupe d'appareils à la fois ([motifs d'adresses](https://ossia.io/score-docs/in-depth/pattern-matching.html)).

Tout appareil peut être enregistré en CSV puis rejoué, y compris le DMX entrant ([enregistrement](https://ossia.io/score-docs/in-depth/recording.html)) ; la télécommande web offre une surface de contrôle simple sur téléphone, sans rien installer.

score dispose des mêmes fonctions sous Windows, macOS, Linux et sur Raspberry Pi, à l'exception de celles qui dépendent d'un système ou d'un matériel particulier (Spout, Syphon, CUDA, etc.).

## Avec vos propres logiciels

score gère nativement OSCQuery grâce à [libossia](/site-libossia/about.html), qui existe aussi pour Max/MSP, Pure Data, Unity, Python, SuperCollider, openFrameworks et Qt : il suffit d'ajouter quelques objets à un patch ou à un projet pour que ses paramètres apparaissent dans score.
