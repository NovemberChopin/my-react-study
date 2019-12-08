const mongoose = require('./db')

const UserSchema = mongoose.Schema({
  username: String,
  nickname: String,   // 昵称
  password: String
})

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel