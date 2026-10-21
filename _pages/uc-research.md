---
layout: use-case
title: "Data sonification and biosignal software"
headline: "Research, sonification and biosignals"
subtitle: "Data from lab hardware and datasets, played as sound, light or images, with sessions you can record and replay and experiments written on a timeline."
permalink: /research-sonification.html
translation: /fr/recherche-sonification.html
category: site-score
description: "Free, open-source software for research: LSL, HDF5 and CSV data, sonification, biosignals and biofeedback, recording and replay, scripting and C++ extensions."
image: /assets/social/ossia-score-og.jpg
---

ossia score was born in research labs ([project history](/project.html)) and is still developed with them.
Researchers and artists use it to connect scientific hardware and datasets to sound, video and light: for experiments, for sonification, and for pieces made with physiological data.

<picture><img src="/assets/gallery/erin-show.webp" width="540" height="456" loading="lazy" alt="A performer wearing a sensor headset stands at a table in front of a large projection, while audience members lie on the floor among glowing LED tubes"/></picture>
<p class="figure-caption"><i>BioSynth light show</i>, Erin Gee: an LED and DMX light show driven by biosignals, run by ossia score headless on a Raspberry Pi.</p>

## Getting the data in

Lab Streaming Layer (LSL) brings in EEG and other physiological devices. There is also CAN bus with DBC databases, serial ports, Bluetooth LE sensors, and anything that speaks OSC or MQTT ([LSL](https://ossia.io/score-docs/devices/lsl-device.html), [CAN](https://ossia.io/score-docs/devices/can-device.html), [serial](https://ossia.io/score-docs/devices/serial-device.html)).
HDF5 and CSV files open directly, large columns included, and play as curves, arrays or textures ([HDF5](https://ossia.io/score-docs/processes/hdf5.html), [data processing](https://ossia.io/score-docs/common-practices/12-data-processing.html)).

## Hearing and seeing it

Data can be mapped to synthesis, spatial sound, shaders, 3D or DMX lights, and plotted as it arrives ([data visualisation](https://ossia.io/score-docs/examples/advanced/data-visualization.html), [Teleplot](https://ossia.io/score-docs/processes/teleplot.html), [signal display](https://ossia.io/score-docs/processes/signal-display.html)).
For biofeedback, heart rate and other physiological signals drive sound, video and light after smoothing, filtering and statistics ([accumulator](https://ossia.io/score-docs/processes/accumulator.html), [value filter](https://ossia.io/score-docs/processes/value-filter.html)).

## Sessions and protocols

Any device can be recorded to CSV and replayed later, with the audio recorded next to it ([recording](https://ossia.io/score-docs/in-depth/recording.html), [CSV recorder](https://ossia.io/score-docs/processes/csv-recorder.html)).
The experiment itself can be written as a timeline with conditions, and automated through the JavaScript API ([scripting API](https://ossia.io/score-docs/in-depth/scripting-api.html)).
Your own C++ objects plug in, libossia exposes the parameters of your own software, and custom render pipelines are there for graphics research ([plug-ins](https://ossia.io/score-docs/development/plug-ins.html)).

## In short

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>You want</th><th>In ossia score</th></tr></thead>
<tbody>
<tr><td>Data from lab hardware in real time</td><td>LSL, CAN, serial, Bluetooth LE, OSC and MQTT devices.</td></tr>
<tr><td>To hear or see a dataset</td><td>HDF5 and CSV played as curves, arrays or textures, mapped to sound, image and light.</td></tr>
<tr><td>To repeat a session exactly</td><td>Devices recorded to CSV and replayed, with the protocol written as a timeline.</td></tr>
<tr><td>Software that other labs and reviewers can run</td><td>Free and open-source (GPLv3), on Windows, macOS and Linux, with project files that open everywhere.</td></tr>
<tr><td>To add your own algorithm</td><td>JavaScript, Faust, shaders and C++ extensions, or libossia in your own program.</td></tr>
</tbody>
</table>
</div>

In the [gallery](/gallery.html), *VIBH2O / VIB.E-MOTION* by Fheel Concepts is a participatory circus performance driven by the audience's heart rates.
