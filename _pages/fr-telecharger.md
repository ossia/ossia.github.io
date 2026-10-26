---
layout: download-page
lang: fr
title:  "Télécharger ossia score"

permalink: /fr/telecharger.html
ref: download
category: site-score
description: "Téléchargez ossia score %VERSION% pour Windows, macOS et Linux. Logiciel libre et gratuit, aussi disponible sur le Microsoft Store, Flathub, Homebrew et AUR."
---

<div class="support">
<h2> Soutenez-nous ! </h2>
ossia score est gratuit sur toutes les plateformes. Il est développé par <a href="/fr/association.html">ossia.io, une association loi 1901</a> ; l'acheter sur le <a href="https://apps.microsoft.com/store/detail/ossia-score/9NGT21X5XB19">Microsoft Store</a>, faire un don sur <a href="https://opencollective.com/ossia">Open Collective</a> ou soutenir son développeur principal sur <a href="https://github.com/sponsors/jcelerier">GitHub Sponsors</a> finance son développement.
</div>
{%- assign released_day = site.score_released_date | date: "%-d" -%}
{%- assign released_month = site.score_released_date | date: "%-m" | minus: 1 -%}
{%- assign released_year = site.score_released_date | date: "%Y" %}
<h1 class="download-title">Télécharger ossia score v{{site.score_version}}</h1>
<p class="download-date">Sortie le {{ released_day }} {{ site.data.i18n.fr.months[released_month] }} {{ released_year }}</p>
<p id="download-current" class="download-page-layout" style="text-align: center">
<a data-os="win" href="https://apps.microsoft.com/store/detail/ossia-score/9NGT21X5XB19" target="_blank" class="page-button download-page"><img src="../assets/microsoft-store.svg" height="80" alt=""/>Microsoft Store</a>
<a data-os="win" href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-x86_64.exe" class="page-button download-page"><img src="../assets/windows_logo_2012-Black.svg" height="80" alt=""/>Windows</a>
<a data-os="win-arm" href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-aarch64.exe" class="page-button download-page"><img src="../assets/windows_logo_2012-Black.svg" height="80" alt=""/>Windows sur ARM</a>
<a data-os="mac" href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-macOS-AppleSilicon.dmg" class="page-button download-page"><img src="../assets/apple_logo_black.svg" height="60" alt=""/>macOS 12 et suivants (Apple Silicon)</a>
<a data-os="mac" href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-macOS-Intel.dmg" class="page-button download-page"><img src="../assets/apple_logo_black.svg" height="60" alt=""/>macOS 12 et suivants (Intel)</a>
<a data-os="linux linux-x86_64" href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-linux-x86_64.AppImage" class="page-button download-page"><img src="../assets/Linux_Platform.svg" height="80" alt=""/>Linux AppImage x86_64</a>
<a data-os="linux linux-aarch64" href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-linux-aarch64.AppImage" class="page-button download-page"><img src="../assets/Pi64_Platform.svg" height="80" alt=""/>Linux AppImage AArch64</a>
<a data-os="linux linux-x86_64 linux-aarch64" href="https://flathub.org/apps/io.ossia.score" class="page-button download-page"><img src="../assets/Flatpak_Logo.svg" height="80" alt=""/>Linux Flatpak</a>
<a data-os="web" href="https://ossia.io/score-web" target="_blank" class="page-button download-page"><img src="../assets/web.png" height="80" alt=""/>WebAssembly</a>
</p>
<div id="download-others-block" style="display: none;">
<p class="download-others-title" style="text-align: center">Autres plateformes</p>
<p id="download-others" class="download-page-layout" style="text-align: center"></p>
</div>


Les nouveautés de chaque version sont décrites dans le <a href="https://github.com/ossia/score/releases/latest" target="_blank">journal des modifications</a> (en anglais), qui donne aussi accès à d'autres téléchargements ; d'autres options d'installation sont détaillées plus bas sur cette page.

<br/>

