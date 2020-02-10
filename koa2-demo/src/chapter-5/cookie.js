/**
 * Koa使用cookie
 * 使用方法：
 *  koa提供了从上下文直接读取、写入cookie的方法
 *   ctx.cookies.get(name, [options]) 读取上下文请求中的cookie
 *   ctx.cookies.set(name, value, [options]) 在上下文中写入cookie
 */

  // ctx.cookies.get(name, [options])
  // 通过 options 获取 cookie name:

  // signed 所请求的cookie应该被签名
  // koa 使用 cookies 模块，其中只需传递参数。

  // ctx.cookies.set(name, value, [options])
  // 通过 options 设置 cookie name 的 value:

  // maxAge 一个数字表示从 Date.now() 得到的毫秒数
  // signed cookie 签名值
  // expires cookie 过期的 Date
  // path cookie 路径, 默认是'/'
  // domain cookie 域名
  // secure 安全 cookie
  // httpOnly 服务器可访问 cookie, 默认是 true
  // overwrite 一个布尔值，表示是否覆盖以前设置的同名的 cookie(默认是 false).
  //           如果是 true, 在同一个请求中设置相同名称的所有 Cookie（不管路径或域）是否在设置此Cookie 时从 Set - Cookie 标头中过滤掉。

const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {

  if (ctx.url === '/index') {
    ctx.cookies.set(
      'cid',
      'hello world',
      {
        domain: 'localhost',  // 写cookie所在的域名
        path: '/index',       // 写cookie所在的路径
        maxAge: 10 * 60 * 1000, // cookie有效时长
        expires: new Date('2019-03-15'),  // cookie失效时间
        httpOnly: false,  // 是否只用于http请求中获取
        overwrite: false  // 是否允许重写
      }
    )
    ctx.body = 'cookie is ok'
  } else {
    ctx.body = 'hello world'
  }

})

app.listen(3000, () => {
  console.log('[demo] cookie is starting at port 3000')
})