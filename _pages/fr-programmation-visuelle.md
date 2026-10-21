---
layout: use-case
lang: fr
title: "Programmation visuelle pour l'audio et la vidéo"
headline: "La programmation visuelle, avec une timeline"
subtitle: "Patchez audio, vidéo, 3D et capteurs avec des nœuds, puis organisez-les dans le temps. ossia score est libre et gratuit, et il exécute vos patchs Pure Data."
permalink: /fr/programmation-visuelle.html
translation: /visual-programming.html
category: site-score
description: "Programmation visuelle libre pour l'audio, la vidéo et l'interaction, avec nœuds et timeline. Exécute Pure Data, Faust et JavaScript."
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
- **Modifier pendant l'exécution** : déposez un processus sur un câble ou un nœud pour l'insérer ou le remplacer sans arrêter, et codez en direct des effets JSFX.
- **Apprentissage automatique interactif** : entraînez un classifieur ou un régresseur par l'exemple, et analysez des gestes (ACP, clustering, corrélation) ([classifieur](https://ossia.io/score-docs/processes/classifier.html), [gestes](https://ossia.io/score-docs/processes/gestures.html)).
- **Instruments et effets inclus** : synthétiseurs, boîtes à rythmes, sampler, granulateur et effets Airwindows (voir [musique live](/fr/musique-live.html)).
- **Programmation GPU** : compute shaders, pipelines de rendu avec instanciation, et vos propres pipelines de rendu ([compute shaders](https://ossia.io/score-docs/processes/compute-shaders.html)).
- **Une trentaine de thèmes**, dont des thèmes adaptés au daltonisme et à fort contraste.

<picture><source type="image/avif" srcset="/assets/feature-nodal.avif"><img src="/assets/feature-nodal.webp" width="624" height="340" loading="lazy" alt="Passage de la timeline à la vue nodale dans ossia score"/></picture>

## Les besoins du patch, et les réponses d'ossia score

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>Ce dont vous avez besoin</th><th>Comment ossia score y répond</th></tr></thead>
<tbody>
<tr><td>Un environnement de patch gratuit sous Windows, macOS et Linux</td><td>Libre (GPLv3), avec des objets audio, vidéo, 3D et de contrôle.</td></tr>
<tr><td>Organiser un patch dans le temps : scènes, sections, régie</td><td>Le patch vit dans une timeline, avec scènes, cues, déclencheurs et conditions.</td></tr>
<tr><td>Réutiliser des patchs Pure Data existants</td><td>ossia score les exécute directement, et ajoute autour une timeline, de la vidéo et de la 3D.</td></tr>
<tr><td>Des visuels génératifs et de l'interaction avec peu ou pas de code</td><td>Shaders, vision par ordinateur et objets ONNX, avec JavaScript, Faust ou C++ si besoin.</td></tr>
<tr><td>Exposer vos propres programmes et patchs</td><td><a href="/site-libossia/about.html">libossia</a> rend pilotables depuis score des patchs Max et Pure Data et des programmes openFrameworks, Processing, Unity ou Python.</td></tr>
</tbody>
</table>
</div>
