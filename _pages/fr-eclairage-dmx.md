---
layout: use-case
lang: fr
title: "Logiciel DMX gratuit : lumière et médias en phase"
headline: "Éclairage DMX et LED"
subtitle: "ossia score permet de piloter des projecteurs DMX et des rubans LED depuis la même timeline que le son et la vidéo d'un spectacle ou d'une installation."
permalink: /fr/eclairage-dmx.html
translation: /dmx-lighting.html
category: site-score
description: "Logiciel DMX libre pour Windows, macOS, Linux et Raspberry Pi : Art-Net, sACN, DMX USB et pixel mapping LED, synchronisés avec le son et la vidéo."
image: /assets/social/ossia-score-og.jpg
---

ossia score pilote directement les projecteurs DMX et les LED, ce qui permet de conduire toute la lumière d'un spectacle ou d'une installation depuis la timeline qui joue aussi le son et la vidéo, en particulier lorsque la lumière doit suivre précisément les médias.
Le BioSynth light show d'Erin Gee (2025) utilise par exemple score comme console lumière LED et DMX, sans écran sur un Raspberry Pi et piloté par des biosignaux ; les étudiants son et lumière de l'ENSATT, à Lyon, s'en sont servis pour le son spatialisé, la vidéo et la lumière DMX de *Dô d'eau* (2023).

## Projecteurs

La sortie se fait en Art-Net, en sACN ou via une interface DMX USB comme les Enttec DMX USB Pro et Pro Mk2, et les projecteurs proviennent d'une bibliothèque fondée sur l'Open Fixture Library ([DMX](https://ossia.io/score-docs/devices/artnet-device.html)).
Les canaux 16 bits, les roues de couleurs et de gobos nommées et les projecteurs à matrices LED sont pris en charge, et l'on peut créer directement de simples gradateurs ou des PAR RGB.

Chaque paramètre de projecteur peut être automatisé par une courbe ; des états complets sont mémorisés sous forme de cues, et la timeline passe de l'un à l'autre en fondu ([cues](https://ossia.io/score-docs/cues.html)).
Le DMX peut aussi être reçu : score enregistre l'Art-Net et le sACN entrants, qui peuvent ensuite être rejoués ou transformés.

## LED et pixels

Les motifs LED peuvent être générés par des shaders ou des tableaux : le Lightness Computer convertit n'importe quel shader en valeurs RGB ou RGBW dans l'ordre des canaux d'un ruban donné, la vue LED en donne un aperçu, et les couleurs sont envoyées vers des univers Art-Net de toute taille ([LED](https://ossia.io/score-docs/common-practices/13-led-design.html), [LED view](https://ossia.io/score-docs/processes/led-view.html)).
Depuis un Raspberry Pi, des rubans NeoPixel peuvent être pilotés directement en SPI ([appareil LED](https://ossia.io/score-docs/devices/led-device.html)).

<picture><img src="/assets/use-cases/led-shaders.webp" width="1200" height="581" loading="lazy" alt="Un patch ossia score où un shader de bruit passe par le Lightness computer vers un aperçu de 10 par 10 LED, puis vers l'Art-Net"/></picture>

## Interaction et installations permanentes

La lumière peut suivre l'analyse audio, la détection de tempo ou le MIDI, et réagir à des capteurs, des caméras, de l'OSC ou des contrôleurs MIDI.
Pour les œuvres permanentes, score fonctionne sans interface sur un petit ordinateur ou un Raspberry Pi et démarre automatiquement ([mode sans interface](https://ossia.io/score-docs/faq/nogui.html)).

À noter : lorsqu'un autre logiciel reçoit aussi de l'Art-Net sur le même ordinateur, un seul des deux peut écouter le port Art-Net, et il faut donc une interface réseau ou une machine par logiciel ; l'envoi n'est pas concerné.
