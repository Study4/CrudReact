var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/main'],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  //devtool: 'source-map',
  devtool: 'eval',  
  module: {
    loaders: [
      // {
      //   test: /\.js$/, // test 去判断是否为.js,是的话就是进行es6和jsx的编译
      //   loader: 'babel-loader',
      //   query: {
      //     presets: ['es2015', 'react']
      //   }
      // },

      {
        test: /\.js?$/,
        loaders: ['react-hot' , 'babel'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
};