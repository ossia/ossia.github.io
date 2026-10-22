---
layout: page
title:  "Documentation"

permalink: /docs.html
ref: docs
category: site-docs
description: "Documentation for ossia score and libossia: user manual, tutorials, video guides, API references and community resources."
---
<div class="menu" style="display:flex; align-items:center; width: 100%;margin:auto; padding: auto; ">
        <!-- <a href="/score/learn/faq.html"  class="menu-item panel" ><span class="icon-svg icon-chat"></span> FAQ
         <p class="description">Most frequently asked questions</p></a>
         -->
         <a href="https://www.youtube.com/watch?v=R-3d8K6gQkw&list=PLIHLSiZpIa6YoY1_aW1yetDgZ7tZcxfEC&index=1" class="menu-item panel" target="_blank" ><span class="icon-svg icon-video"></span>Tutorials
         <p class="description">Online workshop</p></a>
         <a href="https://ossia.io/score-docs/" target="_blank"  class="menu-item panel"><span class="icon-svg icon-documentation"></span>Documentation
         <p class="description">for score</p></a>
         <a href="blog.html" class="menu-item panel"><span class="icon-svg icon-blog"></span>Blog
         <p class="description">Blog post</p></a>
         <a href="https://forum.ossia.io/"  target="_blank" class="menu-item panel"><span class="icon-svg icon-forum"></span>Forum
         <p class="description">Ask any questions!</p></a>
         <a href="https://discord.gg/8Hzm4UduaS"  target="_blank" class="menu-item panel"><span class="icon-svg icon-chat"></span>Chat<p class="description">Come chat with us on Discord!</p></a>
</div>

<div style="width: 100%;">
<h2 class="page-title" style="text-align: center;">FAQ</h2>

<h3 class="faq">Basics</h3>
<p type="button" class="collapsible" > What is ossia score ?</p>
<div class="collapsible-content">
ossia score is an interactive, intermedia sequencer. It allows to sequence various kinds of media and parameters (for instance, OSC messages, sound files, video effects)... over time in a timeline. The timeline has interactive features : it is possible to specify that a part of the score will execute when an event happens, such as a note being played, etc.
</div>

<p type="button" class="collapsible" > Is it free ?</p>
<div class="collapsible-content">
Yes! The whole system is available under GNU GPLv3 (for ossia score) and GNU LGPLv3 (for libossia).
You can copy, redistribute, use, share, modify it as much as you wish.<br/>
We strongly believe that artists from around the world need free tools.
</div>

<p type="button" class="collapsible" > Can I use it in a commercial or production setting ?</p>
<div class="collapsible-content">
Yes! The license allows you to do whatever you want with the software. You can make artworks,
shows, music production, art and museum installs, etc... without any limitation of features, time, or
anything of the sort.<br/>
Note that there is *no warranty* provided - it is however possible to contact our team at
<a href="mailto:contact@ossia.io">contact@ossia.io</a> for paid support.
</div>

<p type="button" class="collapsible" > How can I help ?</p>
<div class="collapsible-content">
The easiest way to contribute is by donating to the <a href="https://opencollective.com/ossia">development fund</a>.

A very good way to participate is by contributing through bug reports, and code improvements.
See the <a href="/project.html">Contributing</a> page for more information.
</div>
<!--
<p type="button" class="collapsible"> Playing a sound</p>
<div class="collapsible-content">
</div>

<p type="button" class="collapsible"> Creating an interactive trigger</p>
<div class="collapsible-content">
</div>

<p type="button" class="collapsible"> Creating a temporal condition</p>
<div class="collapsible-content">
</div>

<p type="button" class="collapsible"> Showing a video</p>
<div class="collapsible-content">
</div>

<p type="button" class="collapsible"> Automating a parameter</p>
<div class="collapsible-content">
</div>

<p type="button" class="collapsible"> Creating loops</p>
<div class="collapsible-content">
</div>

<p type="button" class="collapsible"> Creating interactive loops</p>
<div class="collapsible-content">
</div>

<p type="button" class="collapsible"> Writing & playing MIDI through a software synthesizer</p>
<div class="collapsible-content">
</div>

<h3 class="faq">Intermediate usage</h3>
<p type="button" class="collapsible"> Understanding the ossia score timeline</p>
<div class="collapsible-content">
</div>

<p type="button" class="collapsible"> Mapping a parameter</p>
<div class="collapsible-content">
</div>

<p type="button"  class="collapsible"> Creating effects and synthesizer chains</p>
<div class="collapsible-content">
</div>

<p type="button" class="collapsible"> Modulating with LFOs, step sequencers and others</p>
<div class="collapsible-content">
</div>

<p type="button" class="collapsible"> Saving and loading presets</p>
<div class="collapsible-content">
</div>

<p type="button" class="collapsible"> Switching between musical and real-time mode</p>
<div class="collapsible-content">
</div>

<p type="button" class="collapsible"> Recording OSC messages and automations</p>
<div class="collapsible-content">
</div>

<p type="button" class="collapsible"> Nesting scores</p>
<div class="collapsible-content">
</div>

<p type="button"  class="collapsible"> Creating sequences of parameters</p>
<div class="collapsible-content">
</div>

<p type="button"  class="collapsible"> Understanding racks, layers and slots</p>
<div class="collapsible-content">
</div>

<h3 class="faq">Advanced usage</h3>
<p type="button" class="collapsible"> Creating complex graphs of effects</p>
<div class="collapsible-content">
</div>

<p type="button"  class="collapsible"> Tempo control and polyrythmy</p>
<div class="collapsible-content">
</div>

