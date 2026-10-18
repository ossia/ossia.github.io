---
layout: use-case
lang: fr
title: "Séquenceur et timeline OSC, MIDI et DMX gratuit"
headline: "Une timeline OSC, MIDI et DMX"
subtitle: "Dessinez des courbes d'automation pour n'importe quel paramètre OSC, MIDI ou DMX, ajoutez des déclencheurs et des conditions, et découvrez vos appareils automatiquement grâce à OSCQuery. Libre et gratuit : une alternative à Vezér et une timeline complémentaire à Chataigne."
permalink: /fr/timeline-osc-midi-dmx.html
translation: /osc-midi-dmx-timeline.html
category: site-score
description: "Séquenceur OSC, MIDI et DMX libre pour Windows, macOS et Linux : courbes d'automation, OSCQuery, déclencheurs et conditions. Une alternative à Vezér."
image: /assets/social/ossia-score-og.jpg
---

ossia score est né comme un séquenceur OSC : chaque paramètre de chaque appareil du réseau devient une adresse que l'on peut automatiser,
enregistrer, transformer et écrire dans le temps. Il sert à piloter des patchs Max/MSP et Pure Data, TouchDesigner, Unity, Unreal Engine, Millumin, de la lumière ou des robots.

## Ce que vous pouvez faire

- **Des courbes d'automation** sur n'importe quelle adresse : OSC, CC MIDI, canaux DMX, ou paramètres des processus d'ossia score ([automations](https://ossia.io/score-docs/quick-start/writing-automations.html)).
- **OSCQuery** : parcourez les paramètres des logiciels compatibles (Max et Pure Data avec ossia, TouchDesigner, VDMX…) et glissez-les dans la partition au lieu de taper les adresses.
- **Des timelines interactives** : les déclencheurs attendent un message, les conditions choisissent entre plusieurs branches, les boucles et les scènes se répètent jusqu'à un événement ([timelines non linéaires](https://ossia.io/score-docs/quick-start/breaking-the-timeline.html)).
- **Mapping** : mettez à l'échelle, lissez et transformez les valeurs entre appareils, avec des courbes, du JavaScript ou des expressions mathématiques ([mapper](https://ossia.io/score-docs/devices/mapper-device.html)).
- **Toutes les entrées** : manettes de jeu, Wiimote, Leap Motion, contrôleurs MIDI, ports série et Arduino, capteurs Bluetooth LE, caméras de profondeur et protocoles de tracking (PosiStageNet, TUIO, RTTrP, OpenXR) ([capteurs vers OSC](https://ossia.io/score-docs/examples/devices/sensors2osc.html)).
- **De nombreux protocoles** : OSC en UDP, TCP, WebSockets et série, OSCQuery, MIDI, DMX (Art-Net, sACN, DMX USB), MQTT, CoAP, HTTP, LSL, CAN.
- **Temps musical** : tempo, mesures et quantification quand la partition doit suivre un tempo ([temps musical](https://ossia.io/score-docs/in-depth/musical.html)).

<picture><source type="image/avif" srcset="/assets/feature-interaction.avif"><img src="/assets/feature-interaction.webp" width="580" height="452" loading="lazy" alt="Une timeline interactive où un déclencheur attend un événement externe dans ossia score"/></picture>

## ossia score face aux autres timelines OSC

<div class="comparison-scroll">
<table class="comparison">
<tr><th>Logiciel</th><th>Choisissez ossia score si…</th><th>Gardez l'autre logiciel si…</th></tr>
<tr><td><b>Vezér</b> (macOS)</td><td>vous avez besoin de Windows ou de Linux, d'interactivité (déclencheurs, conditions, embranchements), ou de son et de vidéo dans la même timeline.</td><td>vous êtes habitué à son fonctionnement par calques sous macOS et n'avez besoin que d'automation linéaire.</td></tr>
<tr><td><b>Chataigne</b></td><td>vous voulez une vraie timeline avec audio, vidéo, 3D, shaders et plug-ins à côté de votre routage OSC et MIDI.</td><td>vous construisez surtout des machines à états et du routage par modules ; les deux sont gratuits et peuvent communiquer en OSC.</td></tr>
<tr><td><b>OSCulator, Open Stage Control, TouchOSC</b></td><td>vous voulez transformer des contrôleurs en OSC et aussi séquencer le résultat dans le temps.</td><td>vous avez besoin d'une application de surface de contrôle mobile ; la télécommande web d'ossia score couvre les cas simples.</td></tr>
<tr><td><b>IanniX</b></td><td>vous voulez un séquenceur maintenu, multiplateforme, avec une large bibliothèque de protocoles.</td><td>vous tenez à la partition graphique propre à IanniX.</td></tr>
</table>
</div>

## Fonctionne avec

ossia score parle nativement OSCQuery grâce à [libossia](/site-libossia/about.html), disponible aussi pour Max/MSP, Pure Data, Unity, Python, SuperCollider, openFrameworks et Qt :
ajoutez quelques objets à votre patch ou à votre projet et ses paramètres apparaissent dans score, prêts à être automatisés.
