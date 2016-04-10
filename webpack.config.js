'use strict';
const path = require('path');
const webpack = require('webpack');

module.exports = {
  module: {
    context: __dirname + "/lib",
    node: {
      fs: 'empty'
    },
    loaders: [{
      test: /\.js?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  },
  output: {
  },
  resolve: {
  },
  plugins: [
    new webpack.ExternalsPlugin('commonjs', ['electron', 'fs', 'path']),
  ],
};
