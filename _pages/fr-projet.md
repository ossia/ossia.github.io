---
layout: about-page
lang: fr
title:  "Le projet"

permalink: /fr/projet.html
ref: project
category: site-about
description: "Historique du projet ossia : des recherches sur i-score au LaBRI et au SCRIME jusqu'à ossia score, publications, partenaires et financements."
---

Les logiciels développés par ossia reposent en partie sur des spécifications produites au cours du projet de recherche *i-score*, mené par le LaBRI (avec plusieurs partenaires académiques, industriels et artistiques) depuis la fin des années 1990 afin de concevoir de nouveaux modèles et de nouvelles applications pour l'écriture et l'exécution de partitions interactives, d'abord pour la composition musicale avec *Boxes* et *IScore*.

Le support de l'intermédia et du multimédia a ensuite été ajouté à partir de 2008 avec le projet de recherche *Virage*, puis avec le séquenceur *i-score*.

À la suite du [projet de recherche ANR OSSIA](https://anr.fr/Projet-ANR-12-CORD-0024), qui s'est déroulé de 2012 à 2015, une nouvelle version du séquenceur a été réalisée par Jean-Michaël Celerier dans le cadre de sa thèse de doctorat. Plusieurs artistes et développeurs se sont joints à ce travail et ont formé le collectif *ossia*. Le séquenceur a été nommé *ossia score*, et la bibliothèque sur laquelle il repose *libossia*. Tous deux sont disponibles sur <a href="https://github.com/ossia">GitHub</a> et documentés sur ce site.

<!--- Contribute !-->
<h2 class="feature-title">Contribuer</h2>

Le [code source](https://github.com/ossia/score){:target="_blank"} de score est hébergé sur GitHub.
Il repose sur [libossia](https://github.com/ossia/libossia){:target="_blank"}.

<img style="float: right; width: 40%" src="/assets/contribution_oscar.png" alt="Oscar, l'adorable mascotte d'ossia" />
* Contribuer à la bibliothèque utilisateur
* Étendre l'API de script
* Implémenter de nouveaux protocoles
* Implémenter de nouveaux processus et effets

Le projet score est ouvert aux contributions.
Nous avons besoin d'aide pour :

* Fournir des partitions d'exemple
* Créer des espaces de noms pour votre application préférée
* Créer des tutoriels
* Créer des thèmes graphiques
* Corriger les TODO du code
* (bientôt) Les traductions
* L'empaquetage pour les distributions Linux

L'essentiel des discussions sur les fonctionnalités de score a lieu sur le [gestionnaire de tickets](https://github.com/ossia/score/issues).
Pour aider, on peut rejoindre le [forum](https://forum.ossia.io), le [salon Discord](https://discord.gg/8Hzm4UduaS) ou le [chat sur Gitter](https://gitter.im/ossia/score).
Nous pouvons vous accompagner dans vos premières contributions au projet.

Voici une vidéo qui explique comment contribuer au code d'ossia score :

<div class="videoWrapper">
    <button type="button" class="video-facade"><span class="video-facade-title">Projet</span><span class="video-facade-note">Lecture · charge YouTube</span></button><template class="video-facade-embed"><iframe title="Vidéo : Projet" loading="lazy" src="https://www.youtube-nocookie.com/embed/LSifHFbuky0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></template>
</div>

<!--- Roadmap !-->
<h2 class="feature-title">Feuille de route</h2>
<br/>
<p style="text-align: center">
<a href="/fr/telecharger.html" class="page-button"  target="_blank" >La version stable actuelle est la {{site.score_version}}</a>
</p>

<h2>Projets à venir</h2>

* Édition et exécution en réseau (fait dans la 3.0.11 !).
* Enregistrement de l'audio et du MIDI directement dans la partition. Améliorations de l'enregistrement OSC.
* Processus paramétriques : comment disposer de paramètres et de variables utilisés dans la portée d'une boîte donnée et les modifier facilement d'une instance à l'autre de cette boîte.
* Panneau de mixage : rendre le mixage plus simple à l'intérieur de score.
* Support de WebAssembly : des expériences ont été menées il y a quelques années ; l'essentiel du moteur et de l'interface de score compile pour WebAssembly, mais tous les processus ne fonctionnent pas encore.
* Support des transformations géométriques et des compute shaders (fait dans la 3.2.0 !).
* Meilleur support des séquences.
* Support du MIDI 2.0.
* Support de Spout et Syphon (fait dans la 3.0.4 !).

<h2><a href="https://github.com/ossia/score/releases/tag/v3.0.0"  target="_blank">ossia score v3 (sortie en janvier 2022)</a></h2>

ossia score 3 atteint l'objectif à long terme d'en faire une véritable plateforme multimédia, en intégrant des capacités vidéo synchronisées avec le reste de la partition, ainsi que des capacités musicales avec le support du tempo, des métriques musicales et de la quantification. Enfin, le moteur a été étendu pour permettre des cycles dans les scénarios grâce à un nouveau type de connexion, ce qui permet de réaliser des comportements de type machine à états dans les scénarios.

* [Lecture de vidéos](https://x.com/jcelerie/status/1236809800727617537){:target="_blank"}, pour l'instant en H.264 et HAP. L'implémentation utilise Vulkan, Metal, D3D ou OpenGL selon la plateforme, pour des performances maximales. Plusieurs viewports sont supportés, ainsi que la sortie Spout.
* Application de filtres à base de shaders sur ces vidéos. L'Interactive Shader Format est supporté.
* Support des plug-ins JSFX et VST3.
* Support du tempo, des mesures musicales, etc. Il est désormais possible, par exemple, de synchroniser le déclenchement d'un timenode sur le début de la mesure suivante. La polyrythmie est supportée : chaque intervalle peut avoir sa propre timeline de tempo et de métrique.
* [Support des cycles et des boucles](https://x.com/jcelerie/status/1245484342274646017){:target="_blank"} dans le scénario principal.
* [Mécanisme de presets](https://x.com/jcelerie/status/1241774333535666176){:target="_blank"} pour les processus intégrés.
* Mise en boucle intégrée des processus individuels, pour boucler facilement des fichiers audio.
* Les intervalles peuvent désormais être affichés en mode nodal pour interconnecter facilement leurs processus.
* De nombreux petits processus utiles : visualisation de signal, séquenceur de motifs…
* [Support de la compilation JIT](https://x.com/jcelerie/status/1307792769277190147){:target="_blank"}. Il s'agira d'une fonctionnalité expérimentale pendant le cycle de la version 3.0 ; elle permet d'écrire et d'exécuter des extensions C++ directement depuis le logiciel.

<h2><a href="https://github.com/ossia/score/releases/tag/v2.5.2"  target="_blank">ossia score v2.5</a></h2>

Cette version est une mise à jour importante de la 2.0, qui ajoute deux nouveaux processus :

* Control surface : permet de disposer d'interfaces pour contrôler des paramètres distants dans la partition
* Nodal : permet de disposer les processus dans une interface en graphe, comme de nombreux langages de programmation visuelle célèbres. Les processus temporels peuvent être imbriqués dans les processus nodaux.
* RemoteControl : permet de contrôler la partition au moyen d'une simple API WebSockets.
* Énormément de travail sur l'interface

<h2><a href="https://github.com/ossia/score/releases/tag/v2.0.0-a1"  target="_blank">ossia score v2.0</a></h2>

La version 2.0 est un changement de paradigme : elle introduit le traitement de données et d'audio dans score. Le nom a été changé pour rappeler l'héritage du projet OSSIA. Il est désormais possible de jouer des sons, d'appliquer des effets sonores, parmi bien d'autres changements. Les points principaux sont :

* L'exécution repose désormais sur des API de traitement audio synchrones
* Lecture de sons
* Support des effets et instruments LV2 et VST
* Support des effets Faust. Le compilateur Faust est intégré directement dans score.
* Support de nombreux nouveaux protocoles : OSCQuery, ArtNet…
* De nombreux nouveaux processus : LFO, séquenceur pas à pas, expressions mathématiques, etc.
* Pattern matching
* Glisser-déposer à de nombreux endroits
* Création d'un panneau de bibliothèque et d'une [bibliothèque utilisateur](https://github.com/ossia/score-user-library){:target="_blank"}
* Une nouvelle mascotte super mignonne, [Oscar](https://camo.githubusercontent.com/2d6bd98dd127261a5306d0d9c73acf28c63795f7/68747470733a2f2f692e696d6775722e636f6d2f327842574967392e706e67){:target="_blank"} !

La première version 2.0 est sortie en avril 2018.

<h2><a href="https://github.com/ossia/score/releases/tag/v1.0.0-b40"  target="_blank">i-score v1.0 </a></h2>

La version 1.0 est l'aboutissement de la dernière année de travail du projet OSSIA.
Grâce à une réécriture complète, le logiciel a été fortement modularisé, et offre désormais les fonctionnalités suivantes :

* Annuler/rétablir
* Restauration après un plantage
* Plusieurs API de plug-ins
* Boucles, mappings, processus JavaScript
* Hiérarchie arbitraire
* Branchements conditionnels et déclenchements complets
* Un nouveau thème bleu foncé

La version 1.0 est sortie en 2016.

<h2>i-score v0.3</h2>

Toujours grâce au projet OSSIA, un travail de recherche sera mené du début de 2014 à 2015 afin d'implémenter des scénarios logiques dans i-score. Il comprendra :

* Le support des boîtes et (sous-)scénarios en boucle
* Une meilleure représentation graphique des branchements conditionnels
* Le support multi-utilisateur
* Un cadre pour le futur support des boîtes « plug-in » :
    * Boîtes de mapping (pour plusieurs mappings un à un entre paramètres distants)
    * Boîtes génériques et SDK pour des boîtes tierces (par exemple des boîtes audio utilisant JamomaAudioGraph, des boîtes vidéo/OpenGL utilisant QuartzComposer, etc.)


<h2>i-score v0.2</h2>

Grâce au projet de recherche OSSIA, certains services d'i-score ont été améliorés par l'intégration du framework Jamoma Modular dans libIscore, et par un framework dédié à la gestion des partitions interactives.

Cela apporte plusieurs nouvelles fonctionnalités et améliorations :

* Meilleur support des périphériques et des espaces de noms, notamment :
    * meilleure configuration des périphériques et découverte automatique
    * support des attributs des paramètres des périphériques (dont l'intervalle de valeurs, le type, etc.)
    * meilleure gestion des courbes
    * enregistrement des actions de jeu sous forme de courbes
    * déclaration et gestion des paramètres des boîtes d'i-score (comme la vitesse, les points de déclenchement, etc.)
* Support initial des branchements conditionnels

<h2>v0.1</h2>

Version initiale, comprenant (à la 0.1-alpha1, décembre 2012) :

* Édition linéaire (pas de boucles, pas de branchements)
* Un seul périphérique Minuit statique (MinuitDevice1)
* Courbes simples (pas d'édition de l'intervalle de valeurs)
* Support des scénarios imbriqués (hiérarchie)
* Lecture simple (fonction GOTO inachevée)

Plusieurs versions alpha incrémentales sont sorties en chemin, avec notamment :

* Le support d'OSC simple
* La configuration des périphériques Minuit
* Plusieurs améliorations de l'interface

<!--
Pour plus de détails sur l'arbre généalogique et le processus de recherche d'*i-score*, un graphe d'héritage est disponible à la fin de cette page.
-->
<h2 class="feature-title">Recherche scientifique</h2>
## Présentations
Des présentations du projet sont régulièrement données dans des conférences et des rencontres. En voici une liste :
* [Présentations données par Jean-Michaël](https://jcelerier.name/page/talks)

## Publications avec comité de lecture, thèses de doctorat
#### 2023
* A Notation System for Distributed Media Art, Jean-Michaël Celerier, Akané Levy, @TENOR2023
* Proof of Concept of a Generic Toolkit for Sonification: the Sonification Cell in ossia score, Maxime Poret, Jean-Michaël Celerier, Myriam Desainte-Catherine, Catherine Semal, @ICAD2023

#### 2022
* [Networked Performances with Ossia Score (demo)](https://zenodo.org/record/6800771), Jean-Michaël Celerier, Pia Baltazar, @SMC2022. [Vidéo de la présentation](https://youtu.be/DuXSpb2CbWE?t=3206)
* [Rage Against The Glue: Beyond Run-Time Media Frameworks with Modern C++](https://cnrs.hal.science/hal-04090584/), Jean-Michaël Celerier, @ICMC2022
* [ossia score 3](https://www.tenor-conference.org/proceedings/2022/TENOR_2022_paper_29.pdf), Jean-Michaël Celerier, Pia Baltazar, Myriam Desainte-Catherine, @TENOR2022

#### 2021
* [Patches in a timeline with ossia score](https://periodicos.unespar.edu.br/index.php/vortex/article/view/4545), Jean-Michaël Celerier, Vortex Music Journal

#### 2020
* [Architecture logicielle du projet ossia](https://revues.mshparisnord.fr/rfim/index.php?id=574), Jean-Michaël Celerier, Revue Française d'Informatique Musicale

#### 2019
* [A Cross-Platform Development Toolchain For JIT-Compilation in Multimedia Software](https://lac.linuxaudio.org/2019/doc/celerier.pdf), Jean-Michaël Celerier, @LAC2019
  
#### 2018

* <a href="https://tel.archives-ouvertes.fr/tel-01947309/document">Authoring interactive media: a logical & temporal approach</a>, thèse de doctorat, Jean-Michaël Celerier
* <a href="https://data.jssa.info/paper/2018v10n01/4.Celerier.pdf">Leveraging domain-specific languages in an interactive score system</a>, par JM. Celerier, @JSSA (réunion régulière)
* i-Berlioz: Interactive Computer-Aided Orchestration with Temporal Control, par E. Miranda et al., @ICNMC2018
* Generating Orchestral Sequences with Timbral Descriptors, par A. Antoine et al., @TIMBRE2018
<pre>

</pre>
#### 2017
* <a href="https://hal.archives-ouvertes.fr/hal-01620985/document">Extending dataflows with temporal graphs</a>, par JM. Celerier et al. @ICMC2017
* Exécution répartie de scénarios interactifs, par JM. Celerier et al. @JIM2017<br/>
<pre>

</pre>
#### 2016
* <a href="https://hal.archives-ouvertes.fr/hal-01399925">Authoring and automatic verification of interactive multimedia scores</a>, par J. Arias et al. dans le Journal of New Music Research.
* <a href="https://hal.inria.fr/hal-01364702">Graphical Temporal Structured Programming for Interactive Music</a>, par JM. Celerier et al. @ICMC2016
* <a href="https://hal.archives-ouvertes.fr/hal-01360797">Rethinking the audio workstation: tree-based sequencing with i-score and the LibAudioStream</a>, par JM. Celerier et al. @SMC2016
* <a href="https://hal.archives-ouvertes.fr/hal-01336825">Automatic Construction of Interactive Machine Improvisation Scenarios from Audio Recordings</a>, par J. Arias et al. @MUME2016
* <a href="https://hal.archives-ouvertes.fr/hal-01300346">Présentation d'un formalisme graphique pour l'écriture de scénarios interactifs</a>, par T. de la Hogue et al. @JIM2016
* <a href="https://hal.archives-ouvertes.fr/hal-01300348">Outils d'écriture spatiale pour les partitions interactives</a>, par JM. Celerier et al. @JIM2016
<pre>

</pre>
#### 2015
* <a href="https://www.theses.fr/2015BORD0283">Sémantique Formelle et Vérification Automatique de Scénarios Hiérarchiques Multimédia avec des Choix Interactifs</a>, thèse de doctorat, J. Arias.
* <a href="https://hal.archives-ouvertes.fr/hal-01245350">Le séquenceur interactif multimédia i-score</a>, par J. Arias et al. @JDEV2015
* <a href="https://hal.archives-ouvertes.fr/hal-01129394">Foundations for Reliable and Flexible Interactive Multimedia Scores</a>, par J. Arias et al. @MCM2015
* <a href="https://hal.archives-ouvertes.fr/hal-01129316">Exploiting Parallelism in FPGAs for the Real-Time Interpretation of Interactive Multimedia Score</a>, par J. Arias et al. @JIM2015
* <a href="https://ieeexplore.ieee.org/document/7352434/">A Framework for Composition, Verification and Real-Time Performance of Multimedia Interactive Scenarios</a>, par J. Arias et al. @ACSD2015
* <a href="https://hal.archives-ouvertes.fr/hal-01245957">OSSIA : Towards a unified interface for scoring time and interaction</a>, par JM. Celerier et al. @TENOR2015
<pre>

</pre>
#### 2014
* <a href="https://ieeexplore.ieee.org/document/7016342">Modelling Data Processing for Interactive Scores Using Coloured Petri Nets</a>, par J. Arias et al. @ACSD2014
* <a href="https://hal.archives-ouvertes.fr/hal-01095159">Executing Hierarchical Interactive Scores in ReactiveML</a>, par J. Arias et al. @JIM2014
* OSSIA : Open Scenario System for Interactive Applications, (FR) par T. de la Hogue et al. @JIM2014
* <a href="https://quod.lib.umich.edu/i/icmc/bbp2372.2014.277/1/--i-score-an-interactive-sequencer-for-the-intermedia-arts?page=root;size=150;view=text">i-score, an Interactive Sequencer for the Intermedia Arts</a> par P. Baltazar et al. @ICMC2014
<pre>

</pre>
#### 2012
* An Extension of Interactive Scores for Multimedia Scenarios with Temporal Relations for Micro and Macro Controls, par M. Toro-Bermudez et al. @SMC2012
<pre>

</pre>
#### 2011
* <a href="https://www.thinkmind.org/download.php?articleid=mmedia_2011_1_30_40071">Real-Time Temporal Control of Musical Processes</a>, par R.Marczak et al. @NMEDIA11
<pre>

</pre>
#### 2010
* <a href="https://hal.archives-ouvertes.fr/hal-00527154">A Model for Interactive Scores with Temporal Constraints and Conditional Branching</a>, par M. Toro-Bermudez et al. @JIM2010
* <a href="https://hal.archives-ouvertes.fr/hal-00527157">Concurrent Constraint Conditional Branching Interactive Scores</a>, par M. Toro-Bermudez et al. @SMC2010
* <a href="https://hal.archives-ouvertes.fr/hal-00516335">Virage, designing an interactive intermedia sequencer from users requirements and theoretical background</a>, par A. Allombert et al., @ICMC 2010, version longue
<pre>

</pre>
#### 2009
* <a href="https://hal.archives-ouvertes.fr/hal-00413510/">Virage : une réflexion pluridisciplinaire autour du temps dans la création numérique</a>, par P. Baltazar et al., @JIM 2009<br/>
NB : Virage est un séquenceur intermédia. On peut le considérer comme un prototype dont i-score s'est inspiré.
* <a href="https://tel.archives-ouvertes.fr/tel-00516350">Aspects temporels d'un système de partitions musicales interactives pour la composition et l'exécution</a>, thèse de doctorat d'A. Allombert, résumé
<pre>

</pre>
#### 2008
* <a href="https://hal.archives-ouvertes.fr/hal-00353619">A system for writing interaction</a>, par A. Allombert et al. @DIMEA2008
* <a href="https://hal.archives-ouvertes.fr/hal-00353601">A system of Interactive Scores based on qualitative and quantitative temporal constraints</a>, par A. Allombert et al. @Artech2008
* <a href="https://hal.archives-ouvertes.fr/hal-00353628">De Boxes à IScore : vers une écriture de l'interaction</a>, par A. Allombert et al. (en français), publié aux JIM 2008
<pre>

</pre>
#### 2007
* <a href="https://hal.archives-ouvertes.fr/hal-00307926">A system of interactive scores based on Petri nets</a>, par A. Allombert et al. @SMC07
<pre>

</pre>
#### 2006
* <a href="https://hal.archives-ouvertes.fr/hal-00307924">Concurrent Constraints Models for Interactive Scores</a>, par A. Allombert et al. @SMC06
* <a href="https://hal.archives-ouvertes.fr/hal-01106191">A Model for specifying temporal relations between interactive and static events</a>, par M. Desainte-Catherine et al. @Journal of New Music Research
<pre>

</pre>
#### 2004
* <a href="https://hal.archives-ouvertes.fr/hal-00307927">Specification of Temporal Relations Between Interactive Events</a>, par M. Desainte-Catherine et al. @SMC04
* Boxes, un logiciel pour la composition musicale combinant modèle spectral, structures hiérarchiques et constraintes, par A. Beurivé (en français)

<p>L'arbre généalogique des logiciels ossia :</p>
<p><img src="/assets/project/score-history.webp" width="768" height="570" loading="lazy" alt="Arbre généalogique des logiciels i-score et ossia, de Boxes (2000) et Iscore à Acousmoscribe, Virage et i-score 0.1 à 0.3, jusqu'à ossia score 1.0 et libossia (2016)"/></p>
