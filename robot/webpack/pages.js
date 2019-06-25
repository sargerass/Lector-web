const path = require('path')
const glob = require('glob')
const paths = require('./webpack.paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const page = ({
  entry,
  path = '',
  template = require.resolve('html-webpack-plugin/default_index.ejs'),
  chunks,
} = {}) => ({
  entry,
  plugins: [
    new HtmlWebpackPlugin({
      filename: `${path && path + '/'}index.html`,
      favicon: `${paths.context}/images/favicon.ico`,
      template,
      chunks,
    }),
  ],
})

/*
The number of direct pug files inside app folder will define
the number of pages along with the respective js entry files
inside scripts (which must have the same name as pug files btw).
*/
module.exports = glob.sync(`${paths.context}/*.pug`).map(pugfile => {
  const entryName = path.parse(pugfile).name
  return page({
    path: entryName === 'index' ? '' : entryName,
    entry: {
      [entryName]: path.resolve(paths.context, paths.js, `${entryName}.js`),
    },
    template: path.resolve(paths.context, `${entryName}.pug`),
    chunks: [entryName],
  })
})
