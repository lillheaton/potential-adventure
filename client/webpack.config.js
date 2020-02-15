const { join, resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const PRODUCTION = process.env.NODE_ENV === 'production'

const STATIC = resolve(join(__dirname, 'public'))
const BUILD = resolve(join(__dirname, '../server/PotentialAdventure/static'))
const DIST = PRODUCTION ? BUILD : resolve(join('./', 'dist'))

module.exports = {
  mode: PRODUCTION ? 'production' : 'development',

  entry: {
    app: './index.js'
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  output: {
    path: DIST,
    filename: PRODUCTION
      ? '[name].[contenthash].bundle.js'
      : '[name].bundle.js',
    chunkFilename: 'chunk.[id].js',
    publicPath: '/'
  },

  devServer: {
    port: 8080,
    historyApiFallback: true,
    contentBase: DIST
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: join(STATIC, 'index.html'),
      filename: join(DIST, 'index.html')
    })
  ]
}
