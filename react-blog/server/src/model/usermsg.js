const mongoose = require('./db').default.default

const UserMsgSchema = mongoose.Schema ({
  userID: {
    type: mongoose.Types.ObjectId   // 用户的id
  },
  message: {
    // 用户的个人信息
    nickname: String,
    avatar_url: String,
    isShowProfileMess: {
      type: Boolean,
      default: true
    } 
  },
  achivement: {   // 用户的成就

    activeKey: {  
      type: Number,
      default: 2
    },
    activeAttentionKey: {
      type: Number,
      default: 1
    },
    agreeNum: {   // 收到的赞同总数
      type: Number,
      default: 0
    },
    collectNum: {   // 文章被收藏总数
      type: Number,
      default: 0
    },
    commonNum: {    // 评论次数
      type: Number,
      default: 0
    },
    followNum: {    // 我关注人的数量
      type: Number,
      default: 0
    },
    followedNum: {    // 关注我的人数
      type: Number,
      default: 0
    },
    lable: [ String ],    // 我的文章标签
    blogcatas: [ String ]
  },
  content: {    // 文章信息
    active: [],
    article: [],  // 用户文章
    withNote: [], // 用户点滴
    archive: [],  // 文章归档
    collection: {},
    follow: [],
    followed: []
  }
})

const UserMsgModel = mongoose.model('UserMsg', UserMsgSchema)

// const usermsg = new UserMsgModel({
//   userID: '5ca805070e90d606f0c68ac5'
// })

// usermsg.save((err, doc) => {
//   if(err) {
//     console.log(err)
//     return 
//   }
//   console.log(doc)
// })

module.exports = UserMsgModel