module.exports = {
  css: {
      loaderOptions: {
          // 给 sass-loader 传递选项
          sass: {
              // @/ 是 src/ 的别名
              // 所以这里假设你有 `src/assets/css/varuables.scss` 这个文件
              data: `@import "~@/assets/styles/resource.scss";`
          }
      }
  },
  devServer:{
      proxy:{
          '/api':{
              target:'http://localhost:8080',
              changeOrigin:true,
              pathRewrite:{
                  '^/api':'/mock'
              }
          }
      }
  }
}