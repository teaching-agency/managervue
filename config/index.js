'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {  //代理地址
        target: 'http://192.168.214.1:9091/',  //需要代理的地址
        //target: 'localhost',  //现在本地试用
        changeOrigin: true,  //是否跨域
        secure: false,
        pathRewrite: {
          '^/api': '/'   //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉    (若是使用axios去掉“/”这里面的斜杠)
        }
      },
      //用于生产环境代理
      '/proApi': {  //代理地址
        target: 'http://192.168.0.110:8091/',  //需要代理的地址
        changeOrigin: true,  //是否跨域
        secure: false,
        pathRewrite: {
          '^/proApi': '/'   //本身的接口地址没有 '/api' 这种通用前缀，所以要rewrite，如果本身有则去掉    (若是使用axios去掉“/”这里面的斜杠)
        }
      }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 10001, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,  //自动打开浏览器功能【默认false】
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
