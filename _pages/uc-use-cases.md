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
For many projects it is all you need, from the first sketch to the show; and when you already have other software or hardware, it drives them too.

<ul class="use-case-hub">
{% for uc in site.data.use_cases %}
  <li><a href="{{ uc.en.url }}">{{ uc.en.title }}</a><br/>{{ uc.en.blurb }}</li>
{% endfor %}
</ul>

## At a glance

<div class="comparison-scroll">
<table class="comparison">
<tr><th>If you need to…</th><th>ossia score gives you</th></tr>
<tr><td>run a theatre, dance or concert show</td><td><a href="/show-control.html">show control</a> with cues, scenes, timecode, and interactivity when the show needs it.</td></tr>
<tr><td>automate OSC, MIDI or DMX parameters over time</td><td>an <a href="/osc-midi-dmx-timeline.html">OSC, MIDI and DMX timeline</a> with triggers, conditions and OSCQuery.</td></tr>
<tr><td>play, map or generate video</td><td><a href="/projection-mapping.html">video, mapping and generative visuals</a>, with shaders and 3D, for timed or interactive shows.</td></tr>
<tr><td>patch audio, video and interaction</td><td>a <a href="/visual-programming.html">visual programming</a> environment with a timeline, which also runs Pure Data patches.</td></tr>
<tr><td>light a show or an installation</td><td><a href="/dmx-lighting.html">DMX and LED control</a>, synchronised with sound and video.</td></tr>
<tr><td>build an interactive or sound installation</td><td>a tool for <a href="/interactive-installations.html">installations</a> that runs unattended on a PC or a Raspberry Pi.</td></tr>
</table>
</div>

## Why ossia score

- **Free and open-source** (GPLv3), with no feature or resolution limits.
- **Runs everywhere**: Windows, macOS, Linux, Raspberry Pi, embedded Linux, and directly [in the browser](https://ossia.io/score-web).
- **Interactive by design**: triggers, conditions and branching scenarios are part of the timeline itself.
- **Open to other tools**: OSC, OSCQuery, MIDI, DMX, NDI, Spout, Syphon, plug-ins and Pure Data patches.
- Developed for more than ten years with research labs and artists; see the [project history](/project.html) and the [gallery](/gallery.html).
