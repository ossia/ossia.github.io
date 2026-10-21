---
layout: use-case
lang: fr
title: "IA en temps réel pour l'image et le son"
headline: "L'IA en temps réel pour les artistes"
subtitle: "Détection de pose et d'objets, profondeur depuis une simple caméra, génération d'images en temps réel, modèles de langage et de vision, et apprentissage automatique par l'exemple, sur votre propre ordinateur et sur la même timeline que le son, la vidéo et la lumière. Libre et gratuit."
permalink: /fr/ia-temps-reel.html
translation: /realtime-ai.html
category: site-score
description: "IA en temps réel libre pour les artistes : détection de pose, segmentation, profondeur, images générées, LLM et apprentissage par l'exemple, en local."
image: /assets/social/ossia-score-og.jpg
---

ossia score exécute les modèles d'IA comme des objets ordinaires d'un patch : une caméra entre, des positions, des images, du texte ou du son sortent,
et ils pilotent le reste de l'œuvre. Les modèles tournent en local, sur votre ordinateur, pas dans un service en ligne.

## Ce que vous pouvez faire

- **Voir les personnes et les objets** : détection de pose de plusieurs personnes avec lissage, détection et segmentation d'objets, détection d'émotions, maillages du corps, et profondeur depuis une caméra RGB ordinaire ([détection de pose](https://ossia.io/score-docs/examples/ai/pose-detection.html), [reconnaissance](https://ossia.io/score-docs/processes/ai-recognition.html)).
- **Générer des images en temps réel** : StreamDiffusion et librediffusion avec SD et SDXL Turbo, Flux.2 Klein, ControlNet, IP-Adapter et LoRA, depuis une caméra, une vidéo ou du contenu généré ([StreamDiffusion](https://ossia.io/score-docs/processes/streamdiffusion.html)). Nécessite Windows ou Linux avec une carte graphique NVIDIA.
- **Modèles de langage et de vision** : Qwen3 et Gemma 3, et des modèles qui décrivent un flux vidéo en mots ; composez et faites évoluer des prompts dans le temps ([LLM Qwen](https://ossia.io/score-docs/processes/qwen-llm.html), [compositeur de prompts](https://ossia.io/score-docs/processes/ai-prompt-composer.html)).
- **Son** : séparation de pistes et vocodeurs neuronaux.
- **Apprentissage par l'exemple** : entraînez un classifieur ou un régresseur à partir de quelques exemples de gestes ou de données de capteurs, et interpolez entre des états ([classifieur](https://ossia.io/score-docs/processes/classifier.html), [régresseur](https://ossia.io/score-docs/processes/regressor.html)).
- **Vos propres modèles** : un objet ONNX générique exécute d'autres modèles, sur CUDA, TensorRT, DirectML ou Core ML ; certains modèles fonctionnent aussi dans la [version web](https://ossia.io/score-web) grâce à WebNN.
- **De l'IA vers tout le reste** : les poses deviennent du MIDI, de l'OSC, de la géométrie 3D ou des cues lumière ([tracking vers MIDI](https://ossia.io/score-docs/examples/ai/tracking-to-midi.html), [tracking vers géométrie](https://ossia.io/score-docs/examples/ai/tracking-to-geometry.html)).

<picture><img src="/assets/gallery/reflet.webp" width="540" height="407" loading="lazy" alt="Une personne assise devant un ciel d'orage projeté, généré par IA, dans Reflet"/></picture>
<p class="figure-caption"><i>Reflet</i>, Noukii (Anouk Ethier) avec Isabella Salas et Allison Moore, à la SAT : logique du spectacle et images générées en temps réel par des modèles sur mesure dans ossia score. © Agustina Isidori</p>

## Les besoins de l'IA, et les réponses d'ossia score

<div class="comparison-scroll">
<table class="comparison">
<tr><th>Ce dont vous avez besoin</th><th>Comment ossia score y répond</th></tr>
<tr><td>Suivre le corps sans capteur spécial</td><td>Détection de pose et estimation de profondeur depuis une webcam ordinaire.</td></tr>
<tr><td>Des images générées qui réagissent au public ou à la musique</td><td>Génération d'images en temps réel pilotée par caméras, capteurs et analyse audio, avec des prompts qui évoluent dans le temps.</td></tr>
<tr><td>Garder les données sur place</td><td>Les modèles tournent sur votre ordinateur ; rien n'est envoyé à un service en ligne.</td></tr>
<tr><td>Concevoir l'interaction par l'exemple, sans coder</td><td>Classifieurs et régresseurs entraînés à partir de quelques gestes enregistrés.</td></tr>
<tr><td>Un spectacle identique chaque soir</td><td>Les objets d'IA font partie de la timeline, avec cues, scènes et conditions.</td></tr>
</table>
</div>
