---
layout: use-case
lang: fr
title: "Sonification de données et biosignaux"
headline: "Recherche, sonification et biosignaux"
subtitle: "ossia score permet de jouer en son, en lumière ou en images des données de matériel de laboratoire et des jeux de données, d'enregistrer et de rejouer des sessions, et d'écrire des protocoles sur une timeline."
permalink: /fr/recherche-sonification.html
ref: research
nav_title: "Recherche et sonification"
blurb: "LSL, données HDF5 et CSV, sonification, biofeedback, et sessions enregistrées et rejouées sur une timeline."
category: site-score
description: "Logiciel libre pour la recherche : LSL, données HDF5 et CSV, sonification, biosignaux et biofeedback, enregistrement et relecture, scripts et extensions C++."
image: /assets/social/ossia-score-og.jpg
---

ossia score est issu de recherches menées au LaBRI et au SCRIME ([historique du projet](/project.html)), et peut être utilisé pour relier du matériel scientifique et des jeux de données au son, à la vidéo et à la lumière, que ce soit pour des expériences, pour de la sonification, ou pour des œuvres réalisées à partir de données physiologiques.
Le BioSynth light show d'Erin Gee (2025) pilote par exemple des LED et de la lumière DMX à partir de biosignaux, score fonctionnant sans interface sur un Raspberry Pi, et dans *VIB.E-MOTION* (Fheel Concepts et Corinne Linder, 2024), un spectacle de cirque participatif est piloté par le rythme cardiaque du public.

<picture><img src="/assets/gallery/erin-show.webp" width="540" height="456" loading="lazy" alt="Une personne portant un casque de capteurs debout à une table devant une grande projection, tandis que le public est allongé au sol parmi des tubes LED lumineux"/></picture>
<p class="figure-caption"><i>BioSynth light show</i>, Erin Gee : un spectacle de lumière LED et DMX piloté par des biosignaux, porté par ossia score sans interface sur un Raspberry Pi.</p>

## Sources de données

Lab Streaming Layer (LSL) donne accès aux appareils EEG et à d'autres appareils physiologiques, et score prend aussi en charge le bus CAN avec bases DBC, les ports série, les capteurs Bluetooth LE, et tout appareil qui communique en OSC ou en MQTT ([LSL](https://ossia.io/score-docs/devices/lsl-device.html), [CAN](https://ossia.io/score-docs/devices/can-device.html), [série](https://ossia.io/score-docs/devices/serial-device.html)).
Les fichiers HDF5 et CSV s'ouvrent directement, y compris avec de grandes colonnes, et se jouent sous forme de courbes, de tableaux ou de textures ([HDF5](https://ossia.io/score-docs/processes/hdf5.html), [traitement de données](https://ossia.io/score-docs/common-practices/12-data-processing.html)).

## Sonification et visualisation

Les données peuvent être associées à de la synthèse, du son spatialisé, des shaders, de la 3D ou de la lumière DMX, et tracées en temps réel ([visualisation de données](https://ossia.io/score-docs/examples/advanced/data-visualization.html), [Teleplot](https://ossia.io/score-docs/processes/teleplot.html), [affichage de signaux](https://ossia.io/score-docs/processes/signal-display.html)).
Pour le biofeedback, le rythme cardiaque et d'autres signaux physiologiques pilotent le son, la vidéo et la lumière après lissage, filtrage et calcul de statistiques ([accumulateur](https://ossia.io/score-docs/processes/accumulator.html), [filtre de valeurs](https://ossia.io/score-docs/processes/value-filter.html)).

## Sessions et protocoles

Tout appareil peut être enregistré en CSV puis rejoué, avec l'audio enregistré en parallèle ([enregistrement](https://ossia.io/score-docs/in-depth/recording.html), [enregistreur CSV](https://ossia.io/score-docs/processes/csv-recorder.html)), ce qui permet de reproduire une session à l'identique.
Le protocole expérimental lui-même peut être écrit sous forme de timeline avec des conditions, et automatisé grâce à l'API JavaScript ([API de script](https://ossia.io/score-docs/in-depth/scripting-api.html)).

On peut ajouter ses propres objets C++, libossia expose les paramètres d'autres logiciels, et des pipelines de rendu sur mesure peuvent servir à la recherche en graphisme ([plug-ins](https://ossia.io/score-docs/development/plug-ins.html)) ; score est lui-même libre (GPLv3), et ses fichiers de projet s'ouvrent sous Windows, macOS et Linux, ce qui permet à d'autres laboratoires de reproduire le même dispositif.
