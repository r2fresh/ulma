var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: { path: __dirname + '/dist/js', filename: 'bundle.js' },
  module: {
    loaders: [
        {test: /\.css$/, loader: "style!css" },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
// devServer: {
//     contentBase: "",
//     colors: true,
//     historyApiFallback: true,
//     inline: true,
//     publicPath: "/dist/",
//     automaticRefresh : true
//   }
};
