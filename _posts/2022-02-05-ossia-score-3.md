---
layout: post
title:  Introducing ossia score 3
date:   2022-02-05
author: Jean-Michaël Celerier
category: News
image: /assets/blog/v3-final/ossia-score-3.jpg
thumbnail: "/assets/blog/v3-final/ossia-score-3.webp"
image-alt: ossia score 3
description: "The interactive and intermedia sequencer ossia score reaches a stable release in version 3, featuring a graphics shader pipeline and many other novel features."
---

## Introducing ossia score 3

<div class="videoWrapper">
<button type="button" class="video-facade"><span class="video-facade-title">Introducing ossia score 3</span><span class="video-facade-note">Play · loads YouTube</span></button><template class="video-facade-embed"><iframe title="Video: Introducing ossia score 3" loading="lazy" src="https://www.youtube-nocookie.com/embed/8-KpNaF2K8Q" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></template>
</div>

<br/>

We are happy to announce that after a few months of beta-testing, a stable version of ossia score 3 can be [downloaded](https://ossia.io/score/download.html).

*ossia score* is an interactive and intermedia sequencer: it allows to score multimedia content and processes in an interactive timeline, such as sound, MIDI, OSC messages, gamepad controls, video, VST plug-ins, scripts, with a specifically tailored visual language. 

It has two defining features: first, the signal processing being applied can evolve over time. The first half of
a score can have a given set of effects applied on sound, video... , and the second part of the score, a completely different set of effects being applied.
Second, the timeline can encode interactivity: it is possible to state that a part of the score will only execute when someone touches a control or does something
on stage, while others are kept in check with the musical beat, and then resynchronize these multiple competing timelines afterwards.

Our [gallery](https://ossia.io/gallery.html) presents a few artworks that use score and/or libossia, to give a feel of what people do with it: installation and video art, light shows, modular music

To get started, you can follow the tutorials that come with the [documentation](https://ossia.io/score-docs/) if you prefer reading, and check our [Youtube playlists](https://www.youtube.com/channel/UCwghQysyNdstRfv8YUPyglw/playlists) if you prefer to follow videos.

## New features and changes since v2 and v3 beta
The [beta blog post](../../posts/beta-v3/) covers most of the new features since 2.5.2, as well as the roadmap. In particular, the next few months will focus on fixing all the small quality-of-life issues and bugs that can be encountered right now -- things such as missing copy-paste in some places, UI bugs, unclear menus, etc. A high priority is also put on complete support for Spout and Syphon for video artists and mappers.

### JSFX support
One last major feature was added during the v3 beta cycle: support for JSFX plug-ins (used mainly by Reaper). This is thanks to the [ysfx](https://github.com/jpcima/ysfx) library developed by Jean Pierre Cimalando, which was fairly easy to integrate.

The [user library](https://github.com/ossia/score-user-library/) does not ship any JSFX plug-ins yet, but libraries such as provided by [Joep Vanlier](https://github.com/JoepVanlier/JSFX), [Geraint Luff](https://github.com/geraintluff/jsfx) or [Justin Johnson](https://github.com/Justin-Johnson/ReJJ) have been tested to work by putting them in the user library folder (score will look for .jsfx files).

![JSFX plug-ins in ossia score]({{site.baseurl}}/assets/blog/v3-final/jsfx.webp){: style="width: 85%; display:block; margin-left:auto; margin-right:auto" }

### Official Raspberry Pi builds
A lot of work has been put in ensuring smooth experience with the [Raspberry Pi](https://ossia.io/score-docs/in-depth/embedded.html) build, which has now been promoted from experimental to officially supported. A plain ALSA audio back-end has been added to drive various audio shields with minimal performance overhead when score is the only software running on the system, which would generally be the case for art installations.

## Contributing to ossia score

ossia is a free software project at its core, and the free software values we hold dearly.

As such, we are open to contributions from everyone interested in improving it: if you want to start
contributing to score and don't really know where to look, come to the [chat](https://gitter.im/ossia/score) and we
will do our best to mentor you!

## A huge thanks

A huge thanks to the public and private sponsors who believe in the project -- in particular Epic and the Megagrant thanks to which we could afford working full-time on ossia. To all the occasional and regular contributors, to all the individuals who take the time to report issues when they hit a bug, to all the developers and testers of the ton of libraries we use (check out the About screen once in a while!) and to all the artists who use score to create great artworks: thank you so much for your time and work!

[Discuss this post on Reddit !](https://www.reddit.com/r/ossia/comments/slaihs/introducing_ossia_score_3/)