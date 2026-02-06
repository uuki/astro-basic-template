import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';
import yaml from '@rollup/plugin-yaml';
import commonjs from '@rollup/plugin-commonjs';
import svelte from '@astrojs/svelte';

const assetsDir = 'assets/path/to/system-assets';
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
          additionalData: [
            // Add other imports as needed
            '@use "@/styles/2_tools/functions/_rem.scss" as *;',
            '@use "@/styles/2_tools/mixins/_line-clamp.scss" as *;'
          ].join('\n')
        }
      }
    },
    plugins: [commonjs(), yaml()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './'),
        '@': path.resolve(__dirname, './src')
      }
    },
    /**
     * for integration with other systems
     */
    build: {
      cssCodeSplit: false,
      assetsInlineLimit: 0,
      manifest: `${assetsDir}/js/manifest.json`,
      rollupOptions: {
        output: {
          entryFileNames: `${assetsDir}/js/index.js`,
          assetFileNames: assetInfo => {
            if (assetInfo.names && assetInfo.names.some(name => name.endsWith('.css'))) {
              return `${assetsDir}/css/style.css`;
            } else if (assetInfo.names && assetInfo.names.some(name => /\.(ttf|woff|woff2|eot|otf)$/.test(name))) {
              return `${assetsDir}/fonts/[name].[ext]`;
            } else if (
              assetInfo.names &&
              assetInfo.names.some(name => /\.(png|jpg|jpeg|gif|svg|webp|ico|svg)$/.test(name))
            ) {
              return `${assetsDir}/img/[name].[ext]`;
            }
            return `${assetsDir}/[name][extname]`;
          }
        }
      }
    }
  }
});
