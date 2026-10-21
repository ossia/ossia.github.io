---
layout: use-case
lang: fr
title: "Musique mixte et électronique en temps réel"
headline: "Musique mixte et électronique en temps réel"
subtitle: "ossia score permet d'écrire la partie électronique d'une pièce pour instruments, avec des cues à la pédale, du traitement en direct, de la spatialisation, et une partition qui attend les musiciens."
permalink: /fr/musique-mixte.html
translation: /live-electronics.html
category: site-score
description: "Logiciel libre pour la musique mixte : partitions interactives, cues depuis pédales ou MIDI, traitement en direct, Pure Data et son spatialisé."
image: /assets/social/ossia-score-og.jpg
---

ossia score est issu des recherches sur les partitions interactives pour la musique menées au LaBRI et au SCRIME, à Bordeaux, avec le projet *i-score* ([historique du projet](/project.html)) ; il a été conçu pour les pièces où musiciens et électronique jouent ensemble, le déroulement temporel étant écrit tandis que les interprètes décident du moment où chaque section commence.
*The Ripples of Consequence* de Pía Baltazar (Le Vivier, Montréal, 2025), interprétée par Audréanne Filion, est par exemple une composition pour la Table de Babel, et *On the Edge* de Kasey Pocius (Sound Symposium XXI, St. John's, 2024) une œuvre audiovisuelle pour vidéo, T-Stick et son surround.

## Partition interactive

Un déclencheur retient l'électronique jusqu'à ce qu'un événement se produise sur scène, par exemple une pédale, une note MIDI, un message OSC, ou le passage d'un seuil par l'entrée audio, et des conditions choisissent entre plusieurs branches ([timelines non linéaires](https://ossia.io/score-docs/quick-start/breaking-the-timeline.html)).
Les cues sont données depuis des pédales MIDI, des claviers et des contrôleurs, ou depuis une touche du clavier de l'ordinateur ([entrée MIDI](https://ossia.io/score-docs/devices/midiin-device.html), [cues](https://ossia.io/score-docs/cues.html)) ; lorsque la pièce comporte une pulsation, le tempo, les mesures et la quantification peuvent être utilisés à côté des sections libres conduites par les interprètes ([temps musical](https://ossia.io/score-docs/in-depth/musical.html)).

<picture><source type="image/avif" srcset="/assets/use-cases/interactive-trigger.avif"><img src="/assets/use-cases/interactive-trigger.webp" width="1200" height="750" loading="lazy" alt="Quatre intervalles d'automation dans une timeline ossia score, dont deux retenus par des déclencheurs jaunes qui attendent un contrôleur MIDI"/></picture>

## Traitement des instruments

Le traitement en direct utilise des effets Faust, VST, VST3, CLAP, LV2 et JSFX ou ceux intégrés à score, et les instruments peuvent être enregistrés dans la partition pendant l'exécution ([Faust](https://ossia.io/score-docs/processes/faust.html), [plug-ins audio](https://ossia.io/score-docs/processes/audio-plugins.html), [enregistreur audio](https://ossia.io/score-docs/processes/audio-recorder.html)).
Le suivi d'enveloppe, la détection de tempo et les descripteurs audio analysent les instruments et pilotent le traitement, les fichiers son, la vidéo et la lumière ([suiveur d'enveloppe](https://ossia.io/score-docs/processes/envelope-follower.html), [analyse](https://ossia.io/score-docs/processes/analysis.html)).

Les patchs Pure Data existants s'exécutent à l'intérieur de la partition, ou sont pilotés depuis celle-ci en OSC avec libossia ([Pure Data](https://ossia.io/score-docs/processes/puredata.html)) ; la spatialisation dans la salle (DBAP, GBAP, trajectoires, moteurs externes) est décrite sur la page [spatialisation sonore](/fr/spatialisation-sonore.html).

<picture><img src="/assets/gallery/pocius-on-the-edge.webp" width="540" height="304" loading="lazy" alt="Une personne assise à une table sur une scène sombre, sous une grande image projetée"/></picture>
<p class="figure-caption"><i>On the Edge</i>, Kasey Pocius, Sound Symposium XXI, St. John's : œuvre audiovisuelle pour vidéo, T-Stick et son surround.</p>

## Répétitions et reprises

En répétition, *Play from here* permet de reprendre à n'importe quel endroit de la pièce.
Toute la partie électronique, avec ses cues, ses traitements et ses fichiers son, tient dans un seul fichier de projet qui s'ouvre sur tous les systèmes d'exploitation, ce qui permet à d'autres musiciens de reprendre la pièce par la suite.

Pour la musique jouée avec des synthétiseurs, des séquenceurs et des boucles, voir la page [musique électronique live](/fr/musique-live.html) ; d'autres concerts réalisés avec score, comme *pianotronics #3* d'Alain Bonardi, sont présentés dans la [galerie](/gallery.html).
