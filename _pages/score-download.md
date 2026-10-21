---
layout: download-page
title:  "Download ossia score"

permalink: /score/download.html
ref: download
category: site-score
description: "Download ossia score %VERSION% for Windows, macOS and Linux. Free and open-source; also on the Microsoft Store, Flathub, Homebrew and AUR."
---

<div class="support">
<h2> Support us! </h2>
We sell score on the Microsoft store as a way to get financial support to ensure continued development so please consider <a href="https://apps.microsoft.com/store/detail/ossia-score/9NGT21X5XB19">buying it on the Microsoft Store</a>, or funding us through <a href="https://opencollective.com/ossia">OpenCollective</a> or <a href="https://github.com/sponsors/jcelerier">Github Sponsors</a>!
</div>
<h1 class="download-title">Download ossia score v{{site.score_version}}</h1>
<p class="download-date">Released on {{site.score_released_date}}</p>
<p id="download-current" class="download-page-layout" style="text-align: center">
<a data-os="win" href="https://apps.microsoft.com/store/detail/ossia-score/9NGT21X5XB19" target="_blank" class="page-button download-page"><img src="../assets/microsoft-store.svg" height="80" alt=""/>Microsoft Store</a>
<a data-os="win" href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-x86_64.exe" class="page-button download-page"><img src="../assets/windows_logo_2012-Black.svg" height="80" alt=""/>Windows</a>
<a data-os="win-arm" href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-aarch64.exe" class="page-button download-page"><img src="../assets/windows_logo_2012-Black.svg" height="80" alt=""/>Windows on ARM</a>
<a data-os="mac" href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-macOS-AppleSilicon.dmg" class="page-button download-page"><img src="../assets/apple_logo_black.svg" height="60" alt=""/>macOS 12 and later (Apple Silicon)</a>
<a data-os="mac" href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-macOS-Intel.dmg" class="page-button download-page"><img src="../assets/apple_logo_black.svg" height="60" alt=""/>macOS 12 and later (Intel)</a>
<a data-os="linux linux-x86_64" href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-linux-x86_64.AppImage" class="page-button download-page"><img src="../assets/Linux_Platform.svg" height="80" alt=""/>Linux AppImage x86_64</a>
<a data-os="linux linux-aarch64" href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-linux-aarch64.AppImage" class="page-button download-page"><img src="../assets/Pi64_Platform.svg" height="80" alt=""/>Linux AppImage AArch64</a>
<a data-os="linux linux-x86_64 linux-aarch64" href="https://flathub.org/apps/io.ossia.score" class="page-button download-page"><img src="../assets/Flatpak_Logo.svg" height="80" alt=""/>Linux Flatpak</a>
<a data-os="web" href="https://ossia.io/score-web" target="_blank" class="page-button download-page"><img src="../assets/web.png" height="80" alt=""/>WebAssembly</a>
</p>
<div id="download-others-block" style="display: none;">
<p class="download-others-title" style="text-align: center">Other platforms</p>
<p id="download-others" class="download-page-layout" style="text-align: center"></p>
</div>


Take a look at the <a href="https://github.com/ossia/score/releases/latest" target="_blank">change log</a> for the latest release information and additional downloads, or scroll down this page for more options.

<br/>

