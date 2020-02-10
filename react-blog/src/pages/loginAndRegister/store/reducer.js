import { constants } from './index'
 
const defaultState = {
	key: 'tab1',		// 控制显示登录还是注册页
	userID: '',
	username: null,		
	password: null,
	passwordComfime: null,
	
	isLogin: 0
}

export default (state = defaultState, action) => {
	// 修改Key的值，控制login和register的显示
	if(action.type === constants.TIGGER_LOGIN_OR_REGISTER) {
		//console.log(action.data)
		const newState = JSON.parse(JSON.stringify(state))
		newState.key = action.data
		return newState
	}

	// 输入框数据变化
	if(action.type === constants.INPUT_CHANGE_ACTION) {
		const newState = JSON.parse(JSON.stringify(state))
		if(action.id === "username") {
			newState.username = action.data
		}
		if(action.id === "password") {
			newState.password = action.data
		} 
		if(action.id === "passwordComfime") {
			newState.passwordComfime = action.data
		}
		if(action.id === "nickname") {
			newState.nickname = action.data
		}
		return newState
	}

	// 用户登录
	if(action.type === constants.USER_LOGIN) {
		const newState = JSON.parse(JSON.stringify(state))
		newState.isLogin = 1
		newState.userID = action.id
		newState.username = ''
		newState.password = ''
		return newState
	}

	// 用户注册
	if(action.type === constants.USER_REGISTER) {
		const newState = JSON.parse(JSON.stringify(state))
		newState.key = 'tab1'
		return newState
	}

	// 用户退出
	if(action.type === 'nav/HANDLE_QUIT_ACTION') {
		console.log('用户退出')
		const newState = JSON.parse(JSON.stringify(state))
		newState.isLogin = 0
		return newState
	}
	return state
}