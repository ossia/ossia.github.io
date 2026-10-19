---
layout: use-case
lang: fr
title: "Programmation visuelle gratuite : audio, vidéo, interaction"
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

<picture><source type="image/avif" srcset="/assets/feature-nodal.avif"><img src="/assets/feature-nodal.webp" width="624" height="340" loading="lazy" alt="Passage de la timeline à la vue nodale dans ossia score"/></picture>

## Fonctionne avec

- **Pure Data** : score exécute vos patchs existants, et ajoute autour une timeline, de la vidéo et de la 3D.
- **Votre propre code** : [libossia](/site-libossia/about.html) expose à score les paramètres de patchs Max et Pure Data et de programmes openFrameworks, Processing, Unity ou Python, prêts à être automatisés.
- **D'autres logiciels** en OSC, NDI, Spout et Syphon.
