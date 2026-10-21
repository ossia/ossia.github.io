---
layout: use-case
lang: fr
title: "Logiciel pour l'art cinétique et la robotique"
headline: "Art cinétique et robotique"
subtitle: "Écrivez les mouvements de moteurs, pompes, robots et mécanismes sur une timeline, faites-les réagir aux capteurs, et synchronisez-les avec le son, la vidéo et la lumière, depuis un ordinateur ou un Raspberry Pi. Libre et gratuit."
permalink: /fr/art-cinetique-robotique.html
translation: /kinetic-art-robotics.html
category: site-score
description: "Logiciel libre pour l'art cinétique et la robotique : moteurs, pompes et actionneurs en série, DMX, OSC et GPIO, avec courbes, capteurs, son, vidéo et lumière."
image: /assets/social/ossia-score-og.jpg
---

Les sculptures cinétiques, les installations robotiques et la machinerie de scène demandent des mouvements précis dans le temps, fluides, et souvent réactifs.
ossia score traite chaque moteur ou actionneur comme un paramètre à automatiser, à côté du son, de la vidéo et de la lumière de l'œuvre.

## Ce que vous pouvez faire

- **Parler au matériel** : microcontrôleurs comme Arduino et ESP32 en série, OSC ou MQTT, moteurs et effets pilotés en DMX, et tout appareil à protocole propre grâce à un court script ([série](https://ossia.io/score-docs/devices/serial-device.html), [protocoles QML](https://ossia.io/score-docs/in-depth/qml-protocols.html)).
- **Piloter directement les broches** : GPIO, PWM, ADC et DAC sur des cartes Linux comme le Raspberry Pi et l'Orange Pi ([entrées-sorties brutes](https://ossia.io/score-docs/devices/rawio-device.html)).
- **Écrire des mouvements** : courbes d'automation en temps musical ou absolu, LFO, courbes d'easing et trajectoires dessinées, en boucle ou variées dans le temps ([automations](https://ossia.io/score-docs/quick-start/writing-automations.html), [générateur de chemins](https://ossia.io/score-docs/processes/pathgenerator.html)).
- **Ménager la mécanique** : lissage, limitation de vitesse de variation et bornage des valeurs entre la partition et les moteurs ([lissage](https://ossia.io/score-docs/processes/smooth.html), [limiteur de débit](https://ossia.io/score-docs/processes/rate-limiter.html)).
- **Réagir au monde** : centrales inertielles, caméras de profondeur, vision par ordinateur avec suivi de blobs et de points, capteurs de distance et de toucher sur microcontrôleurs, systèmes de tracking ([capteurs vers OSC](https://ossia.io/score-docs/examples/devices/sensors2osc.html), [suivi de points](https://ossia.io/score-docs/processes/point-tracker.html)).
- **Lire les données d'une machine** : recevez des signaux de bus CAN via une base DBC sous Linux ([CAN](https://ossia.io/score-docs/devices/can-device.html)).
- **Son, vidéo et lumière synchronisés** avec la mécanique, sur une seule timeline.
- **Embarqué** : faites tourner toute l'œuvre sans interface sur un Raspberry Pi ([embarqué](https://ossia.io/score-docs/in-depth/embedded.html)).

<picture><img src="/assets/gallery/recapture.webp" width="540" height="369" loading="lazy" alt="Des tubes transparents suspendus dans l'obscurité, éclairés à leurs extrémités, devant une projection circulaire d'arbres"/></picture>
<p class="figure-caption"><i>[re]capture</i>, Alice Jarry, Brice Ammar-Khodja, Jacqueline Beaumont, Jean-Michaël Celerier, Matthew Halpenny, Asa Perlman, Philippe Vandal : caméras, traitement vidéo, lumière, pompes et moteurs, entièrement pilotés par ossia score sur un Raspberry Pi. © Alice Jarry</p>

## Les besoins de l'art cinétique, et les réponses d'ossia score

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>Ce dont vous avez besoin</th><th>Comment ossia score y répond</th></tr></thead>
<tbody>
<tr><td>Des mouvements écrits précisément dans le temps</td><td>Courbes d'automation, trajectoires et LFO sur une timeline, en temps musical ou absolu.</td></tr>
<tr><td>Un mouvement fluide que la mécanique peut suivre</td><td>Lissage, easing et limitation de variation avant que les valeurs n'atteignent les moteurs.</td></tr>
<tr><td>Des mécanismes qui réagissent aux visiteurs ou à leur propre état</td><td>Capteurs, caméras et données machine alimentent déclencheurs, conditions et correspondances.</td></tr>
<tr><td>Moteurs, son, vidéo et lumière ensemble</td><td>Un seul projet pour tout, depuis un seul ordinateur.</td></tr>
<tr><td>Un petit contrôleur caché</td><td>Sans interface sur un Raspberry Pi, en lien avec les microcontrôleurs du mécanisme.</td></tr>
</tbody>
</table>
</div>

Voyez la [galerie](/gallery.html), par exemple *[re]capture*, et *Organism + Excitable Chaos*, installation à pendule récompensée par le Golden Nica du Prix Ars Electronica 2025, qui utilisait ossia pour la communication réseau entre le pendule et les ordinateurs.
