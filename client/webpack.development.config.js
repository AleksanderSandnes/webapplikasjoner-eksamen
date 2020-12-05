const { merge } = require('webpack-merge');
const common = require('./webpack.common.config.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: 3000,
    historyApiFallback: true,
    publicPath: '/',
  },
  devtool: 'eval-source-map',
});
