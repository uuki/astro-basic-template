# Astro basic template

![License](http://img.shields.io/badge/license-MIT-green.svg?style=flat)

ℹ️ **このブランチについて**

Astroは、コンテンツ駆動型のWebフレームワークとして設計されており、CMSと接続する場合も、基本的にはJAMstackライクな利用が想定されています。  
一方で、CMSへの組み込みを前提に、実行環境から切り離して利用する必要があるケースも依然として存在します。

この前提で分業を行う場合、`chunk`の生成条件や`manifest`の取り扱いが課題となることがあります。  
それでもなお、SFC（.astro）の設計思想や、CSS・JSのバンドルおよびアセット処理が、ほぼゼロコンフィグで成立する点は大きな利点です。

本構成はAstroの標準的な利用想定からは一部外れていますが、一定のパフォーマンス等への影響を許容した上で、環境から切り離して扱いやすい構成を目的として採用しています。

## 概要

本プロジェクトは、Webサイト開発向けのboilerplateです。

基本的なコンポーネント構成とスタイリング基盤を提供し、ソースコード解析、ブラウザ互換性チェック、コードフォーマッターを、デファクトスタンダードの範疇を目安にセットアップしています。

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

| Command                | Action                                                      |
| :--------------------- | :---------------------------------------------------------- |
| `pnpm install`         | Installs dependencies                                       |
| `pnpm dev`             | Starts local dev server at `http://localhost:4321`          |
| `pnpm build`           | Build production site, format HTML, and copy assets         |
| `pnpm preview`         | Preview your build locally, before deploying                |
| `pnpm clean`           | Remove dist directory                                       |
| `pnpm lint:es`         | Run ESLint                                                  |
| `pnpm lint:style`      | Run Stylelint                                               |
| `pnpm test`            | Run tests in watch mode                                     |
| `pnpm test:ui`         | Run tests with UI                                           |
| `pnpm test:run`        | Run tests once                                              |
| `pnpm test:coverage`   | Run tests with coverage                                     |
| `pnpm setup:tests`     | Install Playwright browsers                                 |
| `pnpm setup:husky`     | Setup Husky hooks (optional)                                |
| `pnpm plop`            | Generate component scaffolding                              |
| `pnpm format:html`     | Format HTML files in dist directory                         |
| `pnpm copy:assets`     | Copy built assets to backend directory                      |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro preview`          |
| `pnpm astro --help`    | Get help using the Astro CLI                                |

## 🚀 Project Structure

```shell
.
├── README.md
├── docs
│   ├── FEATURES.md          # 機能詳細ドキュメント
│   └── GUIDELINE.md          # ディレクトリ想定ドキュメント
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
│   │   ├── 1_settings       # 環境別設定
│   │   ├── 2_tools          # functions / mixin and animations
│   │   │   ├── animations
│   │   │   ├── functions
│   │   │   └── mixins
│   │   ├── 3_generic        # リセットCSS等
│   │   ├── 4_base           # ベーススタイル
│   │   ├── 5_layouts        # レイアウトパターン
│   │   ├── 6_objects        # オブジェクトスタイル
│   │   ├── 7_ui             # UIコンポーネントスタイル
│   │   ├── 8_utilities      # ユーティリティクラス
│   │   └── 9_pages          # ページ固有スタイル
│   ├── types
│   │   ├── astro.d.ts
│   │   ├── data.d.ts        # YAMLファイル型定義
│   │   └── declaration.d.ts
│   └── utils
│       └── meta.ts
└── tsconfig.json
```
