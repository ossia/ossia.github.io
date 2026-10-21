---
layout: use-case
lang: fr
title: "Logiciel de régie de spectacle libre et gratuit"
headline: "Régie de spectacle"
subtitle: "ossia score permet d'écrire la conduite d'un spectacle sur une timeline, dont certaines parties attendent le top du régisseur ou un événement sur le plateau."
permalink: /fr/regie-spectacle.html
translation: /show-control.html
category: site-score
description: "Régie de spectacle libre et gratuite pour Windows, macOS et Linux : cues son, vidéo, lumière DMX, OSC et MIDI sur une timeline interactive."
image: /assets/social/ossia-score-og.jpg
---

ossia score permet d'écrire la conduite d'un spectacle : le son, la vidéo, la lumière et les appareils OSC ou MIDI sont placés sur une timeline, et certaines parties de cette timeline attendent un événement extérieur, par exemple le top du régisseur, une touche du clavier, une note MIDI, un message OSC envoyé par un autre ordinateur ou un capteur sur le plateau.
Le logiciel est issu des recherches sur les partitions interactives menées au LaBRI et au SCRIME, à Bordeaux ; une conduite y est donc une partition dont une partie est fixée dans le temps et une autre déclenchée pendant la représentation.
Le spectacle de danse *Walking Down The Street* (Lina Rahal et Jean-Marie Colin, 2021) est par exemple entièrement conduit par score, et joué en direct avec un Karlax.

<picture><img src="/assets/blog/v3-9/scriptable-processes.webp" width="1077" height="650" loading="lazy" alt="Une timeline ossia score où les paramètres d'un effet sont mis en cue et automatisés comme ceux d'un appareil externe"/></picture>

## Cues et scènes

Une cue mémorise l'état des appareils OSC, MIDI et DMX ; on la rappelle depuis la timeline, à la main, ou depuis un contrôleur MIDI ([cues](https://ossia.io/score-docs/cues.html)).
Depuis la version 3.9, les paramètres des processus internes de score (le dosage d'une réverbération, la vitesse d'un shader, etc.) peuvent être mis en cue et automatisés de la même manière que ceux d'un appareil externe.

La conduite est découpée en scènes, qui attendent chacune leur top ; en répétition, *Play from here* permet de reprendre à n'importe quel endroit ([scènes](https://ossia.io/score-docs/common-practices/6-scenes.html)).
Le mode exclusif d'un scénario ne laisse jouer qu'un intervalle à la fois, ce qui sert notamment pour des sons ou des vidéos qui se remplacent.

## Médias et appareils

Une conduite peut contenir :

- des fichiers son multicanaux, avec time-stretching, de la vidéo HAP et H.264, et des plug-ins VST, VST3, CLAP et LV2 ([son](https://ossia.io/score-docs/processes/soundfile.html), [vidéo](https://ossia.io/score-docs/processes/video.html)) ;
- de la lumière, en Art-Net, en sACN ou via une interface DMX USB, avec une bibliothèque de projecteurs ([DMX](https://ossia.io/score-docs/devices/artnet-device.html)) ;
- tout appareil qui communique en OSC, OSCQuery, MIDI, HTTP, WebSockets, MQTT ou par port série ;
- les vidéoprojecteurs, mélangeurs et caméras pris en charge par les modules Bitfocus Companion, à installer depuis le gestionnaire de paquets ([Companion](https://ossia.io/score-docs/devices/companion-device.html)) ;
- le lancement d'autres programmes ou de scripts ([lanceur de processus](https://ossia.io/score-docs/processes/process-launcher.html)).

Les outils de projet rassemblent les médias dans le dossier du spectacle, signalent les fichiers manquants et produisent une archive zip de la conduite, ce qui est utile en tournée.

## Timecode

score lit et génère du LTC, de l'horloge MIDI et du MIDI timecode ([LTC](https://ossia.io/score-docs/processes/ltc-input.html)).
Lorsqu'il suit un timecode entrant, le synchroniseur ajuste la vitesse de lecture progressivement plutôt que de sauter d'une position à une autre ([synchroniseur de timecode](https://ossia.io/score-docs/processes/timecode-synchronizer.html)) ; un scénario peut aussi être parcouru à la souris, ou joué à l'envers.

## Pendant la représentation

Le spectacle peut être lancé et arrêté depuis un navigateur, sur un téléphone par exemple, ou depuis n'importe quel contrôleur OSC ([contrôle à distance](https://ossia.io/score-docs/in-depth/remote.html)).
Les surfaces de contrôle compatibles MCU suivent le processus sélectionné, et un contrôleur MIDI décrit une fois apparaît avec le nom de chacun de ses boutons et faders ([contrôleurs MIDI](https://ossia.io/score-docs/devices/midi-controller-device.html)).

score fonctionne sous Windows, macOS, Linux et sur Raspberry Pi, avec les mêmes fonctions, à l'exception de celles qui dépendent d'un système ou d'un matériel particulier (Spout, Syphon, CUDA, etc.).
Il peut conduire un spectacle à lui seul, ou piloter en OSC, MIDI ou DMX ce qui est déjà en place : serveur média, pupitre lumière, station audionumérique.

D'autres spectacles sont présentés dans la [galerie](/gallery.html) ; la [documentation](https://ossia.io/score-docs/) (en anglais) détaille chacune de ces fonctions.
