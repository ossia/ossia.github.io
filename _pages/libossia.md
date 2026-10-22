---
layout: page
title:  "About libossia"

permalink: /site-libossia/about.html
ref: libossia
category: site-libossia
description: "libossia is a modern C++ library for OSC, OSCQuery, MIDI and more, with bindings for Max, PureData, Unity, Python, SuperCollider and others."
---

libossia is a modern C++, cross-environment distributed object model for creative coding.

It allows to declare the architecture of your creative coding application’s functions as a tree of OSC nodes and parameters. These nodes/parameters can have attributes, which allow to declare many of their properties, such as their values, types, units, ranges, etc.

This OSC tree-based architecture (coined “device” in the OSSIA terminology) can then be exposed over the network under several protocols, some of which allow this architecture, and the properties and values of its nodes, to be fully explored and queried. For now, protocols available in the implemenations are: plain OSC, OSCquery, and Minuit – more are part of libossia and will be made available in the future.

libossia offers bindings and implementations for several environments such as:

<div class="logo-grid" style="margin-top: 1em; margin-bottom: 1em;">
    <a href="download.html#cpp-binding"><img alt="C++ logo" src="/assets/logo/cpp.png" height="60"/></a>
    <a href="download.html#c-binding" ><img alt="C logo" src="/assets/logo/c.png" height="60"/></a>
    <a href="download.html#max-binding"><img alt="Max/MSP logo" src="/assets/logo/max.jpg" height="70"/></a>
    <a href="download.html#pd-binding" ><img alt="PureData logo" src="/assets/logo/pd.png" height="60"/></a>
    <a href="download.html#unity-binding"><img alt="Unity3D logo" src="/assets/logo/unity.png" height="60"/></a>
    <a href="download.html#processing-binding"><img alt="Processing logo" src="/assets/logo/processing.jpg" height="60"/></a>
    <a href="download.html#of-binding"><img alt="openFrameworks logo" src="/assets/logo/of.png" height="40"/></a>
    <a href="download.html#supercollider-binding"><img alt="SuperCollider logo" src="/assets/logo/supercollider-logo.png" height="60"/></a>
    <a href="download.html#qt-binding"><img alt="Qt / QML logo" src="/assets/logo/qt-logo.png" height="60"/></a>
    <a href="download.html#python-binding"><img alt="Python logo" src="/assets/logo/python-logo.png" height="60"/></a>
    <a href="download.html#faust-binding"><img alt="Faust logo" src="/assets/logo/faust.png" height="50"/></a>
</div>

## Documentation

* [Lib and Implementations](https://ossia.io/ossia-docs/#introduction){:target="_blank"}
* [Tutorials](https://github.com/ossia/libossia/tree/master/docs/Tutorial){:target="_blank"}
* [Examples](https://github.com/ossia/libossia/tree/master/examples){:target="_blank"}
* [Doxygen](https://ossia.io/libossia/html/){:target="_blank"}
* [Building](https://github.com/ossia/libossia/wiki/Building){:target="_blank"}
* [Code style](https://github.com/ossia/libossia/wiki/Code-style-guide){:target="_blank"}

The source code is hosted on <a href="https://github.com/ossia/libossia" target="_blank" >github.com/ossia/libossia</a>.

[API Documentation](https://ossia.io/ossia-docs/#introduction){:target="_blank"}


## License

libossia is distributed under the terms of the CeCILL-C license and of the LGPLv3 license.

{% include libossia-features.html %}
