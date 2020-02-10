const mongoose = require('mongoose')

const BlogLableSchema = mongoose.Schema({
  title: String,          // 文章标签名称
  desc: String,           // 文章标签描述
  createTime: {           // 创建标签时间
    type: Date, default: Date.now()
  }
})

const BlogLableModel = mongoose.model('BlogCata', BlogLableSchema)

module.exports = BlogLableModel