---
layout: use-case
lang: fr
title: "Logiciel libre pour enregistrer, diffuser et router la vidéo en direct"
headline: "Enregistrement, streaming et routage vidéo"
subtitle: "Faites entrer caméras, cartes de capture et flux réseau, traitez-les sur le GPU avec le son, la 3D et le graphisme, puis enregistrez en fichier, diffusez en ligne ou envoyez l'image vers d'autres logiciels. Libre et gratuit, sous Windows, macOS et Linux."
permalink: /fr/enregistrement-streaming.html
translation: /recording-streaming.html
category: site-score
description: "Logiciel libre de vidéo en direct : caméras, capture SDI, entrées NDI, SRT et RTSP, traitement GPU, enregistrement en ProRes ou MP4, et streaming RTMP."
image: /assets/social/ossia-score-og.jpg
---

ossia score dispose d'une chaîne vidéo complète : les images arrivent des caméras et du réseau, passent par des shaders, de la 3D, du texte et de l'IA,
et repartent vers les écrans, des fichiers, d'autres logiciels et des services de streaming, synchronisées avec le son et le reste du spectacle.

## Ce que vous pouvez faire

- **Entrées** : webcams et caméras USB, capture d'écran et de fenêtre, flux réseau (RTSP, SRT), NDI avec pilotage des caméras PTZ, Spout et Syphon, pipelines PipeWire et GStreamer, appareils photo via gphoto2 ([caméra](https://ossia.io/score-docs/devices/camera-device.html), [NDI](https://ossia.io/score-docs/devices/ndi-device.html), [appareil FFmpeg](https://ossia.io/score-docs/devices/libav-device.html)).
- **Cartes de capture** : cartes AJA intégrées, avec GPUDirect, formats 10 bits et V210, testées en 8K60 ; Blackmagic DeckLink et Magewell avec une version compilée sur mesure.
- **Traitement** : shaders, mixage vidéo, incrustation et vision par ordinateur, scènes 3D, titres et diapositives, n'importe quel graphe de filtres FFmpeg, sur le GPU ([vidéo](https://ossia.io/score-docs/in-depth/video.html), [mixage vidéo](https://ossia.io/score-docs/common-practices/11-video-mixing-and-mapping.html)).
- **Enregistrement** : écrivez la sortie programme en MP4, MKV, ProRes, DNxHD ou AV1 avec son son, ou enregistrez le son seul en WAV ([appareil FFmpeg](https://ossia.io/score-docs/devices/libav-device.html), [enregistreur audio](https://ossia.io/score-docs/processes/audio-recorder.html)).
- **Streaming** : envoyez son et vidéo vers un service RTMP, ou en RTP ou UDP, directement depuis ossia score, sans encodeur séparé ([diffusion en direct](https://ossia.io/score-docs/common-practices/10-livestreaming.html), [flux entrant et sortant](https://ossia.io/score-docs/examples/video/ffmpeg-streaming.html)).
- **Routage vers d'autres logiciels** : sorties NDI (sans copie sur le GPU, testé en 8K), Spout, Syphon et PipeWire, vers des régies de streaming, des visioconférences ou d'autres logiciels vidéo ([Spout](https://ossia.io/score-docs/devices/spout-device.html), [Syphon](https://ossia.io/score-docs/devices/syphon-device.html)).
- **Couleur** : sources et sorties HDR et à large gamut (HLG, PQ, BT.2020, Display P3), avec tonemapping ([formats vidéo et couleur](https://ossia.io/score-docs/processes/video-formats-color.html)).
- **Automatisé** : lancez et arrêtez les enregistrements, changez de caméra et de graphisme depuis la timeline, des cues ou n'importe quel contrôleur OSC ou MIDI.

## Les besoins de la production vidéo, et les réponses d'ossia score

<div class="comparison-scroll">
<table class="comparison">
<tr><th>Ce dont vous avez besoin</th><th>Comment ossia score y répond</th></tr>
<tr><td>Diffuser un concert ou une performance avec ses visuels</td><td>Le même projet calcule les visuels, mixe le son et envoie les deux au service de streaming.</td></tr>
<tr><td>Faire entrer de la vidéo distante ou réseau dans un spectacle</td><td>Entrées SRT, RTSP, NDI et cartes de capture, traitées comme n'importe quelle texture.</td></tr>
<tr><td>Enregistrer le programme pour l'archive ou le montage</td><td>Enregistrement en ProRes, DNxHD, MP4 ou AV1, déclenché depuis la timeline.</td></tr>
<tr><td>Envoyer les images au reste du dispositif</td><td>Sorties NDI, Spout, Syphon et PipeWire à côté des écrans.</td></tr>
<tr><td>Un changement de caméra piloté par le spectacle</td><td>Cues, scènes et capteurs choisissent automatiquement caméras et graphismes.</td></tr>
</table>
</div>
