---
layout: use-case
lang: fr
title: "Passerelle libre OSC, MIDI, DMX et MQTT"
headline: "Une passerelle entre protocoles"
subtitle: "ossia score permet de convertir des messages entre appareils MIDI, OSC, DMX, MQTT, série, HTTP, WebSocket et Bluetooth LE, de les filtrer, et de laisser la passerelle tourner en permanence."
permalink: /fr/passerelle-protocoles.html
translation: /protocol-bridge.html
category: site-score
description: "Passerelle et convertisseur libre : MIDI vers OSC, OSC vers DMX, MQTT, série, HTTP, WebSocket et Bluetooth LE, avec mapping, filtrage et OSCQuery."
image: /assets/social/ossia-score-og.jpg
---

ossia score peut servir de passerelle entre des équipements qui utilisent des protocoles différents, par exemple un contrôleur MIDI, de la lumière en Art-Net, des capteurs en série ou en MQTT et des logiciels en OSC : chaque appareil y est représenté sous forme d'arbre de paramètres, et n'importe quel paramètre peut en piloter un autre.
Dans *VIB.E-MOTION* (Fheel Concepts et Corinne Linder, 2024), le rythme cardiaque du public est par exemple mesuré par des capteurs Bluetooth, et score gère le réseau et le son de ce spectacle de cirque participatif.

## Protocoles

score prend en charge l'OSC en UDP, TCP, WebSocket et sur port série, ainsi qu'OSCQuery ; le MIDI, via des ports virtuels et les ports réseau fournis par le système d'exploitation ; le DMX en entrée et en sortie en Art-Net, en sACN et sur interfaces USB ; ainsi que MQTT, CoAP, HTTP, WebSocket, le port série, le Bluetooth LE, LSL, et la réception de données de bus CAN sous Linux ([appareils](https://ossia.io/score-docs/devices.html)).
Parmi les entrées, on trouve aussi les protocoles de tracking PosiStageNet, RTTrP, OpenTrackIO et TUIO, les manettes, le Leap Motion et les caméras de profondeur, et le matériel audiovisuel peut être piloté par les modules Bitfocus Companion installés depuis le gestionnaire de paquets ([tracking](https://ossia.io/score-docs/devices/tracking-device.html), [Companion](https://ossia.io/score-docs/devices/companion-device.html)).

Les appareils dotés de leur propre protocole texte ou binaire se décrivent par un court script, avec des encapsulations SLIP, COBS, STX/ETX ou préfixées par la taille, en TCP, UDP, série ou Bluetooth ([protocoles QML](https://ossia.io/score-docs/in-depth/qml-protocols.html)).
Les appareils OSC sont découverts sur le réseau via Bonjour/Zeroconf, les appareils OSCQuery peuvent être parcourus, et les paramètres d'une partition peuvent être publiés de la même manière ([OSCQuery](https://ossia.io/score-docs/devices/oscquery-device.html)).

## Mapping

Relier deux paramètres ne demande qu'une courbe et un intervalle : les valeurs peuvent être mises à l'échelle, lissées et filtrées (zone morte, noise gate, hystérésis, anti-rebond), plusieurs entrées peuvent être combinées en une seule, et un motif d'adresses OSC envoie une valeur à tout un groupe de paramètres ([vue d'ensemble du mapping](https://ossia.io/score-docs/examples/data/mapping-overview.html), [filtre de valeurs](https://ossia.io/score-docs/processes/value-filter.html), [motifs d'adresses](https://ossia.io/score-docs/in-depth/pattern-matching.html)).

Pour une passerelle qui doit fonctionner en permanence, l'appareil mapper continue de tourner lorsqu'aucune partition n'est jouée ; ses correspondances s'écrivent en JavaScript dans un fichier QML ([mapper](https://ossia.io/score-docs/devices/mapper-device.html)).
Il fonctionne sans interface sur un PC ou un Raspberry Pi, et les configurations d'appareils peuvent être exportées puis réutilisées sur une autre machine ([mode sans interface](https://ossia.io/score-docs/faq/nogui.html)).

<picture><img src="/assets/features/mapper.webp" width="1600" height="760" loading="lazy" alt="La fenêtre de configuration des appareils d'ossia score, avec la liste des protocoles à gauche et le script d'un appareil mapper qui relie un contrôle MIDI à un nouveau paramètre"/></picture>

Lorsque les messages doivent aussi être retardés, séquencés ou automatisés dans le temps, le même projet peut s'en charger (voir la page [timeline OSC, MIDI et DMX](/fr/timeline-osc-midi-dmx.html)).
