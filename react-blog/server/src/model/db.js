const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/myBlog', { useNewUrlParser: true }, (err) => {
  if(err) {
    console.log(err)
    return
  }
  // console.log('connect successed')
})

// mongoose.connect(`${MONGODB_CONF.database}${MONGODB_CONF.database}`, { useNewUrlParser: true }, (err) => {
//   if (err) {
//     console.log(err)
//     return
//   }
// } )

module.exports = mongoose