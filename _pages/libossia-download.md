---
layout: page
title:  "Download libossia"

permalink: /site-libossia/download.html
category: site-libossia
description: "Download libossia, to connect your creative environment to ossia score and other OSCQuery-compliant software."
---
{%- assign release = "https://github.com/ossia/libossia/releases/download/v" | append: site.libossia_version -%}
{%- assign release_page = "https://github.com/ossia/libossia/releases/tag/v" | append: site.libossia_version -%}

<b>libossia</b> is available for many platforms and environments:

<div class="logo-grid" style="margin-top: 1em; margin-bottom: 1em;">
    <a href="#cpp-binding"><img alt="C++" src="/assets/logo/cpp.png" height="60" width="auto"/></a>
    <a href="#c-binding" ><img alt="C" src="/assets/logo/c.png" height="60" width="auto"/></a>
    <a href="#max-binding"><img alt="Max/MSP" src="/assets/logo/max.jpg" height="70" width="auto"/></a>
    <a href="#pd-binding" ><img alt="PureData" src="/assets/logo/pd.png" height="60" width="auto"/></a>
    <a href="#unity-binding"><img alt="Unity" src="/assets/logo/unity.png" height="60" width="auto"/></a>
    <a href="#qt-binding"><img alt="Qt / QML" src="/assets/logo/qt-logo.png" height="60" width="auto"/></a>
    <a href="#python-binding"><img alt="Python" src="/assets/logo/python-logo.png" height="60" width="auto"/></a>
    <a href="#supercollider-binding"><img alt="SuperCollider" src="/assets/logo/supercollider-logo.png" height="60" width="auto"/></a>
    <a href="#of-binding"><img alt="openFrameworks" src="/assets/logo/of.png" height="40" width="auto"/></a>
    <a href="#processing-binding"><img alt="Java and Processing" src="/assets/logo/processing.jpg" height="60" width="auto"/></a>
    <a href="#faust-binding"><img alt="Faust" src="/assets/logo/faust.png" height="50" width="auto"/></a>
</div>

<p>
The current release is <b>libossia {{ site.libossia_version }}</b>, released on {{ site.libossia_released_date }}.
See the <a href="{{ release_page }}">release notes</a>, or browse
<a href="https://github.com/ossia/libossia/releases">all libossia releases</a> on GitHub.
Each download below is a single archive containing the builds for every supported operating system.
</p>

