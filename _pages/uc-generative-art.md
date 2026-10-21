---
layout: use-case
title: "Generative art and creative coding tool"
headline: "Generative art and creative coding"
subtitle: "ossia score can be used to make generative images and sound with shaders, 3D scenes and code, performed live or rendered frame by frame."
permalink: /generative-art.html
ref: generative-art
nav_title: "Generative art"
blurb: "Shaders, 3D, gaussian splats and live coding, performed live or rendered frame by frame."
category: site-score
description: "Free, open-source generative art software: ISF and compute shaders, Shadertoy import, 3D scenes, gaussian splats, live coding and offline renders."
image: /assets/social/ossia-score-og.jpg
---

ossia score can be used to make generative images and sound: shaders and geometry are connected with cables, code is used where it is more practical, and the result is organized in time as a performance, an installation or a rendered video.
For instance, the [Genuary 2022 post](/posts/genuary/) presents a month of daily sketches made with score.

<picture><source type="image/avif" srcset="/assets/blog/v3-9/3d-pipeline.avif"><img src="/assets/blog/v3-9/3d-pipeline.webp" width="800" height="450" loading="lazy" alt="A glTF model animated in a 3D scene rendered by ossia score"/></picture>

## Shaders

ISF fragment shaders, compute shaders and raw raster pipelines run in the patch, and the Lygia library can be installed from the package manager ([shaders](https://ossia.io/score-docs/processes/shaders.html), [compute shaders](https://ossia.io/score-docs/processes/compute-shaders.html), [shader cookbook](https://ossia.io/score-docs/in-depth/shader-cookbook.html)); a Shadertoy link dropped on score is converted to an ISF shader.
Cables can be delayed and looped back anywhere, which is how reaction-diffusion, trails and other image feedback effects are made ([reaction-diffusion](https://ossia.io/score-docs/examples/video/2d-geometry-feedback-reaction-diffusion.html)).

<picture><img src="/assets/blog/v3-9/feedback-cables.webp" width="1230" height="567" loading="lazy" alt="A reaction-diffusion pattern made in ossia score by sending a shader's output back into its own input with a feedback cable"/></picture>

## 3D and grammars

The GPU scene pipeline loads glTF, FBX, OBJ, PLY and voxel models, with PBR materials, lights, cameras, instancing, point clouds, volumetric textures and gaussian splats ([3D pipeline](https://ossia.io/score-docs/in-depth/3d-scene-pipeline.html), [gaussian splats](https://ossia.io/score-docs/examples/3d/3dgs.html), [generative 3D](https://ossia.io/score-docs/examples/3d/generative-3d.html)).
Context Free Art and Structure Synth generate images and shapes from grammars, and there are also vertex shader art and text-to-mesh objects ([Context Free Art](https://ossia.io/score-docs/processes/context-free-art.html), [Structure Synth](https://ossia.io/score-docs/processes/structure-synth.html)).

## Live coding

JavaScript, Faust, shaders, JSFX and C++ compiled on the fly can be edited while the piece is running ([live coding](https://ossia.io/score-docs/common-practices/8-live-coding.html)).
The sound is part of the same piece, with audio-reactive visuals, Bytebeat, synthesizers and spatial audio (see [live music](/live-music.html)).

## Rendering and distribution

A script can render a piece frame by frame to image files, at full quality and independently of real time, for a video, prints or previews; a piece can also be packaged as a standalone application (see [custom apps](/custom-apps.html)).
