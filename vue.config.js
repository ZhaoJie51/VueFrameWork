const path = require('path')
module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config.resolve.symlinks(true)
    if (process.env.npm_config_report) {
      config.plugin('webpack-bundle-analyzer').use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    }
  },
  configureWebpack: config => {},
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    open: false, // 自动打开浏览器
    host: '0.0.0.0', // 允许外部ip访问
    port: 8022, // 端口
    https: false, // 启用https
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/proxy_list': {
        //代理api
        target: 'http://v.juhe.cn', //服务器api地址
        changeOrigin: true, //是否跨域
        ws: true, // proxy websockets
        pathRewrite: {
          '^/proxy_list': '/toutiao/index'
        }
      }
    }
  },
  // 第三方插件配置
  pluginOptions: {}
}
