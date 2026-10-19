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
Il ne cherche pas à tout remplacer : il pilote souvent les logiciels que vous utilisez déjà.
Mais pour beaucoup de projets, il suffit à lui seul.

<ul class="use-case-hub">
{% for uc in site.data.use_cases %}
  <li><a href="{{ uc.fr.url }}">{{ uc.fr.title }}</a><br/>{{ uc.fr.blurb }}</li>
{% endfor %}
</ul>

## Pourquoi ossia score

- **Libre et gratuit** (GPLv3), sans limite de fonctionnalités ni de résolution.
- **Fonctionne partout** : Windows, macOS, Linux, Raspberry Pi, Linux embarqué, et directement [dans le navigateur](https://ossia.io/score-web).
- **Interactif par nature** : déclencheurs, conditions et scénarios à embranchements font partie de la timeline.
- **Ouvert aux autres outils** : OSC, OSCQuery, MIDI, DMX, NDI, Spout, Syphon, plug-ins et patchs Pure Data.
- Développé depuis plus de dix ans avec des laboratoires de recherche et des artistes ; voyez l'[historique du projet](/project.html) et la [galerie](/gallery.html).
