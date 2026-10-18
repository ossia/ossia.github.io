---
layout: post
title:  Collaborative and distributed interactive scores
date:   2022-06-14
author: Jean-Michaël Celerier
category: News
image: /assets/blog/distributed/image.png
thumbnail: "/assets/blog/distributed/image.webp"
image-alt: Distributed score screenshot
description: Collaborative features in score 3.0.11
---

## Collaborative features in score 3.0.11

[ossia score 3.0.11](https://github.com/ossia/score/releases/tag/v3.0.11) introduces experimental collaborative features,
that had been developed [a few years ago](https://github.com/ossia/iscore-addon-network) as part of my [thesis work](https://scholar.google.fr/citations?view_op=view_citation&hl=fr&user=v1_52IMAAAAJ&citation_for_view=v1_52IMAAAAJ:4TOpqqG69KYC), 
but had remained dormant since then (very precisely, since the presentation for the Journées d'Informatique Musicale 2017):

![Contributions]({{site.baseurl}}/assets/blog/distributed/contribs.png){: width="100%" }

Recent projects involving distributed performance, such as João Svidzinski's [HERMES v2](https://isidore.science/document/10670/1.7jax6r) distributed musical piece, an AFIM workgroup,
a demo at SMC 2022, and a lot of great presentations at TENOR 2022, have reinvigorated the motivation for making this work correctly.

Two relatively orthogonal experimental features have been developed: rather than keeping them gated until it's all perfect, 
we have decided to release them in a preliminary state as they can already be useful (with **many caveats and disclaimers** scattered through this blog post! No warranty, no stability guarantees, assume that everything can change in the next version!), and to gather feedback from live usage.

- **Collaborative edition**: multiple people can connect together to edit a score just like in e.g. Framapad or Google Docs.
- **Distributed execution**: the score can be annotated to indicate how the execution must occur across multiple machines and exchange live data between them.

For instance, it is easily possible to have a single score with synchronized playback, where a machine will process all the audio and another all the video, 
which is useful for complex scene situations requiring horsepower that a single computer would not be able to provide.

> Caveat: live temporal synchronization is currently very barebones. Previous versions used to rely on proper clock sync at the system clock level, by using for instance PTP.
> Since this was developed before score even processed data and was backed by the audio clock rate, it has not been updated to make the synchronisation fit with the new execution pipeline.
> Further work on resyncing things correctly is planned !

### Going network goblin mode

The architecture is client-server. A machine hosts, and the others connect to it. Everything is based on WebSockets.

- The host can start hosting through the `File > Make server` menu option.
- Clients can join a session with the `File > Join` menu option.

A network session allows both collaborative edition and distributed execution. 

> Caveat: if VST plug-ins and media such as sound files, videos, etc. are used, 
the paths must match on all computers, until we finish developing a proper distributed media management system.

<video preload="auto" style="width: 100%" muted controls>
    <source src="{{ site.img }}/assets/blog/distributed/edition.mp4" type="video/mp4">
</video>

Once a score instance is part of a network session, the "Network" panel will initialize itself:

![Network Groups Panel]({{site.baseurl}}/assets/blog/distributed/panes.png)

There are three tabs: 

- Topology is about the definition of the network (more on this later).
- Transport allows to play / stop everyone and control collaborative edition.
- Object allows to set network-specific properties on objects of the score.

#### Collaborative edition features

The only "feature" of collaborative edition is that it can be optionally turned off.

This is useful for instance for playing with controls locally once a score has been defined and allows 
each client to have some amount of variation and play the collaborative score like an instrument. 

In the following video for instance, the two score instances edit the parameters of a shader [1]; at any point they 
can "opt out" of sending new control changes.

<video preload="auto" style="width: 100%" muted controls>
    <source src="{{ site.img }}/assets/blog/distributed/edition-control.mp4" type="video/mp4">
</video>

### Distributed execution

The interesting part of this work is the ability to specify, as part of a score, how it is going to be distributed across the network when executing.

That is, it is possible to say: "this part of the score runs on computer A", "that part on computer B". It is also possible to get the value 
of some computation or local input, and share it across the other computers.

A small abstraction level is introduced, to separate hardware from the high-level specification of the score: groups.
In the "Topology" tab of the network panel, one can add groups:

![Network Groups Panel with Groups]({{site.baseurl}}/assets/blog/distributed/groups.png)

The matrix below indicates which client is part of which group, a bit like UNIX users and groups. 
Clients are not saved with the score, but groups are.

Then, in the Objects tab, one can select objects of the score and assign a group to them.

For instance, in the video below, the top automation (A) is in group "audio" (there's no audio, the name is just an example!), 
while the bottom automation (B) is in group "video". The top client ("master") is put in group "audio", and the bottom client ("A client") 
is put in group video. When executing, both scores process the ISF shader, but each only execute one of the two automations.

<video preload="auto" style="width: 100%" muted controls>
    <source src="{{ site.img }}/assets/blog/distributed/exec-groups.mp4" type="video/mp4">
</video>

### Distributing expression evaluation

The evaluation of triggers can be synchronized across the network, or left independent.

That is, one can choose whether a trigger is supposed to execute on all clients, or only on the client on which the trigger became true due to some external condition.

In this video, for instance, the top score instance is connected to a joystick, which triggers the successive automations.
The bottom instance does not even have the joystick showing up in its Device Explorer - but when the topmost instance receives the trigger (a button press),
the bottom one is informed and triggers too.

<video preload="auto" style="width: 100%" muted controls>
    <source src="{{ site.img }}/assets/blog/distributed/exec-trigger.mp4" type="video/mp4">
</video>

> Caveat: synchronized triggering is only supported for triggers that are triggered through expressions involving devices, not yet when they are clicked 
> with the mouse in the score.


### Distributing interval speed

The interval speed can be shared too.

<video preload="auto" style="width: 100%" muted controls>
    <source src="{{ site.img }}/assets/blog/distributed/exec-intervals.mp4" type="video/mp4">
</video>

Both these sharing features are enabled / disabled at the scenario level, by indicating whether it is a "Free" or "Shared" scenario.

More fine-grained techniques are in a work-in-progress state in the codebase and not yet available for use, but the plan is to allow this 
choice for individual elements.

### Message pit: sharing messages across the session

Execution data is local to each instance: by default, an LFO will be computed on each individual client for instance, and data is passed locally 
in the synchronous engine of the software.

A process has been implemented to allow sharing data across all instances, to allow for instance a live input on a client to be used to control 
an effect on another client... or even more fun things, such as allowing computing the mean value for a control for various clients, to enable 
laptop-orchestra-ish scenarios.

The process is called "Message pit": it takes messages as input, and gives messages as output, by combining all the messages from all the clients 
which are sending messages to this process and executing it.

That is, given 3 clients A, B, C, if clients A and C send messages to a Message Pit process, and A, B, C execute it, then they will all see a message 
which is a combination of the two A, C inputs.

![Message Pit]({{site.baseurl}}/assets/blog/distributed/pit.png)

Multiple combinations are possible. 
Assuming that the last message sent by "A" was "1", and the last message sent by "C" was "2" 

- `List`: A, B, C will see the list `[1, 2]` or `[2, 1]` in output of the process.
- `Average`: A, B, C will see the value 1.5 at the output of the process.
- `Sum`: A, B, C will see the value 3 at the output of the process.

Similar support for audio, video, and MIDI is planned but understandably quite a bit more involved to do properly.

### It even works on the WASM build

... but it crashes very quickly and is not what anyone would call useable at this time... yet this is where we are going! 
Interactive distributed scores spanning from microcontrollers to web pages ;p

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">it actually works 🥳 one score in a browser compiled as <a href="https://x.com/hashtag/webassembly?src=hash&amp;ref_src=twsrc%5Etfw">#webassembly</a>, another as a desktop app, both edit and play the same document. sync is imperfect, wasm clicks, but I think that this opens up cool new avenues for distributed music performance, laptop orchestras, etc ! <a href="https://t.co/Poh6jj1txf">pic.x.com/Poh6jj1txf</a></p>&mdash; jm (@jcelerie) <a href="https://x.com/jcelerie/status/1535539371314712576?ref_src=twsrc%5Etfw">June 11, 2022</a></blockquote> <script async src="https://platform.x.com/widgets.js" charset="utf-8"></script> 
 

[1] Shader Based on "Twist" Shadertoy by fb39ca4 - https://www.shadertoy.com/view/XsXXDH ; Inspired by Matthew DiVito's gifs https://cargocollective.com/matthewdivito/Animated-Gifs-02 ; Credit: Joseph Fiola, Matthew DiVito, Shadertoy user fb39ca4"