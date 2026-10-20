---
layout: use-case
title: "Free software to record, stream and route live video"
headline: "Video recording, streaming and routing"
subtitle: "Bring in cameras, capture cards and network streams, process them on the GPU with sound, 3D and graphics, then record to file, stream online or send the image to other software. Free and open-source, on Windows, macOS and Linux."
permalink: /recording-streaming.html
translation: /fr/enregistrement-streaming.html
category: site-score
description: "Free, open-source live video software: cameras, SDI capture, NDI, SRT and RTSP inputs, GPU processing, recording to ProRes or MP4, and RTMP streaming."
image: /assets/social/ossia-score-og.jpg
---

ossia score has a complete video pipeline: images come in from cameras and the network, go through shaders, 3D, text and AI,
and go out to screens, files, other software and streaming services, in sync with sound and the rest of the show.

## What you can do

- **Inputs**: webcams and USB cameras, screen and window capture, network streams (RTSP, SRT), NDI with PTZ camera control, Spout and Syphon, PipeWire and GStreamer pipelines, DSLR cameras through gphoto2 ([camera](https://ossia.io/score-docs/devices/camera-device.html), [NDI](https://ossia.io/score-docs/devices/ndi-device.html), [FFmpeg device](https://ossia.io/score-docs/devices/libav-device.html)).
- **Capture cards**: AJA cards built in, with GPUDirect, 10-bit and V210 formats, tested at 8K60; Blackmagic DeckLink and Magewell with a custom build.
- **Processing**: shaders, video mixing, keying and computer vision, 3D scenes, titles and slides, any FFmpeg filter graph, on the GPU ([video](https://ossia.io/score-docs/in-depth/video.html), [video mixing](https://ossia.io/score-docs/common-practices/11-video-mixing-and-mapping.html)).
- **Recording**: write the program output to MP4, MKV, ProRes, DNxHD or AV1 files with its sound, or record sound alone to WAV ([FFmpeg device](https://ossia.io/score-docs/devices/libav-device.html), [audio recorder](https://ossia.io/score-docs/processes/audio-recorder.html)).
- **Streaming**: send audio and video to an RTMP service, or over RTP or UDP, directly from ossia score, without a separate encoder ([livestreaming](https://ossia.io/score-docs/common-practices/10-livestreaming.html), [stream in and out](https://ossia.io/score-docs/examples/video/ffmpeg-streaming.html)).
- **Routing to other software**: NDI (GPU zero-copy, tested at 8K), Spout, Syphon and PipeWire outputs, to feed streaming studios, video conferences or other media software ([Spout](https://ossia.io/score-docs/devices/spout-device.html), [Syphon](https://ossia.io/score-docs/devices/syphon-device.html)).
- **Colour**: HDR and wide-gamut sources and outputs (HLG, PQ, BT.2020, Display P3), with tonemapping ([video formats and colour](https://ossia.io/score-docs/processes/video-formats-color.html)).
- **Automated**: start and stop recordings, switch cameras and change graphics from the timeline, from cues or from any OSC or MIDI controller.

## Video production needs, and how ossia score answers them

<div class="comparison-scroll">
<table class="comparison">
<tr><th>What you need</th><th>How ossia score does it</th></tr>
<tr><td>Streaming a concert or a performance with its visuals</td><td>The same project renders the visuals, mixes the sound and sends both to the streaming service.</td></tr>
<tr><td>Bringing remote or network video into a show</td><td>SRT, RTSP, NDI and capture card inputs, processed like any other texture.</td></tr>
<tr><td>Recording the program for archive or editing</td><td>Recording to ProRes, DNxHD, MP4 or AV1, triggered from the timeline.</td></tr>
<tr><td>Sending images to the rest of the setup</td><td>NDI, Spout, Syphon and PipeWire outputs alongside the screens.</td></tr>
<tr><td>Camera switching driven by the show</td><td>Cues, scenes and sensors choose cameras and graphics automatically.</td></tr>
</table>
</div>
