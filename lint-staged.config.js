module.exports = {
  // ESLint: Astro, JavaScript, TypeScript, JSON
  '*.{astro,js,ts,json}': ['eslint --cache --fix'],

  // Stylelint: SCSS
  '*.scss': ['stylelint --fix'],

  // Prettier: Format all supported files
  '*.{astro,js,ts,json,scss,md,yml,yaml}': ['prettier --write'],
};
