import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import compress from 'astro-compress';
import yaml from '@rollup/plugin-yaml';
import globImporter from 'node-sass-glob-importer';
import postcssCustomMedia from 'postcss-custom-media';
import postcssPresetEnv from 'postcss-preset-env';
import svelte from '@astrojs/svelte';

import { createRequire } from 'module';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const CONSTANTS = {
  aliasPrefix: {
    root: '~',
    src: '@',
    types: '#',
  },
};

/**
 * @docs https://astro.build/config
 */
export default defineConfig({
  integrations: [
    svelte(),
    image(),
    compress({
      path: ['./dist'],
      css: true,
      html: false,
      img: false,
      js: false,
      svg: false,
    }),
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
          importer: globImporter(),
          // Global addition styles
          additionalData: [`@use "sass:math";`, `@import '@/styles/foundations/custom-media.scss';`].join('\n'),
        },
      },
      postcss: {
        plugins: [
          postcssCustomMedia(),
          postcssPresetEnv({
            autoprefixer: {
              flexbox: false,
              grid: true,
            },
            stage: 3,
            features: {
              'custom-properties': false,
            },
          }),
        ],
      },
    },
    plugins: [yaml()],
    resolve: {
      alias: {
        [CONSTANTS.aliasPrefix.root]: path.resolve(__dirname, './'),
        [CONSTANTS.aliasPrefix.src]: path.resolve(__dirname, './src'),
        [CONSTANTS.aliasPrefix.types]: path.resolve(__dirname, './src/types'),
      },
    },
    define: {
      require: createRequire(import.meta.url),
    },
  },
});
