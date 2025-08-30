import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';
import commonjs from '@rollup/plugin-commonjs';
import sassGlobImports from 'vite-plugin-sass-glob-import';
import svelte from '@astrojs/svelte';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * @docs https://astro.build/config
 */
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  integrations: [svelte()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          charset: false,
          // Global addition styles
          additionalData: [`@use "sass:math";`].join('\n')
        }
      }
    },
    plugins: [sassGlobImports(), commonjs(), yaml()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './'),
        '@': path.resolve(__dirname, './src')
      }
    }
  }
});
