---
layout: use-case
title: "Turn a project into a standalone app"
headline: "Custom apps built on ossia score"
subtitle: "ossia score can be used to package a project with its own interface, name and icon as an application for Windows, macOS, Linux or the web."
permalink: /custom-apps.html
translation: /fr/applications-sur-mesure.html
category: site-score
description: "Package an ossia score project with a custom QML interface as a standalone, branded app for Windows, macOS, Linux, ARM or the web. Free and open-source."
image: /assets/social/ossia-score-og.jpg
---

ossia score can be packaged as a standalone application, with a custom interface on top, the project and its media inside, and the score engine underneath; this is useful for instance for a kiosk, for a tool given to a team or a client, or for an interactive work that is distributed, when the people using it should not see the editor.
LivePose and Koaia were made this way.

<img src="/assets/use-cases/custom-ui.webp" width="640" height="245" loading="lazy" alt="A custom interface with dials next to a generative black and white visual, and a console printing the values it sends"/>

## Interface

The interface is written in QML with Qt Quick Controls and bound to the parameters of the project; it can also be an interface-only application which drives devices ([custom UI](https://ossia.io/score-docs/custom-ui.html)).
The application logic, the saved state, the file dialogs and the transport control are written in JavaScript ([scripting](https://ossia.io/score-docs/in-depth/scripting.html)).

## Packaging

The application opens its project on startup and can start playing immediately ([custom apps](https://ossia.io/score-docs/development/custom-apps.html)); it has its own name, organization, version, description, icons for each platform and settings, branded or unbranded.

The supported targets are Linux (x86_64 and ARM AppImage), macOS (Intel and Apple Silicon application and DMG, with signing and notarization), Windows (x64 and ARM64), and a static WebAssembly build which can be served from a website.
A template repository with GitHub Actions builds every platform, a source build can include only the add-ons which are needed, and during development the application can be started with the editor visible next to its interface.

Audio, video, 3D, devices and protocols are provided by ossia score, so that there is no media engine to maintain separately.
