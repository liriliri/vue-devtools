const path = require('node:path')
const webpack = require('webpack')
const { createConfig } = require('@vue-devtools/build-tools')

module.exports = createConfig({
  entry: './src/devtools.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'devtools.js',
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
  devtool: process.env.NODE_ENV !== 'production' ? 'inline-source-map' : false,
})
