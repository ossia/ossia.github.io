---
layout: use-case
lang: fr
title: "Art génératif et creative coding"
headline: "Art génératif et creative coding"
subtitle: "Shaders, scènes 3D, nuages de points, gaussian splats et grammaires génératives, patchés avec des nœuds ou écrits en code, en direct ou rendus image par image. Libre et gratuit, sous Windows, macOS, Linux et dans le navigateur."
permalink: /fr/art-generatif.html
translation: /generative-art.html
category: site-score
description: "Logiciel libre d'art génératif : shaders ISF et compute, import Shadertoy, scènes 3D, gaussian splats, live coding et rendus hors temps réel."
image: /assets/social/ossia-score-og.jpg
---

ossia score est un terrain de jeu pour les images et les sons génératifs : patchez shaders et géométrie avec des câbles, écrivez du code là où il aide,
et organisez le résultat dans le temps, en performance, en installation ou en vidéo rendue.

## Ce que vous pouvez faire

- **Shaders** : shaders de fragments ISF, compute shaders et pipelines de rendu bruts, avec la bibliothèque Lygia du gestionnaire de paquets ; déposez un lien Shadertoy et il devient un shader ISF ([shaders](https://ossia.io/score-docs/processes/shaders.html), [compute shaders](https://ossia.io/score-docs/processes/compute-shaders.html), [recettes de shaders](https://ossia.io/score-docs/in-depth/shader-cookbook.html)).
- **3D** : un pipeline de scène sur GPU avec modèles glTF, FBX, OBJ, PLY et voxels, matériaux PBR, lumières, caméras, instanciation, nuages de points, textures volumétriques et gaussian splats ([pipeline 3D](https://ossia.io/score-docs/in-depth/3d-scene-pipeline.html), [gaussian splats](https://ossia.io/score-docs/examples/3d/3dgs.html), [3D générative](https://ossia.io/score-docs/examples/3d/generative-3d.html)).
- **Grammaires génératives** : Context Free Art et Structure Synth, vertex shader art, texte vers maillage ([Context Free Art](https://ossia.io/score-docs/processes/context-free-art.html), [Structure Synth](https://ossia.io/score-docs/processes/structure-synth.html)).
- **Rétroaction** : des câbles retardés partout, pour la réaction-diffusion, les traînées et autres rétroactions d'image ([réaction-diffusion](https://ossia.io/score-docs/examples/video/2d-geometry-feedback-reaction-diffusion.html)).
- **Live coding** : JavaScript, Faust, shaders, JSFX et C++ compilé à la volée, modifiés pendant que l'œuvre tourne ([live coding](https://ossia.io/score-docs/common-practices/8-live-coding.html)).
- **Le son dans la même œuvre** : visuels réactifs au son, Bytebeat, synthétiseurs et spatialisation (voir [musique live](/fr/musique-live.html)).
- **Rendu en fichiers** : rendus hors temps réel, image par image, vers des fichiers images depuis un script, pour des vidéos, des tirages ou des prévisualisations.
- **Partager** : faites tourner de nombreuses pièces dans la [version web](https://ossia.io/score-web), ou empaquetez-en une en application autonome (voir [applications sur mesure](/fr/applications-sur-mesure.html)).

<picture><source type="image/avif" srcset="/assets/blog/v3-9/3d-pipeline.avif"><img src="/assets/blog/v3-9/3d-pipeline.webp" width="800" height="450" loading="lazy" alt="Un modèle glTF animé dans une scène 3D rendue par ossia score"/></picture>

## Les besoins de l'art génératif, et les réponses d'ossia score

<div class="comparison-scroll">
<table class="comparison">
<tr><th>Ce dont vous avez besoin</th><th>Comment ossia score y répond</th></tr>
<tr><td>Essayer des idées vite, sans code d'infrastructure</td><td>Shaders, objets 3D et générateurs reliés par des câbles, avec des paramètres modifiables en direct.</td></tr>
<tr><td>Écrire du code quand c'est le meilleur outil</td><td>JavaScript, GLSL, Faust et C++ dans le même patch.</td></tr>
<tr><td>Réutiliser les shaders de la communauté</td><td>Shaders ISF, bibliothèque Lygia du gestionnaire de paquets, et liens Shadertoy convertis automatiquement.</td></tr>
<tr><td>Transformer une esquisse en œuvre</td><td>Une timeline avec scènes, automations et cues autour du patch génératif.</td></tr>
<tr><td>Une vidéo rendue en pleine qualité</td><td>Rendu hors temps réel image par image, indépendant des performances en temps réel.</td></tr>
</table>
</div>

Voyez l'[article Genuary 2022](/posts/genuary/) pour un mois d'esquisses génératives réalisées avec ossia score.
