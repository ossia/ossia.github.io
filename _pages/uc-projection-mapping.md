---
layout: use-case
title: "Free projection mapping and video software"
headline: "Video, projection mapping and VJing"
subtitle: "ossia score can be used to play, map and generate video over several projectors, in the same project as the sound and the lights of a show."
permalink: /projection-mapping.html
translation: /fr/mapping-video.html
category: site-score
description: "Free, open-source software for video playback, multi-projector mapping, shaders, 3D and NDI on Windows, macOS and Linux, synchronized with sound and light."
image: /assets/social/ossia-score-og.jpg
---

ossia score has a GPU video and 3D pipeline, which works in the same project as the sound and the lights; it has been used for video installations, mapping on buildings and stages, fulldome shows and audio-reactive visuals.
For instance, *Résilience des bois* (Atelier Circulaire, Montréal, 2026) uses it for a video mapping over five projectors, running on a single older Mac.

<picture><img src="/assets/gallery/resilience-des-bois.webp" width="540" height="360" loading="lazy" alt="An installation where forest images are projected on three white walls and on a model of a landscape placed on a central table"/></picture>
<p class="figure-caption"><i>Résilience des bois</i>, Shabnam Zeraati, Gilnaz Arzpeyma and Zahra Nabavi, Atelier Circulaire, Montréal: five-projector video mapping run by ossia score on a single older Mac. © Jean-Michael Séminaro</p>

## Playback and mapping

Most formats can be played (HAP, H.264, ProRes, image sequences, etc.), looped and mixed with an eight-input video mixer ([video](https://ossia.io/score-docs/processes/video.html), [mixing and mapping](https://ossia.io/score-docs/common-practices/11-video-mixing-and-mapping.html)).
Hardware decoding goes through Vulkan Video, Direct3D 12 and VideoToolbox, without copies whenever the graphics backend allows it, and supports HAP, DXV, Cineform and H.265.

Each output window can be warped region by region and edge-blended with its neighbors, and fulldome shows use a fisheye output ([multi-projector mapping](https://ossia.io/score-docs/examples/video/video-mapping-multi-projector.html), [window device](https://ossia.io/score-docs/devices/window-device.html)).
On macOS and Windows, the windows can output HDR (HLG, BT.2100, Display P3); score also reads 12-bit DCI X'Y'Z' and EXR half-float images ([video formats](https://ossia.io/score-docs/processes/video-formats-color.html)).

<picture><img src="/assets/use-cases/video-mixer.webp" width="1200" height="652" loading="lazy" alt="The video mixer of ossia score blending several layers of a generative shader with different blend modes, over the projected result"/></picture>

## Generated images

Images can be generated with ISF and compute shaders, Context Free Art and Structure Synth ([shaders](https://ossia.io/score-docs/processes/shaders.html)); a Shadertoy link dropped on score is converted to an ISF shader, and there are also vertex shader art, video-bending effects, and a process which applies any FFmpeg filter graph ([vertex shader art](https://ossia.io/score-docs/processes/vertex-shader-art.html)).

Since version 3.9, the GPU also renders 3D scenes: glTF, FBX, OBJ and other models with their animations, PBR materials, instancing, point clouds and gaussian splats ([3D pipeline](https://ossia.io/score-docs/in-depth/3d-scene-pipeline.html)).
Every parameter of a video, a shader or a 3D scene can be cued, automated or triggered from the timeline, and there is no resolution limit or watermark.

<picture><img src="/assets/blog/v3-9/feedback-cables.webp" width="1230" height="567" loading="lazy" alt="A reaction-diffusion pattern made in ossia score by sending a shader's output back into its own input with a feedback cable"/></picture>

## Inputs, outputs and interaction

Video can be received and sent over NDI, Spout and Syphon, or come from cameras, screen capture, RTSP and SRT streams, PipeWire and GStreamer.
For capture and playout cards, AJA support is built in and was tested at 8K60, while Blackmagic DeckLink and Magewell require a custom build; the program can be recorded to MP4, ProRes, DNxHD or AV1.

The visuals can react to the sound, to computer vision (blobs, optical flow, contours), to pose detection with ONNX models, to depth cameras, or to MIDI and OSC messages ([pose detection](https://ossia.io/score-docs/examples/ai/pose-detection.html)).
For lectures and conferences there are presentation and advanced text objects, and a script can render a piece frame by frame to image files, for previews or fixed-media versions.

Other video works made with score are presented in the [gallery](/gallery.html).