<p type="button" class="collapsible"> Multi-channel audio output and sound spatialization</p>
<div class="collapsible-content">
</div>

<p type="button" class="collapsible"> Audio routing</p>
<div class="collapsible-content">
</div>

<p type="button" class="collapsible"> Creating state-machine-like scores</p>
<div class="collapsible-content">
</div>

<p type="button"  class="collapsible"> Creating a control surface for external parameters</p>
<div class="collapsible-content">
</div>

<p type="button"  class="collapsible"> Remote controlling through a web page</p>
<div class="collapsible-content">
</div>

<h3 class="faq">Using the embedded scripting languages</h3>
<p type="button" class="collapsible"> Scripting with JavaScript</p>
<div class="collapsible-content">
</div>

<p type="button"  class="collapsible"> Writing audio effects with Faust</p>
<div class="collapsible-content">
</div>

<p type="button" class="collapsible"> Writing mappings with math expressions</p>
<div class="collapsible-content">
</div>

<p type="button" class="collapsible"> Writing graphic effects with ISF</p>
<div class="collapsible-content">
</div>

<h3 class="faq">Working with other software</h3>

<p type="button" class="collapsible">  Connecting to Processing</p>
<div class="collapsible-content">
</div>

<p type="button"  class="collapsible">  Connecting to OpenRNDR</p>
<div class="collapsible-content">
</div>

<p type="button"  class="collapsible"> Connecting to Max/MSP</p>
<div class="collapsible-content">
</div>

<p type="button"  class="collapsible"> Connecting to PureData</p>
<div class="collapsible-content">
</div>

<p type="button"  class="collapsible">  Connecting to Unreal Engine</p>
<div class="collapsible-content">
</div>

<p type="button" class="collapsible">  Connecting to Unity3D</p>
<div class="collapsible-content">
</div>

<p type="button" class="collapsible"> Connecting to openFrameworks</p>
<div class="collapsible-content">
</div>

<p type="button" class="collapsible">  Connecting to Qt / QML</p>
<div class="collapsible-content">
</div>

<p type="button"  class="collapsible">  Connecting to a generic OSC software</p>
<div class="collapsible-content">
</div>

<p type="button" class="collapsible"> Connecting to a generic OSCQuery software</p>
<div class="collapsible-content">
</div>

<h3 class="faq">Working with hardware</h3>

<p type="button" class="collapsible"> Getting data from a MIDI device</p>
<div class="collapsible-content">
</div>

<p type="button" class="collapsible">  Sending data to an external MIDI device</p>
<div class="collapsible-content">
</div>

<p type="button"  class="collapsible">  Sending data to ArtNet nodes</p>
<div class="collapsible-content">
</div>

<p type="button" class="collapsible"> Communicating with a serial device (Arduino, etc)</p>
<div class="collapsible-content">
</div>

<p type="button" class="collapsible"> Communicating with a gamepad or Wiimote</p>
<div class="collapsible-content">
</div>
-->
<h3 class="faq">Troubleshooting</h3>

<p type="button"  class="collapsible"> score just crashed</p>
<div class="collapsible-content">
    Please send us a detailed bug report of what you were doing at the moment of the crash,
    along with any crashlog, in either the forum, the chat or the <a href="https://github.com/ossia/score/issues">Github issues (preferably)</a>.
    Thanks!
</div>

<p type="button"  class="collapsible"> score crashes immediately on first start-up on Windows</p>
<div class="collapsible-content">
    Check that you do not have the JACK2 ASIO driver installed. It is known to cause <a href="https://github.com/jackaudio/jack2/issues/275">crashes on startup on Windows</a> for many software. You can check the following registry key in the Windows registry editor: <b>HKEY_LOCAL_MACHINE\SOFTWARE\ASIO</b>.
</div>

<p type="button" class="collapsible"> The playback does not start</p>
<div class="collapsible-content">
     Most of the time, this is due to incorrect sound settings.
</div>

<p type="button" class="collapsible"> The score runs but there is no sound</p>
<div class="collapsible-content">
     Most of the time, this is due to incorrect sound settings.
</div>

<p type="button" class="collapsible"> Playback seems to hang at random times on Linux</p>
<div class="collapsible-content">
    This is due to a <a href="https://portaudio.music.columbia.narkive.com/3V9hsUak/pa-linux-alsa-c-3636-assertion-failed-with-hack-fix">PortAudio bug</a>.
    Use the JACK backend instead.
</div>

<p type="button" class="collapsible"> Some VST plug-ins and virtual cameras do not work on Mac</p>
<div class="collapsible-content">
    You are likely encountering <a href="https://stackoverflow.com/questions/61114738/are-macos-virtual-webcams-inherently-incompatible-with-10-14s-hardened-runtime">security-related macOS issues</a>. <br/>
    As a workaround, you can follow the steps given in the above link to remove the code signing of the score binary, which will in turn make macOS allow score to open virtual webcams and any audio plug-ins.
</div>

<p type="button" class="collapsible"> The minimap is hard to use on Mac</p>
<div class="collapsible-content">
    You are likely encountering <a href="https://stackoverflow.com/questions/61843481/macos-simulated-mouse-event-only-works-when-launching-binary-not-application-b">this macOS issue</a>. <br/>
    As a workaround, you can try to open score by right-clicking on Score.app, selection "Open contents", navigating to "Score.app/Contents/MacOS" and running the "score" binary from there.
</div>

</div>

<br/>

<br/>

<p style="text-align: center">
<a href="https://forum.ossia.io/" class="page-button"  target="_blank" >If your question is not here, ask us in the forum! </a>
</p>

<script src="/js/collapsible.js"></script>
