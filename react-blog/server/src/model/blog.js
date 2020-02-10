const mongoose = require('./db')

const BlogSchema = mongoose.Schema({
  title: String,    // 标题
  pic_url: {
    type: String, 
    default: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
  },  // 文章配图
  describe: String,
  content: String,  // 内容
  author_nickname: String,   // 作者昵称
  avatar_url: {
    type: String,
    default: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
  },
  author_id: {
    type: mongoose.Types.ObjectId
  },    // 作者ID
  createTime: { type: Date, default: Date.now },  // 添加时间
  comments: [{
    authorID: { type: mongoose.Types.ObjectId },   // 评论人的ID
    author: String,     // 评论人昵称
    avatar_url: {
      type: String,
      default: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    }, // 评论人头像
    data: Date,         // 评论时间
    body: String,       // 评论内容
    authorReply: String // 作者的回复
  }],
  meta: {
    likeNum: {      // 文章喜欢的人数
      type: Number,
      default: 0 
    },
    commentNum: {   // 文章评论数量
      type: Number,
      default: 0
    }
  },
  blog_catalog: { type: mongoose.Types.ObjectId },   // 文章所属分类
  blog_lable: [ String ]     // 文章的标签
})

const BlogModel = mongoose.model('Blog', BlogSchema)

module.exports = BlogModel