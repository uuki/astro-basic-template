# Features

## Astro

- Version: 5.16.16
- devToolbar: disabled
- Path aliases: `@/` (src), `~/` (root)

## TypeScript

- Strict mode enabled
- ESNext support
- Integrated Svelte type definitions
- Path mappings: `@/*`, `#/*` (types)

## Component

### Svelte

- Partial hydration support via Astro integration
- Virtually no runtime overhead
- Svelte 5.x support
- Designed for type-safe icon components using unplugin-icons

## Styling

### Sass

- Uses the modern compiler API
- Automatic import of global functions and mixins:
  - `@/styles/tools/functions/_rem.scss`
  - `@/styles/tools/mixins/_line-clamp.scss`

### PostCSS

- custom-media: global references for custom media queries
- preset-env: Stage 3 features and custom properties support
- Global data file:
  - `src/styles/settings/_custom-media.scss`

## Linter

### ESLint

- Version: 9.x (flat config supported)
- ECMAScript: ES2023
- Targets: Astro, TypeScript, Svelte, JSON
- Prettier integration
- Import resolution with TypeScript path support

### Stylelint

- Version: 17.x
- Astro and Svelte support
- SCSS syntax support
- browser-compat: warns based on the Baseline Widely Available compatibility criteria
- Disallows union class names

### Prettier

- Astro plugin integration
- Automatic formatting via lint-staged

## Test

### Vitest

- Version: 4.x
- Browser mode: Playwright (Chromium)
- Coverage: v8 provider
- Global APIs enabled

Commands:
- `pnpm test`: watch mode
- `pnpm test:ui`: UI mode
- `pnpm test:run`: single run
- `pnpm test:coverage`: coverage reporting
- `pnpm setup:tests`: install Playwright browsers

## Tool

### Plop (Scaffolding)

- Component generation command: `pnpm plop`
- Three component types: layouts, objects, ui
- Generates paired Astro components and module SCSS files
- Automatic PascalCase conversion

### browserslist

- Baseline: Widely Available (30+ months of stable support)
- ES2023 support
- Latest two versions of major browsers

This configuration ensures a consistent compatibility baseline across ESLint, Stylelint, PostCSS, and the entire build toolchain.

## Git Hooks (Optional)

### Husky + lint-staged

Disabled by default. Set up as needed with the following command:

```bash
pnpm setup:husky
```

Runs the following on pre-commit:
- ESLint: auto-fix
- Stylelint: auto-fix
- Prettier: automatic formatting