## Minimal requirements
- <i>score</i> requires a 64-bit operating system and CPU, both on desktop and embedded platforms. <br/> 
- On x86_64, the official releases for Windows and Linux require a CPU with AVX2. If your CPU does not support AVX2, use a distribution package such as those provided by MSYS2 or the Arch Linux AUR.
- 800 MHz CPU, 512MB of RAM. For instance, <i>score</i> runs on a Raspberry Pi Zero 2W.
- For graphics, a GPU which supports at least OpenGL 3.2, Vulkan, Direct3D 11 or Metal.
- [NDI Runtime](https://github.com/DistroAV/DistroAV/discussions/831) (at least v5) may be necessary to use NDI.
- [UltraLeap SDK](https://leap2.ultraleap.com/downloads/) (at least Gemini or Hyperion) may be necessary to use UltraLeap devices.

<h3 type="button" class="collapsible" > Windows </h3>
<div class="collapsible-content">
<ul>
<li> Windows 10 and 11 are supported, not older versions. </li>
<li> <i>score</i> and *libossia* use Bonjour for the OSCQuery automatic discovery feature.
  This means that on Windows, you must install the <a href="https://support.apple.com/kb/dl999?locale=en_US">Bonjour Print Services</a> for this to work. </li>
</ul>
</div>

<h3 type="button" class="collapsible" > macOS </h3>
<div class="collapsible-content">
Must be at least macOS 12 Monterey. The AI features need macOS 13 Ventura or later.
<br/><br/>
The latest version for macOS 10.15 Catalina and macOS 11 Big Sur is 3.4.1, downloadable from the <a href="https://github.com/ossia/score/releases/tag/v3.4.1">ossia score 3.4.1 release page</a>.
<br/>
The latest version for macOS 10.13 High Sierra is 3.1.8, downloadable from the <a href="https://github.com/ossia/score/releases/tag/v3.1.8">ossia score 3.1.8 release page</a>.
</div>

<h3 type="button" class="collapsible" > Linux (Desktop) </h3>
<div class="collapsible-content">

<p> To integrate the AppImage into your system, please follow: <br>
&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/AppImage/awesome-appimage/#desktop-integration">https://github.com/AppImage/awesome-appimage/#desktop-integration</a>
<br/>
Important: AppImageLauncher below version 3.0.0 does not support the score AppImage and crashes. See <a href="https://github.com/TheAssassin/AppImageLauncher/issues/711">this thread</a> and update your version.
</p>

All Linux distributions from at least 2022 should be supported:
<ul>
<li>The packages are built on AlmaLinux 9.</li>
<li>Ubuntu 22.04+</li>
<li>Debian Bookworm ...  </li>
<li>Fedora 36+</li>
<li>Your system must have at least glibc-2.34, as well as X11, ALSA, libGL, librt, libdbus, libGL, libEGL. Those packages are present on any relevant desktop distribution ; if you use Debian, Ubuntu, Fedora, OpenSUSE, ArchLinux or anything like those it will work fine.</li>
<li>Either JACK or Pipewire for audio, and Avahi for Bonjour support are recommended.</li>
<li>libbluez may be necessary to use Wiimotes (which go through Bluetooth) and the BLE support.</li>
<li>Wayland support is still experimental, in particular on GNOME-based desktops.</li>
</ul>
</div>

<h3 type="button" class="collapsible" > Ubuntu >= 22.04</h3>
<div class="collapsible-content">
Important note for Ubuntu: *fuse2* must be installed as it is necessary for running AppImages:

<pre>
sudo add-apt-repository universe
sudo apt install fuse2
</pre>
</div>

<h3 type="button" class="collapsible" > Linux (Raspberry Pi, embedded...) </h3>
<div class="collapsible-content">
Read the <a href="https://ossia.io/score-docs/in-depth/embedded.html">documentation</a> before running score on a Pi.
<br/>
The Raspberry Pi package has also been tested on Arch Linux ARM and Asahi Linux (M1 macs).
<br/>
The Flatpak and Nix versions are also available as AArch64.
</div>

<br/>

## Installing from a package manager

<ul>
<li><a href="https://flathub.org/apps/io.ossia.score">Flatpak</a>: flatpak install flathub io.ossia.score</li>
<li><a href="https://aur.archlinux.org/packages/ossia-score">ArchLinux (AUR)</a>: paru -S ossia-score</li>
<li><a href="https://search.nixos.org/packages?channel=unstable&amp;show=ossia-score">Nix</a>: nix-shell -p ossia-score</li>
<li><a href="https://www.freshports.org/multimedia/ossia-score">FreeBSD</a>: pkg install ossia-score</li>
<li><a href="https://packages.msys2.org/base/mingw-w64-ossia-score">MSYS2</a>: pacman -S mingw-w64-ucrt-x86_64-ossia-score (UCRT64), mingw-w64-clang-x86_64-ossia-score (CLANG64) or mingw-w64-clang-aarch64-ossia-score (CLANGARM64)</li>
<li><a href="https://winget.run/pkg/ossia/score">WinGet</a>: winget install -e --id ossia.score</li>
<li><a href="https://formulae.brew.sh/cask/ossia-score">Homebrew</a>: brew install --cask ossia-score</li>
</ul>

<br/>

## Source code

The source code for the latest release can be downloaded from here:
* Latest release's <a href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-src.tar.xz">source code</a>
* Latest release's <a href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-src.tar.xz.asc">source code signature</a>
* Alternatively, you can fetch the latest source code <a href="https://github.com/ossia/score">directly from Github</a>

<br/>

<h2 type="button" class="collapsible" > All downloads </h2>
<div class="collapsible-content">
<p class="download-page-layout" style="text-align: center">
<a href="https://apps.microsoft.com/store/detail/ossia-score/9NGT21X5XB19" target="_blank" class="page-button download-page"><img src="../assets/microsoft-store.svg" height="80" alt=""/>Microsoft Store</a>
<a href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-x86_64.exe" class="page-button download-page"><img src="../assets/windows_logo_2012-Black.svg" height="80" alt=""/>Windows</a>
<a href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-aarch64.exe" class="page-button download-page"><img src="../assets/windows_logo_2012-Black.svg" height="80" alt=""/>Windows on ARM</a>
</p>
<p class="download-page-layout" style="text-align: center">
<a href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-macOS-Intel.dmg" class="page-button download-page" ><img src="../assets/apple_logo_black.svg" height="80" alt=""/>macOS (Intel)</a>
<a href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-macOS-AppleSilicon.dmg" class="page-button download-page" ><img src="../assets/apple_logo_black.svg" height="80" alt=""/>macOS (AppleSilicon / M1 etc.)</a>
</p>
<p class="download-page-layout" style="text-align: center">
<a href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-linux-x86_64.AppImage" class="page-button download-page"><img src="../assets/Linux_Platform.svg" height="80" alt=""/>Linux AppImage x86_64</a>
<a href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-linux-aarch64.AppImage" class="page-button download-page"><img src="../assets/Pi64_Platform.svg" height="80" alt=""/>Linux AppImage AArch64</a>
<a href="https://flathub.org/apps/io.ossia.score" class="page-button download-page"><img src="../assets/Flatpak_Logo.svg" height="80" alt=""/>Linux (Flatpak)</a>
</p>
<p class="download-page-layout" style="text-align: center">
<a href="https://ossia.io/score-web" target="_blank" class="page-button download-page"><img src="../assets/web.png" height="80" alt=""/>WebAssembly</a>
</p>

<p style="display: flex; justify-content: center;align-content:space-evenly;">

</p>
</div>

<script src="/js/collapsible.js"></script>
