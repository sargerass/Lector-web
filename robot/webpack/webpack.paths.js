const path = require('path')

const context = path.resolve(__dirname, '../app')
const outputPath = path.resolve(__dirname, '../build')

const staticOutput = ''
const static = ''

module.exports = {
  context,
  output: {
    path: outputPath,
    // publicPath: "http://localhost:8080/static/",
    publicPath: '/',
    fonts: path.join(staticOutput, 'fonts'),
    js: path.join(staticOutput, 'scripts'),
    css: path.join(staticOutput, 'styles'),
  },
  images: path.join(static, 'images'),
  fonts: path.join(static, 'fonts'),
  js: path.join(static, 'scripts'),
  css: path.join(static, 'styles'),
}
