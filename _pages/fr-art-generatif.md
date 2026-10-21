---
layout: use-case
lang: fr
title: "Art génératif et creative coding"
headline: "Art génératif et creative coding"
subtitle: "ossia score permet de créer des images et du son génératifs avec des shaders, des scènes 3D et du code, joués en direct ou calculés image par image."
permalink: /fr/art-generatif.html
ref: generative-art
nav_title: "Art génératif"
blurb: "Shaders, 3D, gaussian splats et live coding, joués en direct ou rendus image par image."
category: site-score
description: "Logiciel libre d'art génératif : shaders ISF et compute, import Shadertoy, scènes 3D, gaussian splats, live coding et rendus hors temps réel."
image: /assets/social/ossia-score-og.jpg
---

ossia score permet de créer des images et du son génératifs : les shaders et la géométrie sont reliés par des câbles, le code est utilisé là où il est plus pratique, et le résultat est organisé dans le temps sous forme de performance, d'installation ou de vidéo calculée.
L'[article sur Genuary 2022](/posts/genuary/) présente par exemple un mois d'esquisses quotidiennes réalisées avec score.

<picture><source type="image/avif" srcset="/assets/blog/v3-9/3d-pipeline.avif"><img src="/assets/blog/v3-9/3d-pipeline.webp" width="800" height="450" loading="lazy" alt="Un modèle glTF animé dans une scène 3D calculée par ossia score"/></picture>

## Shaders

Les shaders de fragments ISF, les compute shaders et les pipelines de rendu bruts s'exécutent dans le patch, et la bibliothèque Lygia peut être installée depuis le gestionnaire de paquets ([shaders](https://ossia.io/score-docs/processes/shaders.html), [compute shaders](https://ossia.io/score-docs/processes/compute-shaders.html), [recettes de shaders](https://ossia.io/score-docs/in-depth/shader-cookbook.html)) ; un lien Shadertoy déposé sur score est converti en shader ISF.
Les câbles peuvent être retardés et rebouclés n'importe où, ce qui permet d'obtenir réaction-diffusion, traînées et autres effets de rétroaction d'image ([réaction-diffusion](https://ossia.io/score-docs/examples/video/2d-geometry-feedback-reaction-diffusion.html)).

<picture><img src="/assets/blog/v3-9/feedback-cables.webp" width="1230" height="567" loading="lazy" alt="Un motif de réaction-diffusion obtenu dans ossia score en renvoyant la sortie d'un shader vers sa propre entrée par un câble de rétroaction"/></picture>

## 3D et grammaires

La chaîne de rendu 3D sur GPU charge des modèles glTF, FBX, OBJ, PLY et voxels, avec matériaux PBR, lumières, caméras, instanciation, nuages de points, textures volumétriques et gaussian splats ([pipeline 3D](https://ossia.io/score-docs/in-depth/3d-scene-pipeline.html), [gaussian splats](https://ossia.io/score-docs/examples/3d/3dgs.html), [3D générative](https://ossia.io/score-docs/examples/3d/generative-3d.html)).
Context Free Art et Structure Synth génèrent des images et des formes à partir de grammaires, et l'on dispose aussi du vertex shader art et d'objets de texte en maillage ([Context Free Art](https://ossia.io/score-docs/processes/context-free-art.html), [Structure Synth](https://ossia.io/score-docs/processes/structure-synth.html)).

## Live coding

JavaScript, Faust, shaders, JSFX et C++ compilé à la volée peuvent être modifiés pendant que la pièce tourne ([live coding](https://ossia.io/score-docs/common-practices/8-live-coding.html)).
Le son fait partie de la même pièce, avec des visuels réactifs au son, Bytebeat, des synthétiseurs et de la spatialisation (voir [musique live](/fr/musique-live.html)).

## Rendu et diffusion

Un script peut calculer une pièce image par image vers des fichiers, en pleine qualité et indépendamment du temps réel, pour une vidéo, des tirages ou des prévisualisations ; une pièce peut aussi être empaquetée en application autonome (voir [applications sur mesure](/fr/applications-sur-mesure.html)).
