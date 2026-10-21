---
layout: use-case
lang: fr
title: "IA en temps réel pour l'image et le son"
headline: "L'IA en temps réel pour les artistes"
subtitle: "Détection de pose, profondeur depuis une simple caméra, génération d'images, modèles de langage et apprentissage par l'exemple, sur votre propre ordinateur, comme des objets d'un patch."
permalink: /fr/ia-temps-reel.html
translation: /realtime-ai.html
category: site-score
description: "IA en temps réel libre pour les artistes : détection de pose, segmentation, profondeur, images générées, LLM et apprentissage par l'exemple, en local."
image: /assets/social/ossia-score-og.jpg
---

Dans ossia score, un modèle d'IA est un objet comme les autres. L'image d'une caméra entre ; des positions, des images, du texte ou du son sortent et pilotent le reste de l'œuvre.
Les modèles tournent sur votre ordinateur. Rien n'est envoyé à un service en ligne.

<picture><img src="/assets/gallery/reflet.webp" width="540" height="407" loading="lazy" alt="Une personne assise devant un ciel d'orage projeté, généré par IA, dans Reflet"/></picture>
<p class="figure-caption"><i>Reflet</i>, Noukii (Anouk Ethier) avec Isabella Salas et Allison Moore, à la SAT : logique du spectacle et images générées en temps réel par des modèles sur mesure dans ossia score. © Agustina Isidori</p>

## Voir les personnes

À partir d'une webcam ordinaire, score détecte la pose de plusieurs personnes avec lissage, détecte et segmente les objets, estime les émotions et les maillages du corps, et calcule la profondeur ([détection de pose](https://ossia.io/score-docs/examples/ai/pose-detection.html), [reconnaissance](https://ossia.io/score-docs/processes/ai-recognition.html)).
Les résultats sont des valeurs ordinaires : ils deviennent des notes MIDI, des messages OSC, de la géométrie 3D ou des cues lumière ([tracking vers MIDI](https://ossia.io/score-docs/examples/ai/tracking-to-midi.html), [tracking vers géométrie](https://ossia.io/score-docs/examples/ai/tracking-to-geometry.html)).

## Fabriquer des images

StreamDiffusion et librediffusion génèrent des images en temps réel depuis une caméra, une vidéo ou du contenu généré, avec SD et SDXL Turbo, Flux.2 Klein, ControlNet, IP-Adapter et LoRA ([StreamDiffusion](https://ossia.io/score-docs/processes/streamdiffusion.html)).
Cette partie demande Windows ou Linux avec une carte graphique NVIDIA.

## Mots, son et apprentissage

Qwen3 et Gemma 3 tournent comme modèles de langage, et d'autres modèles décrivent un flux vidéo en mots. Les prompts se composent et évoluent dans le temps ([LLM Qwen](https://ossia.io/score-docs/processes/qwen-llm.html), [compositeur de prompts](https://ossia.io/score-docs/processes/ai-prompt-composer.html)).
Pour le son, il y a la séparation de pistes et des vocodeurs neuronaux.

Classifieurs et régresseurs apprennent à partir de quelques exemples enregistrés de gestes ou de données de capteurs, et un interpolateur passe d'un état appris à l'autre ([classifieur](https://ossia.io/score-docs/processes/classifier.html), [régresseur](https://ossia.io/score-docs/processes/regressor.html)).
D'autres modèles ONNX se chargent dans un objet générique, sur CUDA, TensorRT, DirectML ou Core ML ; certains fonctionnent aussi dans la [version web](https://ossia.io/score-web) grâce à WebNN.

## En résumé

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>Vous voulez</th><th>Dans ossia score</th></tr></thead>
<tbody>
<tr><td>Suivre le corps sans capteur spécial</td><td>Détection de pose et estimation de profondeur depuis une webcam.</td></tr>
<tr><td>Des images générées qui réagissent au public ou à la musique</td><td>Génération en temps réel pilotée par caméras, capteurs et analyse audio, avec des prompts qui évoluent.</td></tr>
<tr><td>Garder les données sur place</td><td>Les modèles tournent sur votre ordinateur ; rien ne part vers un service en ligne.</td></tr>
<tr><td>Concevoir l'interaction par l'exemple</td><td>Classifieurs et régresseurs entraînés à partir de quelques gestes enregistrés.</td></tr>
<tr><td>Un spectacle identique chaque soir</td><td>Les objets d'IA sont sur la timeline, avec cues, scènes et conditions.</td></tr>
</tbody>
</table>
</div>
