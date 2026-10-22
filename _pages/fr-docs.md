---
layout: page
lang: fr
title:  "Documentation"

permalink: /fr/docs.html
ref: docs
category: site-docs
description: "Documentation d'ossia score et de libossia : manuel d'utilisation, tutoriels, guides vidéo, références d'API et ressources de la communauté."
---
<div class="menu" style="display:flex; align-items:center; width: 100%;margin:auto; padding: auto; ">
         <a href="https://www.youtube.com/watch?v=R-3d8K6gQkw&list=PLIHLSiZpIa6YoY1_aW1yetDgZ7tZcxfEC&index=1" class="menu-item panel" target="_blank" ><span class="icon-svg icon-video"></span>Tutoriels
         <p class="description">Atelier en ligne</p></a>
         <a href="https://ossia.io/score-docs/" target="_blank"  class="menu-item panel"><span class="icon-svg icon-documentation"></span>Documentation
         <p class="description">de score (en anglais)</p></a>
         <a href="/blog.html" class="menu-item panel"><span class="icon-svg icon-blog"></span>Blog
         <p class="description">Articles</p></a>
         <a href="https://forum.ossia.io/"  target="_blank" class="menu-item panel"><span class="icon-svg icon-forum"></span>Forum
         <p class="description">Posez toutes vos questions !</p></a>
         <a href="https://discord.gg/8Hzm4UduaS"  target="_blank" class="menu-item panel"><span class="icon-svg icon-chat"></span>Chat<p class="description">Venez discuter avec nous sur Discord !</p></a>
</div>

<div style="width: 100%;">
<h2 class="page-title" style="text-align: center;">FAQ</h2>

<h3 class="faq">Généralités</h3>
<p type="button" class="collapsible" > Qu'est-ce qu'ossia score ?</p>
<div class="collapsible-content">
ossia score est un séquenceur interactif et intermédia. Il permet de séquencer dans le temps, sur une timeline, différents types de médias et de paramètres (par exemple des messages OSC, des fichiers son, des effets vidéo...). La timeline a des fonctions interactives : on peut indiquer qu'une partie du score s'exécutera lorsqu'un événement se produit, comme une note jouée, etc.
</div>

<p type="button" class="collapsible" > Est-ce gratuit ?</p>
<div class="collapsible-content">
Oui ! L'ensemble est disponible sous licence GNU GPLv3 (pour ossia score) et GNU LGPLv3 (pour libossia).
On peut le copier, le redistribuer, l'utiliser, le partager et le modifier autant qu'on le souhaite.<br/>
Nous sommes convaincus que les artistes du monde entier ont besoin d'outils libres.
</div>

<p type="button" class="collapsible" > Peut-on l'utiliser dans un cadre commercial ou en production ?</p>
<div class="collapsible-content">
Oui ! La licence permet de faire tout ce qu'on veut avec le logiciel : œuvres,
spectacles, production musicale, installations artistiques et muséales, etc., sans aucune limitation de fonctionnalités, de durée ou
quoi que ce soit d'autre.<br/>
Le logiciel est fourni *sans aucune garantie* ; il est toutefois possible de contacter notre équipe à
<a href="mailto:contact@ossia.io">contact@ossia.io</a> pour du support payant.
</div>

<p type="button" class="collapsible" > Comment aider ?</p>
<div class="collapsible-content">
Le plus simple pour contribuer est de faire un don au <a href="https://opencollective.com/ossia">fonds de développement</a>.

Une très bonne façon de participer est aussi de contribuer par des rapports de bugs et des améliorations du code.
Voir la page <a href="/fr/projet.html">Contribuer</a> pour plus d'informations.
</div>

<h3 class="faq">Dépannage</h3>

<p type="button"  class="collapsible"> score vient de planter</p>
<div class="collapsible-content">
    Envoyez-nous un rapport de bug détaillé décrivant ce que vous faisiez au moment du plantage,
    avec le journal de plantage s'il y en a un, sur le forum, le chat ou les <a href="https://github.com/ossia/score/issues">issues GitHub (de préférence)</a>.
    Merci !
</div>

<p type="button"  class="collapsible"> score plante dès le premier démarrage sous Windows</p>
<div class="collapsible-content">
    Vérifiez que le pilote ASIO de JACK2 n'est pas installé : il est connu pour provoquer des <a href="https://github.com/jackaudio/jack2/issues/275">plantages au démarrage sous Windows</a> pour de nombreux logiciels. On peut vérifier la clé suivante dans l'éditeur du registre Windows : <b>HKEY_LOCAL_MACHINE\SOFTWARE\ASIO</b>.
</div>

<p type="button" class="collapsible"> La lecture ne démarre pas</p>
<div class="collapsible-content">
     La plupart du temps, cela vient de réglages audio incorrects.
</div>

<p type="button" class="collapsible"> La partition se joue mais il n'y a pas de son</p>
<div class="collapsible-content">
     La plupart du temps, cela vient de réglages audio incorrects.
</div>

<p type="button" class="collapsible"> La lecture semble se bloquer de façon aléatoire sous Linux</p>
<div class="collapsible-content">
    C'est dû à un <a href="https://portaudio.music.columbia.narkive.com/3V9hsUak/pa-linux-alsa-c-3636-assertion-failed-with-hack-fix">bug de PortAudio</a>.
    Utilisez plutôt le backend JACK.
</div>

<p type="button" class="collapsible"> Certains plug-ins VST et caméras virtuelles ne fonctionnent pas sur Mac</p>
<div class="collapsible-content">
    Il s'agit probablement de <a href="https://stackoverflow.com/questions/61114738/are-macos-virtual-webcams-inherently-incompatible-with-10-14s-hardened-runtime">problèmes de macOS liés à la sécurité</a>. <br/>
    Pour les contourner, on peut suivre les étapes données dans le lien ci-dessus pour retirer la signature du binaire de score, ce qui permet alors à score d'ouvrir les webcams virtuelles et tous les plug-ins audio.
</div>

<p type="button" class="collapsible"> La minimap est difficile à utiliser sur Mac</p>
<div class="collapsible-content">
    Il s'agit probablement de <a href="https://stackoverflow.com/questions/61843481/macos-simulated-mouse-event-only-works-when-launching-binary-not-application-b">ce problème de macOS</a>. <br/>
    Pour le contourner, on peut ouvrir score en faisant un clic droit sur Score.app, en choisissant "Afficher le contenu du paquet", en allant dans "Score.app/Contents/MacOS" et en lançant le binaire "score" depuis cet endroit.
</div>

</div>

<br/>

<br/>

<p style="text-align: center">
<a href="https://forum.ossia.io/" class="page-button"  target="_blank" >Si votre question n'est pas ici, posez-la sur le forum !</a>
</p>

<script src="/js/collapsible.js"></script>
