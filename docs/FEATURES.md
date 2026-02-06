# Features

### Astro

- バージョン: 5.16.16
- devToolbar: 無効化
- パスエイリアス: `@/` (src), `~/` (root)

### TypeScript

- strict mode有効
- ESNext対応
- Svelte型定義統合
- パスマッピング: `@/*`, `#/*` (types)

## コンポーネント

### Svelte

- Astro統合による、部分的 hydration対応
- ランタイムのオーバーヘッドが、ほぼ無し
- Svelte 5.x対応
- unplugin-icons による型安全なiconコンポーネント想定

### plop

- コンポーネント生成コマンド: `pnpm plop`
- layouts, objects, ui の3種類のコンポーネントタイプ定義
- Astroコンポーネント + モジュールSCSSのペア生成
- PascalCase 自動変換

## スタイリング

### Sass

- modern-compiler API使用
- グローバル関数/mixinの自動インポート:
  - `@/styles/tools/functions/_rem.scss`
  - `@/styles/tools/mixins/_line-clamp.scss`

### PostCSS

- custom-media: カスタムメディアクエリのグローバル参照
- preset-env: stage 3機能、カスタムプロパティ対応
- グローバルデータファイル:
  - `src/styles/settings/_custom-media.scss`

## コード品質

### ESLint

- バージョン: 9.x (flat config supported)
- ECMAScript: ES2023
- 対象: Astro, TypeScript, Svelte, JSON
- Prettier統合
- import解決: TypeScript paths対応

### Stylelint

- バージョン: 17.x
- Astro, Svelte対応
- SCSS構文サポート
- browser-compat: Baseline Widely Available基準の互換性を警告
- union-class-name禁止

### Prettier

- Astroプラグイン統合
- lint-staged連携による自動フォーマット

## テスト

### Vitest

- バージョン: 4.x
- browser mode: Playwright (Chromium)
- カバレッジ: v8 provider
- グローバルAPI有効

コマンド:
- `pnpm test`: watch mode
- `pnpm test:ui`: UIモード
- `pnpm test:run`: 単発実行
- `pnpm test:coverage`: カバレッジ計測
- `pnpm setup:tests`: Playwrightブラウザインストール

## ブラウザ互換性

### browserslist

- 基準: Baseline Widely Available (30+ヶ月の安定サポート)
- ES2023対応
- 主要ブラウザ最新2バージョン

この設定により、ESLint、Stylelint、PostCSS、ビルドツール全体で一貫した互換性基準を維持します。

## Git Hooks (オプション)

### Husky + lint-staged

デフォルトでは無効。必要に応じて以下のコマンドでセットアップ:

```bash
pnpm setup:husky
```

pre-commit時に以下を実行:
- ESLint: 自動修正
- Stylelint: 自動修正
- Prettier: 自動フォーマット
