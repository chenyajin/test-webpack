const path = require('path')

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        // loader: 'loader1'
        // use: [
        //   {
        //     loader: 'loader1',
        //     options: {
        //       name: 'jack'
        //     }
        //   }
        // ]
        loader: 'babelLoader',
        options: {
          presets: [
            '@babel/preset-env'
          ]
        }
      }
    ]
  },
  // 配置loader解析
  resolveLoader: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'loaders')
    ]
  }
}