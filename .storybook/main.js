const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.@(tsx|jsx)'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.resolve.alias.swiper = path.resolve(__dirname, '../node_modules/swiper/swiper-bundle.js');
    config.resolve.alias.swipercss = path.resolve(__dirname, '../node_modules/swiper/swiper-bundle.css');
    return config;
  },
}
