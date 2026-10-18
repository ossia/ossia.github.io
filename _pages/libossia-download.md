---
layout: page
title:  "Download"

permalink: /site-libossia/download.html
category: site-libossia
release_link: https://github.com/ossia/libossia/releases/tag/v1.2.5
ossia_version: https://github.com/ossia/libossia/releases/download/v1.2.4
---

<b>libossia</b> is available for many platforms and environments:

<div class="logo-grid" style="margin-top: 1em; margin-bottom: 1em;">
    <a href="#cpp-binding"><img alt="C++ logo" src="/assets/logo/cpp.png" height="60" width="auto"/></a>
    <a href="#c-binding" ><img alt="C logo" src="/assets/logo/c.png" height="60" width="auto"/></a>
    <a href="#max-binding"><img alt="Max/MSP logo" src="/assets/logo/max.jpg" height="70" width="auto"/></a>
    <a href="#pd-binding" ><img alt="PureData logo" src="/assets/logo/pd.png" height="60" width="auto"/></a>
    <a href="#unity-binding"><img alt="Unity3D logo" src="/assets/logo/unity.png" height="60" width="auto"/></a>
    <a href="#processing-binding"><img alt="Processing logo" src="/assets/logo/processing.jpg" height="60" width="auto"/></a>
    <a href="#of-binding"><img alt="openFrameworks logo" src="/assets/logo/of.png" height="40" width="auto"/></a>
    <a href="#supercollider-binding"><img alt="SuperCollider logo" src="/assets/logo/supercollider-logo.png" height="60" width="auto"/></a>
    <a href="#qt-binding"><img alt="Qt / QML logo" src="/assets/logo/qt-logo.png" height="60" width="auto"/></a>
    <a href="#python-binding"><img alt="Python logo" src="/assets/logo/python-logo.png" height="60" width="auto"/></a>
    <a href="#faust-binding"><img alt="Faust logo" src="/assets/logo/faust.png" height="50" width="auto"/></a>
</div>

The latest releases are stored here <a href="https://github.com/ossia/libossia/releases">github.com/ossia/libossia/releases</a>.


<div>
  <h2 class="binding-title" id="cpp-binding"><img alt="C++ logo" src="/assets/logo/cpp.png" height="60" width="auto"/>Native C++ library</h2>
  <div class="features-list">
    This is the main C++ library on which everything is built upon. It is useful if you plan to integrate libossia to a C++ software or write a new
    OSCQuery-enabled software for instance.
    Releases are built for Windows (with Visual Studio 2019 16.6), macOS (targeting 10.14+ with Intel CPUs), and Ubuntu Linux (with gcc-9).
    The library is also known to build under iOS, Android, WASM, as well as ARM Linux.
    </div><br/>
    <div class="features-list">
    <ul>
    <li><a href="{{page.ossia_version}}/libossia-native-win.zip">Download (Windows)</a></li>
    <li><a href="{{page.ossia_version}}/libossia-native-linux_x86_64-static.tar.gz">Download (Linux, static library, x86_64)</a></li>
    <li><a href="{{page.ossia_version}}/libossia-native-linux_x86_64.tar.gz">Download (Linux, x86_64)</a></li>
    <li><a href="{{page.ossia_version}}/libossia-native-macos-static.tar.gz">Download (macOS, static library, x86_64)</a></li>
    <li><a href="{{page.ossia_version}}/libossia-native-macos.tar.gz">Download (macOS, x86_64)</a></li><br/>
    <li><a href="https://github.com/ossia/libossia">Source code</a></li>
    <li><a href="https://github.com/ossia/libossia/wiki/Building">Build instructions</a></li>
    <li><a href="https://ossia.io/ossia-docs/?cpp--14#introduction">API Documentation</a></li>
    <li><a href="https://github.com/ossia/libossia/tree/master/examples">Examples</a></li>
    <li><a href="https://ossia.io/libossia/html/">Doxygen</a></li>
    </ul>
  </div>

  <h2 class="binding-title" id="c-binding"><img alt="C logo" src="/assets/logo/c.png" height="60" width="auto"/>C binding</h2>
  <div class="features-list">
    libossia provides a clean C89 header which wraps the most important functionality.
    It can be used with the libossia-native libraries above which contain the functionality linked in.
  </div><br/>
  <div>
    <ul>
    <!--<li><a href="">Downloads</a></li>-->
    <li><a href="https://github.com/ossia/libossia/tree/master/src/ossia-c">Source code</a></li>
    <li><a href="https://ossia.io/ossia-docs/?c#introduction">API Documentation</a></li>
    <li><a href="https://ossia.io/libossia/html/group___c_a_p_i.html">Doxygen</a></li>
    <!--<li><a href="">Examples</a></li>-->
    <!--<li><a href="https://ossia.io/libossia/html">Doxygen</a></li>-->
    </ul>
  </div>

