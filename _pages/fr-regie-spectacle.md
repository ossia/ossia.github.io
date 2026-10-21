---
layout: use-case
lang: fr
title: "Logiciel de régie de spectacle libre et gratuit"
headline: "Régie de spectacle"
subtitle: "Le son, la vidéo, la lumière et les appareils OSC ou MIDI dans une seule conduite. Le spectacle peut se dérouler d'un bout à l'autre, attendre le top du régisseur ou réagir au plateau."
permalink: /fr/regie-spectacle.html
translation: /show-control.html
category: site-score
description: "Régie de spectacle libre et gratuite pour Windows, macOS et Linux : cues son, vidéo, lumière DMX, OSC et MIDI sur une timeline interactive."
image: /assets/social/ossia-score-og.jpg
---

Dans ossia score, une conduite est une timeline découpée en scènes. Chaque scène peut partir seule, attendre le top du régisseur ou attendre un événement sur le plateau : un capteur, une note MIDI, un message OSC venu d'un autre ordinateur.
Des compagnies de théâtre et de danse, des ensembles musicaux, des musées et des festivals s'en servent ainsi, souvent avec le son, la vidéo et la lumière du spectacle dans un seul fichier.

<picture><img src="/assets/blog/v3-9/scriptable-processes.webp" width="1077" height="650" loading="lazy" alt="Une timeline ossia score où les paramètres d'un effet sont mis en cue et automatisés comme ceux d'un appareil externe"/></picture>

## Cues et scènes

Une cue mémorise l'état de vos appareils OSC, MIDI et DMX ; on la rappelle depuis la timeline, à la main ou depuis un contrôleur MIDI ([cues](https://ossia.io/score-docs/cues.html)).
Depuis la version 3.9, cela marche aussi pour les paramètres de chaque processus interne : le dosage d'une réverbe ou la vitesse d'un shader se mettent en cue comme un fader de console.

Les scènes découpent le spectacle en parties qui attendent chacune leur top, et *Play from here* relance la répétition depuis n'importe quel point ([scènes](https://ossia.io/score-docs/common-practices/6-scenes.html)).
En mode exclusif, un seul intervalle joue à la fois : pratique pour des sons ou des vidéos qui se remplacent.

## Ce que contient une conduite

- Des fichiers son multicanaux avec time-stretching, de la vidéo HAP et H.264, des effets et des plug-ins VST, VST3, CLAP ou LV2 ([son](https://ossia.io/score-docs/processes/soundfile.html), [vidéo](https://ossia.io/score-docs/processes/video.html)).
- Du DMX en Art-Net, sACN et DMX USB, avec une bibliothèque de projecteurs ([DMX](https://ossia.io/score-docs/devices/artnet-device.html)).
- OSC, OSCQuery, MIDI, HTTP, WebSockets, MQTT et ports série, plus les modules Bitfocus Companion du gestionnaire de paquets pour les vidéoprojecteurs, mélangeurs et caméras ([Companion](https://ossia.io/score-docs/devices/companion-device.html)).
- Des commandes système et d'autres programmes, lancés depuis la timeline ([lanceur de processus](https://ossia.io/score-docs/processes/process-launcher.html)).

Avant une tournée, rassemblez tous les médias dans le dossier du projet, vérifiez les fichiers manquants et archivez la conduite en zip.

## Timecode et télécommande

score lit et génère le LTC, l'horloge MIDI et le MIDI timecode ([LTC](https://ossia.io/score-docs/processes/ltc-input.html)).
Le synchroniseur suit un timecode entrant en douceur, sans sauts, et un scénario peut être parcouru à la souris ou joué à l'envers ([synchroniseur de timecode](https://ossia.io/score-docs/processes/timecode-synchronizer.html)).

Le régisseur n'a pas besoin d'être devant l'ordinateur : le spectacle se lance et s'arrête depuis un navigateur sur téléphone, ou depuis n'importe quel contrôleur OSC ([contrôle à distance](https://ossia.io/score-docs/in-depth/remote.html)).
Les surfaces à faders compatibles MCU suivent le processus sélectionné, et un contrôleur MIDI décrit une fois affiche ensuite ses boutons avec leur nom ([contrôleurs MIDI](https://ossia.io/score-docs/devices/midi-controller-device.html)).

## En résumé

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>Vous voulez</th><th>Dans ossia score</th></tr></thead>
<tbody>
<tr><td>Une liste de cues, chacune lancée par un top</td><td>Des scènes qui attendent un top du clavier, d'un contrôleur MIDI, de l'OSC ou d'un navigateur, et <i>Play from here</i> pour reprendre n'importe où.</td></tr>
<tr><td>Windows, Linux ou un Raspberry Pi, sans licence</td><td>Le même logiciel gratuit partout, sauf les fonctions liées à un système ou à un matériel, comme Spout, Syphon ou CUDA.</td></tr>
<tr><td>Un spectacle qui réagit aux interprètes</td><td>Déclencheurs, conditions et scènes à embranchements, alimentés par capteurs, caméras, tracking ou messages OSC et MIDI.</td></tr>
<tr><td>Vidéoprojecteurs et mélangeurs sur la même cue</td><td>Les modules Bitfocus Companion, installés depuis le gestionnaire de paquets, dans score.</td></tr>
<tr><td>Se caler sur un timecode</td><td>LTC en entrée et en sortie, horloge MIDI et MIDI timecode.</td></tr>
</tbody>
</table>
</div>

score peut conduire tout le spectacle à lui seul. Il peut aussi se brancher sur ce que vous avez déjà, un serveur média, un pupitre lumière ou une station audionumérique, et le piloter en OSC, MIDI ou DMX.
La [galerie](/gallery.html) présente des spectacles et des installations réalisés de cette façon.
