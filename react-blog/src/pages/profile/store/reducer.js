import {
  fromJS,
  update
} from 'immutable'
import {
  constants
} from './index'

const defaultState = fromJS({
  id: 1,
  message: {
    isShowProfileMess: true,
    nickname: ''
  }, //用户个人信息
  achivement: {
    activeKey: "1",
    activeAttentionKey: "2",
    agreeNum: null, //收到的赞同
    collectNum: null, //收藏数量
    commonNum: null, //公共编辑（评论）
    followNum: null, //我关注的人数量
    followedNum: null, //关注我的人数量
    lable: [], //文章标签
    articleClass: [] //文章分类
  },
  content: {
    active: [], //用户动态
    article: [], //用户文章
    withNote: [], //用户点滴
    archive: [], //文章归档
    collection: {},
    follow: [],
    followed: []
  }
})

export default (state = defaultState, action) => {
  if (action.type === constants.CHANGE_PROFILE_DATA) {
    return state.merge({
      id: action.id,
      message: fromJS(action.message),
      achivement: fromJS(action.achivement),
      content: fromJS(action.content)
    })
  }

  if (action.type === constants.CHANGE_TABS_ACTIVEKEY) {
    return state.setIn(['achivement', 'activeKey'], action.key)
  }
  if (action.type === constants.CHANGE_ATTEN_TABS_ACTIVEKEY) {
    return state.setIn(['achivement', 'activeAttentionKey'], action.key)
  }

  if (action.type === constants.CHANGE_FOLLOW_FLAG) {
    //获取到我关注的所有人列表
    const follow = state.getIn(['content', 'attention', 'follow'])
    //获取到操作的item的index
    const index = follow.findKey((value) => (
      value.get('id') === action.key
    ))
    return state.setIn(
      ['content', 'attention', 'follow'],
      update(follow, index, value => (
        value.set('isFollow', !value.get('isFollow'))
      )))
  }
  if (action.type === constants.CHANGE_FOLLOWED_FLAG) {
    //获取到我关注的所有人列表
    const followed = state.getIn(['content', 'attention', 'followed'])
    //获取到操作的item的index
    const index = followed.findKey((value) => (
      value.get('id') === action.key
    ))
    return state.setIn(
      ['content', 'attention', 'followed'],
      update(followed, index, value => (
        value.set('isFollow', !value.get('isFollow'))
      )))
  }
  return state
}