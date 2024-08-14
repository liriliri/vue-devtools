const path = require('node:path')
const { createConfig } = require('@vue-devtools/build-tools')

module.exports = createConfig({
  entry: './src/devtools.js',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'devtools.js',
  },
  devtool: process.env.NODE_ENV !== 'production' ? 'inline-source-map' : false,
})
