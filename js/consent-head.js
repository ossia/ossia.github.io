// Consent Mode defaults and the loader for Google Analytics, shared by ossia.io
// (inlined in _includes/head.html) and score-docs (as /js/consent-head.js).
// Nothing is loaded or sent to Google until the visitor accepts; see js/consent.js.
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied'
});
gtag('set', 'ads_data_redaction', true);
window.ossiaConsentVersion = 1;
window.ossiaConsent = (function () {
  try {
    var c = JSON.parse(localStorage.getItem('ossia-consent'));
    if (!c || c.v !== window.ossiaConsentVersion) return null;
    var days = (Date.now() - Date.parse(c.date)) / 864e5;
    return days >= 0 && days < 182 ? c : null;
  } catch {
    return null;
  }
})();
window.ossiaLoadAnalytics = function (c, now) {
  if (window.ossiaAnalyticsLoaded || !c || !c.analytics) return;
  window.ossiaAnalyticsLoaded = true;
  gtag('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: c.ads ? 'granted' : 'denied',
    ad_user_data: c.ads ? 'granted' : 'denied'
  });
  gtag('js', new Date());
  gtag('config', 'G-GCNDFW0NH6', {
    cookie_expires: 34128000,
    cookie_update: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });
  var load = function () {
    if (window.ossiaAnalyticsScript) return;
    window.ossiaAnalyticsScript = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-GCNDFW0NH6';
    document.head.appendChild(s);
  };
  if (now) {
    load();
    return;
  }
  // Returning visitors who consented: load once the page has rendered,
  // or on the first interaction so that early clicks are still measured.
  window.addEventListener('load', function () {
    setTimeout(load, 1500);
  });
  ['pointerdown', 'keydown', 'scroll'].forEach(function (ev) {
    window.addEventListener(ev, load, { once: true, passive: true });
  });
};
if (window.ossiaConsent && !navigator.globalPrivacyControl)
  window.ossiaLoadAnalytics(window.ossiaConsent, false);

