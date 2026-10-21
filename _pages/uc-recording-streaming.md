---
layout: use-case
title: "Record, stream and route live video"
headline: "Video recording, streaming and routing"
subtitle: "Cameras, capture cards and network streams in; processing on the GPU with the sound of the show; recordings, streams and feeds to other software out."
permalink: /recording-streaming.html
translation: /fr/enregistrement-streaming.html
category: site-score
description: "Free, open-source live video software: cameras, SDI capture, NDI, SRT and RTSP inputs, GPU processing, recording to ProRes or MP4, and RTMP streaming."
image: /assets/social/ossia-score-og.jpg
---

Images come into ossia score from cameras and the network, go through shaders, 3D, text and AI, and leave for screens, files, other software and streaming services, in time with the sound and the rest of the show.

<picture><source type="image/avif" srcset="/assets/features/camera.avif"><img src="/assets/features/camera.webp" width="436" height="348" loading="lazy" alt="A webcam image going through an LFO-driven shader filter in ossia score"/></picture>

## Sources

Webcams and USB cameras, screen and window capture, RTSP and SRT streams, NDI (with PTZ camera control), Spout and Syphon, PipeWire and GStreamer pipelines, and DSLR cameras through gphoto2 ([camera](https://ossia.io/score-docs/devices/camera-device.html), [NDI](https://ossia.io/score-docs/devices/ndi-device.html), [FFmpeg device](https://ossia.io/score-docs/devices/libav-device.html)).
For capture cards, AJA is built in, with GPUDirect, 10-bit and V210 formats, and was tested at 8K60. Blackmagic DeckLink and Magewell work with a custom build.

## On the GPU

Shaders, video mixing, keying, computer vision, 3D scenes, titles and slides, and any FFmpeg filter graph process the image ([video](https://ossia.io/score-docs/in-depth/video.html), [video mixing](https://ossia.io/score-docs/common-practices/11-video-mixing-and-mapping.html)).
HDR and wide-gamut sources and outputs are handled (HLG, PQ, BT.2020, Display P3), with tonemapping ([video formats and colour](https://ossia.io/score-docs/processes/video-formats-color.html)).

## Outputs

The program output, with its sound, is written to MP4, MKV, ProRes, DNxHD or AV1; sound alone can go to WAV ([FFmpeg device](https://ossia.io/score-docs/devices/libav-device.html), [audio recorder](https://ossia.io/score-docs/processes/audio-recorder.html)).
score can stream audio and video to an RTMP service, or over RTP or UDP, without a separate encoder ([livestreaming](https://ossia.io/score-docs/common-practices/10-livestreaming.html), [stream in and out](https://ossia.io/score-docs/examples/video/ffmpeg-streaming.html)).
To feed a streaming studio, a video call or other media software, there are NDI (GPU zero-copy, tested at 8K), Spout, Syphon and PipeWire outputs ([Spout](https://ossia.io/score-docs/devices/spout-device.html), [Syphon](https://ossia.io/score-docs/devices/syphon-device.html)).

Recordings start and stop, cameras switch and graphics change from the timeline, from cues, or from any OSC or MIDI controller.

## In short

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>You want</th><th>In ossia score</th></tr></thead>
<tbody>
<tr><td>To stream a concert with its visuals</td><td>The same project renders the visuals, mixes the sound and sends both to the streaming service.</td></tr>
<tr><td>Remote or network video in a show</td><td>SRT, RTSP, NDI and capture card inputs, used like any other texture.</td></tr>
<tr><td>A recording for the archive or the edit</td><td>ProRes, DNxHD, MP4 or AV1, started from the timeline.</td></tr>
<tr><td>Camera switching that follows the show</td><td>Cues, scenes and sensors pick cameras and graphics.</td></tr>
</tbody>
</table>
</div>
