---
layout: use-case
title: "Generative art and creative coding tool"
headline: "Generative art and creative coding"
subtitle: "Shaders, 3D scenes, point clouds, gaussian splats and generative grammars, patched with nodes or written as code, live or rendered frame by frame. Free and open-source, on Windows, macOS, Linux and in the browser."
permalink: /generative-art.html
translation: /fr/art-generatif.html
category: site-score
description: "Free, open-source generative art software: ISF and compute shaders, Shadertoy import, 3D scenes, gaussian splats, live coding and offline renders."
image: /assets/social/ossia-score-og.jpg
---

ossia score is a playground for generative images and sound: patch shaders and geometry with cables, write code where it helps,
and organise the result in time, as a live performance, an installation or a rendered video.

## What you can do

- **Shaders**: ISF fragment shaders, compute shaders and raw raster pipelines, with the Lygia library from the package manager; drop a Shadertoy link and it becomes an ISF shader ([shaders](https://ossia.io/score-docs/processes/shaders.html), [compute shaders](https://ossia.io/score-docs/processes/compute-shaders.html), [shader cookbook](https://ossia.io/score-docs/in-depth/shader-cookbook.html)).
- **3D**: a GPU scene pipeline with glTF, FBX, OBJ, PLY and voxel models, PBR materials, lights, cameras, instancing, point clouds, volumetric textures and gaussian splats ([3D pipeline](https://ossia.io/score-docs/in-depth/3d-scene-pipeline.html), [gaussian splats](https://ossia.io/score-docs/examples/3d/3dgs.html), [generative 3D](https://ossia.io/score-docs/examples/3d/generative-3d.html)).
- **Generative grammars**: Context Free Art and Structure Synth, vertex shader art, text to mesh ([Context Free Art](https://ossia.io/score-docs/processes/context-free-art.html), [Structure Synth](https://ossia.io/score-docs/processes/structure-synth.html)).
- **Feedback**: delayed cables everywhere, for reaction-diffusion, trails and other image feedback ([reaction-diffusion](https://ossia.io/score-docs/examples/video/2d-geometry-feedback-reaction-diffusion.html)).
- **Live coding**: JavaScript, Faust, shaders, JSFX and C++ compiled on the fly, edited while the piece runs ([live coding](https://ossia.io/score-docs/common-practices/8-live-coding.html)).
- **Sound in the same piece**: audio-reactive visuals, Bytebeat, synthesizers and spatial audio (see [live music](/live-music.html)).
- **Render to files**: exact-frame offline renders to image files from a script, for videos, prints or previews.
- **Share it**: run many pieces in the [browser version](https://ossia.io/score-web), or package one as a standalone app (see [custom apps](/custom-apps.html)).

<picture><source type="image/avif" srcset="/assets/blog/v3-9/3d-pipeline.avif"><img src="/assets/blog/v3-9/3d-pipeline.webp" width="800" height="450" loading="lazy" alt="A glTF model animated in a 3D scene rendered by ossia score"/></picture>

## Generative art needs, and how ossia score answers them

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>What you need</th><th>How ossia score does it</th></tr></thead>
<tbody>
<tr><td>Trying ideas quickly without boilerplate code</td><td>Shaders, 3D objects and generators connected with cables, with live parameters.</td></tr>
<tr><td>Writing code when it is the best tool</td><td>JavaScript, GLSL, Faust and C++ inside the same patch.</td></tr>
<tr><td>Reusing shaders from the community</td><td>ISF shaders, the Lygia library from the package manager, and Shadertoy links converted automatically.</td></tr>
<tr><td>Turning a sketch into a piece</td><td>A timeline with scenes, automations and cues around the generative patch.</td></tr>
<tr><td>A rendered video at full quality</td><td>Frame-exact offline rendering, independent of real-time performance.</td></tr>
</tbody>
</table>
</div>

See the [Genuary 2022 post](/posts/genuary/) for a month of generative sketches made with ossia score.
