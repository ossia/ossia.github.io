---
layout: use-case
lang: fr
title: "Logiciel de régie de spectacle libre et gratuit"
headline: "Un logiciel de régie de spectacle libre et gratuit"
subtitle: "Déclenchez le son, la vidéo, la lumière et n'importe quel appareil OSC ou MIDI depuis une timeline interactive. ossia score fonctionne sous Windows, macOS, Linux et Raspberry Pi."
permalink: /fr/regie-spectacle.html
translation: /show-control.html
category: site-score
description: "Régie de spectacle libre et gratuite pour Windows, macOS et Linux : cues son, vidéo, lumière DMX, OSC et MIDI sur une timeline interactive."
image: /assets/social/ossia-score-og.jpg
---

ossia score sert à conduire des spectacles de théâtre et de danse, des concerts, des installations muséales et des événements.
Il associe une timeline à des **cues, des déclencheurs et des conditions** : un spectacle peut suivre une séquence fixe, attendre le top du régisseur
ou réagir aux capteurs et aux interprètes, dans la même conduite.

## Ce que vous pouvez faire

- **Des cues pour tout** : mémorisez et rappelez l'état de vos appareils OSC, MIDI et DMX, jouez-les depuis la timeline, à la main ou sur un déclencheur externe comme un contrôleur MIDI ([cues](https://ossia.io/score-docs/cues.html)).
- **Scènes et sauts** : découpez le spectacle en scènes, attendez un GO, et reprenez depuis n'importe quel point avec *Play from here* ([scènes](https://ossia.io/score-docs/common-practices/6-scenes.html)).
- **Son et vidéo** : fichiers son multicanaux avec time-stretching, vidéo HAP et H.264, effets et plug-ins (VST, VST3, CLAP, LV2) ([son](https://ossia.io/score-docs/processes/soundfile.html), [vidéo](https://ossia.io/score-docs/processes/video.html)).
- **Lumière** : DMX en Art-Net, sACN et DMX USB, avec une bibliothèque de projecteurs ([DMX](https://ossia.io/score-docs/devices/artnet-device.html)).
- **Timecode** : LTC en entrée et en sortie, horloge MIDI et MIDI timecode ([LTC](https://ossia.io/score-docs/processes/ltc-input.html)).
- **Pilotez tout** : OSC, OSCQuery, MIDI, HTTP, WebSockets, MQTT, ports série, et modules Bitfocus Companion pour contrôler le matériel audiovisuel ([Companion](https://ossia.io/score-docs/devices/companion-device.html)).
- **Des cues sur n'importe quel paramètre** : depuis la version 3.9, les paramètres de chaque processus (effet, shader, synthétiseur…) peuvent être mis en cue et automatisés comme ceux d'un appareil externe.
- **Télécommande** : lancez et arrêtez le spectacle depuis un navigateur, un téléphone ou un contrôleur OSC ([contrôle à distance](https://ossia.io/score-docs/in-depth/remote.html)).

<img src="/assets/blog/v3-9/scriptable-processes.webp" width="1077" height="650" loading="lazy" alt="Cues et automations de paramètres de processus dans une timeline ossia score"/>

## Bon à savoir

- ossia score organise les cues **sur une timeline** plutôt que dans une liste numérotée : un spectacle linéaire est une suite de scènes qui attendent chacune un GO, et un spectacle interactif y ajoute conditions et embranchements.
- Il exécute directement les **modules Bitfocus Companion** : le matériel audiovisuel pris en charge par Companion peut être séquencé dans le temps.

ossia score ne cherche pas à remplacer tous les outils : il peut aussi piloter vos logiciels existants en OSC ou en MIDI,
par exemple un serveur média, une console lumière ou une station audionumérique.

## Qui l'utilise

Compagnies de théâtre et de danse, ensembles musicaux, musées et festivals : voyez la [galerie](/gallery.html) des spectacles et installations réalisés avec ossia score.
