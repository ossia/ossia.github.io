// Cookie consent for Google Analytics and Google Ads measurement.
// Published as /js/consent.js, with the strings of every language before it.
//
// - Nothing is loaded before consent (Consent Mode "basic", see _includes/head.html).
// - Refuse, accept (visit statistics) and customize are equally prominent; the banner is
//   not modal. Ad measurement is only enabled from the settings.
// - The choice (accept or refuse) is kept 6 months, in this browser only.
// - Global Privacy Control counts as a refusal: no banner, settings still available.
// - "Cookie settings" in the footer reopens the choices; withdrawing deletes the cookies.
(function () {
  var KEY = 'ossia-consent';
  var VERSION = window.ossiaConsentVersion || 1;

  // Strings of every language, from _data/i18n/*.yml (see /js/consent.js).
  // A language without its own strings uses the English ones.
  var S = window.ossiaConsentStrings;
  var lang = (document.documentElement.lang || 'en').split('-')[0];
  if (!S[lang]) lang = 'en';
  var T = Object.assign({}, S.en, S[lang], { lang: lang });

  function el(tag, attrs, text) {
    var e = document.createElement(tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    if (text) e.textContent = text;
    return e;
  }

  function store(c) {
    try {
      localStorage.setItem(KEY, JSON.stringify(c));
    } catch {
      // Storage blocked (private mode, disabled site data): the choice is not remembered
    }
  }

  function deleteGoogleCookies() {
    var host = location.hostname;
    var domains = ['', host, '.' + host, '.' + host.split('.').slice(-2).join('.')];
    document.cookie.split(';').forEach(function (c) {
      var name = c.split('=')[0].trim();
      if (!/^(_ga|_gid|_gat|_gcl)/.test(name)) return;
      domains.forEach(function (d) {
        document.cookie =
          name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/' + (d ? '; domain=' + d : '');
      });
    });
  }

  var live = el('div', { class: 'consent-live', 'aria-live': 'polite' });
  document.body.appendChild(live);

  function apply(analytics, ads) {
    var before = window.ossiaConsent;
    var c = {
      v: VERSION,
      analytics: !!analytics,
      ads: !!(analytics && ads),
      date: new Date().toISOString().slice(0, 10)
    };
    store(c);
    window.ossiaConsent = c;
    hideBanner();
    live.textContent = T.saved;
    if (c.analytics) {
      if (window.ossiaAnalyticsLoaded && before && before.ads !== c.ads) {
        if (window.gtag)
          gtag('consent', 'update', {
            ad_storage: c.ads ? 'granted' : 'denied',
            ad_user_data: c.ads ? 'granted' : 'denied'
          });
      }
      if (window.ossiaLoadAnalytics) window.ossiaLoadAnalytics(c, true);
    } else if (window.ossiaAnalyticsLoaded || (before && before.analytics)) {
      // Withdrawal: deny, delete Google's cookies and reload without gtag.js.
      if (window.gtag)
        gtag('consent', 'update', {
          analytics_storage: 'denied',
          ad_storage: 'denied',
          ad_user_data: 'denied'
        });
      deleteGoogleCookies();
      setTimeout(function () {
        location.reload();
      }, 300);
    }
  }

  // --- First layer: banner -------------------------------------------------
  var banner = null;
  function showBanner() {
    if (banner) return;
    banner = el('section', {
      class: 'consent-banner',
      role: 'region',
      'aria-labelledby': 'consent-title',
      lang: T.lang
    });
    banner.appendChild(el('h2', { id: 'consent-title' }, T.title));
    var p = el('p', {}, T.text + ' ');
    p.appendChild(el('a', { href: T.policyUrl }, T.policy));
    banner.appendChild(p);
    var row = el('div', { class: 'consent-buttons' });
    var refuse = el('button', { type: 'button' }, T.refuse);
    var accept = el('button', { type: 'button' }, T.accept);
    var custom = el('button', { type: 'button' }, T.customize);
    refuse.addEventListener('click', function () {
      apply(false, false);
    });
    // The banner only describes visit statistics, so Accept only enables those;
    // ad measurement is a separate choice in the settings.
    accept.addEventListener('click', function () {
      apply(true, false);
    });
    custom.addEventListener('click', function () {
      openSettings(custom);
    });
    row.appendChild(refuse);
    row.appendChild(accept);
    row.appendChild(custom);
    banner.appendChild(row);
    document.body.appendChild(banner);
    // Never hide the focused element behind the banner (WCAG 2.4.11)
    document.documentElement.style.scrollPaddingBottom = banner.offsetHeight + 16 + 'px';
  }
  function hideBanner() {
    if (!banner) return;
    banner.remove();
    banner = null;
    document.documentElement.style.scrollPaddingBottom = '';
  }

  // --- Second layer: settings dialog ---------------------------------------
  var dialog = null,
    statsBox,
    adsBox,
    opener = null;
  function buildDialog() {
    dialog = el('dialog', {
      class: 'consent-dialog',
      'aria-labelledby': 'consent-dialog-title',
      lang: T.lang
    });
    dialog.appendChild(el('h2', { id: 'consent-dialog-title' }, T.settings));
    function option(id, label, desc) {
      var wrap = el('div', { class: 'consent-option' });
      var box = el('input', {
        type: 'checkbox',
        role: 'switch',
        id: id,
        'aria-describedby': id + '-desc'
      });
      var lab = el('label', { for: id }, label);
      wrap.appendChild(box);
      wrap.appendChild(lab);
      wrap.appendChild(el('p', { id: id + '-desc' }, desc));
      dialog.appendChild(wrap);
      return box;
    }
    statsBox = option('consent-stats', T.stats, T.statsDesc);
    adsBox = option('consent-ads', T.ads, T.adsDesc);
    statsBox.addEventListener('change', function () {
      adsBox.disabled = !statsBox.checked;
      if (!statsBox.checked) adsBox.checked = false;
    });
    dialog.appendChild(el('p', { class: 'consent-note' }, T.always));
    var who = el('p', { class: 'consent-note' }, T.who + ' ');
    who.appendChild(el('a', { href: T.policyUrl }, T.policy));
    dialog.appendChild(who);
    var row = el('div', { class: 'consent-buttons' });
    var refuse = el('button', { type: 'button' }, T.refuseAll);
    var save = el('button', { type: 'button' }, T.save);
    var accept = el('button', { type: 'button' }, T.acceptAll);
    refuse.addEventListener('click', function () {
      closeSettings();
      apply(false, false);
    });
    save.addEventListener('click', function () {
      closeSettings();
      apply(statsBox.checked, adsBox.checked);
    });
    accept.addEventListener('click', function () {
      closeSettings();
      apply(true, true);
    });
    row.appendChild(refuse);
    row.appendChild(save);
    row.appendChild(accept);
    dialog.appendChild(row);
    // Esc closes without changing the stored choice; focus returns to the opener
    dialog.addEventListener('close', function () {
      if (opener) opener.focus();
    });
    document.body.appendChild(dialog);
  }
  function openSettings(from) {
    if (!dialog) buildDialog();
    opener = from || null;
    var c = window.ossiaConsent;
    statsBox.checked = !!(c && c.analytics);
    adsBox.checked = !!(c && c.ads);
    adsBox.disabled = !statsBox.checked;
    if (dialog.showModal) dialog.showModal();
    else dialog.setAttribute('open', '');
  }
  function closeSettings() {
    if (dialog.close) dialog.close();
    else dialog.removeAttribute('open');
  }

  // --- Footer button -------------------------------------------------------
  document.querySelectorAll('[data-consent-settings]').forEach(function (b) {
    b.textContent = T.settings;
    b.hidden = false;
    b.addEventListener('click', function () {
      openSettings(b);
    });
  });

  // Ask only when there is no valid choice, and never when the browser sends
  // Global Privacy Control: that already says no.
  if (navigator.globalPrivacyControl && window.ossiaConsent && window.ossiaConsent.analytics)
    apply(false, false);
  else if (!window.ossiaConsent && !navigator.globalPrivacyControl) showBanner();
})();
