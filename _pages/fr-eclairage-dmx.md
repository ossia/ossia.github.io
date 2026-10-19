---
layout: use-case
lang: fr
title: "Logiciel DMX gratuit : lumière, son et vidéo synchronisés"
headline: "Éclairage DMX et LED, synchronisés avec le son et la vidéo"
subtitle: "Pilotez vos projecteurs en Art-Net, sACN et DMX USB, créez des effets de pixel mapping LED avec des shaders, et synchronisez le tout avec la musique, la vidéo et les capteurs sur une seule timeline. Libre et gratuit, sous Windows, macOS, Linux et Raspberry Pi."
permalink: /fr/eclairage-dmx.html
translation: /dmx-lighting.html
category: site-score
description: "Logiciel DMX libre pour Windows, macOS, Linux et Raspberry Pi : Art-Net, sACN, DMX USB et pixel mapping LED, synchronisés avec le son et la vidéo."
image: /assets/social/ossia-score-og.jpg
---

ossia score pilote directement projecteurs DMX et LED : il peut conduire toute la lumière d'un spectacle ou d'une installation, sur la même timeline que le son, la vidéo et l'interaction.
Il convient au théâtre et à la danse, aux concerts, aux salles immersives, aux installations et à l'art lumineux, partout où la lumière doit suivre précisément les médias.

## Ce que vous pouvez faire

- **Sortie DMX** en Art-Net, sACN et sur interfaces DMX USB, avec une bibliothèque de projecteurs issue de l'Open Fixture Library ([DMX](https://ossia.io/score-docs/devices/artnet-device.html)).
- **Automatisez les paramètres des projecteurs** avec des courbes, mémorisez des états complets et passez de l'un à l'autre sur la timeline ([cues](https://ossia.io/score-docs/cues.html)).
- **Pixel mapping LED** : générez des motifs avec des shaders ou des tableaux, et pilotez des rubans NeoPixel en SPI depuis un Raspberry Pi ([LED](https://ossia.io/score-docs/common-practices/13-led-design.html)).
- **Son vers lumière** : pilotez la lumière depuis l'analyse audio, la détection de tempo ou le MIDI.
- **Interactivité** : déclenchez et modifiez la lumière depuis des capteurs, des caméras, de l'OSC ou des contrôleurs MIDI.
- **En autonomie** : fonctionnement sans interface sur un petit ordinateur ou un Raspberry Pi, avec démarrage automatique ([mode sans interface](https://ossia.io/score-docs/faq/nogui.html)).

## Les besoins de la lumière, et les réponses d'ossia score

<div class="comparison-scroll">
<table class="comparison">
<tr><th>Ce dont vous avez besoin</th><th>Comment ossia score y répond</th></tr>
<tr><td>Conduire la lumière d'un spectacle ou d'une installation, sans autre logiciel lumière</td><td>Le DMX directement depuis ossia score en Art-Net, sACN ou DMX USB, avec bibliothèque de projecteurs, cues et courbes.</td></tr>
<tr><td>Une lumière précisément synchronisée avec le son et la vidéo</td><td>Lumière, son et vidéo partagent une timeline et une horloge.</td></tr>
<tr><td>Des rubans LED et des effets de pixels</td><td>Motifs LED depuis des shaders ou des tableaux, et rubans NeoPixel en SPI depuis un Raspberry Pi.</td></tr>
<tr><td>Une lumière qui réagit à la musique, aux capteurs ou aux interprètes</td><td>Analyse audio, détection de tempo, capteurs, caméras, OSC et MIDI pilotent n'importe quel paramètre de projecteur.</td></tr>
<tr><td>Une installation permanente sur du petit matériel</td><td>Mode sans interface avec démarrage automatique, sur un mini-PC ou un Raspberry Pi.</td></tr>
</table>
</div>

Deux logiciels ne peuvent pas partager le même port Art-Net sur un même ordinateur : si vous utilisez aussi un autre logiciel DMX, utilisez des interfaces réseau ou des machines différentes.
