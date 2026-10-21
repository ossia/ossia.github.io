---
layout: use-case
title: "Real-time AI for visuals, sound and interaction"
headline: "Real-time AI for artists"
subtitle: "Pose detection, depth from a plain camera, image generation, language models and machine learning trained by example, running on your own computer as objects in a patch."
permalink: /realtime-ai.html
translation: /fr/ia-temps-reel.html
category: site-score
description: "Free, open-source real-time AI for artists: pose detection, segmentation, depth, image generation, LLMs and machine learning by example, run locally."
image: /assets/social/ossia-score-og.jpg
---

In ossia score an AI model is an object like the others. A camera image goes in; positions, images, text or sound come out and drive the rest of the piece.
The models run on your computer. Nothing is sent to a cloud service.

<picture><img src="/assets/gallery/reflet.webp" width="540" height="407" loading="lazy" alt="A visitor sitting in front of a projected, AI-generated stormy sky in Reflet"/></picture>
<p class="figure-caption"><i>Reflet</i>, Noukii (Anouk Ethier) with Isabella Salas and Allison Moore, at SAT: show logic and real-time imagery from custom generative models in ossia score. © Agustina Isidori</p>

## Seeing people

From an ordinary webcam, score detects the poses of several people with smoothing, detects and segments objects, estimates emotions and body meshes, and computes depth ([pose detection](https://ossia.io/score-docs/examples/ai/pose-detection.html), [AI recognition](https://ossia.io/score-docs/processes/ai-recognition.html)).
The results are ordinary values: they become MIDI notes, OSC messages, 3D geometry or light cues ([tracking to MIDI](https://ossia.io/score-docs/examples/ai/tracking-to-midi.html), [tracking to geometry](https://ossia.io/score-docs/examples/ai/tracking-to-geometry.html)).

## Making images

StreamDiffusion and librediffusion generate images in real time from a camera, a video or generated content, with SD and SDXL Turbo, Flux.2 Klein, ControlNet, IP-Adapter and LoRAs ([StreamDiffusion](https://ossia.io/score-docs/processes/streamdiffusion.html)).
This part needs Windows or Linux with an NVIDIA graphics card.

## Words, sound and learning

Qwen3 and Gemma 3 run as language models, and other models describe a video stream in words. Prompts can be composed and morphed over time ([Qwen LLM](https://ossia.io/score-docs/processes/qwen-llm.html), [prompt composer](https://ossia.io/score-docs/processes/ai-prompt-composer.html)).
For sound there are stem separation and neural vocoders.

Classifiers and regressors learn from a few recorded examples of gestures or sensor data, and an interpolator moves between learned states ([classifier](https://ossia.io/score-docs/processes/classifier.html), [regressor](https://ossia.io/score-docs/processes/regressor.html)).
Other ONNX models load through a generic object, running on CUDA, TensorRT, DirectML or Core ML; some of them also run in the [browser version](https://ossia.io/score-web) through WebNN.

## In short

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>You want</th><th>In ossia score</th></tr></thead>
<tbody>
<tr><td>Body tracking without special sensors</td><td>Pose detection and depth estimation from a webcam.</td></tr>
<tr><td>Generated images that react to the audience or the music</td><td>Real-time image generation driven by cameras, sensors and audio analysis, with prompts that change over time.</td></tr>
<tr><td>To keep the data on site</td><td>Models run on your computer; nothing goes to a cloud service.</td></tr>
<tr><td>Interaction designed by example</td><td>Classifiers and regressors trained from a few recorded gestures.</td></tr>
<tr><td>A show that plays the same every night</td><td>AI objects sit on the timeline with cues, scenes and conditions.</td></tr>
</tbody>
</table>
</div>
