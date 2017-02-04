'use strict';
const webpack = require('webpack');

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: './dst/js/app.js'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  }
}
