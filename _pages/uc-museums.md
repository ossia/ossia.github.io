---
layout: use-case
title: "Museum and exhibition AV software"
headline: "Museums and permanent exhibitions"
subtitle: "ossia score can be used to run the media of permanent exhibits, which start by themselves, can be monitored remotely, and can be handled by staff who did not build them."
permalink: /museums-exhibitions.html
translation: /fr/musees-expositions.html
category: site-score
description: "Free, open-source software to run museum and exhibition AV: unattended playback, monitoring, staff remote panels, kiosk apps, on PC or Raspberry Pi."
image: /assets/social/ossia-score-og.jpg
---

ossia score can be used to run the media and the interactive parts of an exhibition, from a single screen to a whole route of rooms; this page is about running them every day, while the interaction itself is described on the [interactive installations](/interactive-installations.html) page.
For instance, Blue Yeti used ossia for the *Carousel Musical* of the Abbaye aux Dames, and libossia for the Musée de la nature et de la chasse in Gien and for the interactive museum route of the Chocolaterie Camille Bloch in Switzerland.

<picture><img src="/assets/gallery/carrousel.webp" width="800" height="597" loading="lazy" alt="A geodesic pavilion next to an abbey, and inside it a large wooden sculpture lit in orange"/></picture>
<p class="figure-caption"><i>Carousel Musical</i>, Blue Yeti, Abbaye aux Dames.</p>

## Unattended playback

score opens a project and plays it on startup, without the editor, after a delay if plug-ins need time to load ([headless mode](https://ossia.io/score-docs/faq/nogui.html), [command line](https://ossia.io/score-docs/reference/commandline.html)); it runs on a Raspberry Pi or another Linux board with hardware video decoding, without a desktop environment ([embedded devices](https://ossia.io/score-docs/in-depth/embedded.html)).

A system device reports the CPU, GPU, memory, battery and network usage, and every parameter can be read over OSC and OSCQuery, so that an exhibit can be checked remotely; on low-power machines, the display updates can be disabled.

## Control by the staff

The staff can start, stop and trigger scenes from a web browser, a phone or a tablet on the local network ([remote control](https://ossia.io/score-docs/in-depth/remote.html)).
When an exhibit needs its own touch screen, it can be packaged as a standalone application which only shows the buttons visitors should use (see [custom apps](/custom-apps.html)).

<picture><img src="/assets/blog/v3/remote.webp" width="1229" height="854" loading="lazy" alt="The ossia score remote control in a web browser, with transport buttons, speed sliders, an arpeggiator, buttons and color pickers"/></picture>

## Maintenance

The project tools gather all the media in the project folder, report missing files and make a zip archive of the whole project, which makes it possible to hand an exhibit over to another team ([project files](https://ossia.io/score-docs/reference/project-files.html)); the same project opens on every operating system.
Sound, video, lights and props are on the same timeline, with cues and scenes, AV equipment can be controlled through the Bitfocus Companion modules installed from the package manager, and visitors can interact through buttons, sensors, cameras and depth cameras ([cues](https://ossia.io/score-docs/cues.html), [scenes](https://ossia.io/score-docs/common-practices/6-scenes.html)).

In the [gallery](/gallery.html), the "Museums" filter shows the exhibits made with ossia.
