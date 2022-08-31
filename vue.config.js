const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 不生成map文件打包的时候
  productionSourceMap:false,
  transpileDependencies: true,
  lintOnSave:false,
  publicPath : './',
  // 代理跨域
  devServer:{
    proxy: {
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn",
        // pathRewrite: {"^/api" : ""}
      }
    }
  }
})
 