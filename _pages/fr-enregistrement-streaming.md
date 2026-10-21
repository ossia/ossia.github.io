---
layout: use-case
lang: fr
title: "Enregistrer, diffuser et router la vidéo"
headline: "Enregistrement, streaming et routage vidéo"
subtitle: "En entrée, des caméras, des cartes de capture et des flux réseau ; au milieu, un traitement sur GPU avec le son du spectacle ; en sortie, des enregistrements, des streams et des flux vers d'autres logiciels."
permalink: /fr/enregistrement-streaming.html
translation: /recording-streaming.html
category: site-score
description: "Logiciel libre de vidéo en direct : caméras, capture SDI, entrées NDI, SRT et RTSP, traitement GPU, enregistrement en ProRes ou MP4, et streaming RTMP."
image: /assets/social/ossia-score-og.jpg
---

Les images entrent dans ossia score depuis les caméras et le réseau, passent par des shaders, de la 3D, du texte et de l'IA, et repartent vers les écrans, des fichiers, d'autres logiciels et les services de streaming, en phase avec le son et le reste du spectacle.

<picture><source type="image/avif" srcset="/assets/features/camera.avif"><img src="/assets/features/camera.webp" width="436" height="348" loading="lazy" alt="L'image d'une webcam qui passe par un filtre shader piloté par un LFO dans ossia score"/></picture>

## Les sources

Webcams et caméras USB, capture d'écran et de fenêtres, flux RTSP et SRT, NDI (avec pilotage des caméras PTZ), Spout et Syphon, pipelines PipeWire et GStreamer, et appareils photo via gphoto2 ([caméra](https://ossia.io/score-docs/devices/camera-device.html), [NDI](https://ossia.io/score-docs/devices/ndi-device.html), [appareil FFmpeg](https://ossia.io/score-docs/devices/libav-device.html)).
Côté cartes de capture, AJA est intégré, avec GPUDirect, les formats 10 bits et V210, et a été testé en 8K60. Blackmagic DeckLink et Magewell fonctionnent avec une version compilée sur mesure.

## Sur le GPU

Shaders, mixage vidéo, incrustation, vision par ordinateur, scènes 3D, titres et diapositives, et n'importe quel graphe de filtres FFmpeg traitent l'image ([vidéo](https://ossia.io/score-docs/in-depth/video.html), [mixage vidéo](https://ossia.io/score-docs/common-practices/11-video-mixing-and-mapping.html)).
Les sources et sorties HDR et à large gamut sont prises en charge (HLG, PQ, BT.2020, Display P3), avec tonemapping ([formats et couleur](https://ossia.io/score-docs/processes/video-formats-color.html)).

## Les sorties

La sortie programme, avec son son, s'enregistre en MP4, MKV, ProRes, DNxHD ou AV1 ; le son seul peut aller en WAV ([appareil FFmpeg](https://ossia.io/score-docs/devices/libav-device.html), [enregistreur audio](https://ossia.io/score-docs/processes/audio-recorder.html)).
score peut diffuser audio et vidéo vers un service RTMP, ou en RTP ou UDP, sans encodeur séparé ([streaming](https://ossia.io/score-docs/common-practices/10-livestreaming.html), [flux en entrée et en sortie](https://ossia.io/score-docs/examples/video/ffmpeg-streaming.html)).
Pour alimenter une régie de streaming, une visioconférence ou d'autres logiciels, il y a des sorties NDI (sans copie sur le GPU, testé en 8K), Spout, Syphon et PipeWire ([Spout](https://ossia.io/score-docs/devices/spout-device.html), [Syphon](https://ossia.io/score-docs/devices/syphon-device.html)).

Les enregistrements démarrent et s'arrêtent, les caméras changent et les habillages évoluent depuis la timeline, les cues ou n'importe quel contrôleur OSC ou MIDI.

## En résumé

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>Vous voulez</th><th>Dans ossia score</th></tr></thead>
<tbody>
<tr><td>Diffuser un concert avec ses visuels</td><td>Le même projet rend les visuels, mixe le son et envoie les deux au service de streaming.</td></tr>
<tr><td>Intégrer une vidéo distante ou réseau</td><td>Entrées SRT, RTSP, NDI et cartes de capture, traitées comme n'importe quelle texture.</td></tr>
<tr><td>Un enregistrement pour l'archive ou le montage</td><td>ProRes, DNxHD, MP4 ou AV1, lancé depuis la timeline.</td></tr>
<tr><td>Des changements de caméra qui suivent le spectacle</td><td>Cues, scènes et capteurs choisissent caméras et habillages.</td></tr>
</tbody>
</table>
</div>
