// ESLint for the JavaScript we write. Vendored libraries and the built site are ignored.
import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: [
      '_site/**',
      '.claude/**',
      'node_modules/**',
      'vendor/**',
      'owlcarousel/**',
      'js/jquery.min.js',
      'js/collapsible.js',
      'js/consent-head.js', // Jekyll front matter + include of _includes/consent-head.js
      'js/consent.js', // Jekyll front matter: strings + include of _includes/consent.js
      'assets/**'
    ]
  },
  js.configs.recommended,
  {
    // Scripts loaded by the pages, as classic (non-module) scripts.
    // gtag and dataLayer are defined by _includes/consent-head.js.
    files: ['js/**/*.js', '_includes/**/*.js'],
    languageOptions: {
      sourceType: 'script',
      ecmaVersion: 2020,
      globals: { ...globals.browser, gtag: 'readonly', dataLayer: 'writable' }
    }
  },
  {
    files: ['_includes/consent-head.js'],
    languageOptions: { globals: { gtag: 'off' } }
  },
  {
    files: ['.github/**/*.mjs', 'eslint.config.mjs'],
    // Node scripts; callbacks passed to page.evaluate() run in the browser
    languageOptions: { sourceType: 'module', globals: { ...globals.node, ...globals.browser } }
  }
];
