# Astro basic template

![License](http://img.shields.io/badge/license-MIT-green.svg?style=flat)

This boilerplate is a basic web development setup and built-in support for linting and prettier using husky, making it easy to use for various projects.

Thanks to [withastro/astro](https://github.com/withastro/astro)

![lighthouse](https://user-images.githubusercontent.com/3760515/219935920-0b93b201-6f93-4416-8ab5-045b342e4499.png)

## ✨ Features

- Astro@2
- CSS (Sass + PostCSS Plugins)
  - glob import
  - custom media
  - autoprefixer
- TypeScript
- Svelte@3
- minimal setuped linters (eslint, stylelint)
- pretteir
- husky

## 🧞 Commands

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `yarn install`         | Installs dependencies                              |
| `yarn dev`             | Starts local dev server at `localhost:3000`        |
| `yarn build`           | Build your production site to `./dist/`            |
| `yarn preview`         | Preview your build locally, before deploying       |
| `yarn astro ...`       | Run CLI commands like `astro add`, `astro preview` |
| `yarn astro --help`    | Get help using the Astro CLI                       |

## 🚀 Project Structure

```shell
.
├── README.md
├── astro.config.mjs
├── lint-staged.config.js # for husky
├── package.json
├── public
│   └── favicon.svg # 🚀
├── src
│   ├── assets # site assets
│   │   └── img
│   ├── components # astro templates
│   ├── data # static data for templates
│   │   └── meta.yml # site config
│   ├── js
│   │   └── app.ts
│   ├── layouts
│   │   ├── App.astro
│   │   └── Document.astro
│   ├── pages
│   │   ├── index.astro
│   │   └── jp/recruit # document root
│   ├── styles # only global styles *e.g. reset, base, breakpoints, variables, utility...
│   │   ├── foundations
│   │   │   ├── base.scss
│   │   │   ├── custom-media.scss
│   │   │   ├── mixins
│   │   │   ├── reset.scss
│   │   │   └── variables
│   │   └── style.scss
│   └── types
│       ├── astro.d.ts # custom type for astro components
│       ├── declaration.d.ts
│       └── env.d.ts
├── tsconfig.json
├── utils
│   ├── README.md
│   └── fetchImage # resolve path utility for framework other than astro
│       ├── fetchLocalImages.ts
│       └── index.ts
└── yarn.lock
```
