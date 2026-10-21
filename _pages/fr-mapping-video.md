---
layout: use-case
lang: fr
title: "Logiciel de mapping vidéo gratuit"
headline: "Vidéo, mapping et VJing"
subtitle: "Lecture vidéo, mapping sur plusieurs vidéoprojecteurs, shaders et 3D, dans la même conduite que le son et la lumière."
permalink: /fr/mapping-video.html
translation: /projection-mapping.html
category: site-score
description: "Logiciel libre de lecture vidéo, mapping multi-projecteurs, shaders, 3D et NDI pour Windows, macOS et Linux, synchronisé avec le son et la lumière."
image: /assets/social/ossia-score-og.jpg
---

ossia score dispose d'un pipeline vidéo et 3D sur GPU, qui vit dans le même projet que le son et la lumière.
Il a servi pour des installations vidéo, du mapping sur des bâtiments et des scènes, des spectacles en fulldome et des visuels réactifs au son.

<picture><img src="/assets/gallery/resilience-des-bois.webp" width="540" height="360" loading="lazy" alt="Une installation où des images de forêt sont projetées sur trois murs blancs et sur la maquette d'un paysage posée sur une table centrale"/></picture>
<p class="figure-caption"><i>Résilience des bois</i>, Shabnam Zeraati, Gilnaz Arzpeyma et Zahra Nabavi, Atelier Circulaire, Montréal : mapping vidéo sur cinq vidéoprojecteurs, piloté par ossia score sur un seul Mac déjà ancien. © Jean-Michael Séminaro</p>

## Lire et projeter

La plupart des formats se lisent : HAP, H.264, ProRes, séquences d'images et d'autres, en boucle et en mixage avec un mélangeur vidéo à huit entrées ([vidéo](https://ossia.io/score-docs/processes/video.html), [mixage et mapping](https://ossia.io/score-docs/common-practices/11-video-mixing-and-mapping.html)).
Le décodage matériel passe par Vulkan Video, Direct3D 12 et VideoToolbox, sans copie dès que le backend graphique le permet, avec HAP, DXV, Cineform et H.265.

Chaque fenêtre de sortie se déforme zone par zone et se fond avec ses voisines, et les spectacles en fulldome disposent d'une sortie fisheye ([mapping multi-projecteurs](https://ossia.io/score-docs/examples/video/video-mapping-multi-projector.html), [fenêtres de sortie](https://ossia.io/score-docs/devices/window-device.html)).
Sous macOS et Windows, les fenêtres peuvent sortir en HDR (HLG, BT.2100, Display P3), et score lit les images DCI X'Y'Z' 12 bits et EXR en demi-flottants ([formats vidéo](https://ossia.io/score-docs/processes/video-formats-color.html)).

<picture><img src="/assets/use-cases/video-mixer.webp" width="1200" height="652" loading="lazy" alt="Le mélangeur vidéo d'ossia score qui fusionne plusieurs couches d'un shader génératif avec différents modes de fusion, devant l'image projetée"/></picture>

## Générer des images

Shaders ISF et compute, Context Free Art et Structure Synth fabriquent des images à partir de rien ([shaders](https://ossia.io/score-docs/processes/shaders.html)). Un lien Shadertoy déposé sur score devient un shader ISF ; on trouve aussi le vertex shader art, des effets de video-bending et n'importe quel graphe de filtres FFmpeg ([vertex shader art](https://ossia.io/score-docs/processes/vertex-shader-art.html)).

Depuis la 3.9, le GPU calcule aussi des scènes 3D : modèles glTF, FBX, OBJ et autres avec leurs animations, matériaux PBR, instanciation, nuages de points et gaussian splats ([pipeline 3D](https://ossia.io/score-docs/in-depth/3d-scene-pipeline.html)).

<picture><img src="/assets/blog/v3-9/feedback-cables.webp" width="1230" height="567" loading="lazy" alt="Un motif de réaction-diffusion obtenu dans ossia score en renvoyant la sortie d'un shader dans sa propre entrée par un câble de rétroaction"/></picture>

## Entrées et sorties

La vidéo entre et sort en NDI, Spout et Syphon, depuis des caméras et la capture d'écran, des flux RTSP et SRT, PipeWire et GStreamer.
Côté cartes de capture et de diffusion, AJA est intégré et a été testé en 8K60 ; Blackmagic DeckLink et Magewell demandent une version compilée sur mesure. Le programme peut s'enregistrer en MP4, ProRes, DNxHD ou AV1.

Les visuels réagissent au son, à la vision par ordinateur (blobs, flux optique, contours), à la détection de pose avec des modèles ONNX, aux caméras de profondeur, au MIDI et à l'OSC ([détection de pose](https://ossia.io/score-docs/examples/ai/pose-detection.html)).
Pour les conférences, il y a des objets de présentation et de texte avancé, et un script peut rendre l'œuvre image par image dans des fichiers, pour une prévisualisation ou une version sur support fixe.

## En résumé

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>Vous voulez</th><th>Dans ossia score</th></tr></thead>
<tbody>
<tr><td>Projeter sur plusieurs vidéoprojecteurs ou surfaces</td><td>Déformation par zone, fondu des bords et sortie fulldome en fisheye.</td></tr>
<tr><td>Un spectacle identique chaque soir, ou qui réagit</td><td>Chaque paramètre de vidéo, de shader ou de 3D se met en cue, s'automatise ou se déclenche.</td></tr>
<tr><td>Des visuels génératifs et 3D à toute résolution</td><td>Shaders ISF et compute, pipeline 3D sur GPU, sans limite de résolution ni filigrane.</td></tr>
<tr><td>Échanger de la vidéo avec d'autres logiciels</td><td>NDI, Spout, Syphon, RTSP, SRT, et cartes de capture et de diffusion.</td></tr>
<tr><td>Vidéo, son et lumière sur une machine, Linux compris</td><td>Un seul projet sous Windows, macOS ou Linux.</td></tr>
</tbody>
</table>
</div>
