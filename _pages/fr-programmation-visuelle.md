---
layout: use-case
lang: fr
title: "Programmation visuelle pour l'audio et la vidéo"
headline: "La programmation visuelle, avec une timeline"
subtitle: "On relie audio, vidéo, 3D et capteurs avec des câbles, puis on organise le patch dans le temps. Vos patchs Pure Data tournent à l'intérieur."
permalink: /fr/programmation-visuelle.html
translation: /visual-programming.html
category: site-score
description: "Programmation visuelle libre pour l'audio, la vidéo et l'interaction, avec nœuds et timeline. Exécute Pure Data, Faust et JavaScript."
image: /assets/social/ossia-score-og.jpg
---

ossia score offre deux vues d'un même projet. Dans la vue nodale, on relie des objets par des câbles. Dans la timeline, le patch lui-même change au fil du temps : les objets démarrent, s'arrêtent, bouclent, attendent un événement.
On passe de l'une à l'autre à tout moment.

<picture><source type="image/avif" srcset="/assets/feature-nodal.avif"><img src="/assets/feature-nodal.webp" width="624" height="340" loading="lazy" alt="Le même projet ossia score affiché en timeline, puis en patch avec des câbles"/></picture>

## Patcher

Il y a des centaines d'objets pour l'audio, la vidéo, la 3D, le MIDI, le texte, les fichiers, les maths, l'analyse et la synthèse, et les câbles peuvent reboucler pour faire de la rétroaction.
Les instruments et effets fournis avec score sont présentés sur la page [musique live](/fr/musique-live.html) : synthétiseurs, boîtes à rythmes, sampler, granulateur, effets Airwindows. Les plug-ins VST, VST3, CLAP, LV2 et JSFX se chargent comme n'importe quel objet ([plug-ins audio](https://ossia.io/score-docs/processes/audio-plugins.html)).

Les patchs Pure Data tournent dans une partition grâce à libpd : un patch existant reçoit une timeline, de la vidéo et de la 3D autour de lui ([Pure Data](https://ossia.io/score-docs/processes/puredata.html)).

Le patch se modifie pendant qu'il joue. On dépose un processus sur un câble ou sur un nœud pour l'insérer ou remplacer ce qui s'y trouvait, sans arrêter ; les effets JSFX se codent en direct.

<picture><source type="image/avif" srcset="/assets/use-cases/hot-swap.avif"><img src="/assets/use-cases/hot-swap.webp" width="960" height="492" loading="lazy" alt="Deux simulations d'ampli Airwindows reliées par un câble dans ossia score, avec la bibliothèque de processus ouverte à gauche"/></picture>

## Quand les câbles ne suffisent plus

JavaScript, Faust pour le traitement audio, shaders ISF et compute pour l'image, C++ compilé à la volée et expressions mathématiques cohabitent dans le même patch ([JavaScript](https://ossia.io/score-docs/processes/javascript.html), [Faust](https://ossia.io/score-docs/processes/faust.html)).
Côté GPU, compute shaders et pipelines de rendu avec instanciation se combinent en pipelines de rendu sur mesure ([compute shaders](https://ossia.io/score-docs/processes/compute-shaders.html)).

Pour la vision par ordinateur, il y a des objets portés depuis cv.jit (blobs, flux optique, contours, homographie) et des modèles ONNX pour la détection de pose et la reconnaissance.
Classifieurs et régresseurs apprennent à partir de quelques exemples enregistrés, et les objets de gestes calculent ACP, clustering et corrélation ([classifieur](https://ossia.io/score-docs/processes/classifier.html), [gestes](https://ossia.io/score-docs/processes/gestures.html)).

Les interfaces s'écrivent en QML avec les widgets de score, et un projet terminé peut devenir une application autonome ([interfaces personnalisées](https://ossia.io/score-docs/custom-ui.html), [applications](https://ossia.io/score-docs/development/custom-apps.html)).
L'éditeur propose une trentaine de thèmes, dont des thèmes adaptés au daltonisme et à fort contraste.

## En résumé

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>Vous voulez</th><th>Dans ossia score</th></tr></thead>
<tbody>
<tr><td>Un environnement de patch gratuit sous Windows, macOS et Linux</td><td>Libre (GPLv3), avec des objets audio, vidéo, 3D et de contrôle.</td></tr>
<tr><td>Organiser un patch dans le temps</td><td>Le patch vit dans une timeline, avec scènes, cues, déclencheurs et conditions.</td></tr>
<tr><td>Garder vos patchs Pure Data</td><td>score les exécute et ajoute autour une timeline, de la vidéo et de la 3D.</td></tr>
<tr><td>Des visuels génératifs avec peu de code</td><td>Shaders, vision par ordinateur et objets ONNX, avec JavaScript, Faust ou C++ si besoin.</td></tr>
<tr><td>Piloter vos propres programmes</td><td><a href="/site-libossia/about.html">libossia</a> rend pilotables depuis score des patchs Max et Pure Data et des programmes openFrameworks, Processing, Unity ou Python.</td></tr>
</tbody>
</table>
</div>
