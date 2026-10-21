---
layout: use-case
lang: fr
title: "Logiciel DMX gratuit : lumière et médias en phase"
headline: "Éclairage DMX et LED"
subtitle: "Des projecteurs en Art-Net, sACN et DMX USB, des rubans LED nourris par des shaders, et toute la lumière sur la même horloge que le son et la vidéo."
permalink: /fr/eclairage-dmx.html
translation: /dmx-lighting.html
category: site-score
description: "Logiciel DMX libre pour Windows, macOS, Linux et Raspberry Pi : Art-Net, sACN, DMX USB et pixel mapping LED, synchronisés avec le son et la vidéo."
image: /assets/social/ossia-score-og.jpg
---

ossia score pilote directement projecteurs DMX et LED : il peut conduire toute la lumière d'un spectacle ou d'une installation depuis la timeline qui joue aussi le son et la vidéo.
C'est précieux partout où la lumière doit tomber pile avec les médias : théâtre et danse, concerts, salles immersives, installations, art lumineux.

## Les projecteurs

La sortie passe par l'Art-Net, le sACN ou une interface DMX USB comme les Enttec DMX USB Pro et Pro Mk2. Les projecteurs viennent d'une bibliothèque issue de l'Open Fixture Library ([DMX](https://ossia.io/score-docs/devices/artnet-device.html)).
Canaux 16 bits, roues de couleurs et de gobos nommées et projecteurs à matrices LED sont pris en charge, et un simple gradateur ou un PAR RGB s'ajoute en deux clics.

Chaque paramètre de projecteur reçoit une courbe d'automation. Les états complets se mémorisent en cues, et la timeline passe de l'un à l'autre en fondu ([cues](https://ossia.io/score-docs/cues.html)).
Le DMX entre aussi : score reçoit et enregistre l'Art-Net et le sACN, pour le rejouer ou le transformer ensuite.

## LED et pixels

Les motifs LED se génèrent avec des shaders ou des tableaux. Le Lightness Computer transforme n'importe quel shader en valeurs RGB ou RGBW dans l'ordre des canaux de votre ruban, la LED view le prévisualise, et les couleurs partent vers des univers Art-Net de toute taille ([LED](https://ossia.io/score-docs/common-practices/13-led-design.html), [LED view](https://ossia.io/score-docs/processes/led-view.html)).
Depuis un Raspberry Pi, les rubans NeoPixel se pilotent directement en SPI ([appareil LED](https://ossia.io/score-docs/devices/led-device.html)).

<picture><img src="/assets/use-cases/led-shaders.webp" width="1200" height="581" loading="lazy" alt="Un patch ossia score où un shader de bruit passe par le Lightness computer vers un aperçu LED de 10 sur 10, puis vers l'Art-Net"/></picture>

## Une lumière qui écoute

La lumière peut suivre l'analyse audio, la détection de tempo ou le MIDI, et changer selon des capteurs, des caméras, de l'OSC ou des contrôleurs MIDI.
Pour une installation permanente, score tourne sans interface sur un petit ordinateur ou un Raspberry Pi et démarre tout seul ([mode sans interface](https://ossia.io/score-docs/faq/nogui.html)).

## En résumé

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>Vous voulez</th><th>Dans ossia score</th></tr></thead>
<tbody>
<tr><td>Conduire la lumière d'un spectacle sans autre logiciel</td><td>Le DMX directement depuis score en Art-Net, sACN ou DMX USB, avec bibliothèque de projecteurs, cues et courbes.</td></tr>
<tr><td>Une lumière calée sur le son et la vidéo</td><td>Une timeline et une horloge pour les trois.</td></tr>
<tr><td>Des rubans LED et des effets de pixels</td><td>Des motifs depuis des shaders ou des tableaux, et des rubans NeoPixel en SPI depuis un Raspberry Pi.</td></tr>
<tr><td>Une lumière qui réagit à la musique ou aux interprètes</td><td>Analyse audio, détection de tempo, capteurs, caméras, OSC et MIDI sur n'importe quel paramètre.</td></tr>
<tr><td>Une installation permanente sur du petit matériel</td><td>Mode sans interface avec démarrage automatique, sur mini-PC ou Raspberry Pi.</td></tr>
</tbody>
</table>
</div>

À savoir si un autre logiciel reçoit aussi de l'Art-Net sur le même ordinateur : un seul programme peut écouter le port Art-Net, donnez donc à chacun son interface réseau ou sa machine. L'envoi n'est pas concerné.
