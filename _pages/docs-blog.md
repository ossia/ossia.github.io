---
layout: wide-page
title:  "Blog"

permalink: /blog.html
category: site-docs
description: "News, release announcements, case studies and technical articles about ossia score, libossia and C++ for creative coding."
---
{% comment%}
Here we generate all the categories.
{% endcomment%}

{% assign rawcats = "" %}
{% for post in site.posts %}
{% assign tcats = post.category | join:'|' | append:'|' %}
{% assign rawcats = rawcats | append:tcats %}
{% endfor %}

{% assign rawcats = rawcats | split:'|' | sort %}

{% assign cats = "" %}

{% for cat in rawcats %}
{% if cat != "" %}

{% if cats == "" %}
{% assign cats = cat | split:'|' %}
{% endif %}

{% unless cats contains cat %}
{% assign cats = cats | join:'|' | append:'|' | append:cat | split:'|' %}
{% endunless %}
{% endif %}
{% endfor %}

<div style="display: flex; justify-content: center; margin: 0;padding: 0; width: 100%; ">
    <ul class="posts">
        {% for post in site.posts %}
            <li class="wrapper blog" >
                <h2 class="blog title"><a href="{{ post.url }}">{{ post.title }}</a></h2>
                <p class="blog post-meta">{{ post.categories }}  •  {{ post.date | date: "%b %-d, %Y" }}  •  {{post.author}}</p>
                    {% if post.image %}
                        <div class="blog-image-header">
                            <img src="{{ post.thumbnail | default: post.image }}" alt="{{ post.title | escape }}" loading="lazy">
                        </div>
                    {% endif %}
                    {{ post.excerpt }}
            </li>
        {% endfor %}
    </ul>
    <!-- Sidebar -->
    <section class="categories">
            <h2 class="blog category-title">Posts by category</h2>
            {% for ct in cats %}
                <h3 class="blog category" style="margin:0;"> {{ ct }} </h3>
                    {% for post in site.posts %}
                        {% if post.category contains ct %}
                        <a class="link-cat" href="{{ post.url }}">{{ post.title }} </a>
                    {% endif %}
                {% endfor %}
        {% endfor %}
    </section>
</div>
