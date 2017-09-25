const path = require('path')
const webpack = require('webpack')
const moment = require('moment')
const handleModulePath = require('./tools/handleModulePath')

const ipAddress = 'localhost'
const port = 3041
// const ipAddress = '192.168.18.237'

module.exports = {
  entry: [
    './src/boot/index.js'
  ],
  devServer: {
    hot: true,
    inline: true,
    port: port,
    host: ipAddress,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: `http://${ipAddress}:${port}/static/`,
    chunkFilename: '[name].chunk.js?v=' + moment().format('YYYY-MM-DD')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"inline"'
    })
  ],
  resolve: {
    extensions: ['.js', 'jsx', '.ts', '.tsx']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot-loader', 'babel-loader?cacheDirectory'],
        exclude: handleModulePath.exclude,
        include: handleModulePath.include
      },
      {test: /\.(ts|tsx)$/, loaders: ['react-hot-loader', 'babel-loader?cacheDirectory', 'awesome-typescript-loader?useCache']},
      {test: /\.less$/, loaders: ['style-loader', 'css-loader', 'less-loader']},
      {test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
      {test: /\.(jpg|png|svg)$/, loader: 'url-loader?limit=8192'},
      {test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/, loader: 'file-loader'}
    ]
  }
}
