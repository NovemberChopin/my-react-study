import axios from 'axios'
import {
  constants
} from './index'

const changeProfileData = (result) => ({
  type: constants.CHANGE_PROFILE_DATA,
  id: result.userID,
  message: result.message,
  achivement: result.achivement,
  content: result.content
})

//获取页面数据
// export const getProfileData = () => {
//   return (dispath) => {
//     axios.get('/api/profile.json').then((res) => {
//       const result = res.data.data
//       dispath(changeProfileData(result))
//     })
//   }
// }
export const getProfileData = (author_id) => {
  return (dispath) => {
    axios.get(`http://localhost:3001/api/user/getUserInfo?id=${author_id}`).then((res) => {
      const result = res.data.data
      console.log(result)
      dispath(changeProfileData(result))
    })
  }
}

//控制tabs卡片内容切换
export const getTabsKeyAction = (key) => ({
  type: constants.CHANGE_TABS_ACTIVEKEY,
  key
})
//控制tabs卡片内容切换
export const getAttentionKeyAction = (key) => ({
  type: constants.CHANGE_ATTEN_TABS_ACTIVEKEY,
  key
})

export const changeFollowFlag = (key) => ({
  type: constants.CHANGE_FOLLOW_FLAG,
  key
})
export const changeFollowedFlag = (key) => ({
  type: constants.CHANGE_FOLLOWED_FLAG,
  key
})