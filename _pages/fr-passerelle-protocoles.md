---
layout: use-case
lang: fr
title: "Passerelle libre OSC, MIDI, DMX et MQTT"
headline: "Une passerelle entre protocoles"
subtitle: "MIDI, OSC, DMX, MQTT, série, HTTP, WebSocket et Bluetooth LE au même endroit : convertir les messages de l'un à l'autre, les nettoyer, et laisser la passerelle tourner."
permalink: /fr/passerelle-protocoles.html
translation: /protocol-bridge.html
category: site-score
description: "Passerelle et convertisseur libre : MIDI vers OSC, OSC vers DMX, MQTT, série, HTTP, WebSocket et Bluetooth LE, avec mapping, filtrage et OSCQuery."
image: /assets/social/ossia-score-og.jpg
---

La plupart des dispositifs mélangent du matériel qui ne parle pas la même langue : un contrôleur MIDI, de la lumière en Art-Net, des capteurs en série ou en MQTT, des logiciels en OSC.
Dans ossia score, chaque appareil devient un arbre de paramètres, et n'importe quel paramètre peut en piloter un autre.

## Ce qu'il sait parler

L'OSC en UDP, TCP, WebSocket et série, et OSCQuery. Le MIDI, via des ports virtuels et les ports réseau fournis par le système d'exploitation. Le DMX en entrée et en sortie en Art-Net, sACN et sur interfaces USB. MQTT, CoAP, HTTP, WebSocket, la liaison série, Bluetooth LE et LSL, et la réception de données de bus CAN sous Linux ([appareils](https://ossia.io/score-docs/devices.html)).
En entrée, on trouve aussi le tracking PosiStageNet, RTTrP, OpenTrackIO et TUIO, les manettes, Leap Motion et les caméras de profondeur ; les modules Bitfocus Companion du gestionnaire de paquets pilotent le matériel audiovisuel ([tracking](https://ossia.io/score-docs/devices/tracking-device.html), [Companion](https://ossia.io/score-docs/devices/companion-device.html)).

Un appareil à protocole texte ou binaire propre se décrit en un court script, avec les encapsulations SLIP, COBS, STX/ETX ou préfixe de taille, en TCP, UDP, série ou Bluetooth ([protocoles QML](https://ossia.io/score-docs/in-depth/qml-protocols.html)).
Les appareils OSC se découvrent sur le réseau via Bonjour/Zeroconf, les appareils OSCQuery se parcourent, et vos propres paramètres se publient de la même façon ([OSCQuery](https://ossia.io/score-docs/devices/oscquery-device.html)).

## Relier

Relier deux paramètres demande une courbe et une plage, pas de programmation. Les valeurs se mettent à l'échelle, se lissent et se filtrent (zone morte, noise gate, hystérésis, anti-rebond), et plusieurs entrées peuvent se combiner en une seule ([vue d'ensemble du mapping](https://ossia.io/score-docs/examples/data/mapping-overview.html), [filtre de valeurs](https://ossia.io/score-docs/processes/value-filter.html)).
Un motif d'adresses OSC envoie une même valeur à tout un groupe de paramètres ([motifs](https://ossia.io/score-docs/in-depth/pattern-matching.html)).

Pour une passerelle permanente, l'appareil mapper continue de fonctionner même quand aucune partition ne joue. Ses correspondances s'écrivent en JavaScript dans un fichier QML ([appareil mapper](https://ossia.io/score-docs/devices/mapper-device.html)).
Il tourne sans interface sur PC ou Raspberry Pi, et les configurations d'appareils s'exportent pour être réutilisées sur une autre machine ([mode sans interface](https://ossia.io/score-docs/faq/nogui.html)).

<picture><img src="/assets/features/mapper.webp" width="1600" height="760" loading="lazy" alt="La fenêtre de configuration des appareils d'ossia score, avec la liste des protocoles à gauche et le script d'un appareil mapper qui relie un contrôle MIDI à un nouveau paramètre"/></picture>

## En résumé

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>Vous voulez</th><th>Dans ossia score</th></tr></thead>
<tbody>
<tr><td>Un contrôleur MIDI qui pilote un logiciel qui ne parle qu'OSC, ou l'inverse</td><td>Glisser un paramètre MIDI sur un paramètre OSC, avec une courbe et une plage entre les deux.</td></tr>
<tr><td>Des capteurs en série, MQTT ou Bluetooth LE qui commandent lumière ou son</td><td>Tous sont des appareils du même arbre, reliés au DMX, à l'OSC ou à l'audio et la vidéo de score.</td></tr>
<tr><td>Prendre en charge un appareil à protocole propre</td><td>Un court script le décrit une fois ; il se comporte ensuite comme les autres.</td></tr>
<tr><td>Une passerelle toujours allumée</td><td>L'appareil mapper, sans partition, sans interface sur un Raspberry Pi.</td></tr>
<tr><td>Le temps en plus de la traduction</td><td>Le même projet peut retarder, séquencer et automatiser les messages (voir la <a href="/fr/timeline-osc-midi-dmx.html">timeline OSC, MIDI et DMX</a>).</td></tr>
</tbody>
</table>
</div>
