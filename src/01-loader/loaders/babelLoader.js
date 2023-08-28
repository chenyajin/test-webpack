const { getOptions } = require('loader-utils')
const { validate } = require('schema-utils')
const babel = require('@babel/core')
const util = require('util')

// babel.transform用来变异代码的方法
// babel.transform是个普通的异步方法
// util.promisify将普通异步方法转换成基于promise的异步方法
const transform = util.promisify(babel.transform)

const babelLoader = require('./babelLoader.json') 

module.exports = function (content, map, meta) {
  console.log('babel loader')

  // 获取options
  const options = getOptions(this) || {}
  // 验证options
  validate(babelLoader, options, {
     name: 'babel loader'
  })

  // 创建异步
  const callback = this.sync()

  // 使用babel编译
  transform(content, options)
    .then((code, map) => {callback(null, code, map, meta) }).
    catch(e => callback(e))
}