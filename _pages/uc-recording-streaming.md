---
layout: use-case
title: "Record, stream and route live video"
headline: "Video recording, streaming and routing"
subtitle: "ossia score can be used to receive, process, record and stream video live, in sync with the sound and the rest of a show."
permalink: /recording-streaming.html
ref: recording-streaming
nav_title: "Recording and streaming"
blurb: "Cameras, SDI, NDI and SRT in; ProRes or MP4 recording, RTMP streaming and NDI or Spout out."
category: site-score
description: "Free, open-source live video software: cameras, SDI capture, NDI, SRT and RTSP inputs, GPU processing, recording to ProRes or MP4, and RTMP streaming."
image: /assets/social/ossia-score-og.jpg
---

In ossia score, images come from cameras and from the network, are processed with shaders, 3D, text or AI models, and are sent to screens, files, other software or streaming services, in sync with the sound and the rest of the show; for instance, a single project can render the visuals of a concert, mix its sound and stream both.

<picture><source type="image/avif" srcset="/assets/features/camera.avif"><img src="/assets/features/camera.webp" width="436" height="348" loading="lazy" alt="A webcam image going through an LFO-driven shader filter in ossia score"/></picture>

## Sources

The supported sources are webcams and USB cameras, screen and window capture, RTSP and SRT streams, NDI (with PTZ camera control), Spout and Syphon, PipeWire and GStreamer pipelines, and DSLR cameras through gphoto2 ([camera](https://ossia.io/score-docs/devices/camera-device.html), [NDI](https://ossia.io/score-docs/devices/ndi-device.html), [FFmpeg device](https://ossia.io/score-docs/devices/libav-device.html)).
For capture cards, AJA support is built in, with GPUDirect, 10-bit and V210 formats, and was tested at 8K60; Blackmagic DeckLink and Magewell require a custom build.

## Processing

The image is processed on the GPU with shaders, video mixing, keying, computer vision, 3D scenes, titles and slides, or any FFmpeg filter graph ([video](https://ossia.io/score-docs/in-depth/video.html), [video mixing](https://ossia.io/score-docs/common-practices/11-video-mixing-and-mapping.html)).
HDR and wide-gamut sources and outputs are supported (HLG, PQ, BT.2020, Display P3), with tonemapping ([video formats and color](https://ossia.io/score-docs/processes/video-formats-color.html)).

## Outputs

The program output and its sound are recorded to MP4, MKV, ProRes, DNxHD or AV1, and the sound alone to WAV ([FFmpeg device](https://ossia.io/score-docs/devices/libav-device.html), [audio recorder](https://ossia.io/score-docs/processes/audio-recorder.html)).
score can stream audio and video to an RTMP service, or over RTP or UDP, without a separate encoder ([livestreaming](https://ossia.io/score-docs/common-practices/10-livestreaming.html), [stream in and out](https://ossia.io/score-docs/examples/video/ffmpeg-streaming.html)); to send the image to a streaming studio, a video call or other media software, there are NDI (GPU zero-copy, tested at 8K), Spout, Syphon and PipeWire outputs ([Spout](https://ossia.io/score-docs/devices/spout-device.html), [Syphon](https://ossia.io/score-docs/devices/syphon-device.html)).

Recordings are started and stopped, cameras are switched and graphics are changed from the timeline, from cues, from sensors, or from any OSC or MIDI controller.
