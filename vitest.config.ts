import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';

export default defineConfig({
  test: {
    browser: {
      enabled: true,
      provider: playwright({
        launchOptions: {
          // slowMo: 50, // Slow down actions for debugging
        },
        // Action timeout in milliseconds
        // actionTimeout: 5_000,
      }),
      instances: [
        {
          browser: 'chromium',
        },
        // { browser: 'firefox' },
        // { browser: 'webkit' },
      ],
      headless: true,
      screenshotFailures: true,
    },
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.{js,ts,jsx,tsx}'],
      exclude: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}', 'src/**/*.d.ts', 'src/types/**'],
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
