// app.js
const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const staResoure = require('koa-static') 
const path = require('path')

// 引入项目路由
const { router } = require('./src/route/index')

const app = new Koa()

// 解析请求数据的中间件
app.use(bodyparser())

// 配置静态资源路径
app.use(staResoure(
  path.join(__dirname, '../react-blog/build')
))

app.js
// 装载路由
app.use(router.routes()).use(router.allowedMethods())

app.listen(3001, () => {
  console.log('Server is running on 3001 port')
})