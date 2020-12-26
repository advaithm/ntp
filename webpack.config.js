const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: './src/index.tsx',

  output: {
    path: path.resolve('dist'),
    filename: 'ntp.js'
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            use: 'babel-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.(ts|tsx)?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
    ]
  },

  watch: process.env.NODE_ENV == "development",

  plugins: [
    new HtmlWebpackPlugin({
      template: 'static/index.html'
    }),
    new CompressionPlugin()
  ]
};