---
layout: use-case
lang: fr
title: "Logiciel pour la recherche, la sonification et les biosignaux"
headline: "Recherche, sonification et biosignaux"
subtitle: "Recevez les données du matériel de laboratoire et des capteurs, jouez des jeux de données en son, en lumière ou en images, enregistrez et rejouez des sessions, et construisez expériences et œuvres de biofeedback sur une timeline. Libre et gratuit, développé avec des laboratoires de recherche."
permalink: /fr/recherche-sonification.html
translation: /research-sonification.html
category: site-score
description: "Logiciel libre pour la recherche : LSL, données HDF5 et CSV, sonification, biosignaux et biofeedback, enregistrement et relecture, scripts et extensions C++."
image: /assets/social/ossia-score-og.jpg
---

ossia score est né dans des laboratoires de recherche ([historique du projet](/project.html)) et continue d'être développé avec eux.
Il relie le matériel scientifique et les jeux de données au son, à la vidéo et à la lumière, pour des expériences, de la sonification et des œuvres faites de données physiologiques.

## Ce que vous pouvez faire

- **Matériel de laboratoire** : Lab Streaming Layer (LSL) pour l'EEG et d'autres appareils physiologiques, bus CAN avec bases DBC, ports série, capteurs Bluetooth LE, et tout ce qui parle OSC ou MQTT ([LSL](https://ossia.io/score-docs/devices/lsl-device.html), [CAN](https://ossia.io/score-docs/devices/can-device.html), [série](https://ossia.io/score-docs/devices/serial-device.html)).
- **Jeux de données** : ouvrez des fichiers HDF5 et CSV, y compris de grandes colonnes, et jouez-les comme courbes, tableaux ou textures ([HDF5](https://ossia.io/score-docs/processes/hdf5.html), [traitement de données](https://ossia.io/score-docs/common-practices/12-data-processing.html)).
- **Sonification et visualisation** : associez les données à la synthèse, au son spatialisé, aux shaders, à la 3D ou à la lumière DMX, et tracez les signaux à leur arrivée ([visualisation de données](https://ossia.io/score-docs/examples/advanced/data-visualization.html), [Teleplot](https://ossia.io/score-docs/processes/teleplot.html), [affichage de signaux](https://ossia.io/score-docs/processes/signal-display.html)).
- **Biosignaux et biofeedback** : le rythme cardiaque et d'autres signaux physiologiques pilotent son, vidéo et lumière, avec lissage, filtrage et statistiques ([accumulateur](https://ossia.io/score-docs/processes/accumulator.html), [filtre de valeurs](https://ossia.io/score-docs/processes/value-filter.html)).
- **Enregistrer et rejouer des sessions** : enregistrez n'importe quel appareil en CSV, rejouez-le plus tard, et enregistrez l'audio à côté ([enregistrement](https://ossia.io/score-docs/in-depth/recording.html), [enregistreur CSV](https://ossia.io/score-docs/processes/csv-recorder.html)).
- **Protocoles scriptés** : écrivez l'expérience comme une timeline avec conditions, et automatisez-la avec l'API JavaScript ([API de script](https://ossia.io/score-docs/in-depth/scripting-api.html)).
- **Étendez-le** : ajoutez vos propres objets C++, exposez les paramètres de vos logiciels avec libossia, et construisez des pipelines de rendu sur mesure pour la recherche en graphisme ([plug-ins](https://ossia.io/score-docs/development/plug-ins.html)).

<picture><img src="/assets/gallery/erin-show.webp" width="540" height="456" loading="lazy" alt="Une personne portant un casque à capteurs se tient à une table devant une grande projection, tandis que le public est allongé au sol parmi des tubes LED lumineux"/></picture>
<p class="figure-caption"><i>BioSynth light show</i>, Erin Gee : un spectacle lumineux LED et DMX piloté par des biosignaux, exécuté par ossia score sans interface sur un Raspberry Pi.</p>

## Les besoins de la recherche, et les réponses d'ossia score

<div class="comparison-scroll">
<table class="comparison">
<tr><th>Ce dont vous avez besoin</th><th>Comment ossia score y répond</th></tr>
<tr><td>Recevoir en temps réel les données du matériel de laboratoire</td><td>Appareils LSL, CAN, série, Bluetooth LE, OSC et MQTT.</td></tr>
<tr><td>Entendre ou voir un jeu de données</td><td>Fichiers HDF5 et CSV joués comme courbes, tableaux ou textures, associés au son, à l'image et à la lumière.</td></tr>
<tr><td>Répéter une session à l'identique</td><td>Enregistrez les appareils en CSV et rejouez-les, avec le protocole écrit comme une timeline.</td></tr>
<tr><td>Un logiciel que relecteurs et autres laboratoires peuvent utiliser</td><td>Libre (GPLv3), sous Windows, macOS et Linux, avec des projets qui s'ouvrent partout.</td></tr>
<tr><td>Ajouter votre propre algorithme</td><td>JavaScript, Faust, shaders et extensions C++, ou libossia dans votre propre programme.</td></tr>
</table>
</div>

Voyez la [galerie](/gallery.html) des œuvres utilisant des données physiologiques, comme *VIBH2O / VIB.E-MOTION* de Fheel Concepts, un spectacle de cirque participatif piloté par le rythme cardiaque du public.
