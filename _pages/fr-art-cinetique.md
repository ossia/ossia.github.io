---
layout: use-case
lang: fr
title: "Logiciel pour l'art cinétique et la robotique"
headline: "Art cinétique et robotique"
subtitle: "ossia score permet d'écrire les mouvements de moteurs, de pompes et de mécanismes sur une timeline, en réaction à des capteurs et en synchronisation avec le son, la vidéo et la lumière."
permalink: /fr/art-cinetique-robotique.html
translation: /kinetic-art-robotics.html
category: site-score
description: "Logiciel libre pour l'art cinétique et la robotique : moteurs, pompes et actionneurs en série, DMX, OSC et GPIO, avec courbes, capteurs, son, vidéo et lumière."
image: /assets/social/ossia-score-og.jpg
---

ossia score peut être utilisé pour des sculptures cinétiques, des installations robotiques et de la machinerie de scène : chaque moteur ou actionneur est un paramètre que l'on peut automatiser à côté du son, de la vidéo et de la lumière de l'œuvre, faire réagir à des capteurs, et lisser pour que la mécanique puisse suivre.
Dans *[re]capture* (2024–2025), les caméras, le traitement vidéo, la lumière, les pompes et les moteurs sont par exemple pilotés par score sur un Raspberry Pi, et dans *spectral narratives* de Philippe Vandal (Eisode, Montréal, 2025), quatre modules de verre et de solvant sont séquencés avec score.

<picture><img src="/assets/gallery/recapture.webp" width="540" height="369" loading="lazy" alt="Des tubes transparents suspendus dans l'obscurité, éclairés aux deux extrémités, devant une projection circulaire d'arbres"/></picture>
<p class="figure-caption"><i>[re]capture</i>, Alice Jarry, Brice Ammar-Khodja, Jacqueline Beaumont, Jean-Michaël Celerier, Matthew Halpenny, Asa Perlman, Philippe Vandal : caméras, traitement vidéo, lumière, pompes et moteurs, entièrement pilotés par ossia score sur un Raspberry Pi. © Alice Jarry</p>

## Matériel

Les microcontrôleurs comme les Arduino et les ESP32 se connectent en série, en OSC ou en MQTT, les moteurs et effets dotés d'une entrée DMX se pilotent comme de la lumière, et un appareil doté de son propre protocole peut être décrit par un court script ([série](https://ossia.io/score-docs/devices/serial-device.html), [protocoles QML](https://ossia.io/score-docs/in-depth/qml-protocols.html)).
Sur les cartes Linux comme le Raspberry Pi et l'Orange Pi, score pilote directement les broches GPIO, PWM, ADC et DAC ([entrées-sorties brutes](https://ossia.io/score-docs/devices/rawio-device.html)), et les signaux d'un bus CAN peuvent être lus via une base DBC sous Linux ([CAN](https://ossia.io/score-docs/devices/can-device.html)).

<picture><img src="/assets/blog/airfiltration/electronics.webp" width="796" height="778" loading="lazy" alt="Des cartes de microcontrôleurs et du câblage sur une table, reliés à un tube transparent équipé de panneaux solaires souples"/></picture>
<p class="figure-caption">L'électronique de <i>[re]capture</i>, tirée de l'<a href="/posts/air-filtration/">étude de cas</a> (en anglais).</p>

## Mouvements

Les mouvements s'écrivent sous forme de courbes d'automation en temps musical ou absolu, de LFO, de courbes d'easing et de trajectoires dessinées, qui peuvent être bouclées ou variées au fil de l'œuvre ([automations](https://ossia.io/score-docs/quick-start/writing-automations.html), [générateur de chemins](https://ossia.io/score-docs/processes/pathgenerator.html)).
Entre la partition et les moteurs, le lissage, la limitation de vitesse et le bornage des valeurs maintiennent les mouvements dans ce que la mécanique peut suivre ([lissage](https://ossia.io/score-docs/processes/smooth.html), [limiteur de débit](https://ossia.io/score-docs/processes/rate-limiter.html)).

Le mécanisme peut réagir à des centrales inertielles, des caméras de profondeur, de la vision par ordinateur avec suivi de blobs et de points, des capteurs de distance et de toucher sur microcontrôleurs, ou des systèmes de tracking ([capteurs vers OSC](https://ossia.io/score-docs/examples/devices/sensors2osc.html), [suivi de points](https://ossia.io/score-docs/processes/point-tracker.html)), et toute l'œuvre peut tourner sans interface sur un Raspberry Pi caché à l'intérieur ([embarqué](https://ossia.io/score-docs/in-depth/embedded.html)).

La [galerie](/gallery.html) présente aussi *Organism + Excitable Chaos* (Navid Navab et Garnet Willis), une installation à pendule récompensée par la Golden Nica du Prix Ars Electronica 2025, dans laquelle ossia assure la communication réseau entre le pendule et les ordinateurs.
