// Site-wide behaviour. Loaded with `defer`, so the DOM is ready when this runs.
(function() {
  // Mobile navigation (replaces skel-layers' topButton / topPanel)
  var toggle = document.querySelector('#topButton .toggle');
  var panel = document.getElementById('topPanel');
  if (toggle && panel) {
    var setOpen = function(open) {
      panel.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.classList.toggle('nav-open', open);
    };
    toggle.addEventListener('click', function(e) {
      e.stopPropagation();
      setOpen(!panel.classList.contains('open'));
    });
    panel.addEventListener('click', function(e) {
      if (e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('click', function(e) {
      if (panel.classList.contains('open') && !panel.contains(e.target)) setOpen(false);
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  // YouTube embeds that only load the player when clicked:
  // <button class="yt-facade" data-id="VIDEO_ID" data-title="..."><img ...></button>
  document.querySelectorAll('.yt-facade').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + btn.dataset.id + '?autoplay=1';
      iframe.title = btn.dataset.title || 'YouTube video';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen';
      iframe.allowFullscreen = true;
      btn.replaceWith(iframe);
    });
  });
})();

