const eslintPluginAstro = require('eslint-plugin-astro');

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...eslintPluginAstro.configs.recommended,
  root: true,
  env: {
    browser: true,
    es2022: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022,
    extraFileExtensions: ['.svelte']
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:svelte/recommended', 'prettier'],
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'svelte/valid-compile': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_'
      }
    ],
    'import/no-unresolved': [2, { caseSensitive: true }]
  },
  globals: {
    Astro: 'readonly',
    window: 'readonly'
  },
  overrides: [
    // for mjs files
    {
      files: ['**/*.mjs'],
      rules: {}
    },
    // for Astro files
    {
      files: ['**/*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'warn'
      }
    },
    // for TypeScript files
    {
      files: ['**/*.ts'],
      rules: {}
    },
    {
      // for Svelte files
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
      parser: 'svelte-eslint-parser',
      parserOptions: { parser: '@typescript-eslint/parser' }
    }
  ],
  ignorePatterns: ['astro.config.mjs', '.eslintrc.cjs'],
  settings: {
    'svelte3/typescript': true,
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.astro', '.svelte']
      },
      typescript: {}
    }
  }
};
