const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.@(ts|tsx|jsx)'],
  addons: [
    '@storybook/addon-knobs',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    config.resolve.alias.swiper = path.resolve(__dirname, '../node_modules/swiper/swiper-bundle.js');
    config.resolve.alias.swipercss = path.resolve(__dirname, '../node_modules/swiper/swiper-bundle.css');
    return config;
  },
}
