const postcssGlobalData = require('@csstools/postcss-global-data');

module.exports = {
  plugins: [
    postcssGlobalData({
      files: ['./src/styles/foundations/custom-media.scss']
    }),
    require('postcss-custom-media'),
    require('postcss-preset-env')({
      stage: 3,
      features: {
        'custom-properties': true
      }
    })
  ]
};
