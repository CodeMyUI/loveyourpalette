'use strict';

const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

  // Dev Tools
  watch: true,
  devtool: 'source-map',

  context: path.resolve(__dirname, 'client'),

  entry: {
    vendor: ['react', 'react-dom', 'react-router', 'redux', 'react-redux', 'redux-actions', 'tinycolor2', 'react-scroll', 'babel-polyfill', 'lodash' ],
    loveyourpalette: path.resolve(__dirname, 'client/scripts/index.js')
  },

  output: {
    path: path.resolve(__dirname, '.build'),
    filename: '[name].bundle.js'
  },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        include: path.resolve(__dirname, 'client/scripts'),
        loader: 'babel'
      },

      {
        test: /.css$/,
        include: path.resolve(__dirname, 'client/styles'),
        loader: ExtractTextWebpackPlugin.extract("style", "css!postcss")
      },

      {
        test: /.svg$/,
        include: path.resolve(__dirname, 'client/assets/icon'),
        loader: 'svg-sprite?name=[name]_[hash]'
      }
    ]
  },

  postcss: function (webpack) {

    const postcssImport = require('postcss-import');
    const autoprefixer = require('autoprefixer')

    return [
      postcssImport({
        addDependencyTo: webpack
      }),
      autoprefixer()
    ]
  },

  plugins: [

    new CleanWebpackPlugin(['.dist', '.build']),

    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",

      minChunks: Infinity
    }),

    new webpack.optimize.OccurrenceOrderPlugin(),

    new webpack.NoErrorsPlugin(),

    new ExtractTextWebpackPlugin('[name].style.css'),

    new HTMLWebpackPlugin({
      template: 'index.html',
      inject: 'body'
    })
  ]

};