## Configuration minimale
- <i>score</i> nécessite un système d'exploitation et un processeur 64 bits, sur ordinateur comme sur les plateformes embarquées. <br/>
- Sur x86_64, les versions officielles pour Windows et Linux nécessitent un processeur compatible AVX2 ; sinon, il faut utiliser un paquet de distribution, comme ceux de MSYS2 ou de l'AUR d'Arch Linux.
- Processeur à 800 MHz, 512 Mo de RAM : <i>score</i> fonctionne par exemple sur un Raspberry Pi Zero 2W.
- Pour le rendu graphique, une carte graphique compatible au moins avec OpenGL 3.2, Vulkan, Direct3D 11 ou Metal.
- Le [NDI Runtime](https://github.com/DistroAV/DistroAV/discussions/831) (v5 ou plus) peut être nécessaire pour utiliser NDI.
- Le [SDK UltraLeap](https://leap2.ultraleap.com/downloads/) (Gemini ou Hyperion au moins) peut être nécessaire pour utiliser les capteurs UltraLeap.

<h3 type="button" class="collapsible" > Windows </h3>
<div class="collapsible-content">
<ul>
<li> Windows 10 et 11 sont pris en charge, pas les versions antérieures. </li>
<li> <i>score</i> et <i>libossia</i> utilisent Bonjour pour la découverte automatique des appareils OSCQuery : sous Windows, il faut donc installer les <a href="https://support.apple.com/kb/dl999?locale=fr_FR">Services d'impression Bonjour</a>. </li>
</ul>
</div>

<h3 type="button" class="collapsible" > macOS </h3>
<div class="collapsible-content">
macOS 12 Monterey au minimum ; les fonctionnalités d'IA nécessitent macOS 13 Ventura ou plus récent.
<br/><br/>
La dernière version pour macOS 10.15 Catalina et macOS 11 Big Sur est la 3.4.1, téléchargeable depuis la <a href="https://github.com/ossia/score/releases/tag/v3.4.1">page de la version 3.4.1</a>.
<br/>
La dernière version pour macOS 10.13 High Sierra est la 3.1.8, téléchargeable depuis la <a href="https://github.com/ossia/score/releases/tag/v3.1.8">page de la version 3.1.8</a>.
</div>

<h3 type="button" class="collapsible" > Linux (ordinateur) </h3>
<div class="collapsible-content">

<p> Pour intégrer l'AppImage au système, voir : <br>
&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://github.com/AppImage/awesome-appimage/#desktop-integration">https://github.com/AppImage/awesome-appimage/#desktop-integration</a>
<br/>
Attention : AppImageLauncher avant la version 3.0.0 ne prend pas en charge l'AppImage de score et plante ; voir <a href="https://github.com/TheAssassin/AppImageLauncher/issues/711">cette discussion</a>, et mettre à jour AppImageLauncher.
</p>

Toutes les distributions Linux depuis 2022 environ devraient fonctionner :
<ul>
<li>Les paquets sont compilés sur AlmaLinux 9.</li>
<li>Ubuntu 22.04 et suivantes</li>
<li>Debian Bookworm, etc.</li>
<li>Fedora 36 et suivantes</li>
<li>Le système doit avoir au moins glibc 2.34, ainsi que X11, ALSA, libGL, librt, libdbus et libEGL ; ces paquets sont présents sur toutes les distributions de bureau courantes (Debian, Ubuntu, Fedora, OpenSUSE, Arch Linux, etc.).</li>
<li>JACK ou PipeWire pour l'audio, et Avahi pour Bonjour, sont recommandés.</li>
<li>libbluez peut être nécessaire pour les Wiimotes (qui passent par Bluetooth) et pour Bluetooth LE.</li>
<li>La prise en charge de Wayland est encore expérimentale, en particulier sur les bureaux basés sur GNOME.</li>
</ul>
</div>

<h3 type="button" class="collapsible" > Ubuntu 22.04 et suivantes</h3>
<div class="collapsible-content">
Sous Ubuntu, <i>fuse2</i> doit être installé, car il est nécessaire pour lancer les AppImages :

<pre>
sudo add-apt-repository universe
sudo apt install fuse2
</pre>
</div>

<h3 type="button" class="collapsible" > Linux (Raspberry Pi, embarqué...) </h3>
<div class="collapsible-content">
Lire la <a href="https://ossia.io/score-docs/in-depth/embedded.html">documentation</a> (en anglais) avant d'utiliser score sur un Raspberry Pi.
<br/>
Le paquet pour Raspberry Pi a aussi été testé sur Arch Linux ARM et Asahi Linux (Mac M1).
<br/>
Les versions Flatpak et Nix existent aussi en AArch64.
</div>

<br/>

## Installer avec un gestionnaire de paquets

<ul>
<li><a href="https://flathub.org/apps/io.ossia.score">Flatpak</a> : flatpak install flathub io.ossia.score</li>
<li><a href="https://aur.archlinux.org/packages/ossia-score">Arch Linux (AUR)</a> : paru -S ossia-score</li>
<li><a href="https://search.nixos.org/packages?channel=unstable&amp;show=ossia-score">Nix</a> : nix-shell -p ossia-score</li>
<li><a href="https://www.freshports.org/multimedia/ossia-score">FreeBSD</a> : pkg install ossia-score</li>
<li><a href="https://packages.msys2.org/base/mingw-w64-ossia-score">MSYS2</a> : pacman -S mingw-w64-ucrt-x86_64-ossia-score (UCRT64), mingw-w64-clang-x86_64-ossia-score (CLANG64) ou mingw-w64-clang-aarch64-ossia-score (CLANGARM64)</li>
<li><a href="https://winget.run/pkg/ossia/score">WinGet</a> : winget install -e --id ossia.score</li>
<li><a href="https://formulae.brew.sh/cask/ossia-score">Homebrew</a> : brew install --cask ossia-score</li>
</ul>

<br/>

## Code source

Le code source de la dernière version :
* <a href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-src.tar.xz">code source</a> de la dernière version
* <a href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-src.tar.xz.asc">signature</a> du code source
* ou bien le code le plus récent, <a href="https://github.com/ossia/score">directement sur GitHub</a>

<br/>

<h2 type="button" class="collapsible" > Tous les téléchargements </h2>
<div class="collapsible-content">
<p class="download-page-layout" style="text-align: center">
<a href="https://apps.microsoft.com/store/detail/ossia-score/9NGT21X5XB19" target="_blank" class="page-button download-page"><img src="../assets/microsoft-store.svg" height="80" alt=""/>Microsoft Store</a>
<a href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-x86_64.exe" class="page-button download-page"><img src="../assets/windows_logo_2012-Black.svg" height="80" alt=""/>Windows</a>
<a href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-aarch64.exe" class="page-button download-page"><img src="../assets/windows_logo_2012-Black.svg" height="80" alt=""/>Windows sur ARM</a>
</p>
<p class="download-page-layout" style="text-align: center">
<a href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-macOS-Intel.dmg" class="page-button download-page" ><img src="../assets/apple_logo_black.svg" height="80" alt=""/>macOS (Intel)</a>
<a href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-macOS-AppleSilicon.dmg" class="page-button download-page" ><img src="../assets/apple_logo_black.svg" height="80" alt=""/>macOS (Apple Silicon / M1, etc.)</a>
</p>
<p class="download-page-layout" style="text-align: center">
<a href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-linux-x86_64.AppImage" class="page-button download-page"><img src="../assets/Linux_Platform.svg" height="80" alt=""/>Linux AppImage x86_64</a>
<a href="https://github.com/ossia/score/releases/download/v{{site.score_version}}/ossia.score-{{site.score_version}}-linux-aarch64.AppImage" class="page-button download-page"><img src="../assets/Pi64_Platform.svg" height="80" alt=""/>Linux AppImage AArch64</a>
<a href="https://flathub.org/apps/io.ossia.score" class="page-button download-page"><img src="../assets/Flatpak_Logo.svg" height="80" alt=""/>Linux (Flatpak)</a>
</p>
<p class="download-page-layout" style="text-align: center">
<a href="https://ossia.io/score-web" target="_blank" class="page-button download-page"><img src="../assets/web.png" height="80" alt=""/>WebAssembly</a>
</p>
</div>

<script src="/js/collapsible.js"></script>
