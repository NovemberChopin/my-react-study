const Koa = require('koa')
const Router = require('koa-router')
const views = require('koa-views')
const path = require('path')

const app = new Koa()
const router = new Router()

//配置模板引擎 下面两句话同意

//每个以.html结尾的文件都将被渲染
//app.use(views(__dirname, { map: {html: 'nunjucks' }}))

app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}))

// app.use(views('views', {
//   extension: 'ejs'
// }))

router.get('/', async (ctx) => {
  let title = 'hello ejs'
  await ctx.render('index', {
    title: title
  })
})

app.use(router.routes())
    .use(router.allowedMethods())

app.listen(3000, () => {
  console.log('server is running on 3000 port')
})