---
layout: use-case
lang: fr
title: "Logiciel audiovisuel pour musées et expositions"
headline: "Musées et expositions permanentes"
subtitle: "ossia score permet de faire fonctionner les médias d'une exposition permanente, qui démarrent seuls, se supervisent à distance et peuvent être pris en main par une équipe qui ne les a pas construits."
permalink: /fr/musees-expositions.html
ref: museums
nav_title: "Musées et expositions"
blurb: "Des dispositifs qui tournent toute la journée sans personnel, supervisés, avec panneau de contrôle et bornes."
category: site-score
description: "Logiciel libre pour l'audiovisuel des musées et expositions : lecture autonome, supervision, télécommande pour l'équipe, bornes, sur PC ou Raspberry Pi."
image: /assets/social/ossia-score-og.jpg
---

ossia score permet de faire fonctionner les médias et les parties interactives d'une exposition, d'un écran unique jusqu'à un parcours de plusieurs salles ; cette page traite de leur fonctionnement au quotidien, l'interaction elle-même étant décrite sur la page [installations interactives](/fr/installations-interactives.html).
Blue Yeti a par exemple utilisé ossia pour le *Carrousel musical* de l'Abbaye aux Dames, et libossia pour le Musée de la nature et de la chasse de Gien et pour le parcours muséal interactif de la Chocolaterie Camille Bloch, en Suisse.

<picture><img src="/assets/gallery/carrousel.webp" width="800" height="597" loading="lazy" alt="Un pavillon géodésique à côté d'une abbaye, et à l'intérieur une grande sculpture en bois éclairée en orange"/></picture>
<p class="figure-caption"><i>Carrousel musical</i>, Blue Yeti, Abbaye aux Dames.</p>

## Lecture autonome

score ouvre un projet et le joue au démarrage, sans l'éditeur, après un délai si des plug-ins ont besoin de temps pour se charger ([mode sans interface](https://ossia.io/score-docs/faq/nogui.html), [ligne de commande](https://ossia.io/score-docs/reference/commandline.html)) ; il fonctionne sur un Raspberry Pi ou une autre carte Linux avec décodage vidéo matériel, sans environnement de bureau ([systèmes embarqués](https://ossia.io/score-docs/in-depth/embedded.html)).

Un appareil système indique l'usage du processeur, de la carte graphique, de la mémoire, de la batterie et du réseau, et chaque paramètre peut être lu en OSC et en OSCQuery, de sorte qu'un dispositif peut être vérifié à distance ; sur les machines peu puissantes, les mises à jour de l'affichage peuvent être désactivées.

## Pilotage par l'équipe

L'équipe d'accueil peut lancer, arrêter et déclencher des scènes depuis un navigateur web, un téléphone ou une tablette sur le réseau local ([contrôle à distance](https://ossia.io/score-docs/in-depth/remote.html)).
Lorsqu'un dispositif a besoin de son propre écran tactile, il peut être empaqueté en application autonome qui n'affiche que les boutons destinés aux visiteurs (voir [applications sur mesure](/fr/applications-sur-mesure.html)).

<picture><img src="/assets/blog/v3/remote.webp" width="1229" height="854" loading="lazy" alt="La télécommande d'ossia score dans un navigateur web, avec boutons de transport, curseurs de vitesse, un arpégiateur, des boutons et des sélecteurs de couleur"/></picture>

## Maintenance

Les outils de projet rassemblent tous les médias dans le dossier du projet, signalent les fichiers manquants et produisent une archive zip de l'ensemble, ce qui permet de transmettre un dispositif à une autre équipe ([fichiers de projet](https://ossia.io/score-docs/reference/project-files.html)) ; le même projet s'ouvre sur tous les systèmes d'exploitation.
Le son, la vidéo, la lumière et les accessoires sont sur la même timeline, avec des cues et des scènes, le matériel audiovisuel peut être piloté par les modules Bitfocus Companion installés depuis le gestionnaire de paquets, et les visiteurs peuvent interagir par des boutons, des capteurs, des caméras et des caméras de profondeur ([cues](https://ossia.io/score-docs/cues.html), [scènes](https://ossia.io/score-docs/common-practices/6-scenes.html)).

Dans la [galerie](/gallery.html), le filtre « Museums » présente les dispositifs muséaux réalisés avec ossia.
