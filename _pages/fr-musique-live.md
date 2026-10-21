---
layout: use-case
lang: fr
title: "Logiciel pour la musique électronique live"
headline: "Musique électronique live"
subtitle: "ossia score permet de jouer de la musique électronique en direct, avec des instruments, des séquenceurs pas à pas et des plug-ins sur une timeline qui suit un tempo, l'horloge MIDI ou un vinyle timecode."
permalink: /fr/musique-live.html
translation: /live-music.html
category: site-score
description: "Logiciel libre pour la musique électronique live : synthés, boîtes à rythmes, sampler, séquenceur, looper, plug-ins, horloge MIDI et vinyle timecode."
image: /assets/social/ossia-score-og.jpg
---

ossia score permet de jouer de la musique électronique en direct : une pièce peut être écrite à la mesure sur la timeline, improvisée sur des boucles et des motifs, ou mélanger les deux, par exemple une section écrite suivie d'une boucle qui se répète jusqu'à ce que l'on frappe un pad, les visuels et la lumière suivant la même horloge.
*Solo.K* de Jean-Marie Colin (festival Haizebegi, Bayonne, 2019) en est un exemple : il s'agit d'un solo de Karlax dans lequel score pilote à la fois la musique et les images.

<picture><img src="/assets/blog/v3-9/skins.webp" width="1502" height="720" loading="lazy" alt="Un patch ossia score avec le synthétiseur Synthimi, un affichage MIDI, une figure de Lissajous et une automation de couleur, dans l'un des thèmes de la version 3.9"/></picture>

## Instruments et effets

score inclut un sampler multiformat (SF2, GIG, DLS et kits Hydrogen), des boîtes à rythmes, un synthétiseur FM, un granulateur polyphonique, Synthimi, Bytebeat et les modèles physiques Faust ([synthés](https://ossia.io/score-docs/examples/audio/synths.html), [granulaire](https://ossia.io/score-docs/examples/audio/granular.html)).
Côté effets, on dispose notamment de la collection Airwindows, de Faust, et de compresseurs, limiteurs, réverbérations, filtres et délais intégrés ; les plug-ins VST, VST3, CLAP, LV2 et JSFX peuvent aussi être chargés, et les paramètres CLAP sont automatisés à l'échantillon près ([plug-ins audio](https://ossia.io/score-docs/processes/audio-plugins.html), [effets audio](https://ossia.io/score-docs/processes/audio-effects.html)).
Les accordages microtonaux passent par les gammes et correspondances de clavier Scala ([gammes](https://ossia.io/score-docs/examples/audio/scales.html)).

## Motifs et tempo

Les séquenceurs pas à pas gèrent les accents et les glissés, avec des bibliothèques de motifs 303 et de batterie ; on trouve également un piano roll, un arpégiateur, des objets d'humanisation et de quantification MIDI, et des rythmes euclidiens peuvent être générés en JavaScript ([patternist](https://ossia.io/score-docs/processes/patternist.html), [arpégiateur](https://ossia.io/score-docs/processes/arpeggiator.html)).

Le tempo et les mesures s'appliquent à toute la partition : les automations s'alignent sur la grille musicale, les LFO sont calés sur la mesure, le looper quantifie à la mesure, et un détecteur de tempo suit l'audio entrant ([temps musical](https://ossia.io/score-docs/in-depth/musical.html), [looper](https://ossia.io/score-docs/processes/audio-looper.html)).

<picture><img src="/assets/features/audio.webp" width="1600" height="1122" loading="lazy" alt="Des fichiers son et une réverbération organisés en scènes sur une timeline ossia score, avec une automation du niveau d'effet"/></picture>

## Synchronisation et contrôleurs

score génère et suit l'horloge MIDI et le MIDI timecode, suit le LTC, et la timeline peut être pilotée par un vinyle timecode sur une platine ([synchro MIDI](https://ossia.io/score-docs/processes/midi-sync.html), [vinyle timecode](https://ossia.io/score-docs/processes/xwax-dvs.html)).
Sur scène, il prend en charge les contrôleurs MIDI dont les boutons et faders sont nommés, les surfaces de contrôle compatibles MCU, les ports MIDI réseau fournis par le système d'exploitation, les contrôleurs à vent, les tablettes et les manettes.

Le même projet peut également contenir des shaders, de la 3D et de la vidéo réactifs au son, ainsi que de la lumière DMX pilotée par la musique (voir [vidéo](/fr/mapping-video.html) et [lumière](/fr/eclairage-dmx.html)) ; un set peut être joué depuis un ordinateur portable, ou sans écran depuis un Raspberry Pi.

D'autres concerts et performances réalisés avec score sont présentés dans la [galerie](/gallery.html).
