// src/route/index.js
const Router = require('koa-router')
const { userRouter } = require('./userRouter')
const { blogRouter } = require('./blogRouter')
// 创建路由对象，并设置路由前缀
const router = new Router({ prefix: '/api'})

router.use(userRouter.routes()).use(userRouter.allowedMethods())
router.use(blogRouter.routes()).use(blogRouter.allowedMethods())

module.exports = { router }

