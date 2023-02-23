/** @type {import("stylelint").Config} */

module.exports = {
  extends: ['stylelint-config-html/astro', 'stylelint-config-html/svelte'],
  plugins: ['stylelint-scss'],
  rules: {
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
        ignoreAtRules: ['function', 'if', 'for', 'each', 'include', 'mixin', 'import', 'custom-media'],
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
