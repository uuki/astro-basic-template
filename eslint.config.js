import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';
import eslintPluginSvelte from 'eslint-plugin-svelte';
import eslintPluginImport from 'eslint-plugin-import';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';
import noAstroScript from './eslint-rules/no-astro-script.js';
import noPartialHydration from './eslint-rules/no-partial-hydration.js';

export default [
  // Global ignores
  {
    ignores: ['node_modules/**', 'dist/**', 'declaration.d.ts', '.astro/**', 'pnpm-lock.yaml'],
  },

  // Base config for all files
  {
    languageOptions: {
      // ES2023: Baseline Widely Available (30+ months browser support)
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2023,
        Astro: 'readonly',
      },
    },
    plugins: {
      import: eslintPluginImport,
    },
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx', '.astro', '.svelte'],
        },
        typescript: {},
      },
    },
  },

  // TypeScript config
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: ['**/*.ts', '**/*.tsx', '**/*.astro', '**/*.svelte'],
  })),
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.astro', '**/*.svelte'],
    rules: {
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
        },
      ],
      'import/no-unresolved': [2, { caseSensitive: true }],
    },
  },

  // Astro config
  ...eslintPluginAstro.configs['flat/recommended'],
  {
    files: ['**/*.astro'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  // Custom rules for CMS integration (exclude Document.astro)
  {
    files: ['**/*.astro'],
    ignores: ['**/Document.astro'],
    plugins: {
      'custom-rules': {
        rules: {
          'no-astro-script': noAstroScript,
          'no-partial-hydration': noPartialHydration,
        },
      },
    },
    rules: {
      'custom-rules/no-astro-script': 'error',
      'custom-rules/no-partial-hydration': 'error',
    },
  },

  // Svelte config
  ...eslintPluginSvelte.configs['flat/recommended'],
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    rules: {
      'svelte/valid-compile': 'warn',
    },
  },

  // Environment type definition files
  {
    files: ['**/env.d.ts'],
    rules: {
      // Allow triple-slash references in ambient type definition files
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },

  // Prettier config (must be last)
  eslintConfigPrettier,
];
