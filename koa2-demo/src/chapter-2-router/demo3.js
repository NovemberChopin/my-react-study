/**
 * koa-router 动态路由
 */

const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
  ctx.body = 'koa-router'
})
router.get('/news/:aid', async (ctx) => {
  //获取动态路由的传值
  ctx.body = ctx.params
})
//动态路由可以接受多个值
router.get('/news/:aid/:cid', async (ctx) => {
  //获取动态路由的传值
  ctx.body = ctx.params
})
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('starting at port 3000')
})