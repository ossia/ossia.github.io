---
# Strings from _data/i18n/*.yml, then the code in _includes/consent.js
---
window.ossiaConsentStrings = {
{%- for l in site.data.languages %}
  {%- assign strings = site.data.i18n[l.code].consent %}
  {%- if strings %}
  {%- assign privacy = site.pages | where: "ref", "privacy" | where: "lang", l.code | first %}
  {%- unless privacy %}{% assign privacy = site.pages | where: "ref", "privacy" | where: "lang", "en" | first %}{% endunless %}
  {{ l.code | jsonify }}: Object.assign({{ strings | jsonify }}, { policyUrl: {{ privacy.url | jsonify }} }),
  {%- endif %}
{%- endfor %}
};
{% include consent.js %}
