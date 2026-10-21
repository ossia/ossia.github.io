---
layout: gallery-page
title: "Gallery"
permalink: /gallery.html
category: site-gallery
description: "Artworks, installations, concerts and shows created with ossia score and libossia by artists around the world."
---
{%- assign works = site.data.gallery -%}
{%- assign with_image = works | where_exp: "w", "w.image" -%}
{%- assign without_image = works | where_exp: "w", "w.image == nil" -%}
<link rel="stylesheet" href="/css/gallery.css" />

<section class="g2">

<p class="g2-intro">Artworks, installations, concerts and shows made with ossia.</p>

<div class="g2-filters" role="group" aria-label="Filter works by type">
    <button type="button" class="g2-filter is-active" data-filter="all" aria-pressed="true">All</button>
    <button type="button" class="g2-filter" data-filter="installation" aria-pressed="false">Installations</button>
    <button type="button" class="g2-filter" data-filter="performance" aria-pressed="false">Performances</button>
    <button type="button" class="g2-filter" data-filter="stage" aria-pressed="false">Stage</button>
    <button type="button" class="g2-filter" data-filter="museum" aria-pressed="false">Museums</button>
    <button type="button" class="g2-filter" data-filter="education" aria-pressed="false">Education</button>
</div>

<div class="g2-grid">
{%- for w in with_image %}
    <article class="g2-card{% if w.featured %} g2-card--wide{% endif %}" data-kind="{{ w.kind | join: ' ' }}">
        {%- if w.url %}<a class="g2-media" href="{{ w.url }}" tabindex="-1" aria-hidden="true">{% else %}<div class="g2-media">{% endif %}
            <img src="/assets/gallery/{{ w.image | uri_escape }}" alt="{{ w.title | escape }} by {{ w.artists | escape }}" {% if forloop.index <= 4 %}{% if forloop.first %}fetchpriority="high" {% endif %}{% else %}loading="lazy" {% endif %}decoding="async" />
            {%- if w.award %}<span class="g2-award">{{ w.award }}</span>{% endif %}
            {%- if w.credit %}<span class="g2-credit">&copy; {{ w.credit }}</span>{% endif %}
        {%- if w.url %}</a>{% else %}</div>{% endif %}
        <div class="g2-body">
            <h2 class="g2-title">{% if w.url %}<a href="{{ w.url }}">{{ w.title }}</a>{% else %}{{ w.title }}{% endif %}</h2>
            <p class="g2-artists">{{ w.artists }}</p>
            {%- if w.year or w.place %}
            <p class="g2-meta">{{ w.year }}{% if w.year and w.place %} · {% endif %}{{ w.place }}</p>
            {%- endif %}
            {%- if w.ossia %}
            <p class="g2-ossia">{{ w.ossia }}</p>
            {%- endif %}
            {%- if w.sat %}
            <p class="g2-sat">In collaboration with <a href="https://sat.qc.ca">SAT</a></p>
            {%- endif %}
            {%- if w.links %}
            <p class="g2-links">{% for l in w.links %}<a href="{{ l.url }}">{{ l.label }}</a>{% unless forloop.last %} · {% endunless %}{% endfor %}</p>
            {%- endif %}
        </div>
    </article>
{%- endfor %}
</div>

<h2 class="g2-heading">More works</h2>

<table class="g2-table">
    <thead>
        <tr><th>Year</th><th>Work</th><th>Artists</th><th>Where</th><th>With ossia</th></tr>
    </thead>
    <tbody>
    {%- for w in without_image %}
        <tr data-kind="{{ w.kind | join: ' ' }}">
            <td data-label="Year">{{ w.year }}</td>
            <td data-label="Work" class="g2-table-title">{% if w.url %}<a href="{{ w.url }}">{{ w.title }}</a>{% else %}{{ w.title }}{% endif %}{% if w.award %}<br/><span class="g2-table-award">{{ w.award }}</span>{% endif %}</td>
            <td data-label="Artists">{{ w.artists }}{% if w.sat %}<br/><span class="g2-table-sat">In collaboration with <a href="https://sat.qc.ca">SAT</a></span>{% endif %}</td>
            <td data-label="Where">{{ w.place }}</td>
            <td data-label="With ossia">{{ w.ossia }}</td>
        </tr>
    {%- endfor %}
    </tbody>
</table>

</section>

<script>
(function () {
    var buttons = document.querySelectorAll('.g2-filter');
    var items = document.querySelectorAll('.g2-card, .g2-table tbody tr');
    buttons.forEach(function (b) {
        b.addEventListener('click', function () {
            var f = b.dataset.filter;
            buttons.forEach(function (o) {
                var on = o === b;
                o.classList.toggle('is-active', on);
                o.setAttribute('aria-pressed', on ? 'true' : 'false');
            });
            items.forEach(function (el) {
                var kinds = (el.dataset.kind || '').split(' ');
                el.hidden = f !== 'all' && kinds.indexOf(f) === -1;
            });
        });
    });
})();
</script>
