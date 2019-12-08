/**
 * 应用中间件
 */
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

//匹配所有路由，打印时间
app.use(async (ctx, next) => {
  console.log(new Date());
  await next();
})

router.get('/', function (ctx, next) {
  ctx.body = "Hello koa";
})
router.get('/news', (ctx, next) => {
  ctx.body = "新闻页面"
});

app.use(router.routes()); //作用：启动路由
app.use(router.allowedMethods()); //作用： 当请求出错时的处理逻辑

app.listen(3000, () => {
  console.log('starting at port 3000');
});