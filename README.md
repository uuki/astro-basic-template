# Astro basic template

![License](http://img.shields.io/badge/license-MIT-green.svg?style=flat)

## 概要

本プロジェクトは、Webサイト開発向けのboilerplateです。基本的なコンポーネント構成とスタイリング基盤を提供し、ソースコード解析、ブラウザ互換性チェック、コードフォーマッターをデファクトスタンダードの範疇を目安にセットアップしています。

Thanks to [withastro/astro](https://github.com/withastro/astro)

## ✨ Features

- Astro 5.16.16 + Svelte 5.x
- TypeScript (strict mode, ES2023)
- Sass + PostCSS
  - custom-media query
  - preset-env (stage 3)
  - global function / mixin の自動インポート
- Linters
  - ESLint 9.x (flat config)
  - Stylelint 17.x (browser-compat)
  - Prettier
- Tests
  - Vitest 4.x (browser mode + Playwright)
- Scaffolding Tool
  - plop: コンポーネント生成
- Utility
  - unplugin-icons: 型安全なアイコン
- Others
  - browserslist: Baseline Widely Available基準
  - Git Hooks (オプション): Husky + lint-staged

詳細は [docs/FEATURES.md](./docs/FEATURES.md) を参照

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
│   └── FEATURES.md          # 機能詳細ドキュメント
├── astro.config.mjs
├── vitest.config.ts
├── eslint.config.js
├── .stylelintrc.cjs
├── .browserslistrc          # Baseline Widely Available基準
├── postcss.config.cjs
├── plopfile.mjs             # コンポーネント生成設定
├── plop-templates/          # コンポーネントテンプレート
├── lint-staged.config.js    # for husky
├── package.json
├── public
│   └── favicon.svg
├── src
│   ├── __tests__            # テストファイル
│   ├── assets               # サイトアセット
│   │   └── img
│   ├── components           # Astroコンポーネント
│   │   ├── layouts
│   │   ├── objects
│   │   └── ui
│   ├── data                 # テンプレート用静的データ
│   │   ├── config.yml
│   │   └── meta.yml
│   ├── js
│   │   └── app.ts
│   ├── layouts
│   │   ├── App.astro
│   │   └── Document.astro
│   ├── pages
│   │   ├── index.astro
│   │   └── index.module.scss
│   ├── styles               # グローバルスタイルのみ
│   │   ├── foundations
│   │   │   ├── base.scss
│   │   │   ├── custom-media.scss
│   │   │   ├── mixins
│   │   │   ├── reset.scss
│   │   │   └── variables
│   │   ├── settings         # 環境別設定
│   │   │   └── _custom-media.scss
│   │   ├── tools            # functions / mixin and animations
│   │   │   ├── functions
│   │   │   └── mixins
│   │   └── style.scss
│   ├── types
│   │   ├── astro.d.ts
│   │   └── declaration.d.ts
│   └── utils
│       └── meta.ts
└── tsconfig.json
```
