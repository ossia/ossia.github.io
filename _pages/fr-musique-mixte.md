---
layout: use-case
lang: fr
title: "Musique mixte et électronique en temps réel"
headline: "Musique mixte et électronique en temps réel"
subtitle: "Écrire la partie électronique d'une pièce pour instruments : cues à la pédale, traitement en direct, spatialisation, et une partition qui attend les musiciens."
permalink: /fr/musique-mixte.html
translation: /live-electronics.html
category: site-score
description: "Logiciel libre pour la musique mixte : partitions interactives, cues depuis pédales ou MIDI, traitement en direct, Pure Data et son spatialisé."
image: /assets/social/ossia-score-og.jpg
---

ossia score est issu de recherches sur les partitions interactives, menées au LaBRI et au SCRIME à Bordeaux avec le projet *i-score* ([historique du projet](/project.html)).
Il a été conçu pour des pièces où musiciens et électronique jouent ensemble : le temps est écrit, et ce sont les interprètes qui décident du moment où chaque événement arrive.

## Une partition qui attend

Un déclencheur retient l'électronique jusqu'à ce qu'il se passe quelque chose sur scène : une pédale, une note MIDI, un message OSC, ou l'entrée audio qui dépasse un seuil. Les conditions choisissent entre plusieurs branches ([timelines non linéaires](https://ossia.io/score-docs/quick-start/breaking-the-timeline.html)).
Les cues partent de pédales MIDI, de claviers et de contrôleurs, ou d'une touche du clavier de l'ordinateur ([entrée MIDI](https://ossia.io/score-docs/devices/midiin-device.html), [cues](https://ossia.io/score-docs/cues.html)).
Quand la pièce a une pulsation, tempo, mesures et quantification se placent à côté des sections libres, menées par les interprètes ([temps musical](https://ossia.io/score-docs/in-depth/musical.html)).

<picture><source type="image/avif" srcset="/assets/use-cases/interactive-trigger.avif"><img src="/assets/use-cases/interactive-trigger.webp" width="1200" height="750" loading="lazy" alt="Quatre intervalles d'automation dans une timeline ossia score, dont deux retenus par des déclencheurs jaunes qui attendent un contrôleur MIDI"/></picture>

## Traiter les instruments

Le traitement en direct utilise des effets Faust, VST, VST3, CLAP, LV2 et JSFX ou ceux intégrés à score, et les instruments peuvent être enregistrés dans la partition pendant le jeu ([Faust](https://ossia.io/score-docs/processes/faust.html), [plug-ins audio](https://ossia.io/score-docs/processes/audio-plugins.html), [enregistreur audio](https://ossia.io/score-docs/processes/audio-recorder.html)).
Suivi d'enveloppe, détection de tempo et descripteurs audio écoutent les instruments et pilotent les traitements, les fichiers son, la vidéo et la lumière ([suiveur d'enveloppe](https://ossia.io/score-docs/processes/envelope-follower.html), [analyse](https://ossia.io/score-docs/processes/analysis.html)).

Les patchs Pure Data existants tournent dans la partition, ou sont pilotés depuis elle en OSC avec libossia ([Pure Data](https://ossia.io/score-docs/processes/puredata.html)).
Pour la salle, le DBAP, le GBAP, les trajectoires et les moteurs de spatialisation sont décrits sur la page [spatialisation sonore](/fr/spatialisation-sonore.html).

<picture><img src="/assets/gallery/pocius-on-the-edge.webp" width="540" height="304" loading="lazy" alt="Une personne assise à une table sur une scène sombre, sous une grande image projetée"/></picture>
<p class="figure-caption"><i>On the Edge</i>, Kasey Pocius, Sound Symposium XXI, St. John's : une œuvre audiovisuelle pour vidéo, T-Stick et son surround.</p>

## En résumé

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>Vous voulez</th><th>Dans ossia score</th></tr></thead>
<tbody>
<tr><td>Une électronique qui suit les musiciens</td><td>Déclencheurs et conditions qui attendent pédales, MIDI, OSC ou seuils audio.</td></tr>
<tr><td>Une partie que les prochains interprètes pourront rejouer</td><td>Toute la partie électronique, avec ses cues, traitements et fichiers son, dans un fichier de projet qui s'ouvre sur tous les systèmes.</td></tr>
<tr><td>Répéter un passage</td><td>Reprendre depuis n'importe quel point avec <i>Play from here</i>.</td></tr>
<tr><td>De la vidéo ou de la lumière dans la pièce</td><td>Vidéo, shaders et lumière DMX sur les mêmes cues.</td></tr>
</tbody>
</table>
</div>

Pour la musique jouée depuis des synthétiseurs, des séquenceurs et des boucles, voir [musique électronique live](/fr/musique-live.html).
La [galerie](/gallery.html) présente des concerts réalisés avec score, comme *The Ripples of Consequence* de Pía Baltazar ou *pianotronics #3* d'Alain Bonardi.
