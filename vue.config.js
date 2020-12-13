module.exports = {
  // 配置别名
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'network': '@/network',
        'components': '@/components',
        'views': '@/views'
      }
    },
    // devServer: {
    //   proxy: {
    //     '/': {
    //       target: 'http://106.54.54.237:8000/api/wh',
    //       ws: true,
    //       changeOrigin: true
    //     },
    //   }
    // }
  }
}
