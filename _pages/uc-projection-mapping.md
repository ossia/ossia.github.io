---
layout: use-case
title: "Free projection mapping and video software"
headline: "Video, projection mapping and VJing"
subtitle: "Play video, map it on several projectors, generate visuals with shaders and 3D, and share them over NDI, Spout and Syphon — synchronised with sound, lights and sensors. Free and open-source, on Windows, macOS and Linux."
permalink: /projection-mapping.html
translation: /fr/mapping-video.html
category: site-score
description: "Free, open-source software for video playback, multi-projector mapping, shaders, 3D and NDI on Windows, macOS and Linux, synchronised with sound and light."
image: /assets/social/ossia-score-og.jpg
---

ossia score has a complete GPU video and 3D pipeline. It is used for video installations, projection mapping on buildings and stages,
fulldome shows and audio-reactive visuals, often in the same project as the sound and the lights.

## What you can do

- **Video playback** of most formats (HAP, H.264, ProRes, image sequences…), looping and mixing, with an eight-input video mixer ([video](https://ossia.io/score-docs/processes/video.html), [mixing and mapping](https://ossia.io/score-docs/common-practices/11-video-mixing-and-mapping.html)).
- **Multi-projector mapping** with per-region perspective warping and edge blending, and fulldome fisheye output ([multi-projector mapping](https://ossia.io/score-docs/examples/video/video-mapping-multi-projector.html), [window device](https://ossia.io/score-docs/devices/window-device.html)).
- **Generative visuals** with ISF shaders and compute shaders, Context Free Art and Structure Synth ([shaders](https://ossia.io/score-docs/processes/shaders.html)).
- **3D scenes** since version 3.9: glTF, FBX, OBJ and other models with animations, PBR materials, instancing, point clouds and gaussian splats, all on the GPU ([3D pipeline](https://ossia.io/score-docs/in-depth/3d-scene-pipeline.html)).
- **Video in and out**: NDI, Spout, Syphon, cameras and screen capture, RTSP and SRT streams, PipeWire and GStreamer, and capture and playout cards (AJA built in and tested at 8K60; Blackmagic DeckLink and Magewell with a custom build); recording to MP4, ProRes, DNxHD or AV1.
- **Interaction**: audio-reactive visuals, computer vision (blobs, optical flow, contours), pose detection with ONNX models, depth cameras, MIDI and OSC control ([pose detection](https://ossia.io/score-docs/examples/ai/pose-detection.html)).
- **Timeline**: everything can be automated and cued, so a 20-minute show plays the same way every night, or reacts to the audience.
- **HDR and cinema formats**: HDR window output on macOS and Windows (HLG, BT.2100, Display P3), 12-bit DCI X'Y'Z' and EXR half-float images ([video formats](https://ossia.io/score-docs/processes/video-formats-color.html)).
- **Hardware decoding** through Vulkan Video, Direct3D 12 and VideoToolbox, without copies whenever the graphics backend allows it, with HAP, DXV, Cineform and H.265.
- **Shaders from the web**: drop a Shadertoy link and it becomes an ISF shader; vertex shader art, video-bending effects, and any FFmpeg filter graph ([vertex shader art](https://ossia.io/score-docs/processes/vertex-shader-art.html)).
- **Slides and text** for lecture-performances and conferences, with presentation and advanced text objects.
- **Exact-frame offline rendering** to image files from a script, for previews or fixed-media pieces.

<img src="/assets/blog/v3-9/feedback-cables.webp" width="1230" height="567" loading="lazy" alt="A reaction-diffusion visual effect patched with feedback cables in ossia score"/>

## Video needs, and how ossia score answers them

<div class="comparison-scroll">
<table class="comparison">
<tr><th>What you need</th><th>How ossia score does it</th></tr>
<tr><td>Mapping video onto several projectors or surfaces</td><td>Per-region warping, edge blending and fulldome fisheye output.</td></tr>
<tr><td>A written or interactive show that plays the same every night, or reacts</td><td>Every video, shader and 3D parameter can be cued, automated or triggered from the timeline.</td></tr>
<tr><td>Generative and 3D visuals, at any resolution</td><td>ISF and compute shaders, a GPU 3D pipeline, and no resolution limit or watermark.</td></tr>
<tr><td>Interactive theatre and dance with cameras and sensors</td><td>Pose detection, depth cameras, computer vision and tracking protocols.</td></tr>
<tr><td>Exchanging video with other software and hardware</td><td>NDI, Spout, Syphon, RTSP, SRT, and capture and playout cards.</td></tr>
<tr><td>Video, sound and lights from one computer, Linux included</td><td>One project and one machine, on Windows, macOS or Linux.</td></tr>
</table>
</div>