<div>
  <h2 class="binding-title" id="cpp-binding"><img alt="" src="/assets/logo/cpp.png" height="60" width="auto"/>C++</h2>
  <div class="features-list">
    The C++ package contains libossia as a shared library with a simple, stable C++ API (<code>ossia-cpp98.hpp</code>)
    and a CMake package, to integrate OSC, OSCQuery and MIDI support into any C++ application.
    It is built for Windows (x86_64), macOS (Apple Silicon) and Linux (x86_64).
    <br/>
    For the complete native C++ API, or for other platforms (iOS, Android, WebAssembly, ARM Linux...),
    build libossia from source, for instance as a CMake subproject.
  </div><br/>
  <div class="features-list">
    <ul>
    <li><a href="{{ release }}/ossia-cpp-{{ site.libossia_version }}.zip">Download the C++ package (Windows, macOS, Linux)</a></li><br/>
    <li><a href="https://github.com/ossia/libossia">Source code</a></li>
    <li><a href="https://github.com/ossia/libossia/wiki/Building">Build instructions</a></li>
    <li><a href="https://ossia.io/ossia-docs/?cpp--14#introduction">API documentation</a></li>
    <li><a href="https://github.com/ossia/libossia/tree/master/examples">Examples</a></li>
    <li><a href="https://ossia.io/libossia/html/">Doxygen reference</a></li>
    </ul>
  </div>

  <h2 class="binding-title" id="c-binding"><img alt="" src="/assets/logo/c.png" height="60" width="auto"/>C</h2>
  <div class="features-list">
    libossia provides a clean C89 header which wraps the most important functionality.
    It is part of libossia itself: build libossia from source to use it.
  </div><br/>
  <div>
    <ul>
    <li><a href="https://github.com/ossia/libossia/tree/master/src/ossia-c">Source code</a></li>
    <li><a href="https://ossia.io/ossia-docs/?c#introduction">API documentation</a></li>
    <li><a href="https://ossia.io/libossia/html/group___c_a_p_i.html">Doxygen reference</a></li>
    </ul>
  </div>

  <h2 class="binding-title" id="max-binding"><img alt="" src="/assets/logo/max.jpg" height="70" width="auto"/>Max/MSP</h2>
  <div class="features-list">
    ossia-max is a Max package: unzip it into your <code>Documents/Max 9/Packages</code> folder (or the one of your Max version).
    It works on macOS (Intel and Apple Silicon) and Windows (x86_64).
  </div><br/>
  <div>
    <ul>
    <li><a href="{{ release }}/ossia-max-{{ site.libossia_version }}.zip">Download the Max package (macOS, Windows)</a></li><br/>
    <li><a href="https://github.com/ossia/libossia/tree/master/src/ossia-max">Source code</a></li>
    <li><a href="https://ossia.io/ossia-docs/?plaintext--max#introduction">API documentation</a></li>
    </ul>
  </div>

  <h2 class="binding-title" id="pd-binding"><img alt="" src="/assets/logo/pd.png" height="60" width="auto" />PureData</h2>
  <div class="features-list">
    ossia-pd is a set of PureData externals.
    The recommended way to install it is from PureData itself, with <i>Help → Find externals</i> (search for "ossia"); on macOS, use this method.
    The archive below is for Windows (x86_64) and Linux (x86_64).
  </div><br/>
  <div>
    <ul>
    <li><a href="{{ release }}/ossia-pd-{{ site.libossia_version }}.zip">Download the PureData externals (Windows, Linux)</a></li><br/>
    <li><a href="https://github.com/ossia/libossia/tree/master/src/ossia-pd">Source code</a></li>
    <li><a href="https://ossia.io/ossia-docs/?plaintext--pd#introduction">API documentation</a></li>
    </ul>
  </div>

  <h2 class="binding-title" id="unity-binding"><img alt="" src="/assets/logo/unity.png" height="60" width="auto"/>C#, Unity</h2>
  <div class="features-list">
    libossia provides a C# binding with a Unity integration layer, distributed as a Unity package.
    The archive contains one package per platform: Windows (x86_64), macOS (Intel and Apple Silicon) and Linux (x86_64).
    The C# scripts do not depend on Unity and can be used from any C# code base.
  </div><br/>
  <div>
    <ul>
    <li><a href="{{ release }}/ossia-unity-{{ site.libossia_version }}.zip">Download the Unity package (Windows, macOS, Linux)</a></li><br/>
    <li><a href="https://github.com/ossia/libossia/tree/master/src/ossia-unity3d">Source code</a></li>
    <li><a href="https://ossia.io/ossia-docs/?csharp#introduction">API documentation</a></li>
    </ul>
  </div>

  <h2 class="binding-title" id="qt-binding"><img alt="" src="/assets/logo/qt-logo.png" height="60" width="auto"/>Qt / QML</h2>
  <div class="features-list">
    libossia integrates with the QML markup language, to easily build performant user interfaces
    that can be controlled over OSC and OSCQuery.
    The QML module is built for macOS (Apple Silicon) and Linux (x86_64); on other platforms, build it from source.
  </div><br/>
  <div>
    <ul>
    <li><a href="{{ release }}/ossia-qml-{{ site.libossia_version }}.zip">Download the QML module (macOS, Linux)</a></li><br/>
    <li><a href="https://github.com/ossia/libossia/tree/master/src/ossia-qt">Source code</a></li>
    <li><a href="https://ossia.io/ossia-docs/?qml#introduction">API documentation</a></li>
    </ul>
  </div>

  <h2 class="binding-title" id="python-binding"><img alt="" src="/assets/logo/python-logo.png" height="60" width="auto"/>Python</h2>
  <div class="features-list">
    pyossia lets you create and control OSC, OSCQuery and MIDI devices from Python.
    It can be built from the libossia sources; an older version is also available on PyPI.
  </div><br/>
  <div>
    <ul>
    <li><a href="https://github.com/ossia/libossia/tree/master/src/ossia-python">Source code</a></li>
    <li><a href="https://pypi.org/project/pyossia/">pyossia on PyPI</a></li>
    <li><a href="https://ossia.io/ossia-docs/?python#introduction">API documentation</a></li>
    </ul>
  </div>

  <h2 class="binding-title" id="supercollider-binding"><img alt="" src="/assets/logo/supercollider-logo.png" height="60" width="auto"/>SuperCollider</h2>
  <div class="features-list">
    ossia-sclang is a SuperCollider quark which exposes SuperCollider parameters over OSC and OSCQuery.
  </div><br/>
  <div>
    <ul>
    <li><a href="https://github.com/ossia/ossia-sclang">Source code and installation</a></li>
    <li><a href="https://ossia.io/ossia-docs/?javascript#creating-parameters">API documentation</a></li>
    </ul>
  </div>

  <h2 class="binding-title" id="of-binding" ><img alt="" src="/assets/logo/of.png" height="40" width="auto"/>openFrameworks</h2>
  <div class="features-list">
    ofxOscQuery is an openFrameworks addon to easily expose a tree of ofParameters over OSCQuery.
  </div><br/>
  <div>
    <ul>
    <li><a href="https://github.com/bltzr/ofxOscQuery/releases">Downloads (Windows, macOS, Linux)</a></li>
    <li><a href="https://github.com/bltzr/ofxOscQuery">Source code and examples</a></li>
    </ul>
  </div>

  <h2 class="binding-title" id="processing-binding"><img alt="" src="/assets/logo/processing.jpg" height="60" width="auto"/>Java, Kotlin, Processing</h2>
  <div class="features-list">
    libossia provides JVM bindings, which allow it to be used from Java, Kotlin, Processing or OpenRNDR.
    They are not part of the current binary release: build them from the libossia sources.
  </div><br/>
  <div>
    <ul>
    <li><a href="https://github.com/ossia/libossia/tree/master/src/ossia-java">Source code</a></li>
    <li><a href="https://ossia.io/ossia-docs/?java#introduction">API documentation</a></li>
    </ul>
  </div>

  <h2 class="binding-title" id="faust-binding"><img alt="" src="/assets/logo/faust.png" height="50" width="auto"/>Faust</h2>
  <div class="features-list">
    libossia provides a Faust architecture file which exposes the controls of a Faust program over OSCQuery.
  </div><br/>
  <div>
    <ul>
    <li><a href="https://github.com/ossia/libossia/tree/master/src/ossia-faust">Faust architecture file</a></li>
    </ul>
  </div>
</div>
