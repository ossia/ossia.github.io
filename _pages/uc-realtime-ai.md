---
layout: use-case
title: "Real-time AI for visuals, sound and interaction"
headline: "Real-time AI for artists"
subtitle: "Pose and object detection, depth from a plain camera, real-time image generation, language and vision models, and machine learning trained by example — running on your own computer, on the same timeline as sound, video and lights. Free and open-source."
permalink: /realtime-ai.html
translation: /fr/ia-temps-reel.html
category: site-score
description: "Free, open-source real-time AI for artists: pose detection, segmentation, depth, image generation, LLMs and machine learning by example, run locally."
image: /assets/social/ossia-score-og.jpg
---

ossia score runs AI models as ordinary objects in a patch: a camera goes in, positions, images, text or sound come out,
and they drive the rest of the piece. Models run locally, on your computer, not in a cloud service.

## What you can do

- **See people and objects**: multi-person pose detection with smoothing, object detection and segmentation, emotion detection, body meshes, and depth from an ordinary RGB camera ([pose detection](https://ossia.io/score-docs/examples/ai/pose-detection.html), [AI recognition](https://ossia.io/score-docs/processes/ai-recognition.html)).
- **Generate images in real time**: StreamDiffusion and librediffusion with SD and SDXL Turbo, Flux.2 Klein, ControlNet, IP-Adapter and LoRAs, from a camera, a video or generated content ([StreamDiffusion](https://ossia.io/score-docs/processes/streamdiffusion.html)). Requires Windows or Linux with an NVIDIA graphics card.
- **Language and vision-language models**: Qwen3 and Gemma 3, and models that describe a video stream in words; compose and morph prompts over time ([Qwen LLM](https://ossia.io/score-docs/processes/qwen-llm.html), [prompt composer](https://ossia.io/score-docs/processes/ai-prompt-composer.html)).
- **Sound**: stem separation and neural vocoders.
- **Machine learning by example**: train a classifier or a regressor from a few examples of gestures or sensor data, and interpolate between states ([classifier](https://ossia.io/score-docs/processes/classifier.html), [regressor](https://ossia.io/score-docs/processes/regressor.html)).
- **Your own models**: a generic ONNX object runs other models, on CUDA, TensorRT, DirectML or Core ML; some models also run in the [browser version](https://ossia.io/score-web) through WebNN.
- **From AI to everything else**: poses become MIDI, OSC, 3D geometry or light cues ([tracking to MIDI](https://ossia.io/score-docs/examples/ai/tracking-to-midi.html), [tracking to geometry](https://ossia.io/score-docs/examples/ai/tracking-to-geometry.html)).

<picture><img src="/assets/gallery/reflet.webp" width="540" height="407" loading="lazy" alt="A visitor sitting in front of a projected, AI-generated stormy sky in Reflet"/></picture>
<p class="figure-caption"><i>Reflet</i>, Noukii (Anouk Ethier) with Isabella Salas and Allison Moore, at SAT: show logic and real-time imagery from custom generative models in ossia score. © Agustina Isidori</p>

## AI needs, and how ossia score answers them

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>What you need</th><th>How ossia score does it</th></tr></thead>
<tbody>
<tr><td>Body tracking without special sensors</td><td>Pose detection and depth estimation from an ordinary webcam.</td></tr>
<tr><td>AI imagery that reacts to the audience or the music</td><td>Real-time image generation driven by cameras, sensors and audio analysis, with prompts that change over time.</td></tr>
<tr><td>Keeping data on site</td><td>Models run on your computer; nothing is sent to a cloud service.</td></tr>
<tr><td>Interaction designed by example, without coding</td><td>Classifiers and regressors trained from a few recorded gestures.</td></tr>
<tr><td>A show that plays the same every night</td><td>AI objects are part of the timeline, with cues, scenes and conditions.</td></tr>
</tbody>
</table>
</div>
