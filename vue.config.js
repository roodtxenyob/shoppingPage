module.exports = {
  //
  configureWebpack:{
    //别名
    resolve:{
      alias:{
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  devServer:{
    proxy:'http://localhost:3000'
  }
}