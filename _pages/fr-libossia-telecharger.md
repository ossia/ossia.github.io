---
layout: page
lang: fr
title:  "Télécharger libossia"

permalink: /fr/libossia-telecharger.html
ref: libossia-download
category: site-libossia
description: "Téléchargez libossia pour connecter votre environnement de création à ossia score et aux autres logiciels compatibles OSCQuery."
---
{%- assign release = "https://github.com/ossia/libossia/releases/download/v" | append: site.libossia_version -%}
{%- assign release_page = "https://github.com/ossia/libossia/releases/tag/v" | append: site.libossia_version -%}
{%- assign released_day = site.libossia_released_date | date: "%-d" -%}
{%- assign released_month = site.libossia_released_date | date: "%-m" | minus: 1 -%}
{%- assign released_year = site.libossia_released_date | date: "%Y" -%}

<b>libossia</b> est disponible pour de nombreux environnements et plateformes :

<div class="logo-grid" style="margin-top: 1em; margin-bottom: 1em;">
    <a href="#cpp-binding"><img alt="C++" src="/assets/logo/cpp.png" height="60"/></a>
    <a href="#c-binding" ><img alt="C" src="/assets/logo/c.png" height="60"/></a>
    <a href="#max-binding"><img alt="Max/MSP" src="/assets/logo/max.jpg" height="70"/></a>
    <a href="#pd-binding" ><img alt="PureData" src="/assets/logo/pd.png" height="60"/></a>
    <a href="#unity-binding"><img alt="Unity" src="/assets/logo/unity.png" height="60"/></a>
    <a href="#qt-binding"><img alt="Qt / QML" src="/assets/logo/qt-logo.png" height="60"/></a>
    <a href="#python-binding"><img alt="Python" src="/assets/logo/python-logo.png" height="60"/></a>
    <a href="#supercollider-binding"><img alt="SuperCollider" src="/assets/logo/supercollider-logo.png" height="60"/></a>
    <a href="#of-binding"><img alt="openFrameworks" src="/assets/logo/of.png" height="40"/></a>
    <a href="#processing-binding"><img alt="Java et Processing" src="/assets/logo/processing.jpg" height="60"/></a>
    <a href="#faust-binding"><img alt="Faust" src="/assets/logo/faust.png" height="50"/></a>
</div>

<p>
La version actuelle est <b>libossia {{ site.libossia_version }}</b>, sortie le {{ released_day }} {{ site.data.i18n.fr.months[released_month] }} {{ released_year }}.
Voir les <a href="{{ release_page }}">notes de version</a> (en anglais), ou parcourir
<a href="https://github.com/ossia/libossia/releases">toutes les versions de libossia</a> sur GitHub.
Chaque téléchargement ci-dessous est une archive unique qui contient les builds pour tous les systèmes d'exploitation pris en charge.
</p>

