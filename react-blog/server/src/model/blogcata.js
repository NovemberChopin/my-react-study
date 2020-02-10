const mongoose = require('mongoose')

const BlogCataSchema = mongoose.Schema({
  title: String,          // 文章分类名称
  desc: String,           // 文章分类描述
  createTime: {           // 创建分类时间
    type: Date, default: Date.now()
  }
})

const BlogCataModel = mongoose.model('BlogCata', BlogCataSchema)

module.exports = BlogCataModel