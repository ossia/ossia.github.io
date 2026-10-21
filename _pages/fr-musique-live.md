---
layout: use-case
lang: fr
title: "Logiciel pour la musique électronique live"
headline: "Musique électronique live"
subtitle: "Synthétiseurs, boîtes à rythmes, samplers et séquenceurs pas à pas sur une timeline qui suit le tempo, l'horloge MIDI ou un vinyle timecode, avec les visuels et la lumière dans le même set."
permalink: /fr/musique-live.html
translation: /live-music.html
category: site-score
description: "Logiciel libre pour la musique électronique live : synthés, boîtes à rythmes, sampler, séquenceur, looper, plug-ins, horloge MIDI et vinyle timecode."
image: /assets/social/ossia-score-og.jpg
---

ossia score sert aux concerts, à l'électronique live et aux sets audiovisuels. Une pièce peut être écrite à la mesure près, improvisée sur des boucles et des motifs, ou un peu des deux, et les visuels comme la lumière suivent la même horloge.

<picture><img src="/assets/blog/v3-9/skins.webp" width="1502" height="720" loading="lazy" alt="Un patch ossia score avec le synthétiseur Synthimi, un affichage MIDI, une figure de Lissajous et une automation de couleur, dans l'un des thèmes de la 3.9"/></picture>

## Les instruments

score est livré avec un sampler multiformat (SF2, GIG, DLS et kits Hydrogen), des boîtes à rythmes, un synthétiseur FM, un granulateur polyphonique, Synthimi, Bytebeat et des modèles physiques Faust ([synthés](https://ossia.io/score-docs/examples/audio/synths.html), [granulaire](https://ossia.io/score-docs/examples/audio/granular.html)).
Côté effets, il y a la collection Airwindows, Faust, et des compresseurs, limiteurs, réverbes, filtres et délais intégrés. Les plug-ins VST, VST3, CLAP, LV2 et JSFX se chargent aussi, avec une automation des paramètres CLAP à l'échantillon près ([plug-ins audio](https://ossia.io/score-docs/processes/audio-plugins.html), [effets audio](https://ossia.io/score-docs/processes/audio-effects.html)).
Les gammes et correspondances de clavier Scala ouvrent la porte aux accordages microtonaux ([gammes](https://ossia.io/score-docs/examples/audio/scales.html)).

## Motifs et tempo

Les séquenceurs pas à pas gèrent accents et glissés, avec des bibliothèques de motifs 303 et de batterie. On trouve aussi un piano roll, un arpégiateur, l'humanisation et la quantification MIDI, et des rythmes euclidiens écrits en JavaScript ([patternist](https://ossia.io/score-docs/processes/patternist.html), [arpégiateur](https://ossia.io/score-docs/processes/arpeggiator.html)).

Le tempo et les mesures valent pour toute la partition. Les automations s'alignent sur la grille musicale, les LFO se calent sur la mesure, le looper quantifie à la mesure, et un détecteur de tempo écoute l'audio entrant ([temps musical](https://ossia.io/score-docs/in-depth/musical.html), [looper](https://ossia.io/score-docs/processes/audio-looper.html)).

<picture><img src="/assets/features/audio.webp" width="1600" height="1122" loading="lazy" alt="Des fichiers son et un plug-in de réverbe répartis en scènes sur une timeline ossia score, avec une automation du niveau d'effet"/></picture>

## Jouer avec d'autres

score envoie ou suit l'horloge MIDI et le MIDI timecode, suit le LTC, et se scratche avec un vinyle timecode sur une platine ([synchro MIDI](https://ossia.io/score-docs/processes/midi-sync.html), [vinyle timecode](https://ossia.io/score-docs/processes/xwax-dvs.html)).
Sur scène, il accepte les contrôleurs MIDI aux boutons et faders nommés, les surfaces compatibles MCU, les ports MIDI réseau fournis par le système d'exploitation, les contrôleurs à vent, les tablettes et les manettes.

Le même projet joue des shaders, de la 3D et de la vidéo réactifs au son, et fait suivre la musique à la lumière DMX (voir [vidéo](/fr/mapping-video.html) et [lumière](/fr/eclairage-dmx.html)).

## En résumé

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>Vous voulez</th><th>Dans ossia score</th></tr></thead>
<tbody>
<tr><td>Une pièce en partie écrite, en partie improvisée</td><td>Des sections fixes sur la timeline, avec des boucles, scènes et conditions qui vous attendent.</td></tr>
<tr><td>Des instruments et des effets sans acheter de plug-ins</td><td>Synthés, boîtes à rythmes, sampler, granulateur et des centaines d'effets, en plus de vos plug-ins.</td></tr>
<tr><td>Rester synchronisé avec d'autres musiciens</td><td>Horloge MIDI, MIDI timecode et LTC en entrée et en sortie, et un suiveur de tempo.</td></tr>
<tr><td>Des visuels et une lumière qui suivent la musique</td><td>Analyse audio et détection de tempo sur la même timeline que la vidéo et le DMX.</td></tr>
<tr><td>Un dispositif léger</td><td>Un ordinateur portable, ou un Raspberry Pi qui joue le set sans écran.</td></tr>
</tbody>
</table>
</div>

Des concerts et performances réalisés avec score sont dans la [galerie](/gallery.html).
