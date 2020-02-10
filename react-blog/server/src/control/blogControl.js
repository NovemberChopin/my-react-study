// blogControl.js
const BlogModel = require('../model/blog')

const findAllBlog = () => {
  return new Promise((resolve, reject) => {
    BlogModel.find({}, (err, docs) => {
      if(err) {
        console.log(err)
        reject(err)
      }
      resolve(docs)
    })
  })
}

// 根据文章ID查找文章内容
const findBlogByID = id => {
  return new Promise((resolve, reject) => {
    BlogModel.findById(id, (err, docs) => {
      if(err) {
        console.log(err)
        reject(err)
      }
      resolve(docs)
    })
  })
}

// 根据用户ID查找某一用户全部的文章
const findBlogByUserId = id => {
  return new Promise((resolve, reject) => {
    BlogModel.find({author_id: id}, (err, docs) => {
      if(err) {
        console.log(err)
        reject(err)
      }
      resolve(docs)
    })
  })
}

// 增加文章
const addBlog = ctx => {
  const blogInfo = ctx.request.body
  return new Promise((resolve, reject) => {
    const newBlog = new BlogModel(blogInfo)
    newBlog.save((err, doc) => {
      if(err) {
        reject(err)
      }
      resolve(doc)
    })
  })
}

module.exports = {
  findAllBlog,
  findBlogByID,
  findBlogByUserId,

  addBlog
}

