---
layout: use-case
lang: fr
title: "Logiciel pour l'art cinétique et la robotique"
headline: "Art cinétique et robotique"
subtitle: "Moteurs, pompes et mécanismes écrits sur une timeline comme n'importe quel paramètre, réactifs aux capteurs, en phase avec le son, la vidéo et la lumière."
permalink: /fr/art-cinetique-robotique.html
translation: /kinetic-art-robotics.html
category: site-score
description: "Logiciel libre pour l'art cinétique et la robotique : moteurs, pompes et actionneurs en série, DMX, OSC et GPIO, avec courbes, capteurs, son, vidéo et lumière."
image: /assets/social/ossia-score-og.jpg
---

Sculptures cinétiques, installations robotiques et machinerie de scène demandent des mouvements précis dans le temps et assez doux pour la mécanique, et doivent souvent réagir à ce qui les entoure.
ossia score traite chaque moteur ou actionneur comme un paramètre à automatiser, à côté du son, de la vidéo et de la lumière de l'œuvre.

<picture><img src="/assets/gallery/recapture.webp" width="540" height="369" loading="lazy" alt="Des tubes transparents suspendus dans l'obscurité, éclairés à leurs extrémités, devant une projection circulaire d'arbres"/></picture>
<p class="figure-caption"><i>[re]capture</i>, Alice Jarry, Brice Ammar-Khodja, Jacqueline Beaumont, Jean-Michaël Celerier, Matthew Halpenny, Asa Perlman, Philippe Vandal : caméras, traitement vidéo, lumières, pompes et moteurs, entièrement pilotés par ossia score sur un Raspberry Pi. © Alice Jarry</p>

## Parler au matériel

Les microcontrôleurs comme Arduino et ESP32 se branchent en série, en OSC ou en MQTT. Les moteurs et effets à entrée DMX se pilotent comme de la lumière, et un appareil à protocole propre se décrit en un court script ([série](https://ossia.io/score-docs/devices/serial-device.html), [protocoles QML](https://ossia.io/score-docs/in-depth/qml-protocols.html)).
Sur des cartes Linux comme le Raspberry Pi et l'Orange Pi, score pilote directement les broches GPIO, PWM, ADC et DAC ([entrées-sorties brutes](https://ossia.io/score-docs/devices/rawio-device.html)).
Les signaux d'un bus CAN se lisent à travers une base DBC sous Linux ([CAN](https://ossia.io/score-docs/devices/can-device.html)).

<picture><img src="/assets/blog/airfiltration/electronics.webp" width="796" height="778" loading="lazy" alt="Des cartes à microcontrôleurs et leur câblage sur une table, reliés à un tube transparent équipé de panneaux solaires souples"/></picture>
<p class="figure-caption">L'électronique de <i>[re]capture</i>, tirée de l'<a href="/posts/air-filtration/">étude de cas</a>.</p>

## Écrire le mouvement

Les mouvements sont des courbes d'automation en temps musical ou absolu, des LFO, des courbes d'easing et des trajectoires dessinées, bouclées ou variées au fil de l'œuvre ([automations](https://ossia.io/score-docs/quick-start/writing-automations.html), [générateur de chemins](https://ossia.io/score-docs/processes/pathgenerator.html)).
Entre la partition et les moteurs, lissage, limitation de vitesse et bornage gardent les valeurs dans ce que la mécanique peut suivre ([lissage](https://ossia.io/score-docs/processes/smooth.html), [limiteur de débit](https://ossia.io/score-docs/processes/rate-limiter.html)).

Le mécanisme peut réagir à des centrales inertielles, des caméras de profondeur, de la vision par ordinateur avec suivi de blobs et de points, des capteurs de distance et de toucher sur microcontrôleurs, ou des systèmes de tracking ([capteurs vers OSC](https://ossia.io/score-docs/examples/devices/sensors2osc.html), [suivi de points](https://ossia.io/score-docs/processes/point-tracker.html)).
Toute l'œuvre peut tourner sans interface sur un Raspberry Pi caché à l'intérieur ([embarqué](https://ossia.io/score-docs/in-depth/embedded.html)).

## En résumé

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>Vous voulez</th><th>Dans ossia score</th></tr></thead>
<tbody>
<tr><td>Des mouvements écrits précisément dans le temps</td><td>Courbes, trajectoires et LFO sur une timeline, en temps musical ou absolu.</td></tr>
<tr><td>Un mouvement que la mécanique peut suivre</td><td>Lissage, easing et limitation de vitesse avant que les valeurs n'atteignent les moteurs.</td></tr>
<tr><td>Des mécanismes qui réagissent aux visiteurs ou à leur propre état</td><td>Capteurs, caméras et données machine alimentent déclencheurs, conditions et correspondances.</td></tr>
<tr><td>Un petit contrôleur caché dans l'œuvre</td><td>Sans interface sur un Raspberry Pi, en lien avec les microcontrôleurs du mécanisme.</td></tr>
</tbody>
</table>
</div>

La [galerie](/gallery.html) présente aussi *Organism + Excitable Chaos*, une installation à pendule récompensée par la Golden Nica du Prix Ars Electronica 2025, où ossia assure la communication réseau entre le pendule et les ordinateurs.
