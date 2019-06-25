const path = require('path')
const merge = require('webpack-merge')
const paths = require('./webpack.paths')
const modules = require('./webpack.modules')
const StylelintPlugin = require('stylelint-webpack-plugin')

const lintJSOptions = {
  emitError: false,
  emitWarning: true,
  failOnWarning: false,
  failOnError: false,
  // Toggle autofix
  fix: false,
  cache: false,

  formatter: require('eslint-friendly-formatter'),
}

const lintStylesOptions = {
  context: path.join(paths.context, paths.css),
  syntax: 'scss',
  emitErrors: false,
  emitWarning: true,
  fix: false,
  cache: false,
  quiet: false,
}

module.exports = enableLinting =>
  enableLinting
    ? merge(
        modules.lintJS({ include: paths.context, options: lintJSOptions }),
        {
          plugins: [new StylelintPlugin(lintStylesOptions)],
        }
      )
    : {}
