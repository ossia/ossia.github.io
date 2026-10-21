# Building the doc locally

## First setup

First install `rbenv` and `ruby-build` through the package manager
Then run the following commands in a shell:

```
$ eval "$(rbenv init -)"
$ rbenv install 3.3.7
$ rbenv shell 3.3.7
$ bundle update
```

## Building the docs

```
$ eval "$(rbenv init -)"
$ rbenv shell 3.3.7

# Check that ruby is not /usr/bin/ruby with: 
$ which ruby

# If not do: 
$ export PATH=$HOME/.rbenv/versions/2.7.3/bin:$PATH

# Finally:
$ bundle exec jekyll serve
```

Wait a bit (30 seconds or something like that).
Then the doc will be accessible from a web browser at http://localhost:4000 by default.

# Translations

Pages are in English unless their front matter has `lang:`. A page and its
translations share the same `ref:`, for instance `_pages/uc-show-control.md`
(`/show-control.html`) and `_pages/fr-regie-spectacle.md`
(`/fr/regie-spectacle.html`) both have `ref: show-control`; the language menu
in the header and the `hreflang` links are generated from that.

- Languages: `_data/languages.yml` (order of the menu, Open Graph locale, page
  the menu leads to when the current page is not translated).
- Interface strings (menu, footer, use-case pages, cookie banner):
  `_data/i18n/<lang>.yml`, with the same keys as `en.yml`; a missing key uses
  the English text.
- Use-case pages: `_data/use_cases.yml` gives their order and group; each page
  has `nav_title` and `blurb` for the lists. A use case that is not translated
  yet is listed with its English page.

To add a language, add it to `_data/languages.yml`, create
`_data/i18n/<lang>.yml`, then translate pages with `lang: <lang>`, the same
`ref` as the English page, and a permalink under `/<lang>/`.
`npm run check:i18n` lists what is not translated yet in each language.

# Color scheme
<img src="/assets/color_scheme.png" alt="">
