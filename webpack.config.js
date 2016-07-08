"use strict";
const path = require('path');
const webpack = require('webpack');

const AGGREGATE_TIMEOUT = 60;
const SOURCE_PATH = path.join(__dirname, './lib/');
const DIST_PATH = path.join(__dirname, './');

const NODE_ENV = process.env.NODE_ENV ||  'development';

module.exports = {
  entry: [
    path.join(SOURCE_PATH, 'index.js')
 ],
  output: {
    path: path.join(DIST_PATH),
    filename: "index.js?[hash]",
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  devtool: NODE_ENV === 'development' ? '#inline-module-source-map' : null,

  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      }
    ],
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    })
  ],

  resolve: {
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js']
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates:    ['*-loader', '*'],
    extensions:         ['', '.js']
  },

  watch: NODE_ENV === 'development',
  watchOptions: {
    aggregateTimeout: AGGREGATE_TIMEOUT
  }
};


if (NODE_ENV == 'production') {
  module.exports.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings:     false,
          drop_console: true,
          unsafe:       true
        }
      }),
      new webpack.optimize.DedupePlugin()
  );
}
