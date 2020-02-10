// blogRouter.js
const Router = require('koa-router')

const { findAllBlog, findBlogByID, addBlog } = require('../control/blogControl')
const { SuccessModel, ErrorModel } = require('../config/resDataModel')
const blogRouter = new Router()

// 查找所有文章
blogRouter.get('/blog/getAllList', async ctx => {
  const doc = await findAllBlog()
  ctx.body = new SuccessModel(doc)
})

// 按照id查找文章详细信息
blogRouter.get('/blog/getBlogByID', async ctx => {
  const ctx_query = ctx.query
  const doc = await findBlogByID(ctx_query.id)
  ctx.body = new SuccessModel(doc)
})

// 添加博客
blogRouter.post('/blog/addBlog', async ctx => {
  const doc = await addBlog(ctx)
  if(doc) {
    ctx.body = new SuccessModel()
  } else {
    ctx.body = new ErrorModel()
  }
})


module.exports = {
  blogRouter
}