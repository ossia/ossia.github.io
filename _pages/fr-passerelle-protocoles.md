---
layout: use-case
lang: fr
title: "Passerelle libre OSC, MIDI, DMX et MQTT"
headline: "Une passerelle entre protocoles"
subtitle: "Reliez MIDI, OSC, DMX, MQTT, série, HTTP, WebSocket, Bluetooth LE et d'autres : convertissez les messages de l'un à l'autre, nettoyez-les et remettez-les à l'échelle, et laissez la passerelle tourner sur un petit ordinateur. Libre et gratuit, sous Windows, macOS, Linux et Raspberry Pi."
permalink: /fr/passerelle-protocoles.html
translation: /protocol-bridge.html
category: site-score
description: "Passerelle et convertisseur libre : MIDI vers OSC, OSC vers DMX, MQTT, série, HTTP, WebSocket et Bluetooth LE, avec mapping, filtrage et OSCQuery."
image: /assets/social/ossia-score-og.jpg
---

La plupart des projets mélangent du matériel qui parle des langues différentes : un contrôleur MIDI, une console lumière en Art-Net, des capteurs en série ou en MQTT, des logiciels en OSC.
ossia score se place au milieu : chaque appareil devient un arbre de paramètres, et n'importe quel paramètre peut en piloter un autre.

## Ce que vous pouvez faire

- **De nombreux protocoles au même endroit** : OSC en UDP, TCP, WebSocket et série, OSCQuery, MIDI (ports virtuels et réseau, MIDI 2), DMX en entrée et en sortie en Art-Net, sACN et sur interfaces USB, MQTT, CoAP, HTTP, WebSocket, série, Bluetooth LE, LSL, et réception de données de bus CAN sous Linux ([appareils](https://ossia.io/score-docs/devices.html)).
- **Tracking et contrôle** : PosiStageNet, RTTrP, OpenTrackIO, TUIO, manettes, Leap Motion et caméras de profondeur en entrée ; modules Bitfocus Companion pour piloter le matériel audiovisuel ([tracking](https://ossia.io/score-docs/devices/tracking-device.html), [Companion](https://ossia.io/score-docs/devices/companion-device.html)).
- **Relier sans programmer** : connectez des paramètres avec des courbes, mettez-les à l'échelle, lissez-les et filtrez-les (zone morte, noise gate, hystérésis, anti-rebond), combinez plusieurs entrées en une ([vue d'ensemble du mapping](https://ossia.io/score-docs/examples/data/mapping-overview.html), [filtre de valeurs](https://ossia.io/score-docs/processes/value-filter.html)).
- **Des correspondances permanentes** : l'appareil mapper fait fonctionner une passerelle même quand aucune partition ne joue, avec des correspondances écrites en JavaScript ([appareil mapper](https://ossia.io/score-docs/devices/mapper-device.html)).
- **Vos propres protocoles** : décrivez un appareil à protocole texte ou binaire dans un court script, avec des encapsulations comme SLIP, COBS, STX/ETX ou un préfixe de taille, en TCP, UDP, série ou Bluetooth ([protocoles QML](https://ossia.io/score-docs/in-depth/qml-protocols.html)).
- **Découverte** : trouvez les appareils OSC du réseau via Bonjour/Zeroconf, parcourez les appareils OSCQuery, et publiez vos propres paramètres de la même façon ([OSCQuery](https://ossia.io/score-docs/devices/oscquery-device.html)).
- **Beaucoup d'appareils à la fois** : les motifs d'adresses OSC appliquent une valeur à tout un groupe de paramètres ([motifs](https://ossia.io/score-docs/in-depth/pattern-matching.html)).
- **Toujours en marche** : mode sans interface sur PC ou Raspberry Pi, et configurations d'appareils exportables et réutilisables ([mode sans interface](https://ossia.io/score-docs/faq/nogui.html)).

## Les besoins d'une passerelle, et les réponses d'ossia score

<div class="comparison-scroll">
<table class="comparison">
<tr><th>Ce dont vous avez besoin</th><th>Comment ossia score y répond</th></tr>
<tr><td>Un contrôleur MIDI qui pilote un logiciel qui ne parle qu'OSC, ou l'inverse</td><td>Glissez un paramètre MIDI sur un paramètre OSC, avec une courbe et une plage entre les deux.</td></tr>
<tr><td>Des capteurs en série, MQTT ou Bluetooth LE qui pilotent la lumière ou le son</td><td>Ce sont tous des appareils du même arbre, reliés au DMX, à l'OSC ou à l'audio et la vidéo intégrés.</td></tr>
<tr><td>Un appareil avec son propre protocole texte ou binaire</td><td>Un court script le décrit une fois, puis il se comporte comme n'importe quel autre appareil.</td></tr>
<tr><td>Une passerelle qui tourne seule, en permanence</td><td>L'appareil mapper fonctionne sans jouer de partition, sans interface sur un Raspberry Pi.</td></tr>
<tr><td>Du temps en plus de la traduction</td><td>Le même projet peut séquencer, retarder et automatiser les messages sur une timeline (voir la <a href="/fr/timeline-osc-midi-dmx.html">timeline OSC, MIDI et DMX</a>).</td></tr>
</table>
</div>
