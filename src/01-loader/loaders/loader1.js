const { getOptions } = require('loader-utils')
const { validate } = require('schema-utils')

const loaderSchema = require('./loader1.json') 

module.exports = function (content, map, meta) {
  console.log(111)

  // 获取options
  const options = getOptions(this) || {}
  // 验证options
  validate(loaderSchema, options, {
     name: 'loader1'
  })

  // this.callback(content, map, meta)
  return content
}