---
layout: use-case
lang: fr
title: "Transformer un projet interactif en application autonome"
headline: "Applications sur mesure avec ossia score"
subtitle: "Empaquetez un projet avec sa propre interface, son nom et son icône en application pour Windows, macOS, Linux ou le web : une borne d'installation, un outil pour votre équipe, ou une œuvre interactive que vous diffusez. Libre et gratuit."
permalink: /fr/applications-sur-mesure.html
translation: /custom-apps.html
category: site-score
description: "Empaquetez un projet ossia score avec une interface QML en application autonome à votre nom, pour Windows, macOS, Linux, ARM ou le web. Libre et gratuit."
image: /assets/social/ossia-score-og.jpg
---

Parfois, les personnes qui utilisent un projet ne doivent pas voir l'éditeur. ossia score peut être empaqueté comme votre propre application :
votre interface au-dessus, votre projet et vos médias à l'intérieur, et tout le moteur en dessous.

## Ce que vous pouvez faire

- **Votre interface** : écrivez l'interface en QML avec Qt Quick Controls, reliée aux paramètres du projet ; ce peut aussi être une application d'interface seule qui pilote des appareils ([interfaces personnalisées](https://ossia.io/score-docs/custom-ui.html)).
- **Votre projet à l'intérieur** : l'application ouvre son projet au démarrage et peut le lancer immédiatement ([applications sur mesure](https://ossia.io/score-docs/development/custom-apps.html)).
- **Votre nom et votre icône** : nom de l'application, organisation, version, description et icônes pour chaque plateforme, et ses propres réglages ; à votre marque ou sans marque.
- **Toutes les plateformes** : Linux (AppImage x86_64 et ARM), macOS (application et DMG Intel et Apple Silicon, avec signature et notarisation), Windows (x64 et ARM64), et une version WebAssembly statique à servir depuis un site web.
- **Construite automatiquement** : un dépôt modèle et des GitHub Actions empaquettent l'application pour chaque plateforme ; une version compilée peut n'inclure que les extensions utiles.
- **Scripts** : JavaScript pour la logique de l'application, la persistance de l'état, les dialogues de fichiers et l'accès au transport ([scripts](https://ossia.io/score-docs/in-depth/scripting.html)).
- **Déboguer au besoin** : lancez l'application avec l'éditeur visible à côté de son interface.

## Les besoins d'une application, et les réponses d'ossia score

<div class="comparison-scroll">
<table class="comparison">
<tr><th>Ce dont vous avez besoin</th><th>Comment ossia score y répond</th></tr>
<tr><td>Une borne avec seulement les boutons que les visiteurs doivent toucher</td><td>Une interface QML plein écran au-dessus du projet, sans l'éditeur.</td></tr>
<tr><td>Diffuser une œuvre interactive au public</td><td>Des applications installables pour chaque système, et une version web qui tourne dans le navigateur.</td></tr>
<tr><td>Un outil simple pour une équipe ou un client</td><td>Votre nom, votre icône et vos réglages, avec la complexité du projet cachée.</td></tr>
<tr><td>Ne pas maintenir soi-même un moteur multimédia</td><td>Audio, vidéo, 3D, appareils et protocoles viennent d'ossia score.</td></tr>
<tr><td>Des versions reproductibles</td><td>Scripts d'empaquetage et GitHub Actions du dépôt modèle.</td></tr>
</table>
</div>

LivePose et Koaia sont des exemples d'applications réalisées avec cet outil.
