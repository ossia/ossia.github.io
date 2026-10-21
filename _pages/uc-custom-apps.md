---
layout: use-case
title: "Turn a project into a standalone app"
headline: "Custom apps built on ossia score"
subtitle: "Package a project with its own interface, name and icon as an application for Windows, macOS, Linux or the web — for an installation kiosk, a tool for your team, or an interactive work you distribute. Free and open-source."
permalink: /custom-apps.html
translation: /fr/applications-sur-mesure.html
category: site-score
description: "Package an ossia score project with a custom QML interface as a standalone, branded app for Windows, macOS, Linux, ARM or the web. Free and open-source."
image: /assets/social/ossia-score-og.jpg
---

Sometimes the people using a project should not see the editor at all. ossia score can be packaged as your own application:
your interface on top, your project and media inside, and the whole engine underneath.

## What you can do

- **Your interface**: write the interface in QML with Qt Quick Controls, bound to the parameters of the project; it can also be a UI-only app driving devices ([custom UI](https://ossia.io/score-docs/custom-ui.html)).
- **Your project inside**: the app opens its project on startup and can start playing at once ([custom apps](https://ossia.io/score-docs/development/custom-apps.html)).
- **Your name and icon**: application name, organisation, version, description and icons for each platform, and its own settings; branded or unbranded.
- **Every platform**: Linux (x86_64 and ARM AppImage), macOS (Intel and Apple Silicon app and DMG, with signing and notarization), Windows (x64 and ARM64), and a static WebAssembly version to serve from a website.
- **Built automatically**: a template repository and GitHub Actions package the app for each platform; a source build can include only the add-ons you need.
- **Scripting**: JavaScript for application logic, state persistence, file dialogs and access to the transport ([scripting](https://ossia.io/score-docs/in-depth/scripting.html)).
- **Debug when needed**: start the app with the editor visible next to its interface.

## App needs, and how ossia score answers them

<div class="comparison-scroll">
<table class="comparison">
<tr><th>What you need</th><th>How ossia score does it</th></tr>
<tr><td>A kiosk with only the buttons visitors should touch</td><td>A full-screen QML interface on top of the project, without the editor.</td></tr>
<tr><td>Distributing an interactive work to the public</td><td>Installable apps for each operating system, and a web version that runs in the browser.</td></tr>
<tr><td>A simple tool for a team or a client</td><td>Your own name, icon and settings, with the complexity of the project hidden.</td></tr>
<tr><td>Not maintaining a media engine yourself</td><td>Audio, video, 3D, devices and protocols come from ossia score.</td></tr>
<tr><td>Reproducible builds</td><td>Packaging scripts and GitHub Actions from the template repository.</td></tr>
</table>
</div>

LivePose and Koaia are examples of applications made with this toolkit.
