---
layout: use-case
title: "Alternatives and integrations: ossia score and other tools"
headline: "What can ossia score do for you?"
subtitle: "One free, open-source tool for show control, OSC and MIDI sequencing, video and mapping, lighting, visual programming and interactive installations — used instead of, or together with, the software you already know."
permalink: /alternatives.html
translation: /fr/alternatives.html
category: site-score
description: "How ossia score compares to QLab, Vezér, Millumin, Resolume, Isadora, Max/MSP, TouchDesigner, QLC+ and DAWs, and how it works together with them."
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

## At a glance

<div class="comparison-scroll">
<table class="comparison">
<tr><th>If you use or consider…</th><th>ossia score is…</th></tr>
<tr><td>QLab, Linux Show Player, SCS</td><td>a cross-platform alternative for <a href="/show-control.html">show control</a>, with interactivity, video and lights.</td></tr>
<tr><td>Vezér, Chataigne, OSCulator, IanniX</td><td>an <a href="/osc-midi-dmx-timeline.html">OSC, MIDI and DMX timeline</a> with conditions, triggers and OSCQuery.</td></tr>
<tr><td>Millumin, MadMapper, Resolume, VDMX, Isadora</td><td>a free tool for <a href="/projection-mapping.html">video, mapping and generative visuals</a> in timed or interactive shows.</td></tr>
<tr><td>Max/MSP, Pure Data, TouchDesigner, vvvv</td><td>a <a href="/visual-programming.html">visual programming</a> environment with a timeline, which also runs Pd patches and talks to Max and TouchDesigner.</td></tr>
<tr><td>QLC+, Freestyler, Lightkey</td><td>a way to <a href="/dmx-lighting.html">synchronise DMX lights and LEDs</a> with sound and video.</td></tr>
<tr><td>Ableton Live or Reaper for an installation, media players</td><td>a dedicated tool for <a href="/interactive-installations.html">interactive and sound installations</a>, running unattended on a PC or a Raspberry Pi.</td></tr>
</table>
</div>

## Why ossia score

- **Free and open-source** (GPLv3), with no feature or resolution limits.
- **Runs everywhere**: Windows, macOS, Linux, Raspberry Pi, embedded Linux, and directly [in the browser](https://ossia.io/score-web).
- **Interactive by design**: triggers, conditions and branching scenarios are part of the timeline itself.
- **Open to other tools**: OSC, OSCQuery, MIDI, DMX, NDI, Spout, Syphon, plug-ins and Pure Data patches.
- Developed for more than ten years with research labs and artists; see the [project history](/project.html) and the [gallery](/gallery.html).
