---
layout: use-case
lang: fr
title: "Logiciel de régie de spectacle libre et gratuit"
headline: "Un logiciel de régie de spectacle libre et gratuit"
subtitle: "Déclenchez le son, la vidéo, la lumière et n'importe quel appareil OSC ou MIDI depuis une timeline interactive. ossia score fonctionne sous Windows, macOS, Linux et Raspberry Pi : une alternative libre à QLab et aux autres lecteurs de cues."
permalink: /fr/regie-spectacle.html
translation: /show-control.html
category: site-score
description: "Régie de spectacle libre et gratuite pour Windows, macOS et Linux : cues son, vidéo, lumière DMX, OSC et MIDI sur une timeline interactive. Alternative à QLab."
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

## ossia score face aux lecteurs de cues

<div class="comparison-scroll">
<table class="comparison">
<tr><th>Logiciel</th><th>Choisissez ossia score si…</th><th>Gardez l'autre logiciel si…</th></tr>
<tr><td><b>QLab</b> (macOS)</td><td>vous travaillez sous Windows ou Linux, cherchez un outil gratuit, ou voulez un spectacle interactif : conditions, capteurs, scènes à embranchements, vidéo générative et 3D.</td><td>vous voulez une liste de cues linéaire avec un bouton GO et une numérotation de type théâtre : ossia score organise les cues sur une timeline.</td></tr>
<tr><td><b>Linux Show Player, SCS, Multiplay</b></td><td>vous avez besoin de vidéo, de lumière et d'appareils OSC/MIDI dans le même spectacle, sur n'importe quel système.</td><td>une simple liste de cues son vous suffit.</td></tr>
<tr><td><b>Bitfocus Companion</b></td><td>vous voulez séquencer du matériel audiovisuel dans le temps : ossia score exécute directement les modules Companion.</td><td>vous avez surtout besoin d'une surface de contrôle Stream Deck ; les deux se complètent bien.</td></tr>
</table>
</div>

ossia score ne cherche pas à remplacer tous les outils : il peut aussi piloter vos logiciels existants en OSC ou en MIDI,
par exemple un serveur média, une console lumière ou une station audionumérique.

## Qui l'utilise

Compagnies de théâtre et de danse, ensembles musicaux, musées et festivals : voyez la [galerie](/gallery.html) des spectacles et installations réalisés avec ossia score.
