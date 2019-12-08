const Router = require('koa-router')

const { findAllUser, addUser, addUserMsg, userCheck, getUserInfoByID } = require('../control/userControl')
const { findBlogByUserId } = require('../control/blogControl')
const { SuccessModel, ErrorModel } = require('../config/resDataModel')

const userRouter = new Router()

// async表示函数里有异步操作
// await表示紧跟在后面的表达式需要等待结果。

// 用户登录
userRouter.post('/user/login',  async ctx => {
  // 查找用户
  const docs = await userCheck(ctx)
  if(docs.length === 0) {
    ctx.body = new ErrorModel("用户账号不存在")
  } else {
    ctx.body = new SuccessModel(docs)
  }
  // 还可以像下面这样写
  // return findAllUser().then(doc => {
  //   ctx.body = new SuccessModel(doc)
  // })
})

// 注册用户
userRouter.post('/user/register', async ctx => {
  // 1.判断用户账号是否和已有账号相同,如果有相同，则返回给用户提示
  const checkDoc = await userCheck(ctx)
  if(checkDoc.length !== 0) {
    ctx.body = new ErrorModel("用户账户重复！")
  } else {
    const userDoc = await addUser(ctx)
    // 传入用户的信息和user表中的用户id
    const userMsgDoc = await addUserMsg(ctx.request.body, userDoc._id)
    if(userMsgDoc) {
      ctx.body = new SuccessModel(userMsgDoc)
    } else {
      ctx.body = new ErrorModel("注册失败！")
    }
  }
})

// 根据用户ID获取用户详情页的信息
userRouter.get('/user/getUserInfo', async ctx => {
  const ctx_query = ctx.query
  // 查找用户详细信息
  const userInfo = await getUserInfoByID(ctx_query.id)
  // 查找用户的博客信息
  const userblogs = await findBlogByUserId(ctx_query.id)
  
  userInfo[0].content.article = JSON.parse(JSON.stringify(userblogs))
  ctx.body = new SuccessModel(userInfo[0])
})

// 获取用户基本信息
userRouter.get('/user/getUserMsg', async ctx => {
  const ctx_query = ctx.query
  const userMsg = await getUserInfoByID(ctx_query.id)
  if(userMsg[0]) {
    ctx.body = new SuccessModel(userMsg[0].message)
  }
})

module.exports = {
  userRouter
}