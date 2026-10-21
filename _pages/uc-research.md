---
layout: use-case
title: "Data sonification and biosignal software"
headline: "Research, sonification and biosignals"
subtitle: "Receive data from lab hardware and sensors, play datasets as sound, light or images, record and replay sessions, and build experiments and biofeedback pieces on a timeline. Free and open-source, developed with research labs."
permalink: /research-sonification.html
translation: /fr/recherche-sonification.html
category: site-score
description: "Free, open-source software for research: LSL, HDF5 and CSV data, sonification, biosignals and biofeedback, recording and replay, scripting and C++ extensions."
image: /assets/social/ossia-score-og.jpg
---

ossia score was born in research labs ([project history](/project.html)) and is still developed with them.
It connects scientific hardware and datasets to sound, video and light, for experiments, sonification and art made with physiological data.

## What you can do

- **Lab hardware**: Lab Streaming Layer (LSL) for EEG and other physiological devices, CAN bus with DBC databases, serial ports, Bluetooth LE sensors, and anything speaking OSC or MQTT ([LSL](https://ossia.io/score-docs/devices/lsl-device.html), [CAN](https://ossia.io/score-docs/devices/can-device.html), [serial](https://ossia.io/score-docs/devices/serial-device.html)).
- **Datasets**: open HDF5 and CSV files, including large columns, and play them as curves, arrays or textures ([HDF5](https://ossia.io/score-docs/processes/hdf5.html), [data processing](https://ossia.io/score-docs/common-practices/12-data-processing.html)).
- **Sonification and visualisation**: map data to synthesis, spatial sound, shaders, 3D or DMX lights, and plot signals while they arrive ([data visualisation](https://ossia.io/score-docs/examples/advanced/data-visualization.html), [Teleplot](https://ossia.io/score-docs/processes/teleplot.html), [signal display](https://ossia.io/score-docs/processes/signal-display.html)).
- **Biosignals and biofeedback**: heart rate and other physiological signals drive sound, video and light, with smoothing, filtering and statistics ([accumulator](https://ossia.io/score-docs/processes/accumulator.html), [value filter](https://ossia.io/score-docs/processes/value-filter.html)).
- **Record and replay sessions**: record any device to CSV, replay it later, and record audio next to it ([recording](https://ossia.io/score-docs/in-depth/recording.html), [CSV recorder](https://ossia.io/score-docs/processes/csv-recorder.html)).
- **Scripted protocols**: write the experiment as a timeline with conditions, and automate it with the JavaScript API ([scripting API](https://ossia.io/score-docs/in-depth/scripting-api.html)).
- **Extend it**: add your own C++ objects, expose your own software's parameters with libossia, and build custom render pipelines for graphics research ([plug-ins](https://ossia.io/score-docs/development/plug-ins.html)).

<picture><img src="/assets/gallery/erin-show.webp" width="540" height="456" loading="lazy" alt="A performer wearing a sensor headset stands at a table in front of a large projection, while audience members lie on the floor among glowing LED tubes"/></picture>
<p class="figure-caption"><i>BioSynth light show</i>, Erin Gee: an LED and DMX light show driven by biosignals, run by ossia score headless on a Raspberry Pi.</p>

## Research needs, and how ossia score answers them

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>What you need</th><th>How ossia score does it</th></tr></thead>
<tbody>
<tr><td>Getting data from lab hardware in real time</td><td>LSL, CAN, serial, Bluetooth LE, OSC and MQTT devices.</td></tr>
<tr><td>Hearing or seeing a dataset</td><td>HDF5 and CSV files played as curves, arrays or textures, mapped to sound, image and light.</td></tr>
<tr><td>Repeating a session exactly</td><td>Record devices to CSV and replay them, with the protocol written as a timeline.</td></tr>
<tr><td>Software that reviewers and other labs can use</td><td>Free, open-source (GPLv3), on Windows, macOS and Linux, with project files that open everywhere.</td></tr>
<tr><td>Adding your own algorithm</td><td>JavaScript, Faust, shaders and C++ extensions, or libossia in your own program.</td></tr>
</tbody>
</table>
</div>

See the [gallery](/gallery.html) for works using physiological data, such as *VIBH2O / VIB.E-MOTION* by Fheel Concepts, a participatory circus performance driven by the audience's heart rates.
