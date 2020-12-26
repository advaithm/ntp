const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './index.ts',

  output: {
    path: path.resolve('dist'),
    filename: 'server.js'
  },

  target: 'node',
  externals: [nodeExternals()],

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  watch: process.env.NODE_ENV == "development",

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
  }
};