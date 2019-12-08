/**
 * Koa-router get传值
 */

const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();

router.get('/', function (ctx, next) {
  ctx.body = "Hello koa";
})

/**
 * 在 koa2 中 GET 传值通过 request 接收，但是接收的方法有两种：query 和 querystring。
 * query：返回的是格式化好的参数对象。
 * querystring：返回的是请求字符串。
 */

router.get('/newscontent',(ctx, next) =>{
  
  //从 request 中获取 GET 请求
  let request = ctx.request;
  let req_url = request.url;
  let req_query = request.query;
  let req_querystring = request.querystring;
  //从上下文中直接获取(用的最多)
  let ctx_url = ctx.url
  let ctx_query = ctx.query;
  let ctx_querystring = ctx.querystring;
  ctx.body = {
    req_url,
    req_query,
    req_querystring,
    ctx_url,
    ctx_query,
    ctx_querystring
  }
});
app.use(router.routes()) //作用：启动路由
   .use(router.allowedMethods()) //作用： 当请求出错时的处理逻辑

app.listen(3000, () => {
  console.log('starting at port 3000')
});