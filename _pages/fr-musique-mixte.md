---
layout: use-case
lang: fr
title: "Musique mixte et électronique en temps réel"
headline: "Musique mixte et électronique en temps réel"
subtitle: "Écrivez la partie électronique d'une pièce pour instruments : cues déclenchées depuis une pédale ou un contrôleur MIDI, traitement des instruments en direct, spatialisation, et une partition qui attend les interprètes. Libre et gratuit, sous Windows, macOS et Linux."
permalink: /fr/musique-mixte.html
translation: /live-electronics.html
category: site-score
description: "Logiciel libre pour la musique mixte : partitions interactives, cues depuis pédales ou MIDI, traitement en direct, Pure Data et son spatialisé."
image: /assets/social/ossia-score-og.jpg
---

ossia score est issu de la recherche sur les **partitions interactives** pour la musique, menée au LaBRI et au SCRIME à Bordeaux avec le projet *i-score* ([historique du projet](/project.html)).
Il est fait pour les pièces où musiciens et électronique jouent ensemble : le temps est écrit, mais ce sont les interprètes qui décident du moment.

## Ce que vous pouvez faire

- **Une partition qui attend les interprètes** : les déclencheurs attendent une pédale, une note MIDI, un message OSC ou un seuil sur l'entrée audio, et les conditions choisissent entre plusieurs branches ([timelines non linéaires](https://ossia.io/score-docs/quick-start/breaking-the-timeline.html)).
- **Des cues depuis la scène** : pédales, claviers et contrôleurs MIDI, ou une touche du clavier, lancent chaque section ([entrée MIDI](https://ossia.io/score-docs/devices/midiin-device.html), [cues](https://ossia.io/score-docs/cues.html)).
- **Traitement des instruments en direct** : effets Faust, VST, VST3, CLAP, LV2 et JSFX, effets intégrés, et enregistrement des instruments dans la partition ([Faust](https://ossia.io/score-docs/processes/faust.html), [plug-ins audio](https://ossia.io/score-docs/processes/audio-plugins.html), [enregistreur audio](https://ossia.io/score-docs/processes/audio-recorder.html)).
- **Écouter les instruments** : suivi d'enveloppe, détection de tempo et descripteurs audio pilotent traitements, fichiers son, vidéo et lumière ([suiveur d'enveloppe](https://ossia.io/score-docs/processes/envelope-follower.html), [analyse](https://ossia.io/score-docs/processes/analysis.html)).
- **Gardez vos patchs Pure Data** : exécutez-les dans la partition, ou pilotez-les en OSC avec libossia ([Pure Data](https://ossia.io/score-docs/processes/puredata.html)).
- **Spatialisez** : DBAP, GBAP, trajectoires et pilotage de moteurs de spatialisation, pour les salles de concert et les systèmes multicanaux (voir [spatialisation sonore](/fr/spatialisation-sonore.html)).
- **Le temps musical quand il le faut** : tempo, mesures et quantification à côté d'un temps libre, piloté par les interprètes ([temps musical](https://ossia.io/score-docs/in-depth/musical.html)).

<picture><img src="/assets/gallery/pocius-on-the-edge.webp" width="540" height="304" loading="lazy" alt="Une personne assise à une table sur une scène sombre, sous une grande image projetée"/></picture>
<p class="figure-caption"><i>On the Edge</i>, Kasey Pocius, Sound Symposium XXI, St. John's : une œuvre audiovisuelle pour vidéo, T-Stick et son surround.</p>

## Les besoins de la musique mixte, et les réponses d'ossia score

<div class="comparison-scroll">
<table class="comparison">
<tr><th>Ce dont vous avez besoin</th><th>Comment ossia score y répond</th></tr>
<tr><td>Une électronique qui suit les musiciens, pas un clic</td><td>Déclencheurs et conditions sur la timeline attendent pédales, MIDI, OSC ou seuils audio.</td></tr>
<tr><td>Une partie que les prochains interprètes pourront rejouer</td><td>Toute la partie électronique, avec ses cues, traitements et fichiers son, tient dans un seul projet, sur tous les systèmes.</td></tr>
<tr><td>Répéter un passage</td><td>Reprenez depuis n'importe quel point avec <i>Play from here</i>.</td></tr>
<tr><td>Traiter et spatialiser les instruments</td><td>Plug-ins, Faust, patchs Pure Data et spatialisation dans la même partition.</td></tr>
<tr><td>De la vidéo ou de la lumière dans la pièce</td><td>Vidéo, shaders et lumière DMX suivent les mêmes cues.</td></tr>
</table>
</div>

Pour la musique électronique jouée avec synthétiseurs, séquenceurs et boucles, voyez [musique électronique live](/fr/musique-live.html).
Voyez la [galerie](/gallery.html) des concerts réalisés avec ossia score, comme *The Ripples of Consequence* de Pía Baltazar ou *pianotronics #3* d'Alain Bonardi.
