---
layout: use-case
title: "Real-time AI for visuals, sound and interaction"
headline: "Real-time AI for artists"
subtitle: "ossia score can be used to run AI models in real time, such as pose detection, image generation or language models, as objects in a patch."
permalink: /realtime-ai.html
translation: /fr/ia-temps-reel.html
category: site-score
description: "Free, open-source real-time AI for artists: pose detection, segmentation, depth, image generation, LLMs and machine learning by example, run locally."
image: /assets/social/ossia-score-og.jpg
---

In ossia score, an AI model is used like any other object of a patch: for instance a camera image goes in, and positions, images, text or sound come out and drive the rest of the piece.
The models run locally on the computer; the AI objects do not send anything to a cloud service.
*Reflet* (Noukii, Isabella Salas and Allison Moore, SAT, Montréal, 2025–2026) uses score for the show logic and for real-time imagery made with custom generative models.

<picture><img src="/assets/gallery/reflet.webp" width="540" height="407" loading="lazy" alt="A visitor sitting in front of a projected, AI-generated stormy sky in Reflet"/></picture>
<p class="figure-caption"><i>Reflet</i>, Noukii (Anouk Ethier) with Isabella Salas and Allison Moore, at SAT: show logic and real-time imagery from custom generative models in ossia score. © Agustina Isidori</p>

## Pose and vision

From an ordinary webcam, score detects the poses of several people (with smoothing), detects and segments objects, estimates emotions and body meshes, and computes depth ([pose detection](https://ossia.io/score-docs/examples/ai/pose-detection.html), [AI recognition](https://ossia.io/score-docs/processes/ai-recognition.html)).
The results are ordinary values, which can be turned into MIDI notes, OSC messages, 3D geometry or light cues ([tracking to MIDI](https://ossia.io/score-docs/examples/ai/tracking-to-midi.html), [tracking to geometry](https://ossia.io/score-docs/examples/ai/tracking-to-geometry.html)).

## Image generation

StreamDiffusion and librediffusion generate images in real time from a camera, a video or generated content, with SD and SDXL Turbo, Flux.2 Klein, ControlNet, IP-Adapter and LoRAs ([StreamDiffusion](https://ossia.io/score-docs/processes/streamdiffusion.html)); these objects require Windows or Linux with an NVIDIA graphics card.
The prompts can be composed and interpolated over time, and driven by cameras, sensors or audio analysis ([prompt composer](https://ossia.io/score-docs/processes/ai-prompt-composer.html)).

## Language, sound and learning

Qwen3 and Gemma 3 can be used as language models, and other models describe a video stream in words ([Qwen LLM](https://ossia.io/score-docs/processes/qwen-llm.html)); for sound, there are stem separation and neural vocoders.

Classifiers and regressors are trained from a few recorded examples of gestures or sensor data, and an interpolator moves between learned states ([classifier](https://ossia.io/score-docs/processes/classifier.html), [regressor](https://ossia.io/score-docs/processes/regressor.html)).
Other ONNX models can be loaded through a generic object, running on CUDA, TensorRT, DirectML or Core ML; some of them also run in the [browser version](https://ossia.io/score-web) through WebNN.

Like any other process, the AI objects are placed on the timeline with cues, scenes and conditions, so that a show using them can be played identically every night.
