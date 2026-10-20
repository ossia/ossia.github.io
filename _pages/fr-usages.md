---
layout: use-case
lang: fr
title: "Ce que vous pouvez faire avec ossia score"
headline: "Que peut faire ossia score pour vous ?"
subtitle: "Un seul outil libre et gratuit pour la régie de spectacle, le séquençage OSC et MIDI, la vidéo et le mapping, la lumière, la programmation visuelle et les installations interactives, seul ou avec les logiciels que vous utilisez déjà."
permalink: /fr/usages.html
translation: /use-cases.html
category: site-score
description: "Régie de spectacle, timeline OSC, MIDI et DMX, mapping vidéo, lumière, programmation visuelle et installations interactives : les usages d'ossia score."
image: /assets/social/ossia-score-og.jpg
---

ossia score est un **séquenceur intermédia** : il réunit son, vidéo, 3D, lumière, capteurs et n'importe quel appareil OSC ou MIDI sur une même timeline interactive.
Pour beaucoup de projets, il suffit à lui seul, de la première esquisse au spectacle ; et quand vous avez déjà d'autres logiciels ou matériels, il les pilote aussi.

<ul class="use-case-hub">
{% for uc in site.data.use_cases %}
  <li><a href="{{ uc.fr.url }}">{{ uc.fr.title }}</a><br/>{{ uc.fr.blurb }}</li>
{% endfor %}
</ul>

## En bref

<div class="comparison-scroll">
<table class="comparison">
<tr><th>Si vous devez…</th><th>ossia score vous offre</th></tr>
<tr><td>conduire un spectacle de théâtre, de danse ou un concert</td><td>une <a href="/fr/regie-spectacle.html">régie</a> avec cues, scènes, timecode, et de l'interactivité quand le spectacle en a besoin.</td></tr>
<tr><td>automatiser des paramètres OSC, MIDI ou DMX dans le temps</td><td>une <a href="/fr/timeline-osc-midi-dmx.html">timeline OSC, MIDI et DMX</a> avec déclencheurs, conditions et OSCQuery.</td></tr>
<tr><td>lire, projeter ou générer de la vidéo</td><td><a href="/fr/mapping-video.html">vidéo, mapping et visuels génératifs</a>, avec shaders et 3D, pour des spectacles écrits ou interactifs.</td></tr>
<tr><td>patcher audio, vidéo et interaction</td><td>un environnement de <a href="/fr/programmation-visuelle.html">programmation visuelle</a> avec timeline, qui exécute aussi les patchs Pure Data.</td></tr>
<tr><td>éclairer un spectacle ou une installation</td><td>le <a href="/fr/eclairage-dmx.html">pilotage DMX et LED</a>, synchronisé avec le son et la vidéo.</td></tr>
<tr><td>créer une installation interactive ou sonore</td><td>un outil pour les <a href="/fr/installations-interactives.html">installations</a>, en autonomie sur PC ou Raspberry Pi.</td></tr>
<tr><td>jouer de la musique électronique live</td><td>des <a href="/fr/musique-live.html">instruments, séquenceurs et plug-ins</a> synchronisés avec l'horloge MIDI, le timecode et les visuels.</td></tr>
<tr><td>placer et déplacer des sons sur de nombreux haut-parleurs</td><td>la <a href="/fr/spatialisation-sonore.html">spatialisation sonore</a> avec DBAP, GBAP, trajectoires et pilotage de moteurs de spatialisation.</td></tr>
<tr><td>utiliser l'IA dans une œuvre</td><td>l'<a href="/fr/ia-temps-reel.html">IA en temps réel</a> : détection de pose, génération d'images et modèles de langage, en local.</td></tr>
</table>
</div>

## Pourquoi ossia score

- **Libre et gratuit** (GPLv3), sans limite de fonctionnalités ni de résolution.
- **Fonctionne partout** : Windows, macOS, Linux, Raspberry Pi, Linux embarqué, et directement [dans le navigateur](https://ossia.io/score-web).
- **Interactif par nature** : déclencheurs, conditions et scénarios à embranchements font partie de la timeline.
- **Ouvert aux autres outils** : OSC, OSCQuery, MIDI, DMX, NDI, Spout, Syphon, plug-ins et patchs Pure Data.
- Développé depuis plus de dix ans avec des laboratoires de recherche et des artistes ; voyez l'[historique du projet](/project.html) et la [galerie](/gallery.html).
