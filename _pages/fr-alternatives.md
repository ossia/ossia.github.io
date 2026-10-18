---
layout: use-case
lang: fr
title: "ossia score : alternatives et intégrations"
headline: "Que peut faire ossia score pour vous ?"
subtitle: "Un seul outil libre et gratuit pour la régie de spectacle, le séquençage OSC et MIDI, la vidéo et le mapping, la lumière, la programmation visuelle et les installations interactives, à la place des logiciels que vous connaissez ou avec eux."
permalink: /fr/alternatives.html
translation: /alternatives.html
category: site-score
description: "Comment ossia score se compare à QLab, Vezér, Millumin, Resolume, Max/MSP, TouchDesigner ou QLC+, et comment il fonctionne avec eux."
image: /assets/social/ossia-score-og.jpg
---

ossia score est un **séquenceur intermédia** : il réunit son, vidéo, 3D, lumière, capteurs et n'importe quel appareil OSC ou MIDI sur une même timeline interactive.
Il ne cherche pas à tout remplacer : il pilote souvent les logiciels que vous utilisez déjà.
Mais pour beaucoup de projets, il suffit à lui seul.

<ul class="use-case-hub">
{% for uc in site.data.use_cases %}
  <li><a href="{{ uc.fr.url }}">{{ uc.fr.title }}</a><br/>{{ uc.fr.blurb }}</li>
{% endfor %}
</ul>

## En bref

<div class="comparison-scroll">
<table class="comparison">
<tr><th>Si vous utilisez ou envisagez…</th><th>ossia score est…</th></tr>
<tr><td>QLab, Linux Show Player, SCS</td><td>une alternative multiplateforme pour la <a href="/fr/regie-spectacle.html">régie de spectacle</a>, avec interactivité, vidéo et lumière.</td></tr>
<tr><td>Vezér, Chataigne, OSCulator, IanniX</td><td>une <a href="/fr/timeline-osc-midi-dmx.html">timeline OSC, MIDI et DMX</a> avec conditions, déclencheurs et OSCQuery.</td></tr>
<tr><td>Millumin, MadMapper, Resolume, VDMX, Isadora</td><td>un outil gratuit pour la <a href="/fr/mapping-video.html">vidéo, le mapping et les visuels génératifs</a> dans des spectacles écrits ou interactifs.</td></tr>
<tr><td>Max/MSP, Pure Data, TouchDesigner, vvvv</td><td>un environnement de <a href="/fr/programmation-visuelle.html">programmation visuelle</a> avec timeline, qui exécute les patchs Pd et communique avec Max et TouchDesigner.</td></tr>
<tr><td>QLC+, Freestyler, Lightkey</td><td>un moyen de <a href="/fr/eclairage-dmx.html">synchroniser lumière DMX et LED</a> avec le son et la vidéo.</td></tr>
<tr><td>Ableton Live ou Reaper pour une installation, lecteurs média</td><td>un outil dédié aux <a href="/fr/installations-interactives.html">installations interactives et sonores</a>, en autonomie sur PC ou Raspberry Pi.</td></tr>
</table>
</div>

## Pourquoi ossia score

- **Libre et gratuit** (GPLv3), sans limite de fonctionnalités ni de résolution.
- **Fonctionne partout** : Windows, macOS, Linux, Raspberry Pi, Linux embarqué, et directement [dans le navigateur](https://ossia.io/score-web).
- **Interactif par nature** : déclencheurs, conditions et scénarios à embranchements font partie de la timeline.
- **Ouvert aux autres outils** : OSC, OSCQuery, MIDI, DMX, NDI, Spout, Syphon, plug-ins et patchs Pure Data.
- Développé depuis plus de dix ans avec des laboratoires de recherche et des artistes ; voyez l'[historique du projet](/project.html) et la [galerie](/gallery.html).
