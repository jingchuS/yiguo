const path = require('path')

function resolve (url) {
  return path.resolve(__dirname, url)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('components', resolve('./src/components'))
      .set('styles', resolve('./src/assets/styles'))
      .set('pages', resolve('./src/pages'))
      .set('utils', resolve('./src/utils'))
  },

  devServer: {
    // proxy: {
    //   '/list': {
    //     target: 'https://m.doumi.com',
    //     changeOrigin: true,
    //     headers: {
    //       referer: 'https://m.doumi.com',
    //       host: 'm.doumi.com'
    //     },
    //     hostRewrite: 'm.doumi.com'
    //   }
    // },
    proxy: {
      '/api': {
        target: 'https://b2capigateway.yiguo.com',
        changeOrigin: true,
        secure: false,
        headers: {
          referer: 'https://b2capigateway.yiguo.com',
          host: 'b2capigateway.yiguo.com'
        },
        hostRewrite: 'b2capigateway.yiguo.com'
      }
    }
  }
}