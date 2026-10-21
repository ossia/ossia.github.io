---
layout: use-case
lang: fr
title: "Programmation visuelle pour l'audio et la vidéo"
headline: "La programmation visuelle, avec une timeline"
subtitle: "ossia score permet de programmer visuellement l'audio, la vidéo, la 3D et les capteurs, le patch lui-même étant organisé dans le temps."
permalink: /fr/programmation-visuelle.html
ref: visual-programming
nav_title: "Programmation visuelle"
blurb: "Patchez audio, vidéo et interaction avec des nœuds et une timeline, et exécutez vos patchs Pure Data."
category: site-score
description: "Programmation visuelle libre pour l'audio, la vidéo et l'interaction, avec nœuds et timeline. Exécute Pure Data, Faust et JavaScript."
image: /assets/social/ossia-score-og.jpg
---

ossia score présente un même projet sous deux vues : dans la vue nodale, on relie des objets par des câbles ; dans la timeline, c'est le patch lui-même qui évolue dans le temps, les objets démarrant, s'arrêtant, bouclant ou attendant des événements.
On peut passer d'une vue à l'autre à tout moment, ce qui permet par exemple d'écrire un patch dont la structure change d'une scène à l'autre d'une pièce.

<picture><source type="image/avif" srcset="/assets/feature-nodal.avif"><img src="/assets/feature-nodal.webp" width="624" height="340" loading="lazy" alt="Le même projet ossia score affiché sous forme de timeline, puis de patch avec des câbles"/></picture>

## Le patch

On dispose de plusieurs centaines d'objets pour l'audio, la vidéo, la 3D, le MIDI, le texte, les fichiers, les mathématiques, l'analyse et la synthèse, et les câbles peuvent former des boucles de rétroaction.
Les instruments et effets fournis avec score (synthétiseurs, boîtes à rythmes, sampler, granulateur, effets Airwindows, etc.) sont décrits sur la page [musique live](/fr/musique-live.html) ; les plug-ins VST, VST3, CLAP, LV2 et JSFX se chargent comme n'importe quel autre objet ([plug-ins audio](https://ossia.io/score-docs/processes/audio-plugins.html)).

Les patchs Pure Data s'exécutent à l'intérieur d'une partition grâce à libpd, ce qui permet d'ajouter autour d'un patch existant une timeline, de la vidéo et de la 3D ([Pure Data](https://ossia.io/score-docs/processes/puredata.html)).

Le patch peut être modifié pendant la lecture : un processus déposé sur un câble ou sur un nœud y est inséré, ou remplace celui qui s'y trouvait, sans arrêter la lecture ; les effets JSFX peuvent aussi être codés en direct.

<picture><source type="image/avif" srcset="/assets/use-cases/hot-swap.avif"><img src="/assets/use-cases/hot-swap.webp" width="960" height="492" loading="lazy" alt="Deux simulations d'amplificateur Airwindows reliées par un câble dans ossia score, avec la bibliothèque de processus ouverte à gauche"/></picture>

## Le code

JavaScript, Faust pour le traitement audio, les shaders ISF et compute pour le graphisme, du C++ compilé à la volée et des expressions mathématiques peuvent être utilisés dans le même patch ([JavaScript](https://ossia.io/score-docs/processes/javascript.html), [Faust](https://ossia.io/score-docs/processes/faust.html)).
Sur le GPU, compute shaders et pipelines de rendu avec instanciation se combinent pour former des pipelines de rendu sur mesure ([compute shaders](https://ossia.io/score-docs/processes/compute-shaders.html)).

## Analyse et apprentissage automatique

Pour la vision par ordinateur, on trouve des objets issus de cv.jit (blobs, flux optique, contours, homographie) et des modèles ONNX de détection de pose et de reconnaissance.
Les classifieurs et régresseurs s'entraînent à partir de quelques exemples enregistrés, et des objets d'analyse du geste calculent notamment ACP, clustering et corrélation ([classifieur](https://ossia.io/score-docs/processes/classifier.html), [gestes](https://ossia.io/score-docs/processes/gestures.html)).

## Interfaces et autres logiciels

Les interfaces s'écrivent en QML avec les widgets de score, et un projet terminé peut être empaqueté en application autonome ([interfaces personnalisées](https://ossia.io/score-docs/custom-ui.html), [applications](https://ossia.io/score-docs/development/custom-apps.html)) ; l'éditeur dispose lui-même d'une trentaine de thèmes, dont certains adaptés au daltonisme et à fort contraste.

score est libre (GPLv3), et grâce à [libossia](/site-libossia/about.html), les patchs Max et Pure Data comme les programmes openFrameworks, Processing, Unity ou Python peuvent lui exposer leurs paramètres.
