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
- **Pilotez tout** : OSC, OSCQuery, MIDI, HTTP, WebSockets, MQTT, ports série, et modules Bitfocus Companion du gestionnaire de paquets pour contrôler le matériel audiovisuel ([Companion](https://ossia.io/score-docs/devices/companion-device.html)).
- **Des cues sur n'importe quel paramètre** : depuis la version 3.9, les paramètres de chaque processus (effet, shader, synthétiseur…) peuvent être mis en cue et automatisés comme ceux d'un appareil externe.
- **Télécommande** : lancez et arrêtez le spectacle depuis un navigateur, un téléphone ou un contrôleur OSC ([contrôle à distance](https://ossia.io/score-docs/in-depth/remote.html)).
- **Surfaces de contrôle** : les surfaces à faders compatibles MCU suivent le processus sélectionné, et un contrôleur MIDI peut être décrit une fois pour que ses boutons et faders aient des noms ([contrôleurs MIDI](https://ossia.io/score-docs/devices/midi-controller-device.html)).
- **Suivre, parcourir et revenir en arrière** : le synchroniseur suit en douceur un timecode entrant, et un scénario peut être parcouru à la souris ou joué à l'envers ([synchroniseur de timecode](https://ossia.io/score-docs/processes/timecode-synchronizer.html)).
- **Cues alternées** : le mode exclusif ne joue qu'un intervalle à la fois, pour des sons ou des vidéos qui se remplacent.
- **Des conduites qui voyagent** : rassemblez tous les médias dans le dossier du projet, retrouvez les fichiers manquants et archivez le spectacle en zip.
- **Lancez d'autres programmes** et des commandes système depuis la timeline ([lanceur de processus](https://ossia.io/score-docs/processes/process-launcher.html)).

<img src="/assets/blog/v3-9/scriptable-processes.webp" width="1077" height="650" loading="lazy" alt="Cues et automations de paramètres de processus dans une timeline ossia score"/>

## Les besoins de la régie, et les réponses d'ossia score

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>Ce dont vous avez besoin</th><th>Comment ossia score y répond</th></tr></thead>
<tbody>
<tr><td>Une suite de cues lancées chacune par un GO</td><td>Des scènes qui attendent chacune un GO depuis le clavier, un contrôleur MIDI, l'OSC ou un navigateur, et <i>Play from here</i> pour reprendre n'importe où.</td></tr>
<tr><td>Travailler sous Windows, Linux ou sur un Raspberry Pi, sans licence à acheter</td><td>Libre et gratuit sur tous les systèmes, avec les mêmes fonctions partout, sauf les fonctions liées à un système ou à un matériel, comme Spout, Syphon ou CUDA.</td></tr>
<tr><td>Un spectacle qui réagit aux interprètes ou au public</td><td>Déclencheurs, conditions et scènes à embranchements, alimentés par des capteurs, des caméras, du tracking ou n'importe quel message OSC ou MIDI.</td></tr>
<tr><td>Son, vidéo et lumière dans une seule conduite</td><td>Son multicanal, vidéo, 3D, lumière DMX et appareils OSC/MIDI sur la même timeline.</td></tr>
<tr><td>Piloter le matériel audiovisuel : vidéoprojecteurs, mélangeurs, caméras</td><td>Les modules Bitfocus Companion, installés depuis le gestionnaire de paquets, fonctionnent directement dans ossia score.</td></tr>
<tr><td>Suivre un timecode</td><td>LTC en entrée et en sortie, horloge MIDI et MIDI timecode.</td></tr>
</tbody>
</table>
</div>

ossia score peut conduire un spectacle entier à lui seul, et il peut aussi piloter les logiciels et le matériel que vous avez déjà en OSC, MIDI ou DMX,
par exemple un serveur média, un pupitre lumière ou une station audionumérique.

## Qui l'utilise

Compagnies de théâtre et de danse, ensembles musicaux, musées et festivals : voyez la [galerie](/gallery.html) des spectacles et installations réalisés avec ossia score.
