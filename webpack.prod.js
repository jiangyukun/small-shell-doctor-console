const webpack = require('webpack')
const moment = require('moment')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const handleModulePath = require('./tools/handleModulePath')

process.env.NODE_ENV = 'production'

const context = '/shell-doctor-web'

module.exports = {
  entry: [
    './src/boot/index.js'
  ],
  output: {
    path: __dirname + '/build/prod/',
    filename: 'bundle' + '.min.js',
    publicPath: context + '/home/build/prod/',
    chunkFilename: '[name].chunk.js?v=' + moment().format('YYYY-MM-DD')
  },
  resolve: {
    extensions: ['.js', 'jsx', '.ts', '.tsx']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader?cacheDirectory'],
        exclude: handleModulePath.exclude,
        include: handleModulePath.include
      },
      {test: /\.(ts|tsx)$/, loaders: ['babel-loader?cacheDirectory', 'awesome-typescript-loader?useCache']},
      {test: /\.less$/, loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'less-loader']})},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']})},
      {test: /\.(jpg|png|svg)$/, loader: 'url-loader?limit=8192'},
      {test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/, loader: 'file-loader'}
    ]
  },
  plugins: [
    new ExtractTextPlugin('style' + '.min.css'),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./manifest.json')
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    })
  ]
}
