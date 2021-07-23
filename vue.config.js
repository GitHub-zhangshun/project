module.exports = {
  publicPath: './',
  pluginOptions: {},
  lintOnSave: false,
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      }
    }
  },
  devServer: {
    /* 自动打开浏览器 */
    open: false,
    /* 设置为0.0.0.0则所有的地址均能访问 */
    host: '0.0.0.0',
    port: 8081,
    https: false,
    hotOnly: false,
    /* 使用代理 */
    proxy: {
      '/api': {
        target: 'http://api.zhynb.com/', //后端地址
        secure: false,  // 如果是https接口，需要配置这个参数
        ws: true,//是否代理websockets
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}