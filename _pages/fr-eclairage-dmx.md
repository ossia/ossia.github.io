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

ossia score n'est pas une console lumière : c'est une timeline où la lumière vit à côté du son, de la vidéo et de l'interaction.
Il convient aux installations, aux concerts avec bandes, aux salles immersives et à l'art lumineux, quand la lumière doit suivre précisément les médias.

## Ce que vous pouvez faire

- **Sortie DMX** en Art-Net, sACN et sur interfaces DMX USB, avec une bibliothèque de projecteurs issue de l'Open Fixture Library ([DMX](https://ossia.io/score-docs/devices/artnet-device.html)).
- **Automatisez les paramètres des projecteurs** avec des courbes, mémorisez des états complets et passez de l'un à l'autre sur la timeline ([cues](https://ossia.io/score-docs/cues.html)).
- **Pixel mapping LED** : générez des motifs avec des shaders ou des tableaux, et pilotez des rubans NeoPixel en SPI depuis un Raspberry Pi ([LED](https://ossia.io/score-docs/common-practices/13-led-design.html)).
- **Son vers lumière** : pilotez la lumière depuis l'analyse audio, la détection de tempo ou le MIDI.
- **Interactivité** : déclenchez et modifiez la lumière depuis des capteurs, des caméras, de l'OSC ou des contrôleurs MIDI.
- **En autonomie** : fonctionnement sans interface sur un petit ordinateur ou un Raspberry Pi, avec démarrage automatique ([mode sans interface](https://ossia.io/score-docs/faq/nogui.html)).

## ossia score face aux logiciels DMX

<div class="comparison-scroll">
<table class="comparison">
<tr><th>Logiciel</th><th>Choisissez ossia score si…</th><th>Gardez l'autre logiciel si…</th></tr>
<tr><td><b>QLC+, Freestyler, Lightkey</b></td><td>la lumière doit être précisément synchronisée avec le son, la vidéo ou l'interaction, dans une seule timeline.</td><td>vous jouez la lumière en direct avec une logique de console, des palettes, un moteur d'effets ou un visualiseur 3D.</td></tr>
<tr><td><b>Consoles lumière</b> (grandMA, ETC Eos…)</td><td>vous voulez envoyer à la console des changements pilotés par les médias ou les capteurs, en OSC, MIDI ou timecode.</td><td>vous exploitez un vrai parc lumière avec un pupitreur : ossia score complète une console, il ne la remplace pas.</td></tr>
</table>
</div>

Deux logiciels ne peuvent pas partager le même port Art-Net sur un même ordinateur : si vous utilisez aussi QLC+, utilisez des interfaces réseau ou des machines différentes.
