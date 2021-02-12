const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: [
    './src/main.css',
    './src/main.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/main.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'index.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  stats: {
    children: false,
    modules: false
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    },
    stats: {
      children: false,
      modules: false
    }
  }
};