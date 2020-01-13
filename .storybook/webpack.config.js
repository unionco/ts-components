const path = require('path');
module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      // Optional
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ],
  });
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.alias.swiper = path.resolve(__dirname, '../node_modules/swiper/js/swiper.js');
  config.resolve.alias.swipercss = path.resolve(__dirname, '../node_modules/swiper/css/swiper.css');
  return config;
};
