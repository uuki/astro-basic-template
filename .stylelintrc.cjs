/** @type {import("stylelint").Config} */

module.exports = {
  extends: ['stylelint-config-html/astro', 'stylelint-config-html/svelte'],
  plugins: ['stylelint-scss', 'stylelint-browser-compat'],
  rules: {
    // Browser compatibility check - warn about non-Baseline Widely Available features
    'plugin/browser-compat': [
      true,
      {
        browserslist: 'baseline widely available',
        severity: 'warning',
      },
    ],
    'scss/selector-no-union-class-name': true,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['function', 'if', 'for', 'each', 'include', 'mixin', 'return', 'use', 'forward', 'extend', 'at-root', 'warn', 'error', 'debug', 'content', 'import', 'custom-media'],
      },
    ],
  },
  ignoreFiles: ['dist/**', 'node_modules/**'],
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.astro'],
      customSyntax: 'postcss-html',
    },
  ],
};
