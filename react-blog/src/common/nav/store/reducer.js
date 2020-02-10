import { constants } from './index'

const defaultState = {
  focused: false,
  nickname: '',
  avatar_url: ''
}

export default (state = defaultState, action) => {
	if(action.type === constants.GET_USER_MSG) {
		const newState = JSON.parse(JSON.stringify(state))
		newState.nickname = action.data.nickname
		newState.avatar_url = action.data.avatar_url
		return newState
	}
  return state
}