---
layout: use-case
lang: fr
title: "Enregistrer, diffuser et router la vidéo"
headline: "Enregistrement, streaming et routage vidéo"
subtitle: "ossia score permet de recevoir, traiter, enregistrer et diffuser de la vidéo en direct, en synchronisation avec le son et le reste d'un spectacle."
permalink: /fr/enregistrement-streaming.html
translation: /recording-streaming.html
category: site-score
description: "Logiciel libre de vidéo en direct : caméras, capture SDI, entrées NDI, SRT et RTSP, traitement GPU, enregistrement en ProRes ou MP4, et streaming RTMP."
image: /assets/social/ossia-score-og.jpg
---

Dans ossia score, les images proviennent de caméras et du réseau, sont traitées par des shaders, de la 3D, du texte ou des modèles d'IA, puis envoyées vers des écrans, des fichiers, d'autres logiciels ou des services de streaming, en synchronisation avec le son et le reste du spectacle ; un même projet peut par exemple calculer les visuels d'un concert, mixer son son et diffuser les deux.

<picture><source type="image/avif" srcset="/assets/features/camera.avif"><img src="/assets/features/camera.webp" width="436" height="348" loading="lazy" alt="L'image d'une webcam traitée par un filtre shader piloté par un LFO dans ossia score"/></picture>

## Sources

Les sources prises en charge sont les webcams et caméras USB, la capture d'écran et de fenêtre, les flux RTSP et SRT, le NDI (avec le pilotage des caméras PTZ), Spout et Syphon, les pipelines PipeWire et GStreamer, et les appareils photo reflex via gphoto2 ([caméra](https://ossia.io/score-docs/devices/camera-device.html), [NDI](https://ossia.io/score-docs/devices/ndi-device.html), [appareil FFmpeg](https://ossia.io/score-docs/devices/libav-device.html)).
Pour les cartes de capture, AJA est pris en charge directement, avec GPUDirect, les formats 10 bits et V210, et a été testé en 8K60 ; Blackmagic DeckLink et Magewell nécessitent une version compilée sur mesure.

## Traitement

L'image est traitée sur le GPU par des shaders, du mixage vidéo, de l'incrustation, de la vision par ordinateur, des scènes 3D, des titres et des diapositives, ou n'importe quel graphe de filtres FFmpeg ([vidéo](https://ossia.io/score-docs/in-depth/video.html), [mixage vidéo](https://ossia.io/score-docs/common-practices/11-video-mixing-and-mapping.html)).
Les sources et sorties HDR et à gamut étendu sont prises en charge (HLG, PQ, BT.2020, Display P3), avec tonemapping ([formats vidéo et couleur](https://ossia.io/score-docs/processes/video-formats-color.html)).

## Sorties

La sortie programme et son son sont enregistrés en MP4, MKV, ProRes, DNxHD ou AV1, et le son seul en WAV ([appareil FFmpeg](https://ossia.io/score-docs/devices/libav-device.html), [enregistreur audio](https://ossia.io/score-docs/processes/audio-recorder.html)).
score peut diffuser l'audio et la vidéo vers un service RTMP, ou en RTP ou UDP, sans encodeur séparé ([livestreaming](https://ossia.io/score-docs/common-practices/10-livestreaming.html), [flux en entrée et en sortie](https://ossia.io/score-docs/examples/video/ffmpeg-streaming.html)) ; pour envoyer l'image vers une régie de streaming, une visioconférence ou un autre logiciel, on dispose de sorties NDI (sans copie sur le GPU, testé en 8K), Spout, Syphon et PipeWire ([Spout](https://ossia.io/score-docs/devices/spout-device.html), [Syphon](https://ossia.io/score-docs/devices/syphon-device.html)).

Les enregistrements sont lancés et arrêtés, les caméras commutées et les habillages modifiés depuis la timeline, des cues, des capteurs, ou n'importe quel contrôleur OSC ou MIDI.
