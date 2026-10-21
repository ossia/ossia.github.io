---
layout: use-case
lang: fr
title: "Sonification de données et biosignaux"
headline: "Recherche, sonification et biosignaux"
subtitle: "Des données de matériel de laboratoire et des jeux de données joués en son, en lumière ou en images, des sessions qu'on enregistre et rejoue, et des protocoles écrits sur une timeline."
permalink: /fr/recherche-sonification.html
translation: /research-sonification.html
category: site-score
description: "Logiciel libre pour la recherche : LSL, données HDF5 et CSV, sonification, biosignaux et biofeedback, enregistrement et relecture, scripts et extensions C++."
image: /assets/social/ossia-score-og.jpg
---

ossia score est né dans des laboratoires de recherche ([historique du projet](/project.html)) et il est toujours développé avec eux.
Chercheurs et artistes s'en servent pour relier du matériel scientifique et des jeux de données au son, à la vidéo et à la lumière : pour des expériences, pour la sonification, et pour des œuvres faites de données physiologiques.

<picture><img src="/assets/gallery/erin-show.webp" width="540" height="456" loading="lazy" alt="Une personne portant un casque à capteurs debout à une table devant une grande projection, tandis que le public est allongé au sol parmi des tubes LED lumineux"/></picture>
<p class="figure-caption"><i>BioSynth light show</i>, Erin Gee : un spectacle de lumière LED et DMX piloté par des biosignaux, joué par ossia score sans interface sur un Raspberry Pi.</p>

## Faire entrer les données

Lab Streaming Layer (LSL) amène l'EEG et d'autres appareils physiologiques. Il y a aussi le bus CAN avec bases DBC, les ports série, les capteurs Bluetooth LE, et tout ce qui parle OSC ou MQTT ([LSL](https://ossia.io/score-docs/devices/lsl-device.html), [CAN](https://ossia.io/score-docs/devices/can-device.html), [série](https://ossia.io/score-docs/devices/serial-device.html)).
Les fichiers HDF5 et CSV s'ouvrent directement, grandes colonnes comprises, et se jouent en courbes, en tableaux ou en textures ([HDF5](https://ossia.io/score-docs/processes/hdf5.html), [traitement de données](https://ossia.io/score-docs/common-practices/12-data-processing.html)).

## Les entendre et les voir

Les données se relient à la synthèse, au son spatialisé, aux shaders, à la 3D ou à la lumière DMX, et s'affichent en courbes à mesure qu'elles arrivent ([visualisation de données](https://ossia.io/score-docs/examples/advanced/data-visualization.html), [Teleplot](https://ossia.io/score-docs/processes/teleplot.html), [affichage de signaux](https://ossia.io/score-docs/processes/signal-display.html)).
Pour le biofeedback, le rythme cardiaque et d'autres signaux physiologiques pilotent son, vidéo et lumière après lissage, filtrage et statistiques ([accumulateur](https://ossia.io/score-docs/processes/accumulator.html), [filtre de valeurs](https://ossia.io/score-docs/processes/value-filter.html)).

## Sessions et protocoles

N'importe quel appareil s'enregistre en CSV et se rejoue plus tard, avec l'audio enregistré à côté ([enregistrement](https://ossia.io/score-docs/in-depth/recording.html), [enregistreur CSV](https://ossia.io/score-docs/processes/csv-recorder.html)).
Le protocole expérimental lui-même s'écrit comme une timeline avec des conditions, et s'automatise par l'API JavaScript ([API de script](https://ossia.io/score-docs/in-depth/scripting-api.html)).
Vos objets C++ s'y ajoutent, libossia expose les paramètres de vos propres logiciels, et des pipelines de rendu sur mesure servent la recherche en informatique graphique ([plug-ins](https://ossia.io/score-docs/development/plug-ins.html)).

## En résumé

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>Vous voulez</th><th>Dans ossia score</th></tr></thead>
<tbody>
<tr><td>Des données de matériel de laboratoire en temps réel</td><td>Appareils LSL, CAN, série, Bluetooth LE, OSC et MQTT.</td></tr>
<tr><td>Entendre ou voir un jeu de données</td><td>HDF5 et CSV joués en courbes, tableaux ou textures, reliés au son, à l'image et à la lumière.</td></tr>
<tr><td>Rejouer une session à l'identique</td><td>Appareils enregistrés en CSV et rejoués, avec le protocole écrit en timeline.</td></tr>
<tr><td>Un logiciel que d'autres laboratoires et relecteurs peuvent utiliser</td><td>Libre et gratuit (GPLv3), sous Windows, macOS et Linux, avec des fichiers de projet qui s'ouvrent partout.</td></tr>
<tr><td>Ajouter votre propre algorithme</td><td>JavaScript, Faust, shaders et extensions C++, ou libossia dans votre programme.</td></tr>
</tbody>
</table>
</div>

Dans la [galerie](/gallery.html), *VIBH2O / VIB.E-MOTION* de Fheel Concepts est une performance de cirque participative pilotée par le rythme cardiaque du public.
