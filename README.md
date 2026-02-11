# Astro basic template

![License](http://img.shields.io/badge/license-MIT-green.svg?style=flat)

## 概要

本プロジェクトは、Webサイト開発向けのboilerplateです。

基本的なコンポーネント構成とスタイリング基盤を提供し、ソースコード解析、ブラウザ互換性チェック、コードフォーマッターを、デファクトスタンダードの範疇を目安にセットアップしています。

This project is a boilerplate for web site development.

It provides a basic component structure and a styling foundation, and comes preconfigured with tools for source code analysis, browser compatibility checks, and code formatting, aligned with widely accepted de facto standards.

Thanks to [withastro/astro](https://github.com/withastro/astro)

## ✨ Features

- Astro 5.16.16 + Svelte 5.x
- TypeScript (strict mode, ES2023)
- Sass + PostCSS
  - custom-media query
  - preset-env (stage 3)
  - Global function and mixin auto-import
- Linters
  - ESLint 9.x (flat config)
  - Stylelint 17.x (browser-compat)
  - Prettier
- Tests
  - Vitest 4.x (browser mode + Playwright)
- Scaffolding Tool
  - Plop: Create Components and Styles
- Utility
  - unplugin-icons: type-safe icons
- Others
  - browserslist: Baseline Widely Available
  - Git Hooks (Option): Husky + lint-staged

---

- 特徴の詳細は [docs/FEATURES.md](./docs/FEATURES.md) を参照
- コンポーネント構造は [docs/GUIDELINE.md](./docs/GUIDELINE.md) を参照
- For detailed features, see [docs/en/FEATURES.md](./docs/en/FEATURES.md)
- For the component structure, see [docs/en/GUIDELINE.md](./docs/en/GUIDELINE.md)

## 🧞 Commands

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `pnpm install`         | Installs dependencies                              |
| `pnpm dev`             | Starts local dev server at `http://localhost:4321` |
| `pnpm build`           | Build your production site to `./dist/`            |
| `pnpm preview`         | Preview your build locally, before deploying       |
| `pnpm clean`           | Remove dist directory                              |
| `pnpm lint:es`         | Run ESLint                                         |
| `pnpm lint:style`      | Run Stylelint                                      |
| `pnpm test`            | Run tests in watch mode                            |
| `pnpm test:ui`         | Run tests with UI                                  |
| `pnpm test:run`        | Run tests once                                     |
| `pnpm test:coverage`   | Run tests with coverage                            |
| `pnpm setup:tests`     | Install Playwright browsers                        |
| `pnpm setup:husky`     | Setup Husky hooks (optional)                       |
| `pnpm plop`            | Generate component scaffolding                     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro preview` |
| `pnpm astro --help`    | Get help using the Astro CLI                       |

## 🚀 Project Structure

```shell
.
├── README.md
├── docs
│   ├── FEATURES.md          # Boilerplate Feature Documentation
│   └── GUIDELINE.md         # How to Use This Boilerplate
├── astro.config.mjs
├── vitest.config.ts
├── eslint.config.js
├── .stylelintrc.cjs
├── .browserslistrc          # Baseline: Widely Available
├── postcss.config.cjs
├── plopfile.mjs             # Component & style scaffolding with Plop
├── plop-templates/
├── lint-staged.config.js    # For husky
├── package.json
├── public
│   └── favicon.svg
├── src
│   ├── __tests__
│   ├── assets
│   │   └── img
│   ├── components           # See ./docs/GUIDELINE.md for the design principles
│   │   ├── layouts
│   │   ├── objects
│   │   └── ui
│   ├── data                 # Static Data for templates
│   │   ├── config.yml
│   │   └── meta.yml
│   ├── js
│   │   └── app.ts
│   ├── layouts
│   │   ├── App.astro
│   │   └── Document.astro
│   ├── styles               # ITCSS-Based Global Styles Only
│   │   ├── base
│   │   │   └── _base.scss
│   │   ├── generic
│   │   │   └── _reset.scss
│   │   ├── settings
│   │   │   ├── _color.scss
│   │   │   ├── _custom-media.scss
│   │   │   ├── _easing.scss
│   │   │   ├── _font-family.scss
│   │   │   └── _zindex.scss
│   │   ├── tools
│   │   │   ├── animations
│   │   │   ├── functions
│   │   │   └── mixins
│   │   └── utilities
│   │       ├── _details-reset.scss
│   │       └── _hidden.scss
│   ├── types
│   │   ├── astro.d.ts
│   │   └── declaration.d.ts
│   └── utils
│       └── meta.ts
└── tsconfig.json
```
