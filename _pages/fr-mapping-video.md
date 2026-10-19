---
layout: use-case
lang: fr
title: "Logiciel de mapping vidéo et de vidéo interactive gratuit"
headline: "Vidéo, mapping et VJing"
subtitle: "Lisez de la vidéo, projetez-la sur plusieurs vidéoprojecteurs, générez des visuels avec des shaders et de la 3D, et partagez-les en NDI, Spout et Syphon, en synchronisation avec le son, la lumière et les capteurs. Libre et gratuit, sous Windows, macOS et Linux."
permalink: /fr/mapping-video.html
translation: /projection-mapping.html
category: site-score
description: "Logiciel libre de lecture vidéo, mapping multi-projecteurs, shaders, 3D et NDI pour Windows, macOS et Linux, synchronisé avec le son et la lumière."
image: /assets/social/ossia-score-og.jpg
---

ossia score dispose d'un pipeline vidéo et 3D complet sur GPU. Il sert aux installations vidéo, au mapping sur des bâtiments et des scènes,
aux spectacles en fulldome et aux visuels réactifs au son, souvent dans le même projet que le son et la lumière.

## Ce que vous pouvez faire

- **Lecture vidéo** de la plupart des formats (HAP, H.264, ProRes, séquences d'images…), en boucle et en mixage, avec un mélangeur vidéo à huit entrées ([vidéo](https://ossia.io/score-docs/processes/video.html), [mixage et mapping](https://ossia.io/score-docs/common-practices/11-video-mixing-and-mapping.html)).
- **Mapping multi-projecteurs** avec déformation de perspective par zone et fondu des bords (edge blending), et sortie fulldome en fisheye ([mapping multi-projecteurs](https://ossia.io/score-docs/examples/video/video-mapping-multi-projector.html), [fenêtres de sortie](https://ossia.io/score-docs/devices/window-device.html)).
- **Visuels génératifs** avec des shaders ISF et des compute shaders, Context Free Art et Structure Synth ([shaders](https://ossia.io/score-docs/processes/shaders.html)).
- **Scènes 3D** depuis la version 3.9 : modèles glTF, FBX, OBJ et autres avec leurs animations, matériaux PBR, instanciation, nuages de points et gaussian splats, entièrement sur GPU ([pipeline 3D](https://ossia.io/score-docs/in-depth/3d-scene-pipeline.html)).
- **Entrées et sorties vidéo** : NDI, Spout, Syphon, caméras et capture d'écran, flux RTSP et SRT, PipeWire et GStreamer, cartes de capture et de diffusion (AJA, Blackmagic DeckLink, Magewell) ; enregistrement en MP4, ProRes, DNxHD ou AV1.
- **Interaction** : visuels réactifs au son, vision par ordinateur (blobs, flux optique, contours), détection de pose avec des modèles ONNX, caméras de profondeur, contrôle MIDI et OSC ([détection de pose](https://ossia.io/score-docs/examples/ai/pose-detection.html)).
- **Timeline** : tout peut être automatisé et mis en cue, pour qu'un spectacle de 20 minutes soit identique chaque soir, ou réagisse au public.

<img src="/assets/blog/v3-9/feedback-cables.webp" width="1230" height="567" loading="lazy" alt="Un effet de réaction-diffusion réalisé avec des câbles de rétroaction dans ossia score"/>

## Bon à savoir

- ossia score est pensé pour des **spectacles écrits ou interactifs** plutôt que pour le lancement de clips en direct : il n'a pas de grille de clips VJ, mais chaque visuel peut être mis en cue, automatisé et déclenché.
- Il échange de la vidéo avec d'autres logiciels en **NDI, Spout et Syphon**, et peut piloter des serveurs média en OSC.
