---
layout: use-case
lang: fr
title: "Programmation visuelle gratuite : audio, vidéo, interaction"
headline: "La programmation visuelle, avec une timeline"
subtitle: "Patchez audio, vidéo, 3D et capteurs avec des nœuds, puis organisez-les dans le temps. ossia score est un complément ou une alternative libre et gratuite à Max/MSP, et il exécute vos patchs Pure Data."
permalink: /fr/programmation-visuelle.html
translation: /visual-programming.html
category: site-score
description: "Programmation visuelle libre pour l'audio, la vidéo et l'interaction, avec nœuds et timeline. Exécute Pure Data, Faust et JavaScript. Alternative à Max/MSP."
image: /assets/social/ossia-score-og.jpg
---

ossia score réunit deux façons de travailler : un **patcher nodal**, où l'on relie des objets par des câbles, et une **timeline**,
où le patch lui-même évolue dans le temps. On passe de l'une à l'autre à tout moment.

## Ce que vous pouvez faire

- **Patcher** des objets audio, vidéo, 3D et de contrôle avec des câbles, y compris en boucle de rétroaction ; des centaines d'objets pour le MIDI, le texte, les fichiers, les maths, l'analyse et la synthèse.
- **Programmer** quand le patch ne suffit pas : JavaScript, Faust pour le traitement audio, shaders ISF et compute shaders pour le graphisme, C++ compilé à la volée, expressions mathématiques ([JavaScript](https://ossia.io/score-docs/processes/javascript.html), [Faust](https://ossia.io/score-docs/processes/faust.html)).
- **Exécuter des patchs Pure Data** directement dans une partition grâce à libpd ([Pure Data](https://ossia.io/score-docs/processes/puredata.html)).
- **Héberger des plug-ins** : VST, VST3, CLAP, LV2 et JSFX ([plug-ins audio](https://ossia.io/score-docs/processes/audio-plugins.html)).
- **Vision par ordinateur et IA** : objets portés depuis cv.jit (blobs, flux optique, contours, homographie), modèles ONNX pour la détection de pose et la reconnaissance.
- **Construire des interfaces** en QML avec les widgets d'ossia score, et empaqueter un projet en application autonome ([interfaces personnalisées](https://ossia.io/score-docs/custom-ui.html), [applications](https://ossia.io/score-docs/development/custom-apps.html)).

<picture><source type="image/avif" srcset="/assets/feature-nodal.avif"><img src="/assets/feature-nodal.webp" width="624" height="340" loading="lazy" alt="Passage de la timeline à la vue nodale dans ossia score"/></picture>

## ossia score face aux environnements de patch

<div class="comparison-scroll">
<table class="comparison">
<tr><th>Logiciel</th><th>Choisissez ossia score si…</th><th>Gardez l'autre logiciel si…</th></tr>
<tr><td><b>Max/MSP</b></td><td>vous voulez un outil libre et gratuit sous Windows, macOS et Linux, ou votre pièce a besoin d'une timeline, de scènes et d'une régie.</td><td>vous dépendez de la bibliothèque d'objets de Max, de Jitter ou de Max for Live. Max et ossia score fonctionnent aussi ensemble : le package ossia pour Max expose vos patchs à score.</td></tr>
<tr><td><b>Pure Data</b></td><td>vous voulez ajouter une timeline, de la vidéo et de la 3D autour de vos patchs existants : score les exécute.</td><td>le patch léger de Pd vous suffit.</td></tr>
<tr><td><b>vvvv, Processing, openFrameworks</b></td><td>vous voulez des visuels génératifs et de l'interaction avec peu ou pas de code, synchronisés avec le son et la lumière.</td><td>vous préférez écrire un programme complet ; libossia expose les paramètres d'openFrameworks et de Processing à score.</td></tr>
<tr><td><b>TouchDesigner</b></td><td>vous voulez un outil libre et gratuit avec timeline, plug-ins audio et régie.</td><td>vous dépendez de son écosystème et de sa communauté ; les deux échangent vidéo et données en NDI, Spout et OSC.</td></tr>
</table>
</div>
