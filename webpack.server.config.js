const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './index.tsx',

  output: {
    path: path.resolve('dist'),
    filename: 'index.js'
  },

  target: 'node',
  externals: [nodeExternals()],

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
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
        {
          test: /\.html$/i,
          loader: 'html-loader',
        }
    ]
  }
};