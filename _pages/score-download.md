---
layout: download-page
title:  "Download ossia score"

permalink: /score/download.html
category: site-score
---

<div class="support">
<h2> Support us! </h2>
We sell score on the Microsoft store as a way to get financial support to ensure continued development so please consider buying it <a href="https://apps.microsoft.com/store/detail/ossia-score/9NGT21X5XB19">there</a>, or funding us through <a href="https://opencollective.com/ossia">OpenCollective</a> or <a href="https://github.com/sponsors/jcelerier">Github Sponsors</a>!
</div>
## Download ossia score v{{site.score_version}}
### Released on {{site.score_released_date}}
<p class="download-page-layout" align="center">
<a id="winstore" href="https://apps.microsoft.com/store/detail/ossia-score/9NGT21X5XB19" target="_blank" class="page-button download-page"><img src="../assets/microsoft-store.svg" height="80px"/> Microsoft Store</a>
<a id="win" href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-win64.exe" class="page-button download-page"><img src="../assets/windows_logo_2012-Black.svg" height="80px"/> Windows</a>
<a id="osx-intel" href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-macOS-Intel.dmg" class="page-button download-page" ><img src="../assets/apple_logo_black.svg" height="60px"/>macOS 10.15 and later (Intel)</a>
<a id="osx-arm" href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-macOS-AppleSilicon.dmg" class="page-button download-page" ><img src="../assets/apple_logo_black.svg" height="60px"/>macOS 13 and later (AppleSilicon / M1 etc.)</a>
<a id="linux" href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-linux-x86_64.AppImage" class="page-button download-page"><img src="../assets/Linux_Platform.svg" height="80px"/>Linux AppImage x86_64</a>
<a id="pi64" href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-linux-aarch64.AppImage" class="page-button download-page"><img src="../assets/Pi64_Platform.svg" height="80px"/>Linux AppImage AArch64</a>
<a id="linux" href="https://flathub.org/apps/io.ossia.score" class="page-button download-page"><img src="../assets/Flatpak_Logo.svg" height="80px"/>Linux Flatpak</a>
</p>


Take a look at the <a href="https://github.com/ossia/score/releases/latest" target="_blank">change log</a> for the latest release information and additional downloads, or scroll down this page for more options.

<br/>

## Minimal requirements
- <i>score</i> requires a 64-bit operating system and CPU, both on desktop and embedded platforms. <br/> 
- The official releases are built with AVX2 on Windows and Linux. If your CPU does not support AVX2 please use a distribution package such as provided by MSYS2 or Arch Linux AUR.
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
Must be at least macOS Ventura 13.0.
<br/><br/>
The latest version to support back to macOS 10.15 Catalina is 3.3.2, downloadable <a href="https://github.com/ossia/score/releases/v3.3.2">here</a>.
<br/>
The latest version to support back to macOS 10.13 High Sierra is 3.1.8, downloadable <a href="https://github.com/ossia/score/releases/v3.4.1">here</a>.
</div>

<h3 type="button" class="collapsible" > Linux (Desktop) </h3>
<div class="collapsible-content">

<p> To integrate the AppImage into your system, please follow: <br>
&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/AppImage/awesome-appimage/#desktop-integration">https://github.com/AppImage/awesome-appimage/#desktop-integration</a>
<br/>
Important: AppImageLauncher below version 3.0.0 does not support the score AppImage and crashes. See <a herf="https://github.com/TheAssassin/AppImageLauncher/issues/711">this thread</a> and update your version.
</p>

All Linux distributions from at least 2022 should be supported:
<ul>
<li>The packages are built on CentOS 9.</li>
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
<li><a href="https://packages.msys2.org/package/mingw-w64-x86_64-ossia-score">MSYS2</a>: pacman -S mingw-w64-x86_64-ossia-score</li>
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
<p class="download-page-layout" align="center">
<a href="https://apps.microsoft.com/store/detail/ossia-score/9NGT21X5XB19" target="_blank" class="page-button download-page"><img src="../assets/microsoft-store.svg" height="80px"/>Microsoft Store</a>
<a href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-win64.exe" class="page-button download-page"><img src="../assets/windows_logo_2012-Black.svg" height="80px"/>Windows</a>
</p>
<p class="download-page-layout" align="center">
<a href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-macOS-Intel.dmg" class="page-button download-page" ><img src="../assets/apple_logo_black.svg" height="80px"/>macOS (Intel)</a>
<a href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-macOS-AppleSilicon.dmg" class="page-button download-page" ><img src="../assets/apple_logo_black.svg" height="80px"/>macOS (AppleSilicon / M1 etc.)</a>
</p>
<p class="download-page-layout" align="center">
<a href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-linux-x86_64.AppImage" class="page-button download-page"><img src="../assets/Linux_Platform.svg" height="80px"/>Linux AppImage x86_64</a>
<a href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-linux-aarch64.AppImage" class="page-button download-page"><img src="../assets/Pi64_Platform.svg" height="80px"/>Linux AppImage AArch64</a>
<a href="https://flathub.org/apps/io.ossia.score" class="page-button download-page"><img src="../assets/Flatpak_Logo.svg" height="80px"/>Linux (Flatpak)</a>
</p>
<p class="download-page-layout" align="center">
<a href="https://ossia.io/score-web" target="_blank" class="page-button download-page"><img src="../assets/web.png" height="80px"/>WebAssembly</a>
</p>

<p style="display: flex; justify-content: center;align-content:space-evenly;" align="center">

</p>
</div>

<script src="/js/collapsible.js"></script>
