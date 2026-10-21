---
layout: use-case
lang: fr
title: "Faire d'un projet une application autonome"
headline: "Applications sur mesure avec ossia score"
subtitle: "Empaqueter un projet avec son interface, son nom et son icône en application pour Windows, macOS, Linux ou le web : une borne, un outil pour votre équipe, ou une œuvre à diffuser."
permalink: /fr/applications-sur-mesure.html
translation: /custom-apps.html
category: site-score
description: "Empaquetez un projet ossia score avec une interface QML en application autonome à votre nom, pour Windows, macOS, Linux, ARM ou le web. Libre et gratuit."
image: /assets/social/ossia-score-og.jpg
---

Parfois, les personnes qui utilisent un projet ne doivent jamais voir l'éditeur. ossia score peut devenir votre propre application : votre interface au-dessus, votre projet et vos médias à l'intérieur, et le moteur de score en dessous.
LivePose et Koaia ont été réalisés ainsi.

<img src="/assets/use-cases/custom-ui.webp" width="640" height="245" loading="lazy" alt="Une interface sur mesure avec des potentiomètres à côté d'un visuel génératif noir et blanc, et une console qui affiche les valeurs envoyées"/>

## L'interface

L'interface s'écrit en QML avec Qt Quick Controls, reliée aux paramètres du projet. Ce peut aussi être une application d'interface seule qui pilote des appareils ([interfaces personnalisées](https://ossia.io/score-docs/custom-ui.html)).
La logique, la mémorisation de l'état, les boîtes de dialogue de fichiers et l'accès au transport s'écrivent en JavaScript ([scripts](https://ossia.io/score-docs/in-depth/scripting.html)).

## Le paquet

L'application ouvre son projet au démarrage et peut lancer la lecture tout de suite ([applications](https://ossia.io/score-docs/development/custom-apps.html)).
Elle porte son nom, son organisation, sa version, sa description, ses icônes pour chaque plateforme et ses réglages, avec ou sans la marque ossia.

Les cibles : Linux (AppImage x86_64 et ARM), macOS (application et DMG Intel et Apple Silicon, signés et notarisés), Windows (x64 et ARM64), et une version WebAssembly statique à héberger sur un site.
Un dépôt modèle avec GitHub Actions construit chaque plateforme, et une compilation depuis les sources peut n'inclure que les modules nécessaires.
Pendant le développement, l'application peut s'ouvrir avec l'éditeur visible à côté de son interface.

## En résumé

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>Vous voulez</th><th>Dans ossia score</th></tr></thead>
<tbody>
<tr><td>Une borne avec seulement les boutons destinés aux visiteurs</td><td>Une interface QML plein écran au-dessus du projet, sans l'éditeur.</td></tr>
<tr><td>Diffuser une œuvre interactive</td><td>Des applications installables pour chaque système, et une version web.</td></tr>
<tr><td>Un outil simple pour une équipe ou un client</td><td>Votre nom, votre icône et vos réglages, la complexité du projet hors de vue.</td></tr>
<tr><td>Ne pas maintenir vous-même un moteur multimédia</td><td>Audio, vidéo, 3D, appareils et protocoles viennent d'ossia score.</td></tr>
<tr><td>Des compilations reproductibles</td><td>Scripts d'empaquetage et GitHub Actions du dépôt modèle.</td></tr>
</tbody>
</table>
</div>
