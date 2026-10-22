---
layout: page
lang: fr
title:  "À propos de libossia"

permalink: /fr/libossia.html
ref: libossia
category: site-libossia
description: "libossia est une bibliothèque C++ moderne pour OSC, OSCQuery, MIDI, etc., avec des bindings pour Max, PureData, Unity, Python, SuperCollider, entre autres."
---

libossia est un modèle objet distribué et multi-environnement, écrit en C++ moderne, pour le creative coding.

Il permet de déclarer l'architecture des fonctions d'une application de creative coding sous la forme d'un arbre de nœuds et de paramètres OSC. Ces nœuds et paramètres peuvent avoir des attributs, qui permettent de déclarer nombre de leurs propriétés : leurs valeurs, types, unités, bornes, etc.

Cette architecture en arbre OSC (appelée *device* dans la terminologie OSSIA) peut ensuite être exposée sur le réseau par plusieurs protocoles, dont certains permettent d'explorer et d'interroger entièrement cette architecture, ainsi que les propriétés et les valeurs de ses nœuds. Pour l'instant, les protocoles disponibles dans les implémentations sont : OSC simple, OSCQuery et Minuit ; d'autres font partie de libossia et seront rendus disponibles à l'avenir.

libossia propose des bindings et des implémentations pour plusieurs environnements, notamment :

<div class="logo-grid" style="margin-top: 1em; margin-bottom: 1em;">
    <a href="/fr/libossia-telecharger.html#cpp-binding"><img alt="Logo C++" src="/assets/logo/cpp.png" height="60"/></a>
    <a href="/fr/libossia-telecharger.html#c-binding" ><img alt="Logo C" src="/assets/logo/c.png" height="60"/></a>
    <a href="/fr/libossia-telecharger.html#max-binding"><img alt="Logo Max/MSP" src="/assets/logo/max.jpg" height="70"/></a>
    <a href="/fr/libossia-telecharger.html#pd-binding" ><img alt="Logo PureData" src="/assets/logo/pd.png" height="60"/></a>
    <a href="/fr/libossia-telecharger.html#unity-binding"><img alt="Logo Unity3D" src="/assets/logo/unity.png" height="60"/></a>
    <a href="/fr/libossia-telecharger.html#processing-binding"><img alt="Logo Processing" src="/assets/logo/processing.jpg" height="60"/></a>
    <a href="/fr/libossia-telecharger.html#of-binding"><img alt="Logo openFrameworks" src="/assets/logo/of.png" height="40"/></a>
    <a href="/fr/libossia-telecharger.html#supercollider-binding"><img alt="Logo SuperCollider" src="/assets/logo/supercollider-logo.png" height="60"/></a>
    <a href="/fr/libossia-telecharger.html#qt-binding"><img alt="Logo Qt / QML" src="/assets/logo/qt-logo.png" height="60"/></a>
    <a href="/fr/libossia-telecharger.html#python-binding"><img alt="Logo Python" src="/assets/logo/python-logo.png" height="60"/></a>
    <a href="/fr/libossia-telecharger.html#faust-binding"><img alt="Logo Faust" src="/assets/logo/faust.png" height="50"/></a>
</div>

## Documentation (en anglais)

* [Bibliothèque et implémentations](https://ossia.io/ossia-docs/#introduction){:target="_blank"}
* [Tutoriels](https://github.com/ossia/libossia/tree/master/docs/Tutorial){:target="_blank"}
* [Exemples](https://github.com/ossia/libossia/tree/master/examples){:target="_blank"}
* [Doxygen](https://ossia.io/libossia/html/){:target="_blank"}
* [Compilation](https://github.com/ossia/libossia/wiki/Building){:target="_blank"}
* [Style de code](https://github.com/ossia/libossia/wiki/Code-style-guide){:target="_blank"}

Le code source est hébergé sur <a href="https://github.com/ossia/libossia" target="_blank" >github.com/ossia/libossia</a>.

[Documentation de l'API](https://ossia.io/ossia-docs/#introduction){:target="_blank"}


## Licence

libossia est distribué selon les termes de la licence CeCILL-C et de la licence LGPLv3.

{% include libossia-features.html %}
