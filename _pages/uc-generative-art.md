---
layout: use-case
title: "Generative art and creative coding tool"
headline: "Generative art and creative coding"
subtitle: "Shaders, 3D scenes, point clouds and gaussian splats, patched with cables or written as code, performed live or rendered frame by frame."
permalink: /generative-art.html
translation: /fr/art-generatif.html
category: site-score
description: "Free, open-source generative art software: ISF and compute shaders, Shadertoy import, 3D scenes, gaussian splats, live coding and offline renders."
image: /assets/social/ossia-score-og.jpg
---

ossia score works well as a sketchbook for generative images and sound. Shaders and geometry are patched with cables, code goes where it helps, and the result is laid out in time as a performance, an installation or a rendered video.
For a month of daily sketches, see the [Genuary 2022 post](/posts/genuary/).

<picture><source type="image/avif" srcset="/assets/blog/v3-9/3d-pipeline.avif"><img src="/assets/blog/v3-9/3d-pipeline.webp" width="800" height="450" loading="lazy" alt="A glTF model animated in a 3D scene rendered by ossia score"/></picture>

## Shaders

ISF fragment shaders, compute shaders and raw raster pipelines all run in the patch, and the Lygia library comes from the package manager ([shaders](https://ossia.io/score-docs/processes/shaders.html), [compute shaders](https://ossia.io/score-docs/processes/compute-shaders.html), [shader cookbook](https://ossia.io/score-docs/in-depth/shader-cookbook.html)).
Drop a Shadertoy link on score and it becomes an ISF shader.
Cables can be delayed and fed back anywhere, which is how reaction-diffusion, trails and other image feedback are made ([reaction-diffusion](https://ossia.io/score-docs/examples/video/2d-geometry-feedback-reaction-diffusion.html)).

<picture><img src="/assets/blog/v3-9/feedback-cables.webp" width="1230" height="567" loading="lazy" alt="A reaction-diffusion pattern made in ossia score by sending a shader's output back into its own input with a feedback cable"/></picture>

## 3D and grammars

The GPU scene pipeline loads glTF, FBX, OBJ, PLY and voxel models, with PBR materials, lights, cameras, instancing, point clouds, volumetric textures and gaussian splats ([3D pipeline](https://ossia.io/score-docs/in-depth/3d-scene-pipeline.html), [gaussian splats](https://ossia.io/score-docs/examples/3d/3dgs.html), [generative 3D](https://ossia.io/score-docs/examples/3d/generative-3d.html)).
Context Free Art and Structure Synth grow images and shapes from grammars, next to vertex shader art and text-to-mesh ([Context Free Art](https://ossia.io/score-docs/processes/context-free-art.html), [Structure Synth](https://ossia.io/score-docs/processes/structure-synth.html)).

## Code, live

JavaScript, Faust, shaders, JSFX and C++ compiled on the fly can all be edited while the piece runs ([live coding](https://ossia.io/score-docs/common-practices/8-live-coding.html)).
Sound belongs to the same piece: audio-reactive visuals, Bytebeat, synthesizers and spatial audio (see [live music](/live-music.html)).

## Finishing a piece

A script can render the piece frame by frame to image files, at full quality and independent of real-time speed, for a video, prints or previews.
Many pieces also run in the [browser version](https://ossia.io/score-web), and one can be packaged as a standalone app (see [custom apps](/custom-apps.html)).

## In short

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>You want</th><th>In ossia score</th></tr></thead>
<tbody>
<tr><td>To try ideas without boilerplate</td><td>Shaders, 3D objects and generators connected with cables, with live parameters.</td></tr>
<tr><td>To write code when it is the right tool</td><td>JavaScript, GLSL, Faust and C++ in the same patch.</td></tr>
<tr><td>To reuse community shaders</td><td>ISF shaders, Lygia from the package manager, and Shadertoy links converted on drop.</td></tr>
<tr><td>To turn a sketch into a piece</td><td>A timeline with scenes, automations and cues around the patch.</td></tr>
<tr><td>A rendered video at full quality</td><td>Frame-exact offline rendering.</td></tr>
</tbody>
</table>
</div>
