/** @type {import("eslint/lib/shared/types").ConfigData} */

module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022,
    extraFileExtensions: ['.svelte'],
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:svelte/recommended', 'prettier'],
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'svelte/valid-compile': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
      },
    ],
  },
  globals: {
    Astro: 'readonly',
    window: 'readonly',
  },
  overrides: [
    // for mjs files
    {
      files: ['**/*.mjs'],
      rules: {},
    },
    // for Astro files
    {
      files: ['**/*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'warn',
      },
    },
    // for TypeScript files
    {
      files: ['**/*.ts'],
      rules: {},
    },
    {
      // for Svelte files
      files: ['**/*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: { parser: '@typescript-eslint/parser' },
    },
  ],
  ignorePatterns: ['astro.config.mjs', '.eslintrc.cjs'],
};