<div>
  <h2 class="binding-title" id="cpp-binding"><img alt="" src="/assets/logo/cpp.png" height="60"/>C++</h2>
  <div class="features-list">
    Le paquet C++ contient libossia sous forme de bibliothèque partagée, avec une API C++ simple et stable (<code>ossia-cpp98.hpp</code>)
    et un paquet CMake, pour intégrer la prise en charge d'OSC, d'OSCQuery et du MIDI à n'importe quelle application C++.
    Il est compilé pour Windows (x86_64), macOS (Apple Silicon) et Linux (x86_64).
    <br/>
    Pour l'API C++ native complète, ou pour d'autres plateformes (iOS, Android, WebAssembly, Linux ARM...),
    il faut compiler libossia depuis les sources, par exemple comme sous-projet CMake.
  </div><br/>
  <div class="features-list">
    <ul>
    <li><a href="{{ release }}/ossia-cpp-{{ site.libossia_version }}.zip">Télécharger le paquet C++ (Windows, macOS, Linux)</a></li>
    <li><a href="https://github.com/ossia/libossia">Code source</a></li>
    <li><a href="https://github.com/ossia/libossia/wiki/Building">Instructions de compilation</a></li>
    <li><a href="https://ossia.io/ossia-docs/?cpp--14#introduction">Documentation de l'API</a></li>
    <li><a href="https://github.com/ossia/libossia/tree/master/examples">Exemples</a></li>
    <li><a href="https://ossia.io/libossia/html/">Référence Doxygen</a></li>
    </ul>
  </div>

  <h2 class="binding-title" id="c-binding"><img alt="" src="/assets/logo/c.png" height="60"/>C</h2>
  <div class="features-list">
    libossia fournit un en-tête C89 propre qui couvre les fonctionnalités les plus importantes.
    Il fait partie de libossia : pour l'utiliser, il faut compiler libossia depuis les sources.
  </div><br/>
  <div>
    <ul>
    <li><a href="https://github.com/ossia/libossia/tree/master/src/ossia-c">Code source</a></li>
    <li><a href="https://ossia.io/ossia-docs/?c#introduction">Documentation de l'API</a></li>
    <li><a href="https://ossia.io/libossia/html/group___c_a_p_i.html">Référence Doxygen</a></li>
    </ul>
  </div>

  <h2 class="binding-title" id="max-binding"><img alt="" src="/assets/logo/max.jpg" height="70"/>Max/MSP</h2>
  <div class="features-list">
    ossia-max est un package Max : il suffit de le décompresser dans le dossier <code>Documents/Max 9/Packages</code> (ou celui de sa version de Max).
    Il fonctionne sous macOS (Intel et Apple Silicon) et Windows (x86_64).
  </div><br/>
  <div>
    <ul>
    <li><a href="{{ release }}/ossia-max-{{ site.libossia_version }}.zip">Télécharger le package Max (macOS, Windows)</a></li>
    <li><a href="https://github.com/ossia/libossia/tree/master/src/ossia-max">Code source</a></li>
    <li><a href="https://ossia.io/ossia-docs/?plaintext--max#introduction">Documentation de l'API</a></li>
    </ul>
  </div>

  <h2 class="binding-title" id="pd-binding"><img alt="" src="/assets/logo/pd.png" height="60" />PureData</h2>
  <div class="features-list">
    ossia-pd est un ensemble d'externals PureData.
    La méthode d'installation recommandée passe par PureData lui-même, avec <i>Help → Find externals</i> (en cherchant "ossia") ; sous macOS, c'est cette méthode qu'il faut utiliser.
    L'archive ci-dessous est pour Windows (x86_64) et Linux (x86_64).
  </div><br/>
  <div>
    <ul>
    <li><a href="{{ release }}/ossia-pd-{{ site.libossia_version }}.zip">Télécharger les externals PureData (Windows, Linux)</a></li>
    <li><a href="https://github.com/ossia/libossia/tree/master/src/ossia-pd">Code source</a></li>
    <li><a href="https://ossia.io/ossia-docs/?plaintext--pd#introduction">Documentation de l'API</a></li>
    </ul>
  </div>

  <h2 class="binding-title" id="unity-binding"><img alt="" src="/assets/logo/unity.png" height="60"/>C#, Unity</h2>
  <div class="features-list">
    libossia fournit un binding C# avec une couche d'intégration pour Unity, distribué sous forme de package Unity.
    L'archive contient un package par plateforme : Windows (x86_64), macOS (Intel et Apple Silicon) et Linux (x86_64).
    Les scripts C# ne dépendent pas de Unity et peuvent être utilisés depuis n'importe quel code C#.
  </div><br/>
  <div>
    <ul>
    <li><a href="{{ release }}/ossia-unity-{{ site.libossia_version }}.zip">Télécharger le package Unity (Windows, macOS, Linux)</a></li>
    <li><a href="https://github.com/ossia/libossia/tree/master/src/ossia-unity3d">Code source</a></li>
    <li><a href="https://ossia.io/ossia-docs/?csharp#introduction">Documentation de l'API</a></li>
    </ul>
  </div>

  <h2 class="binding-title" id="qt-binding"><img alt="" src="/assets/logo/qt-logo.png" height="60"/>Qt / QML</h2>
  <div class="features-list">
    libossia s'intègre au langage de balisage QML, pour construire facilement des interfaces utilisateur performantes
    contrôlables par OSC et OSCQuery.
    Le module QML est compilé pour macOS (Apple Silicon) et Linux (x86_64) ; sur les autres plateformes, il faut le compiler depuis les sources.
  </div><br/>
  <div>
    <ul>
    <li><a href="{{ release }}/ossia-qml-{{ site.libossia_version }}.zip">Télécharger le module QML (macOS, Linux)</a></li>
    <li><a href="https://github.com/ossia/libossia/tree/master/src/ossia-qt">Code source</a></li>
    <li><a href="https://ossia.io/ossia-docs/?qml#introduction">Documentation de l'API</a></li>
    </ul>
  </div>

  <h2 class="binding-title" id="python-binding"><img alt="" src="/assets/logo/python-logo.png" height="60"/>Python</h2>
  <div class="features-list">
    pyossia permet de créer et de contrôler des appareils OSC, OSCQuery et MIDI depuis Python.
    Il peut être compilé depuis les sources de libossia ; une version plus ancienne est aussi disponible sur PyPI.
  </div><br/>
  <div>
    <ul>
    <li><a href="https://github.com/ossia/libossia/tree/master/src/ossia-python">Code source</a></li>
    <li><a href="https://pypi.org/project/pyossia/">pyossia sur PyPI</a></li>
    <li><a href="https://ossia.io/ossia-docs/?python#introduction">Documentation de l'API</a></li>
    </ul>
  </div>

  <h2 class="binding-title" id="supercollider-binding"><img alt="" src="/assets/logo/supercollider-logo.png" height="60"/>SuperCollider</h2>
  <div class="features-list">
    ossia-sclang est un quark SuperCollider qui expose des paramètres SuperCollider par OSC et OSCQuery.
  </div><br/>
  <div>
    <ul>
    <li><a href="https://github.com/ossia/ossia-sclang">Code source et installation</a></li>
    <li><a href="https://ossia.io/ossia-docs/?javascript#creating-parameters">Documentation de l'API</a></li>
    </ul>
  </div>

  <h2 class="binding-title" id="of-binding" ><img alt="" src="/assets/logo/of.png" height="40"/>openFrameworks</h2>
  <div class="features-list">
    ofxOscQuery est un addon openFrameworks pour exposer facilement un arbre d'ofParameters par OSCQuery.
  </div><br/>
  <div>
    <ul>
    <li><a href="https://github.com/bltzr/ofxOscQuery/releases">Téléchargements (Windows, macOS, Linux)</a></li>
    <li><a href="https://github.com/bltzr/ofxOscQuery">Code source et exemples</a></li>
    </ul>
  </div>

  <h2 class="binding-title" id="processing-binding"><img alt="" src="/assets/logo/processing.jpg" height="60"/>Java, Kotlin, Processing</h2>
  <div class="features-list">
    libossia fournit des bindings pour la JVM, qui permettent de l'utiliser depuis Java, Kotlin, Processing ou OpenRNDR.
    Ils ne font pas partie de la version binaire actuelle : il faut les compiler depuis les sources de libossia.
  </div><br/>
  <div>
    <ul>
    <li><a href="https://github.com/ossia/libossia/tree/master/src/ossia-java">Code source</a></li>
    <li><a href="https://ossia.io/ossia-docs/?java#introduction">Documentation de l'API</a></li>
    </ul>
  </div>

  <h2 class="binding-title" id="faust-binding"><img alt="" src="/assets/logo/faust.png" height="50"/>Faust</h2>
  <div class="features-list">
    libossia fournit un fichier d'architecture Faust qui expose les contrôles d'un programme Faust par OSCQuery.
  </div><br/>
  <div>
    <ul>
    <li><a href="https://github.com/ossia/libossia/tree/master/src/ossia-faust">Fichier d'architecture Faust</a></li>
    </ul>
  </div>
</div>
