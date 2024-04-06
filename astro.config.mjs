import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import compress from 'astro-compress';
import yaml from '@rollup/plugin-yaml';
import commonjs from '@rollup/plugin-commonjs';
import globImporter from 'node-sass-glob-importer';
import postcssCustomMedia from 'postcss-custom-media';
import postcssPresetEnv from 'postcss-preset-env';
import svelte from '@astrojs/svelte';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * @docs https://astro.build/config
 */
export default defineConfig({
  integrations: [
    svelte(),
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
    plugins: [commonjs(), yaml()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './'),
        '@': path.resolve(__dirname, './src'),
        '#': path.resolve(__dirname, './src/types'),
      },
    },
  },
});
