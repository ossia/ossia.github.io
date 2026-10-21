---
layout: use-case
lang: fr
title: "Faire d'un projet une application autonome"
headline: "Applications sur mesure avec ossia score"
subtitle: "ossia score permet d'empaqueter un projet avec sa propre interface, son nom et son icône en application pour Windows, macOS, Linux ou le web."
permalink: /fr/applications-sur-mesure.html
ref: custom-apps
nav_title: "Applications sur mesure"
blurb: "Empaquetez un projet avec votre interface en application pour Windows, macOS, Linux ou le web."
category: site-score
description: "Empaquetez un projet ossia score avec une interface QML en application autonome à votre nom, pour Windows, macOS, Linux, ARM ou le web. Libre et gratuit."
image: /assets/social/ossia-score-og.jpg
---

ossia score peut être empaqueté en application autonome, avec une interface sur mesure au-dessus, le projet et ses médias à l'intérieur, et le moteur de score en dessous ; cela sert notamment pour une borne, pour un outil remis à une équipe ou à un client, ou pour une œuvre interactive diffusée, lorsque les personnes qui l'utilisent n'ont pas à voir l'éditeur.
LivePose et Koaia ont été réalisés de cette manière.

<img src="/assets/use-cases/custom-ui.webp" width="640" height="245" loading="lazy" alt="Une interface sur mesure avec des potentiomètres à côté d'un visuel génératif en noir et blanc, et une console qui affiche les valeurs envoyées"/>

## Interface

L'interface s'écrit en QML avec Qt Quick Controls et se relie aux paramètres du projet ; il peut aussi s'agir d'une application d'interface seule qui pilote des appareils ([interfaces personnalisées](https://ossia.io/score-docs/custom-ui.html)).
La logique de l'application, l'état sauvegardé, les boîtes de dialogue de fichiers et le contrôle du transport s'écrivent en JavaScript ([scripts](https://ossia.io/score-docs/in-depth/scripting.html)).

## Empaquetage

L'application ouvre son projet au démarrage et peut lancer la lecture immédiatement ([applications](https://ossia.io/score-docs/development/custom-apps.html)) ; elle a son propre nom, son organisation, sa version, sa description, des icônes pour chaque plateforme et ses réglages, avec ou sans la marque ossia.

Les cibles prises en charge sont Linux (AppImage x86_64 et ARM), macOS (application et DMG Intel et Apple Silicon, avec signature et notarisation), Windows (x64 et ARM64), et une version WebAssembly statique qui peut être servie depuis un site web.
Un dépôt modèle avec GitHub Actions compile toutes les plateformes, une compilation depuis les sources peut n'inclure que les extensions nécessaires, et pendant le développement l'application peut être lancée avec l'éditeur visible à côté de son interface.

L'audio, la vidéo, la 3D, les appareils et les protocoles sont fournis par ossia score, de sorte qu'il n'y a pas de moteur multimédia à maintenir séparément.
