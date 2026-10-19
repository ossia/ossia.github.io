---
layout: use-case
title: "What you can do with ossia score"
headline: "What can ossia score do for you?"
subtitle: "One free, open-source tool for show control, OSC and MIDI sequencing, video and mapping, lighting, visual programming and interactive installations — on its own, or together with the software you already use."
permalink: /use-cases.html
translation: /fr/usages.html
category: site-score
description: "Show control, OSC, MIDI and DMX timelines, video mapping, lighting, visual programming and interactive installations: what ossia score is used for."
image: /assets/social/ossia-score-og.jpg
---

ossia score is an **intermedia sequencer**: it puts sound, video, 3D, lights, sensors and any OSC or MIDI device on the same interactive timeline.
It does not aim to be an "all in one" tool that replaces everything: it often drives the software you already use.
But for many projects, it is all you need.

<ul class="use-case-hub">
{% for uc in site.data.use_cases %}
  <li><a href="{{ uc.en.url }}">{{ uc.en.title }}</a><br/>{{ uc.en.blurb }}</li>
{% endfor %}
</ul>

## Why ossia score

- **Free and open-source** (GPLv3), with no feature or resolution limits.
- **Runs everywhere**: Windows, macOS, Linux, Raspberry Pi, embedded Linux, and directly [in the browser](https://ossia.io/score-web).
- **Interactive by design**: triggers, conditions and branching scenarios are part of the timeline itself.
- **Open to other tools**: OSC, OSCQuery, MIDI, DMX, NDI, Spout, Syphon, plug-ins and Pure Data patches.
- Developed for more than ten years with research labs and artists; see the [project history](/project.html) and the [gallery](/gallery.html).
