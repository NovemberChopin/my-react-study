const env = process.env.NODE_ENV

let MONGODB_CONF

if(env === 'dev') {
  // 开发环境 配置 mongodb
  MONGODB_CONF = {
    address: 'mongodb://localhost/',
    database: 'myBlog'
  }
}

if(env === 'production') {
  // 生产环境 配置 mongodb
  MONGODB_CONF = {

  }
}

module.exports = {
  MONGODB_CONF
}