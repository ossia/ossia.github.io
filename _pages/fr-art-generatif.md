---
layout: use-case
lang: fr
title: "Art génératif et creative coding"
headline: "Art génératif et creative coding"
subtitle: "Shaders, scènes 3D, nuages de points et gaussian splats, reliés par des câbles ou écrits en code, joués en direct ou rendus image par image."
permalink: /fr/art-generatif.html
translation: /generative-art.html
category: site-score
description: "Logiciel libre d'art génératif : shaders ISF et compute, import Shadertoy, scènes 3D, gaussian splats, live coding et rendus hors temps réel."
image: /assets/social/ossia-score-og.jpg
---

ossia score fait un bon carnet de croquis pour l'image et le son génératifs. Shaders et géométrie se relient par des câbles, le code intervient là où il est utile, et le résultat s'organise dans le temps : performance, installation ou vidéo rendue.
Pour un mois de croquis quotidiens, voir l'[article Genuary 2022](/posts/genuary/).

<picture><source type="image/avif" srcset="/assets/blog/v3-9/3d-pipeline.avif"><img src="/assets/blog/v3-9/3d-pipeline.webp" width="800" height="450" loading="lazy" alt="Un modèle glTF animé dans une scène 3D rendue par ossia score"/></picture>

## Shaders

Shaders de fragments ISF, compute shaders et pipelines de rendu bruts tournent dans le patch, et la bibliothèque Lygia s'installe depuis le gestionnaire de paquets ([shaders](https://ossia.io/score-docs/processes/shaders.html), [compute shaders](https://ossia.io/score-docs/processes/compute-shaders.html), [recettes de shaders](https://ossia.io/score-docs/in-depth/shader-cookbook.html)).
Un lien Shadertoy déposé sur score devient un shader ISF.
Les câbles peuvent être retardés et rebouclés n'importe où : c'est ainsi qu'on obtient réaction-diffusion, traînées et autres rétroactions d'image ([réaction-diffusion](https://ossia.io/score-docs/examples/video/2d-geometry-feedback-reaction-diffusion.html)).

<picture><img src="/assets/blog/v3-9/feedback-cables.webp" width="1230" height="567" loading="lazy" alt="Un motif de réaction-diffusion obtenu dans ossia score en renvoyant la sortie d'un shader dans sa propre entrée par un câble de rétroaction"/></picture>

## 3D et grammaires

Le pipeline de scènes sur GPU charge des modèles glTF, FBX, OBJ, PLY et voxels, avec matériaux PBR, lumières, caméras, instanciation, nuages de points, textures volumétriques et gaussian splats ([pipeline 3D](https://ossia.io/score-docs/in-depth/3d-scene-pipeline.html), [gaussian splats](https://ossia.io/score-docs/examples/3d/3dgs.html), [3D générative](https://ossia.io/score-docs/examples/3d/generative-3d.html)).
Context Free Art et Structure Synth font pousser images et formes à partir de grammaires, à côté du vertex shader art et du texte en maillage ([Context Free Art](https://ossia.io/score-docs/processes/context-free-art.html), [Structure Synth](https://ossia.io/score-docs/processes/structure-synth.html)).

## Coder en direct

JavaScript, Faust, shaders, JSFX et C++ compilé à la volée se modifient pendant que l'œuvre tourne ([live coding](https://ossia.io/score-docs/common-practices/8-live-coding.html)).
Le son fait partie de la même œuvre : visuels réactifs au son, Bytebeat, synthétiseurs et spatialisation (voir [musique live](/fr/musique-live.html)).

## Finir une pièce

Un script peut rendre l'œuvre image par image dans des fichiers, en pleine qualité et indépendamment de la vitesse du temps réel, pour une vidéo, des tirages ou des prévisualisations.
Beaucoup de pièces tournent aussi dans la [version web](https://ossia.io/score-web), et une œuvre peut devenir une application autonome (voir [applications sur mesure](/fr/applications-sur-mesure.html)).

## En résumé

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>Vous voulez</th><th>Dans ossia score</th></tr></thead>
<tbody>
<tr><td>Essayer des idées sans code d'amorçage</td><td>Shaders, objets 3D et générateurs reliés par des câbles, avec des paramètres en direct.</td></tr>
<tr><td>Écrire du code quand c'est le bon outil</td><td>JavaScript, GLSL, Faust et C++ dans le même patch.</td></tr>
<tr><td>Réutiliser des shaders de la communauté</td><td>Shaders ISF, Lygia du gestionnaire de paquets, et liens Shadertoy convertis au dépôt.</td></tr>
<tr><td>Faire d'un croquis une pièce</td><td>Une timeline avec scènes, automations et cues autour du patch.</td></tr>
<tr><td>Une vidéo rendue en pleine qualité</td><td>Rendu hors temps réel, image par image.</td></tr>
</tbody>
</table>
</div>
