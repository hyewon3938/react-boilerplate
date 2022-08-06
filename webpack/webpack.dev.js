const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
  mode: 'development',

  devServer: {
    host: 'localhost',
    port: 3000,
    open: true,
    historyApiFallback: true,
  },

  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '../.env.development'),
    }),
  ],

  devtool: 'eval-cheap-module-source-map',
});