---
layout: use-case
title: "Free projection mapping and video software"
headline: "Video, projection mapping and VJing"
subtitle: "Video playback, mapping over several projectors, shaders and 3D, cued with the sound and the lights of the show."
permalink: /projection-mapping.html
translation: /fr/mapping-video.html
category: site-score
description: "Free, open-source software for video playback, multi-projector mapping, shaders, 3D and NDI on Windows, macOS and Linux, synchronised with sound and light."
image: /assets/social/ossia-score-og.jpg
---

ossia score has a GPU video and 3D pipeline, and it lives in the same project as the sound and the lights.
It has been used for video installations, mapping on buildings and stages, fulldome shows and audio-reactive visuals.

<picture><img src="/assets/gallery/resilience-des-bois.webp" width="540" height="360" loading="lazy" alt="An installation where forest images are projected on three white walls and on a model of a landscape placed on a central table"/></picture>
<p class="figure-caption"><i>Résilience des bois</i>, Shabnam Zeraati, Gilnaz Arzpeyma and Zahra Nabavi, Atelier Circulaire, Montréal: five-projector video mapping run by ossia score on a single older Mac. © Jean-Michael Séminaro</p>

## Playing and mapping

Most formats play: HAP, H.264, ProRes, image sequences and more, looped and mixed with an eight-input video mixer ([video](https://ossia.io/score-docs/processes/video.html), [mixing and mapping](https://ossia.io/score-docs/common-practices/11-video-mixing-and-mapping.html)).
Hardware decoding goes through Vulkan Video, Direct3D 12 and VideoToolbox, without copies whenever the graphics backend allows it, with HAP, DXV, Cineform and H.265.

Each output window can be warped region by region and edge-blended with its neighbours, and fulldome shows get a fisheye output ([multi-projector mapping](https://ossia.io/score-docs/examples/video/video-mapping-multi-projector.html), [window device](https://ossia.io/score-docs/devices/window-device.html)).
On macOS and Windows the windows can output HDR (HLG, BT.2100, Display P3), and score reads 12-bit DCI X'Y'Z' and EXR half-float images ([video formats](https://ossia.io/score-docs/processes/video-formats-color.html)).

<picture><img src="/assets/use-cases/video-mixer.webp" width="1200" height="652" loading="lazy" alt="The video mixer of ossia score blending several layers of a generative shader with different blend modes, over the projected result"/></picture>

## Generating images

ISF and compute shaders, Context Free Art and Structure Synth make images from scratch ([shaders](https://ossia.io/score-docs/processes/shaders.html)). Drop a Shadertoy link on score and it turns into an ISF shader; vertex shader art, video-bending effects and any FFmpeg filter graph are there too ([vertex shader art](https://ossia.io/score-docs/processes/vertex-shader-art.html)).

Since 3.9 the GPU also renders 3D scenes: glTF, FBX, OBJ and other models with their animations, PBR materials, instancing, point clouds and gaussian splats ([3D pipeline](https://ossia.io/score-docs/in-depth/3d-scene-pipeline.html)).

<picture><img src="/assets/blog/v3-9/feedback-cables.webp" width="1230" height="567" loading="lazy" alt="A reaction-diffusion pattern made in ossia score by sending a shader's output back into its own input with a feedback cable"/></picture>

## In and out

Video comes in and goes out over NDI, Spout and Syphon, from cameras and screen capture, RTSP and SRT streams, PipeWire and GStreamer.
Capture and playout cards: AJA is built in and was tested at 8K60; Blackmagic DeckLink and Magewell need a custom build. The program can be recorded to MP4, ProRes, DNxHD or AV1.

Visuals can react to the sound, to computer vision (blobs, optical flow, contours), to pose detection with ONNX models, to depth cameras, or to MIDI and OSC ([pose detection](https://ossia.io/score-docs/examples/ai/pose-detection.html)).
For lectures and conferences there are presentation and advanced text objects, and a script can render the piece frame by frame to image files, for previews or fixed-media versions.

## In short

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>You want</th><th>In ossia score</th></tr></thead>
<tbody>
<tr><td>Video on several projectors or surfaces</td><td>Per-region warping, edge blending and fulldome fisheye output.</td></tr>
<tr><td>A show that plays the same every night, or reacts</td><td>Every video, shader and 3D parameter can be cued, automated or triggered.</td></tr>
<tr><td>Generative and 3D visuals at any resolution</td><td>ISF and compute shaders and a GPU 3D pipeline, with no resolution limit or watermark.</td></tr>
<tr><td>Video to and from other software</td><td>NDI, Spout, Syphon, RTSP, SRT, and capture and playout cards.</td></tr>
<tr><td>Video, sound and lights from one machine, Linux included</td><td>One project on Windows, macOS or Linux.</td></tr>
</tbody>
</table>
</div>
