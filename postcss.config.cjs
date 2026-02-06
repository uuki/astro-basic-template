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
    // Files for preprocessor (not output as source after build)
    postcssGlobalData({
      files: ['./src/styles/1_settings/_custom-media.scss']
    })
  ]
};
