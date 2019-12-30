module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport":{
      viewportWidth: 375, //设计稿的宽
      viewportHeight: 667, //设计稿的高
      unitPrecision: 5, //指定“px”转换为是床单位值的最小位数
      viewportUnit: 'vw', //转换成什么
      selectorBlackList: ['ignore','tab-bar','tab-bar-item'], //不需要转化的类
      minPixelValue: 1, //小于或等于这个值的东西不转化为视窗单位
      mediaQuery: false //允许媒体查询中转换‘px’
    }
  }
}
