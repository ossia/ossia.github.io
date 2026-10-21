---
layout: use-case
title: "Data sonification and biosignal software"
headline: "Research, sonification and biosignals"
subtitle: "ossia score can be used to play data from lab hardware and datasets as sound, light or images, record and replay sessions, and write experiments on a timeline."
permalink: /research-sonification.html
ref: research
nav_title: "Research, sonification and biosignals"
blurb: "LSL, HDF5 and CSV data, sonification, biofeedback, and sessions recorded and replayed on a timeline."
category: site-score
description: "Free, open-source software for research: LSL, HDF5 and CSV data, sonification, biosignals and biofeedback, recording and replay, scripting and C++ extensions."
image: /assets/social/ossia-score-og.jpg
---

ossia score comes from research done at LaBRI and SCRIME ([project history](/project.html)), and can be used to connect scientific hardware and datasets to sound, video and light, for experiments, for sonification, or for pieces made with physiological data.
For instance, Erin Gee's BioSynth light show (2025) drives LEDs and DMX lights from biosignals, with score running headless on a Raspberry Pi, and in *VIB.E-MOTION* (Fheel Concepts and Corinne Linder, 2024), a participatory circus performance is driven by the heart rates of the audience.

<picture><img src="/assets/gallery/erin-show.webp" width="540" height="456" loading="lazy" alt="A performer wearing a sensor headset stands at a table in front of a large projection, while audience members lie on the floor among glowing LED tubes"/></picture>
<p class="figure-caption"><i>BioSynth light show</i>, Erin Gee: an LED and DMX light show driven by biosignals, run by ossia score headless on a Raspberry Pi.</p>

## Data sources

Lab Streaming Layer (LSL) gives access to EEG and other physiological devices, and score also supports the CAN bus with DBC databases, serial ports, Bluetooth LE sensors, and any device which speaks OSC or MQTT ([LSL](https://ossia.io/score-docs/devices/lsl-device.html), [CAN](https://ossia.io/score-docs/devices/can-device.html), [serial](https://ossia.io/score-docs/devices/serial-device.html)).
HDF5 and CSV files are opened directly, including large columns, and played as curves, arrays or textures ([HDF5](https://ossia.io/score-docs/processes/hdf5.html), [data processing](https://ossia.io/score-docs/common-practices/12-data-processing.html)).

## Sonification and visualization

The data can be mapped to synthesis, spatialized sound, shaders, 3D or DMX lights, and plotted in real time ([data visualization](https://ossia.io/score-docs/examples/advanced/data-visualization.html), [Teleplot](https://ossia.io/score-docs/processes/teleplot.html), [signal display](https://ossia.io/score-docs/processes/signal-display.html)).
For biofeedback, the heart rate and other physiological signals drive sound, video and light after smoothing, filtering and statistics ([accumulator](https://ossia.io/score-docs/processes/accumulator.html), [value filter](https://ossia.io/score-docs/processes/value-filter.html)).

## Sessions and protocols

Any device can be recorded to CSV and replayed later, with the audio recorded alongside ([recording](https://ossia.io/score-docs/in-depth/recording.html), [CSV recorder](https://ossia.io/score-docs/processes/csv-recorder.html)), so that a session can be reproduced exactly.
The experimental protocol itself can be written as a timeline with conditions, and automated through the JavaScript API ([scripting API](https://ossia.io/score-docs/in-depth/scripting-api.html)).

Custom C++ objects can be added, libossia exposes the parameters of other software, and custom render pipelines can be used for graphics research ([plug-ins](https://ossia.io/score-docs/development/plug-ins.html)); score itself is free and open-source (GPLv3), and its project files open on Windows, macOS and Linux, which makes it possible for other labs to run the same setup.
