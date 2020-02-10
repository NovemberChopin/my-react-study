/**
 * 路由中间件
 */
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next) => {
  console.log(1)
  next()
})
router.get('/', function (ctx) {
  ctx.body = "Hello koa";
})

app.use(router.routes()); //作用：启动路由
app.use(router.allowedMethods()); //作用： 当请求出错时的处理逻辑

app.listen(3000, () => {
  console.log('starting at port 3000');
});