<!--
  <h2 class="binding-title">Unreal Engine integration</h2>
  <div class="features-list">
    libossia provides a C header which wraps the most important functionality.
  </div><br/>
  <div>
    <ul>
    <li><a href="">Downloads</a></li>
    <li><a href="">API Documentation</a></li>
    <li><a href="">Examples</a></li>
    <li><a href="">Doxygen</a></li>
    </ul>
  </div>
-->
  <h2 class="binding-title" id="max-binding"><img alt="Max/MSP logo" src="/assets/logo/max.jpg" height="70" width="auto"/>Max/MSP</h2>
  <div class="features-list">
    libossia is available as a Max package.
    </div><br/>
    <div>
    <ul>
    <li><a href="{{page.ossia_version}}/ossia-max-osx.zip">Max package (macOS)</a></li>
    <li><a href="{{page.ossia_version}}/ossia-max-win.zip">Max package (Windows)</a></li><br/>
    <li><a href="https://github.com/ossia/libossia/tree/master/src/ossia-max">Source code</a></li>
    <li><a href="https://ossia.io/ossia-docs/?plaintext--max#introduction">API Documentation</a></li>
    <!--<li><a href="">Examples</a></li>-->
    </ul>
  </div>

  <h2 class="binding-title" id="pd-binding"><img alt="PureData logo" src="/assets/logo/pd.png" height="60" width="auto" />PureData</h2>
  <div class="features-list">
    libossia is available as a PureData package. It is also supported for PurrData.
    In PureData, you can install ossia directly through the package manager ; this is the recommended way.
    </div><br/>
    <div>
    <ul>
    <li><a href="{{page.release_link}}">PureData and PurrData externals (Linux, Mac, Windows, ...)</a></li>
    <li><a href="https://github.com/ossia/libossia/tree/master/src/ossia-pd">Source code</a></li>
    <li><a href="https://ossia.io/ossia-docs/?plaintext--pd#introduction">API Documentation</a></li>
    <!--<li><a href="">Examples</a></li>-->
    </ul>
  </div>

  <h2 class="binding-title" id="unity-binding"><img alt="Unity3D logo" src="/assets/logo/unity.png" height="60" width="auto"/>C#, Unity3D</h2>
  <div class="features-list">
    libossia provides a C# binding. An additional Unity3D GameObject integration layer is available.
    The library ships as an asset that can be copied into your project.
    The C# files at the root level (Assets/ossia) do not depend on Unity3D and can be used from any C# code base.
    </div><br/>
    <div>
    <ul>
    <li><a href="{{page.ossia_version}}/ossia-unity3d.zip">Download Unity3D asset (Mac / Win / Linux)</a></li><br/>
    <li><a href="https://github.com/ossia/libossia/tree/master/src/ossia-unity3d">Source code</a></li>
    <li><a href="https://ossia.io/ossia-docs/?csharp#introduction">API Documentation</a></li>
    <!--<li><a href="">Examples</a></li>-->
    </ul>
  </div>

  <h2 class="binding-title" id="processing-binding"><img alt="Processing logo" src="/assets/logo/processing.jpg" height="60" width="auto"/>Java, Kotlin, Processing, OpenRNDR</h2>
  <div class="features-list">
    libossia provides JVM bindings, which allows it to be used with Processing, etc.
    </div><br/>
    <div>
    <ul>
    <li><a href="{{page.ossia_version}}/ossia-java.zip">Download Java library (Mac / Win / Linux)</a></li><br/>
    <li><a href="https://github.com/ossia/libossia/tree/master/src/ossia-java">Source code</a></li>
    <li><a href="https://ossia.io/ossia-docs/?java#introduction">API Documentation</a></li>
    </ul>
  </div>

  <h2 class="binding-title" id="of-binding" ><img alt="openFrameworks logo" src="/assets/logo/of.png" height="40" width="auto"/>openFrameworks</h2>
  <div class="features-list">
    libossia is available as an openFrameworks extension made to expose a tree of ofParameters to OSCQuery easily.
    </div><br/>
    <div>
    <ul>
    <li><a href="https://github.com/bltzr/ofxOscQuery/releases">Downloads (Win, Mac, Linux)</a></li><br/>
    <li><a href="https://github.com/bltzr/ofxOscQuery">Source code, examples...</a></li>
    <li><a href="">API Documentation</a></li>
    <!--<li><a href="">Examples</a></li>-->
    </ul>
  </div>

  <h2 class="binding-title" id="supercollider-binding"><img alt="SuperCollider logo" src="/assets/logo/supercollider-logo.png" height="60" width="auto"/>SuperCollider</h2>
  <div class="features-list">
    libossia is available for SuperCollider.
    </div><br/>
    <div>
    <ul>
    <li><a href="https://github.com/ossia/ossia-sclang">Source code</a></li>
    <li><a href="https://ossia.io/ossia-docs/?javascript#creating-parameters">API Documentation</a></li>
    <!--<li><a href="">Examples</a></li>-->
    </ul>
  </div>

  <h2 class="binding-title" id="qt-binding"><img alt="Qt / QML logo" src="/assets/logo/qt-logo.png" height="60" width="auto"/>Qt / QML</h2>
  <div class="features-list">
    libossia integrates with the QML markup language, to easily build performant user interfaces.
    </div><br/>
    <div>
    <ul>
    <li><a href="{{page.ossia_version}}/ossia-qml-linux_x86_64.tar.gz">Download (Linux, x86_64)</a></li>
    <li><a href="{{page.ossia_version}}/ossia-qml-osx.zip">Download (macOS)</a></li>
    <li><a href="{{page.ossia_version}}/ossia-qml-win64.zip">Download (Windows, 64-bit)</a></li><br/>
    <li><a href="https://github.com/ossia/libossia/tree/master/src/ossia-qt">Source code</a></li>
    <li><a href="https://ossia.io/ossia-docs/?qml#introduction">API Documentation</a></li>
    <!--<li><a href="">Examples</a></li>-->
    </ul>
  </div>

  <h2 class="binding-title" id="python-binding"><img alt="Python logo" src="/assets/logo/python-logo.png" height="60" width="auto"/>Python</h2>
  <div class="features-list">
    libossia is useable from Python.
  </div><br/>
  <div>
    <ul>
    <li><a href="https://github.com/ossia/libossia/tree/master/src/ossia-python">Source code</a></li>
    <li><a href="https://ossia.io/ossia-docs/?python#introduction">API Documentation</a></li>
    <!--<li><a href="">Examples</a></li>-->
    </ul>
  </div>

  <h2 class="binding-title" id="faust-binding"><img alt="Faust logo" src="/assets/logo/faust.png" height="50" width="auto"/>Faust architecture</h2>
  <div class="features-list">
    libossia provides a Faust architecture file. It will expose the controls over OSCQuery.
    </div><br/>
    <div>
    <ul>
    <li><a href="https://github.com/ossia/libossia/tree/master/src/ossia-faust">Download</a></li>
    <!--<li><a href="">API Documentation</a></li>-->
    <!--<li><a href="">Examples</a></li>-->
    </ul>
  </div>
</div>

