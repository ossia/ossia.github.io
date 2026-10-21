---
layout: about-page
title:  "Project"

permalink: /project.html
category: site-about
description: "History of the ossia project: from i-score research at LaBRI and SCRIME to ossia score, publications, partners and funding."
---

The software developed by ossia partly relies on specifications produced during the *i-score* research project, which has been led by LaBRI (with several academic, industrial and artistic partners) since the late 1990s, in order to devise new models and applications for designing and executing interactive scores, first for musical composition with *Boxes*, and *IScore*.

Intermedia and multimedia support has then been added starting from 2008 with the *Virage* research project, and then with the *i-score* sequencer.

Following the [ANR OSSIA research project](https://anr.fr/Projet-ANR-12-CORD-0024), which took place between 2012 and 2015, a new version of the sequencer has been implemented by Jean-Michaël Celerier, as part of his doctoral thesis. This endeavour has been joined by several artists and developers, which established itself as the *ossia* collective. The sequencer has been named *ossia score*, and its underlying library *libossia*. They are both available on <a href="https://github.com/ossia">GitHub</a>, and documented on this very website.

<!--- Contribute !-->
<h2 class="feature-title">Contribute</h2>

The [source code](https://github.com/ossia/score){:target="_blank"} for score is hosted on GitHub.
It is based on [libossia](https://github.com/ossia/libossia){:target="_blank"}.

<img style="float: right; width: 40%" src="/assets/contribution_oscar.png" alt="Oscar, the cute ossia mascot" />
* Contributing to the user library
* Extending the scripting API
* Implementing new protocols
* Implementing new processes and effects

The score project is open to contributions.
We need help on :

* Contribution of example scores
* Creation of namespaces for your favorite application
* Creating tutorials content
* Creating skins
* Fixing TODO’s in the code
* (soon) Translations
* Linux distribution packaging

Most of the discussion regarding score features occurs on the [issue tracker](https://github.com/ossia/score/issues).
If you wish to help, you can join the [forum](https://forum.ossia.io), the [Discord channel](https://discord.gg/8Hzm4UduaS) or the [chat on Gitter](https://gitter.im/ossia/score).
We can help you into making your first contributions to the project.

Here is a video explaining how to contribute to the code of ossia score:

<div class="videoWrapper">
    <button type="button" class="video-facade" aria-label="Play the video: Project (loads YouTube)"><span class="video-facade-title">Project</span><span class="video-facade-note">Play · loads YouTube</span></button><template class="video-facade-embed"><iframe title="Video: Project" loading="lazy" src="https://www.youtube-nocookie.com/embed/LSifHFbuky0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></template>
</div>

<!--- Roadmap !-->
<h2 class="feature-title">Roadmap</h2>
<br/>
<p style="text-align: center">
<a href="/score/download.html" class="page-button"  target="_blank" >Current stable version is {{site.score_version}}</a>
</p>

<h2>Future plans</h2>

* Networked edition and execution (done in 3.0.11!).
* Support for recording audio, midi directly in the score. Improvements for OSC recording.
* Parametric processes. How to have parameters and variables used within the scope of a given box and changed easily across different instances of that box.
* Mixer panel : making mixing from within score more straightforward.
* WebAssembly support : experiments have been made a few years ago – most of the score engine and user interface builds for WebAssembly, but not every process works yet.
* Support for geometry transformations and compute shaders (done in 3.2.0!).
* Better support for sequences.
* Support for MIDI 2.0.
* Spout, Syphon support (done in 3.0.4!).

<h2><a href="https://github.com/ossia/score/releases/tag/v3.0.0"  target="_blank">ossia score v3 (released jan. 2022)</a></h2>

ossia score 3 fulfills the long-term goal of being a proper multi-media platform, by providing integrated video abilities, in sync with the rest of the score, as well as musical abilities with support for tempo, musical metrics and quantization. Finally, the core engine has been extended to allow cycles in scenarios with a new kind of connection. This allows to implement state-machine-like behaviours in scenarios.

* [Support for reading videos](https://x.com/jcelerie/status/1236809800727617537){:target="_blank"}, right now H.264 and HAP. Implementation uses Vulkan, Metal, D3D or OpenGL depending on the platform for maximal performance. Multiple viewports are supported. Spout output is supported.
* Support for applying shader-based filters on these videos. Interactive Shader Format is supported.
* Support for JSFX plug-ins, VST3.
* Support for tempo, musical bars, etc. It is now possible to sync the triggering of a timenode to the beginning of the following bar for instance. Polyrythmy is supported : each interval can have its own tempo and metrics timeline.
* [Support for cycles and loops](https://x.com/jcelerie/status/1245484342274646017){:target="_blank"} in the main scenario.
* [Preset mechanism](https://x.com/jcelerie/status/1241774333535666176){:target="_blank"} for built-in processes.
* Built-in looping for individual processes, to easily loop audio files.
* Intervals can now be viewed in nodal mode to easily interconnect their processes.
* Many small and useful new processes – signal visualization, pattern sequencer…
* [JIT compilation support](https://x.com/jcelerie/status/1307792769277190147){:target="_blank"}.  This will be an experimental feature for the 3.0 release cycle, allowing you to write and run C++ extensions directly from within the software.

<h2><a href="https://github.com/ossia/score/releases/tag/v2.5.2"  target="_blank">ossia score v2.5</a></h2>

This version is a big update to 2.0, adding two new processes :

* Control surface : allows to have UIs to control remote parameters in the score
* Nodal : allows to layout processes in a graph interface, like many other famous visual programming languages. Temporal processes can be nested in nodal processes.
* RemoteControl : control your score through a simple WebSockets API.
* Tons of UI work

<h2><a href="https://github.com/ossia/score/releases/tag/v2.0.0-a1"  target="_blank">ossia score v2.0</a></h2>

The 2.0 version is a paradigm shift : it introduces data and audio processing in score. The name was changed to reflect the OSSIA project legacy. It is now possible to play sounds, apply sound effects, among many other changes. The main highlights are :

* Execution is now based on synchronous audio processing APIs
* Playback of sounds
* Support for LV2, VST effects and instruments
* Support for Faust effects. The Faust compiler is integrated directly to score.
* Support for many new protocols : OSCQuery, ArtNet…
* Many new processes: LFO, step sequencer, math expressions, etc
* Pattern matching
* Drag’n’drop in a lot of places
* Creation of a library panel and a [user library](https://github.com/ossia/score-user-library){:target="_blank"}
* A super cute new mascot, [Oscar](https://camo.githubusercontent.com/2d6bd98dd127261a5306d0d9c73acf28c63795f7/68747470733a2f2f692e696d6775722e636f6d2f327842574967392e706e67){:target="_blank"} !

The first release for the 2.0 version was released in April 2018.

<h2><a href="https://github.com/ossia/score/releases/tag/v1.0.0-b40"  target="_blank">i-score v1.0 </a></h2>

The 1.0 version is the concretization of the last year of effort of the OSSIA project.
Thanks to a from-scratch rewrite, the software has been highly modularized, and now offers the following features :

* Undo-redo
* Restore on crash
* Various plug-in APIs
* Loops, mappings, JavaScript processes
* Arbitrary hierarchy
* Complete conditional branching and triggering
* A new dark blue theme

The 1.0 version was released in 2016.

<h2>i-score v0.3</h2>

Thanks again to the OSSIA project, a research effort will be carried on from early-2014 to 2015 in order to implement logic scenarios in i-score. This will include:

* Support for looping boxes and (sub-)scenarios
* Better graphic support for the conditional branching
* Multi-user support
* Framework for the future support of “plug-in” boxes:
    * Mapping boxes (for several one-to-one mappings between remote parameters)
    * Generic boxes and SDK for third-party boxes (e.g. audio boxes using JamomaAudioGraph, video/openGL boxes using QuartzComposer, etc…)


<h2>i-score v0.2</h2>

Thanks to the OSSIA research project, some services of i-score have been improved by implementing the Jamoma Modular framework into libIscore, and a dedicated framework for Interactive scores management

This allows some new features and improvements :

* Better devices/namespace support, including:
    * better devices configuration and automatic discovery
    * devices’ parameters’ attributes support (including range, type, etc….)
    * better curve management
    * recording of performance actions as curves
    * declaration and management of i-score’s boxes parameters (such as speed, trigger points….)
* Initial support of the conditional branching

<h2>v0.1</h2>

Initial version, including (as of 0.1-alpha1 – December 2012):

* Linear edition (no loops, no branching)
* One static Minuit device only (MinuitDevice1)
* Simple curves (no range editing)
* Nested scenarios (hierarchy) support
* Simple playing (unfinished GOTO function)

Several incremental alpha versions, have been released along the way, including:

* Plain OSC support
* Minuit devices configuration
* Several interface improvements

<!--
For more details on *i-score*'s family tree and research process, an inheritance graph is available at the end of this page.
-->
<h2 class="feature-title">Scientific Research</h2>
## Talks
Talks about the project are regularly given in conferences and meetups. Here is a list:
* [Talks given by Jean-Michaël](https://jcelerier.name/page/talks)

## Peer-reviewed publications, Ph. D. dissertations
#### 2023
* A Notation System for Distributed Media Art, Jean-Michaël Celerier, Akané Levy, @TENOR2023
* Proof of Concept of a Generic Toolkit for Sonification: the Sonification Cell in ossia score, Maxime Poret, Jean-Michaël Celerier, Myriam Desainte-Catherine, Catherine Semal, @ICAD2023

#### 2022
* [Networked Performances with Ossia Score (demo)](https://zenodo.org/record/6800771), Jean-Michaël Celerier, Pia Baltazar, @SMC2022. Presentation [video here](https://youtu.be/DuXSpb2CbWE?t=3206)
* [Rage Against The Glue: Beyond Run-Time Media Frameworks with Modern C++](https://cnrs.hal.science/hal-04090584/), Jean-Michaël Celerier, @ICMC2022
* [ossia score 3](https://www.tenor-conference.org/proceedings/2022/TENOR_2022_paper_29.pdf), Jean-Michaël Celerier, Pia Baltazar, Myriam Desainte-Catherine, @TENOR2022

#### 2021
* [Patches in a timeline with ossia score](https://periodicos.unespar.edu.br/index.php/vortex/article/view/4545), Jean-Michaël Celerier, Vortex Music Journal

#### 2020
* [Architecture logicielle du projet ossia](https://revues.mshparisnord.fr/rfim/index.php?id=574), Jean-Michaël Celerier, Revue Française d'Informatique Musicale

#### 2019
* [A Cross-Platform Development Toolchain For JIT-Compilation in Multimedia Software](https://lac.linuxaudio.org/2019/doc/celerier.pdf), Jean-Michaël Celerier, @LAC2019
  
#### 2018

* <a href="https://tel.archives-ouvertes.fr/tel-01947309/document">Authoring interactive media: a logical & temporal approach</a>, Ph. D. thesis, Jean-Michaël Celerier
* <a href="https://data.jssa.info/paper/2018v10n01/4.Celerier.pdf">Leveraging domain-specific languages in an interactive score system</a>, By JM. Celerier, @JSSA regular meeting
* i-Berlioz: Interactive Computer-Aided Orchestration with Temporal Control, By E. Miranda et al., @ICNMC2018
* Generating Orchestral Sequences with Timbral Descriptors, By A. Antoine et al., @TIMBRE2018
<pre>

</pre>
#### 2017
* <a href="https://hal.archives-ouvertes.fr/hal-01620985/document">Extending dataflows with temporal graphs</a>, By JM. Celerier et al. @ICMC2017
* Exécution répartie de scénarios interactifs, By JM. Celerier et al. @JIM2017<br/>
<pre>

</pre>
#### 2016
* <a href="https://hal.archives-ouvertes.fr/hal-01399925">Authoring and automatic verification of interactive multimedia scores</a>, By J. Arias et al. In Journal of New Music Research.
* <a href="https://hal.inria.fr/hal-01364702">Graphical Temporal Structured Programming for Interactive Music</a>, By JM. Celerier et al. @ICMC2016
* <a href="https://hal.archives-ouvertes.fr/hal-01360797">Rethinking the audio workstation: tree-based sequencing with i-score and the LibAudioStream</a>, By JM. Celerier et al. @SMC2016
* <a href="https://hal.archives-ouvertes.fr/hal-01336825">Automatic Construction of Interactive Machine Improvisation Scenarios from Audio Recordings</a>, By J. Arias et al. @MUME2016
* <a href="https://hal.archives-ouvertes.fr/hal-01300346">Présentation d'un formalisme graphique pour l'écriture de scénarios interactifs</a>, By T. de la Hogue et al. @JIM2016
* <a href="https://hal.archives-ouvertes.fr/hal-01300348">Outils d'écriture spatiale pour les partitions interactives</a>, by JM. Celerier et al. @JIM2016
<pre>

</pre>
#### 2015
* <a href="https://www.theses.fr/2015BORD0283">Sémantique Formelle et Vérification Automatique de Scénarios Hiérarchiques Multimédia avec des Choix Interactifs</a>, Ph. D thesis, J. Arias.
* <a href="https://hal.archives-ouvertes.fr/hal-01245350">Le séquenceur interactif multimédia i-score</a>, by J. Arias et al. @JDEV2015
* <a href="https://hal.archives-ouvertes.fr/hal-01129394">Foundations for Reliable and Flexible Interactive Multimedia Scores</a>, by J. Arias et al. @MCM2015
* <a href="https://hal.archives-ouvertes.fr/hal-01129316">Exploiting Parallelism in FPGAs for the Real-Time Interpretation of Interactive Multimedia Score</a>, by J. Arias et al. @JIM2015
* <a href="https://ieeexplore.ieee.org/document/7352434/">A Framework for Composition, Verification and Real-Time Performance of Multimedia Interactive Scenarios</a>, by J. Arias et al. @ACSD2015
* <a href="https://hal.archives-ouvertes.fr/hal-01245957">OSSIA : Towards a unified interface for scoring time and interaction</a>, by JM. Celerier et al. @TENOR2015
<pre>

</pre>
#### 2014
* <a href="https://ieeexplore.ieee.org/document/7016342">Modelling Data Processing for Interactive Scores Using Coloured Petri Nets</a>, by J. Arias et al. @ACSD2014
* <a href="https://hal.archives-ouvertes.fr/hal-01095159">Executing Hierarchical Interactive Scores in ReactiveML</a>, by J. Arias et al. @JIM2014
* OSSIA : Open Scenario System for Interactive Applications, (FR) by T. de la Hogue et al. @JIM2014
* <a href="https://quod.lib.umich.edu/i/icmc/bbp2372.2014.277/1/--i-score-an-interactive-sequencer-for-the-intermedia-arts?page=root;size=150;view=text">i-score, an Interactive Sequencer for the Intermedia Arts</a> by P. Baltazar et al. @ICMC2014
<pre>

</pre>
#### 2012
* An Extension of Interactive Scores for Multimedia Scenarios with Temporal Relations for Micro and Macro Controls, by M. Toro-Bermudez et al. @SMC2012
<pre>

</pre>
#### 2011
* <a href="https://www.thinkmind.org/download.php?articleid=mmedia_2011_1_30_40071">Real-Time Temporal Control of Musical Processes</a>, by R.Marczak et al. @NMEDIA11
<pre>

</pre>
#### 2010
* <a href="https://hal.archives-ouvertes.fr/hal-00527154">A Model for Interactive Scores with Temporal Constraints and Conditional Branching</a>, by M. Toro-Bermudez et al. @JIM2010
* <a href="https://hal.archives-ouvertes.fr/hal-00527157">Concurrent Constraint Conditional Branching Interactive Scores</a>, by M. Toro-Bermudez et al. @SMC2010
* <a href="https://hal.archives-ouvertes.fr/hal-00516335">Virage, designing an interactive intermedia sequencer from users requirements and theoretical background</a>, by A. Allombert et al., @ICMC 2010 &#8211; long version
<pre>

</pre>
#### 2009
* <a href="https://hal.archives-ouvertes.fr/hal-00413510/">Virage : une réflexion pluridisciplinaire autour du temps dans la création numérique</a>, by P. Baltazar et al., @JIM 2009<br/>
NB : Virage is a intermedia sequencer. It can be considered as a prototype from which i-score has been inspired.
* <a href="https://tel.archives-ouvertes.fr/tel-00516350">Aspects temporels d'un système de partitions musicales interactives pour la composition et l'exécution</a>, by A. Allombert PhD. Thesis &#8211; Abstract
<pre>

</pre>
#### 2008
* <a href="https://hal.archives-ouvertes.fr/hal-00353619">A system for writing interaction</a>, by A. Allombert et al. @DIMEA2008
* <a href="https://hal.archives-ouvertes.fr/hal-00353601">A system of Interactive Scores based on qualitative and quantitative temporal constraints</a>, by A. Allombert et al. @Artech2008
* <a href="https://hal.archives-ouvertes.fr/hal-00353628">De Boxes à IScore : vers une écriture de l'interaction</a>, by A. Allombert et al. (in French), published at JIM 2008
<pre>

</pre>
#### 2007
* <a href="https://hal.archives-ouvertes.fr/hal-00307926">A system of interactive scores based on Petri nets</a>, by A. Allombert et al. @SMC07
<pre>

</pre>
#### 2006
* <a href="https://hal.archives-ouvertes.fr/hal-00307924">Concurrent Constraints Models for Interactive Scores</a>, by A. Allombert et al. @SMC06
* <a href="https://hal.archives-ouvertes.fr/hal-01106191">A Model for specifying temporal relations between interactive and static events</a>, by M. Desainte-Catherine et al. @Journal of New Music Research
<pre>

</pre>
#### 2004
* <a href="https://hal.archives-ouvertes.fr/hal-00307927">Specification of Temporal Relations Between Interactive Events</a>, by M. Desainte-Catherine et al. @SMC04
* Boxes, un logiciel pour la composition musicale combinant modèle spectral, structures hiérarchiques et constraintes, by A. Beurivé (in French)

<p>The ossia software family tree:</p>
<p><img src="/assets/project/score-history.webp" width="768" height="570" loading="lazy" alt="Family tree of the i-score and ossia software, from Boxes (2000) and Iscore through Acousmoscribe, Virage and i-score 0.1 to 0.3, up to ossia score 1.0 and libossia (2016)"/></p>
