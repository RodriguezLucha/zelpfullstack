const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './frontend/entry.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env', '@babel/react']
        }
      },
    },
    {
      test: /\.module\.s(a|c)ss$/,
      loader: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]_[hash:base64:10]'
            },
            localsConvention: 'camelCase'
          },
        },
        {
          loader: 'sass-loader'
        }
      ]
    },
    {
      test: /\.s(a|c)ss$/,
      exclude: /\.module.(s(a|c)ss)$/,
      loader: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        {
          loader: 'sass-loader'
        }
      ]
    }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(
      {
        filename: '../stylesheets/bundle.css'
      }
    )
  ],
  devtool: 'source-map'
};