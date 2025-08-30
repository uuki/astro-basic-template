const postcssGlobalData = require('@csstools/postcss-global-data');

module.exports = {
  plugins: [
    require('postcss-custom-media'),
    require('postcss-preset-env')({
      stage: 3,
      features: {
        'custom-properties': true
      }
    }),
    postcssGlobalData({
      files: ['./src/styles/foundations/custom-media.scss']
    })
  ]
};
