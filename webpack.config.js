/**
 * Created by zhangzhichao on 16/6/28.
 */
'use strict';

var webpack           = require('webpack');
var autoprefixer      = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var NpmInstallPlugin  = require('npm-install-webpack-plugin');
var ngAnnotatePlugin  = require('ng-annotate-webpack-plugin');

var ENV = process.env.npm_lifecycle_event;
var isTest = ENV === 'test' || ENV === 'test-watch';
var isProd = ENV === 'build';
console.log('ENV:',ENV);

module.exports = function makeWebpackConfig(){
  var config = {};

  config.entry = {
    app: './src/app.js'
  };

  config.output = {
    path: __dirname + '/dist',
    // publicPath: 'http://localhost:8080/',
    publicPath: isProd ? '/' : 'http://localhost:8080/',
    // filename: '[name].bundle.js',
    filename: isProd ? '[name].[hash].js' : '[name].bundle.js',
    // chunkFilename: '[name].bundle.js'
    chunkFilename: isProd ? '[name].[hash].js' : '[name].bundle.js'
  };

  if (isProd) {
    config.devtool = 'source-map';
  } else {
    config.devtool = 'eval-source-map';
  }


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
    new ExtractTextPlugin('[name].[hash].css'),
    new NpmInstallPlugin(),
    new ngAnnotatePlugin({
      add: true
    })

  );


  if (isProd) {
    config.plugins.push(
      // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
      // Only emit files when there are no errors
      new webpack.NoErrorsPlugin(),

      // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
      // Dedupe modules in the output
      new webpack.optimize.DedupePlugin(),

      // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
      // Minify all javascript, switch loaders to minimizing mode
      new webpack.optimize.UglifyJsPlugin(),

      // Copy assets from the public folder
      // Reference: https://github.com/kevlened/copy-webpack-plugin
      new CopyWebpackPlugin([{
        from: __dirname + '/src/public'
      }])
    )
  }

  config.devServer = {
    contentBase: './src',
    stats: 'minimal'
  };

  return config;

}();