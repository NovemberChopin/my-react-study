/**
 * koa-bodyparser中间件
 * 对于POST请求的处理，koa-bodyparser中间件可以
 * 把koa2上下文的formData数据解析到ctx.request.body中
 */
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const views = require('koa-views')

const app = new Koa()

app.use(views('views', {
  map: {html: 'ejs'}
}))

// 使用ctx.body解析中间件
app.use(bodyParser())

app.use(async (ctx) => {

  if (ctx.url === '/' && ctx.method === 'GET') {
    // 当GET请求时候返回表单页面
    await ctx.render('index.html')
  } else if (ctx.url === '/' && ctx.method === 'POST') {
    // 当POST请求的时候，中间件koa-bodyparser解析POST表单里的数据，并显示出来
    let postData = ctx.request.body
    ctx.body = postData
  } else {
    // 其他请求显示404
    ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
  }
})

app.listen(3000, () => {
  console.log('[demo] request post is starting at port 3000')
})