---
layout: use-case
lang: fr
title: "Logiciel audiovisuel pour musées et expositions"
headline: "Musées et expositions permanentes"
subtitle: "Des dispositifs qui démarrent seuls le matin, donnent de leurs nouvelles, et peuvent être pris en main par une équipe qui ne les a pas construits."
permalink: /fr/musees-expositions.html
translation: /museums-exhibitions.html
category: site-score
description: "Logiciel libre pour l'audiovisuel des musées et expositions : lecture autonome, supervision, télécommande pour l'équipe, bornes, sur PC ou Raspberry Pi."
image: /assets/social/ossia-score-og.jpg
---

Une exposition permanente tourne pendant des mois. Chaque matin, elle doit démarrer sans que personne n'y touche, et quand quelque chose casse, la personne qui répare est rarement celle qui a monté le dispositif.
ossia score fait tourner les médias et les parties interactives d'un dispositif, d'un seul écran à tout un parcours de salles. Pour l'interaction elle-même, voir [installations interactives](/fr/installations-interactives.html).

<picture><img src="/assets/gallery/carrousel.webp" width="800" height="597" loading="lazy" alt="Un pavillon géodésique à côté d'une abbaye, et à l'intérieur une grande sculpture en bois éclairée en orange"/></picture>
<p class="figure-caption"><i>Carrousel musical</i>, Blue Yeti, Abbaye aux Dames.</p>

## Chaque matin

score ouvre un projet et le joue au démarrage, sans l'éditeur, après un délai si des plug-ins ont besoin de temps pour se charger ([mode sans interface](https://ossia.io/score-docs/faq/nogui.html), [ligne de commande](https://ossia.io/score-docs/reference/commandline.html)).
Il tourne sur un Raspberry Pi ou une autre carte Linux avec décodage vidéo matériel, sans environnement de bureau ([appareils embarqués](https://ossia.io/score-docs/in-depth/embedded.html)).

Un appareil système indique l'usage du processeur, de la carte graphique, de la mémoire, de la batterie et du réseau, et chaque paramètre se lit en OSC et en OSCQuery : on peut vérifier un dispositif depuis son bureau. Sur les machines peu puissantes, les mises à jour de l'affichage se désactivent.

## Le panneau de l'équipe

L'équipe d'accueil lance, arrête et déclenche les scènes depuis un navigateur, un téléphone ou une tablette sur le réseau local ([contrôle à distance](https://ossia.io/score-docs/in-depth/remote.html)).
Quand un dispositif a besoin de son propre écran tactile, il peut devenir une application autonome qui n'affiche que les boutons destinés au public (voir [applications sur mesure](/fr/applications-sur-mesure.html)).

<picture><img src="/assets/blog/v3/remote.webp" width="1229" height="854" loading="lazy" alt="La télécommande d'ossia score dans un navigateur, avec le transport, des curseurs de vitesse, un arpégiateur, des boutons et des sélecteurs de couleur"/></picture>

## Un projet qu'on peut transmettre

Avant de passer la main, rassemblez tous les médias dans le dossier du projet, cherchez les fichiers manquants, et archivez le projet entier en zip ([fichiers de projet](https://ossia.io/score-docs/reference/project-files.html)).
Son, vidéo, lumière et accessoires partagent une timeline avec cues et scènes, et le matériel audiovisuel se pilote grâce aux modules Bitfocus Companion du gestionnaire de paquets ([cues](https://ossia.io/score-docs/cues.html), [scènes](https://ossia.io/score-docs/common-practices/6-scenes.html)).
Les visiteurs interagissent par des boutons, des capteurs, des caméras et des caméras de profondeur.

## En résumé

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>Vous voulez</th><th>Dans ossia score</th></tr></thead>
<tbody>
<tr><td>Des dispositifs qui démarrent sans personne</td><td>Lecture automatique au démarrage, mode sans interface, aucune fenêtre d'éditeur à l'écran.</td></tr>
<tr><td>Beaucoup de dispositifs avec un petit budget</td><td>Un logiciel gratuit sur Raspberry Pi ou mini-PC au lieu d'un lecteur dédié.</td></tr>
<tr><td>Savoir quand quelque chose ne va pas</td><td>Supervision du système, et chaque paramètre lisible sur le réseau.</td></tr>
<tr><td>Une équipe qui n'est pas technicienne</td><td>Un panneau de contrôle web, ou une interface tactile avec seulement les boutons utiles.</td></tr>
<tr><td>Un projet qui survit à son auteur</td><td>Médias rassemblés dans un dossier, formats ouverts, le même projet sur tous les systèmes.</td></tr>
</tbody>
</table>
</div>

Dans la [galerie](/gallery.html), le filtre « Museums » montre des dispositifs réalisés avec ossia.
