---
layout: use-case
title: "Museum and exhibition AV software"
headline: "Museums and permanent exhibitions"
subtitle: "Exhibits that start by themselves in the morning, report how they are doing, and can be looked after by staff who did not build them."
permalink: /museums-exhibitions.html
translation: /fr/musees-expositions.html
category: site-score
description: "Free, open-source software to run museum and exhibition AV: unattended playback, monitoring, staff remote panels, kiosk apps, on PC or Raspberry Pi."
image: /assets/social/ossia-score-og.jpg
---

A permanent exhibition runs for months. Every morning it has to start without anyone touching it, and when something breaks, the person fixing it is rarely the one who built it.
ossia score runs the media and the interactive parts of an exhibit, from a single screen to a whole route of rooms. For the interaction itself, see [interactive installations](/interactive-installations.html).

<picture><img src="/assets/gallery/carrousel.webp" width="800" height="597" loading="lazy" alt="A geodesic pavilion next to an abbey, and inside it a large wooden sculpture lit in orange"/></picture>
<p class="figure-caption"><i>Carousel Musical</i>, Blue Yeti, Abbaye aux Dames.</p>

## Every morning

score opens a project and plays it on startup, without the editor, after a delay if plug-ins need time to load ([headless mode](https://ossia.io/score-docs/faq/nogui.html), [command line](https://ossia.io/score-docs/reference/commandline.html)).
It runs on a Raspberry Pi or another Linux board with hardware video decoding, without a desktop environment ([embedded devices](https://ossia.io/score-docs/in-depth/embedded.html)).

A system device reports CPU, GPU, memory, battery and network use, and every parameter can be read over OSC and OSCQuery, so someone can check an exhibit from their desk. On low-power machines the display updates can be switched off.

## The staff panel

The reception team starts, stops and triggers scenes from a browser, a phone or a tablet on the local network ([remote control](https://ossia.io/score-docs/in-depth/remote.html)).
When an exhibit needs its own touch screen, it can be packaged as a standalone application with only the buttons visitors should see (see [custom apps](/custom-apps.html)).

<picture><img src="/assets/blog/v3/remote.webp" width="1229" height="854" loading="lazy" alt="The ossia score remote control in a web browser, with transport buttons, speed sliders, an arpeggiator, buttons and colour pickers"/></picture>

## A project you can hand over

Before handing over, collect all media into the project folder, look for missing files, and archive the whole project as a zip ([project files](https://ossia.io/score-docs/reference/project-files.html)).
Sound, video, lights and props share one timeline with cues and scenes, and AV equipment can be driven through Bitfocus Companion modules from the package manager ([cues](https://ossia.io/score-docs/cues.html), [scenes](https://ossia.io/score-docs/common-practices/6-scenes.html)).
Visitors can interact through buttons, sensors, cameras and depth cameras.

## In short

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>You want</th><th>In ossia score</th></tr></thead>
<tbody>
<tr><td>Exhibits that start without anyone</td><td>Autoplay on startup, headless mode, no editor window on screen.</td></tr>
<tr><td>Many exhibits on a small budget</td><td>Free software on a Raspberry Pi or a mini PC instead of a dedicated media player.</td></tr>
<tr><td>To know when something goes wrong</td><td>System monitoring, and every parameter readable over the network.</td></tr>
<tr><td>Staff who are not technicians</td><td>A browser control panel, or a touch interface with only the buttons they need.</td></tr>
<tr><td>A project that outlives its author</td><td>Media collected into one folder, open file formats, the same project on every operating system.</td></tr>
</tbody>
</table>
</div>

In the [gallery](/gallery.html), the "Museums" filter shows exhibits made with ossia.
