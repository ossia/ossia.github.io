---
layout: use-case
lang: fr
title: "Logiciel de mapping vidéo gratuit"
headline: "Vidéo, mapping et VJing"
subtitle: "ossia score permet de lire, projeter et générer de la vidéo sur plusieurs vidéoprojecteurs, dans le même projet que le son et la lumière d'un spectacle."
permalink: /fr/mapping-video.html
ref: projection-mapping
nav_title: "Vidéo, mapping et VJing"
blurb: "Lecture vidéo, mapping multi-projecteurs, shaders, 3D et NDI, synchronisés avec le son et la lumière."
category: site-score
description: "Logiciel libre de lecture vidéo, mapping multi-projecteurs, shaders, 3D et NDI pour Windows, macOS et Linux, synchronisé avec le son et la lumière."
image: /assets/social/ossia-score-og.jpg
---

ossia score dispose d'une chaîne de traitement vidéo et 3D sur GPU, qui fonctionne dans le même projet que le son et la lumière ; il a notamment servi pour des installations vidéo, du mapping sur des bâtiments et des scènes, des spectacles en fulldome et des visuels réactifs au son.
*Résilience des bois* (Atelier Circulaire, Montréal, 2026) l'utilise par exemple pour un mapping vidéo sur cinq vidéoprojecteurs, piloté depuis un seul Mac assez ancien.

<picture><img src="/assets/gallery/resilience-des-bois.webp" width="540" height="360" loading="lazy" alt="Une installation où des images de forêt sont projetées sur trois murs blancs et sur la maquette d'un paysage posée sur une table centrale"/></picture>
<p class="figure-caption"><i>Résilience des bois</i>, Shabnam Zeraati, Gilnaz Arzpeyma et Zahra Nabavi, Atelier Circulaire, Montréal : mapping vidéo sur cinq vidéoprojecteurs piloté par ossia score depuis un seul Mac assez ancien. © Jean-Michael Séminaro</p>

## Lecture et mapping

La plupart des formats peuvent être lus (HAP, H.264, ProRes, séquences d'images, etc.), en boucle, et mélangés grâce à un mélangeur vidéo à huit entrées ([vidéo](https://ossia.io/score-docs/processes/video.html), [mixage et mapping](https://ossia.io/score-docs/common-practices/11-video-mixing-and-mapping.html)).
Le décodage matériel passe par Vulkan Video, Direct3D 12 et VideoToolbox, sans copie dès que le backend graphique le permet, et gère HAP, DXV, Cineform et H.265.

Chaque fenêtre de sortie peut être déformée zone par zone et fondue avec ses voisines (edge blending), et les spectacles en fulldome utilisent une sortie fisheye ([mapping multi-projecteurs](https://ossia.io/score-docs/examples/video/video-mapping-multi-projector.html), [fenêtres de sortie](https://ossia.io/score-docs/devices/window-device.html)).
Sous macOS et Windows, les fenêtres peuvent sortir en HDR (HLG, BT.2100, Display P3) ; score lit également les images DCI X'Y'Z' 12 bits et EXR en demi-flottants ([formats vidéo](https://ossia.io/score-docs/processes/video-formats-color.html)).

<picture><img src="/assets/use-cases/video-mixer.webp" width="1200" height="652" loading="lazy" alt="Le mélangeur vidéo d'ossia score superposant plusieurs couches d'un shader génératif avec différents modes de fusion, au-dessus du résultat projeté"/></picture>

## Images générées

Les images peuvent être générées par des shaders ISF et des compute shaders, Context Free Art et Structure Synth ([shaders](https://ossia.io/score-docs/processes/shaders.html)) ; un lien Shadertoy déposé sur score est converti en shader ISF, et on dispose aussi du vertex shader art, d'effets de video-bending et d'un processus qui applique n'importe quel graphe de filtres FFmpeg ([vertex shader art](https://ossia.io/score-docs/processes/vertex-shader-art.html)).

Depuis la version 3.9, le GPU calcule également des scènes 3D : modèles glTF, FBX, OBJ et autres avec leurs animations, matériaux PBR, instanciation, nuages de points et gaussian splats ([pipeline 3D](https://ossia.io/score-docs/in-depth/3d-scene-pipeline.html)).
Chaque paramètre d'une vidéo, d'un shader ou d'une scène 3D peut être mis en cue, automatisé ou déclenché depuis la timeline, sans limite de résolution ni filigrane.

<picture><img src="/assets/blog/v3-9/feedback-cables.webp" width="1230" height="567" loading="lazy" alt="Un motif de réaction-diffusion obtenu dans ossia score en renvoyant la sortie d'un shader vers sa propre entrée par un câble de rétroaction"/></picture>

## Entrées, sorties et interaction

La vidéo peut être reçue et envoyée en NDI, Spout et Syphon, ou provenir de caméras, de captures d'écran, de flux RTSP et SRT, de PipeWire et de GStreamer.
Pour les cartes de capture et de diffusion, AJA est pris en charge directement et a été testé en 8K60, tandis que Blackmagic DeckLink et Magewell nécessitent une version compilée sur mesure ; le programme peut être enregistré en MP4, ProRes, DNxHD ou AV1.

Les visuels peuvent réagir au son, à la vision par ordinateur (blobs, flux optique, contours), à la détection de pose par des modèles ONNX, aux caméras de profondeur, ou à des messages MIDI et OSC ([détection de pose](https://ossia.io/score-docs/examples/ai/pose-detection.html)).
Pour les conférences, on dispose d'objets de présentation et de texte avancé, et un script peut calculer une pièce image par image vers des fichiers, pour des prévisualisations ou des versions sur support fixe.

D'autres œuvres vidéo réalisées avec score sont présentées dans la [galerie](/fr/galerie.html).
