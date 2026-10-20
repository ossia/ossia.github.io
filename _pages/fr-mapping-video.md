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
- **Entrées et sorties vidéo** : NDI, Spout, Syphon, caméras et capture d'écran, flux RTSP et SRT, PipeWire et GStreamer, cartes de capture et de diffusion (AJA intégré et testé en 8K60 ; Blackmagic DeckLink et Magewell avec une version compilée sur mesure) ; enregistrement en MP4, ProRes, DNxHD ou AV1.
- **Interaction** : visuels réactifs au son, vision par ordinateur (blobs, flux optique, contours), détection de pose avec des modèles ONNX, caméras de profondeur, contrôle MIDI et OSC ([détection de pose](https://ossia.io/score-docs/examples/ai/pose-detection.html)).
- **Timeline** : tout peut être automatisé et mis en cue, pour qu'un spectacle de 20 minutes soit identique chaque soir, ou réagisse au public.
- **HDR et formats cinéma** : sortie HDR sous macOS et Windows (HLG, BT.2100, Display P3), images DCI X'Y'Z' 12 bits et EXR en demi-flottants ([formats vidéo](https://ossia.io/score-docs/processes/video-formats-color.html)).
- **Décodage matériel sans copie**, via Vulkan Video, Direct3D 12 et VideoToolbox, avec HAP, DXV, Cineform et H.265.
- **Des shaders du web** : déposez un lien Shadertoy et il devient un shader ISF ; vertex shader art, effets de video-bending, et n'importe quel graphe de filtres FFmpeg ([vertex shader art](https://ossia.io/score-docs/processes/vertex-shader-art.html)).
- **Diapositives et texte** pour les conférences-performances, avec les objets de présentation et de texte avancé.
- **Rendu image par image hors temps réel** vers des fichiers, depuis un script, pour des prévisualisations ou des œuvres sur support fixe.

<img src="/assets/blog/v3-9/feedback-cables.webp" width="1230" height="567" loading="lazy" alt="Un effet de réaction-diffusion réalisé avec des câbles de rétroaction dans ossia score"/>

## Les besoins de la vidéo, et les réponses d'ossia score

<div class="comparison-scroll">
<table class="comparison">
<tr><th>Ce dont vous avez besoin</th><th>Comment ossia score y répond</th></tr>
<tr><td>Projeter sur plusieurs vidéoprojecteurs ou surfaces</td><td>Déformation par zone, fondu des bords et sortie fulldome en fisheye.</td></tr>
<tr><td>Un spectacle écrit ou interactif, identique chaque soir ou qui réagit</td><td>Chaque paramètre de vidéo, de shader ou de 3D peut être mis en cue, automatisé ou déclenché depuis la timeline.</td></tr>
<tr><td>Des visuels génératifs et 3D, à n'importe quelle résolution</td><td>Shaders ISF et compute, pipeline 3D sur GPU, sans limite de résolution ni filigrane.</td></tr>
<tr><td>Du théâtre et de la danse interactifs avec caméras et capteurs</td><td>Détection de pose, caméras de profondeur, vision par ordinateur et protocoles de tracking.</td></tr>
<tr><td>Échanger de la vidéo avec d'autres logiciels et matériels</td><td>NDI, Spout, Syphon, RTSP, SRT, et cartes de capture et de diffusion.</td></tr>
<tr><td>Vidéo, son et lumière depuis un seul ordinateur, Linux compris</td><td>Un seul projet sur une seule machine, sous Windows, macOS ou Linux.</td></tr>
</table>
</div>
