/**
 * koa中间件的执行流程
 */

const Koa = require('koa');
const router = require('koa-router')();  /*引入是实例化路由** 推荐*/
const app = new Koa();

//Koa中间件

//匹配任何路由  ，如果不写next，这个路由被匹配到了就不会继续向下匹配

//www.域名.com/news
app.use(async (ctx, next) => {
  console.log('1、这是第一个中间件01');
  await next();

  console.log('5、匹配路由完成以后又会返回来执行中间件');
})

app.use(async (ctx, next) => {
  console.log('2、这是第二个中间件02');
  await next();

  console.log('4、匹配路由完成以后又会返回来执行中间件');
})

router.get('/', async (ctx) => {

  ctx.body = "首页";

})
router.get('/news', async (ctx) => {

  console.log('3、匹配到了news这个路由');
  ctx.body = '这是一个新闻';
})


app.use(router.routes());   /*启动路由*/
app.use(router.allowedMethods());
app.listen(3000);

//http://localhost:3000/news

// 1、这是第一个中间件01
// 2、这是第二个中间件02
// 3、匹配到了news这个路由
// 4、匹配路由完成以后又会返回来执行中间件
// 5、匹配路由完成以后又会返回来执行中间件