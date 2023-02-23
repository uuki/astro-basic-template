module.exports = {
  '*.{js,ts}': ['eslint', 'eslint --fix'],
  '**/*.scss': () => ['stylelint', 'stylelint --fix'],
  '*.{astro,js,ts,json}': ['prettier --write'],
  '**/*.ts?(x)': () => 'npm run build-types',
};
