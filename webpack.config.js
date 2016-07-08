/**
 * Created by zhangzhichao on 16/6/28.
 */
'use strict';

var webpack           = require('webpack');
var autoprefixer      = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
// var FontAwesomeWebpack = require("font-awesome-webpack");

module.exports = function makeWebpackConfig(){
  var config = {};

  config.entry = {
    app: './src/app.js'
  };

  config.output = {
    path: __dirname + '/dist',
    publicPath: 'http://localhost:8080/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  };

  config.devtool = 'eval-source-map';

  config.module = {
    loaders:[{
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },{
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
      },{
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style', 'css!less?sourceMap')
      },{
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file'
      },{
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      },{
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      },{
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  };

  config.postcss = [
    autoprefixer({
      browsers:['last 2 version']
    })
  ];

  config.plugins = [];

  config.plugins.push(
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin('[name].[hash].css')
  );

  config.devServer = {
    contentBase: './src',
    stats: 'minimal'
  };

  return config;

}();