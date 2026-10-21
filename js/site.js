// Site-wide behaviour. Loaded with `defer`, so the DOM is ready when this runs.
(function () {
  // Mobile navigation (replaces skel-layers' topButton / topPanel)
  var toggle = document.querySelector('#topButton .toggle');
  var panel = document.getElementById('topPanel');
  if (toggle && panel) {
    var setOpen = function (open) {
      panel.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.classList.toggle('nav-open', open);
    };
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      setOpen(!panel.classList.contains('open'));
    });
    panel.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('click', function (e) {
      if (panel.classList.contains('open') && !panel.contains(e.target)) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  // YouTube embeds that only load the player when clicked:
  // <button class="yt-facade" data-id="VIDEO_ID" data-title="..."><img ...></button>
  document.querySelectorAll('.yt-facade').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + btn.dataset.id + '?autoplay=1';
      iframe.title = btn.dataset.title || 'YouTube video';
      iframe.allow =
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen';
      iframe.allowFullscreen = true;
      btn.replaceWith(iframe);
    });
  });

  // Other YouTube and Vimeo embeds: the player waits in an inert <template>
  // next to a button, and only loads (and contacts the video site) on click.
  document.querySelectorAll('.video-facade').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var tpl = btn.nextElementSibling;
      if (!tpl || tpl.tagName !== 'TEMPLATE') return;
      var iframe = tpl.content.querySelector('iframe').cloneNode(true);
      var src = iframe.getAttribute('src');
      iframe.setAttribute('src', src + (src.indexOf('?') < 0 ? '?' : '&') + 'autoplay=1');
      iframe.removeAttribute('loading');
      if (btn.getAttribute('style'))
        iframe.setAttribute('style', btn.getAttribute('style') + '; width: 100%; height: auto');
      tpl.remove();
      btn.replaceWith(iframe);
    });
  });
})();

// Conversion tracking: name the clicks that matter so they can be marked as
// key events in Google Analytics and imported into Google Ads.
(function () {
  var rules = [
    {
      re: /github\.com\/ossia\/score\/releases\/download\//,
      event: 'score_download',
      method: 'direct'
    },
    {
      re: /apps\.microsoft\.com\/.*ossia-score/,
      event: 'score_download',
      method: 'microsoft_store'
    },
    { re: /flathub\.org\/apps\/io\.ossia\.score/, event: 'score_download', method: 'flathub' },
    {
      re: /github\.com\/ossia\/libossia\/releases\/download\//,
      event: 'libossia_download',
      method: 'direct'
    },
    { re: /ossia\.io\/score-web/, event: 'try_web_version' },
    { re: /discord\.(gg|com)\//, event: 'join_community', method: 'discord' },
    { re: /opencollective\.com\/ossia|github\.com\/sponsors\/jcelerier/, event: 'donate_click' }
  ];
  var platformOf = function (url) {
    if (/\.exe$|microsoft/.test(url)) return /aarch64/.test(url) ? 'windows_arm64' : 'windows';
    if (/\.dmg$/.test(url)) return /AppleSilicon/.test(url) ? 'macos_arm64' : 'macos_intel';
    if (/AppImage$/.test(url)) return /aarch64/.test(url) ? 'linux_aarch64' : 'linux_x86_64';
    if (/flathub/.test(url)) return 'linux_flatpak';
    if (/src\.tar/.test(url)) return 'source';
    return undefined;
  };
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    // Only when the visitor has accepted audience statistics (see js/consent.js)
    if (!a || !window.ossiaAnalyticsLoaded) return;
    var url = a.href;
    for (var i = 0; i < rules.length; i++) {
      if (!rules[i].re.test(url)) continue;
      window.gtag('event', rules[i].event, {
        method: rules[i].method,
        platform: platformOf(url),
        link_url: url,
        page_path: location.pathname
      });
      return;
    }
  });
})();
