const { name } = require('./package')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/base/' : '/',
  outputDir: __dirname + '/../../release/bundled/base',
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        dirs: [],
        resolvers: [ElementPlusResolver()]
      })
    ],
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd'
    }
  },
  devServer: {
    port: 8081,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
}
