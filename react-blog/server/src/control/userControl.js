const UserModel = require('../model/user')
const UserMsgModel = require('../model/usermsg')

// const findAllUser = async () => {
//   UserModel.find({}, (err, doc) => {
//     if(err) {
//       console.log(err)
//       return
//     }
//     return doc
//   })
// }

// 查找所有用户
const findAllUser = () => {
  const promise = new Promise((resolve, reject) => {
    UserModel.find({}, (err, doc) => {
      if(err) {
        console.log(err)
        reject(err)
      }
      resolve(doc)
    })
  })
  return promise
}

// 检测是否有相同账号
const userCheck = ctx => {
  const userInfo = ctx.request.body
  return new Promise((resolve, reject) => {
    UserModel.find({username: userInfo.username}, (err, doc) => {
      if(err) {
        console.log(err)
        reject(err)
      }
      resolve(doc)
    })
  })
}

// 添加用户账号信息
const addUser = ctx => {
  const userInfo = ctx.request.body
  return new Promise((resolve, reject) => {
    const user = new UserModel(userInfo)
    user.save((err, doc) => {
      if(err) {
        reject(err)
      }
      resolve(doc)
    })
  })
}

// 添加用户详细信息
const addUserMsg = (body, id) => {
  return new Promise((resolve, reject) => {
    const userMsg = new UserMsgModel({
      message: {
        nickname: body.nickname
      },
      userID: id
    })
    userMsg.save((err, doc) => {
      if(err) {
        reject(err)
      }
      resolve(doc)
    })
  })
}

// 通过用户id查找用户 详细 信息
const getUserInfoByID = (id) => {
  return new Promise((resolve, reject) => {
    UserMsgModel.find({userID: id}, (err, doc) => {
      if(err) {
        console.log(err)
        reject(err)
      }
      resolve(doc)
    })
  })
}

module.exports = {
  findAllUser,
  addUser,
  addUserMsg,
  userCheck,
  getUserInfoByID
}
