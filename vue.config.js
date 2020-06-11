const path = require('path')
module.exports = {
  publicPath: './', // 基本路径,打包时加上.
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
    open: true, // 自动打开浏览器
    host: '0.0.0.0', // 允许外部ip访问
    port: 8022, // 端口
    https: false, // 启用https
    overlay: {
      warnings: true,
      errors: true
    }
  },
  // 第三方插件配置
  pluginOptions: {}
}
