---
layout: use-case
title: "Turn a project into a standalone app"
headline: "Custom apps built on ossia score"
subtitle: "Package a project with its own interface, name and icon as an application for Windows, macOS, Linux or the web: a kiosk, a tool for your team, or a work you distribute."
permalink: /custom-apps.html
translation: /fr/applications-sur-mesure.html
category: site-score
description: "Package an ossia score project with a custom QML interface as a standalone, branded app for Windows, macOS, Linux, ARM or the web. Free and open-source."
image: /assets/social/ossia-score-og.jpg
---

Sometimes the people using a project should never see the editor. ossia score can be packaged as your own application: your interface on top, your project and media inside, and the score engine underneath.
LivePose and Koaia were made this way.

<picture><source type="image/avif" srcset="/assets/use-cases/custom-ui.avif"><img src="/assets/use-cases/custom-ui.webp" width="640" height="245" loading="lazy" alt="A custom interface with dials next to a generative black and white visual, and a console printing the values it sends"/></picture>

## The interface

The interface is written in QML with Qt Quick Controls and bound to the parameters of the project. It can also be an interface-only app that drives devices ([custom UI](https://ossia.io/score-docs/custom-ui.html)).
Application logic, saved state, file dialogs and transport control are written in JavaScript ([scripting](https://ossia.io/score-docs/in-depth/scripting.html)).

## The package

The app opens its project on startup and can start playing at once ([custom apps](https://ossia.io/score-docs/development/custom-apps.html)).
It carries its own name, organisation, version, description, icons for each platform and settings, branded or unbranded.

Targets are Linux (x86_64 and ARM AppImage), macOS (Intel and Apple Silicon app and DMG, with signing and notarization), Windows (x64 and ARM64), and a static WebAssembly build to serve from a website.
A template repository with GitHub Actions builds every platform, and a source build can include only the add-ons you need.
While developing, the app can be started with the editor visible next to its interface.

## In short

<div class="comparison-scroll">
<table class="comparison">
<thead><tr><th>You want</th><th>In ossia score</th></tr></thead>
<tbody>
<tr><td>A kiosk with only the buttons visitors should touch</td><td>A full-screen QML interface on top of the project, without the editor.</td></tr>
<tr><td>To distribute an interactive work</td><td>Installable apps for each operating system, and a web version.</td></tr>
<tr><td>A simple tool for a team or a client</td><td>Your name, icon and settings, with the project's complexity out of sight.</td></tr>
<tr><td>Not to maintain a media engine yourself</td><td>Audio, video, 3D, devices and protocols come from ossia score.</td></tr>
<tr><td>Reproducible builds</td><td>Packaging scripts and GitHub Actions from the template repository.</td></tr>
</tbody>
</table>
</div>
