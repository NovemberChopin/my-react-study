// src/loginAndRegister/store/createActions.js
import { constants } from './index'
import axios from 'axios'
const Qs = require('qs')

export const getChangeTabAction = (key, type) => ({
	type: constants.TIGGER_LOGIN_OR_REGISTER,
  data: key
})

// 用户输入信息
export const getInputChangeAction = (value, id) => ({
	type: constants.INPUT_CHANGE_ACTION,
	data: value,
	id: id
})

const createLoginAction = (id) => ({
	type: constants.USER_LOGIN,
	id: id
})
const createRegisterAction = (status) => ({
	type: constants.USER_REGISTER,
	data: status
})

// 获取用户点击登录的Action
export const getLoginClickAction = (username, password) => {
	
	return (dispatch) => {
		//console.log(username, password)
		axios({
		  url: 'http://localhost:3001/api/user/login',
		  method: 'post',
		  transformRequest: [function (data) {
		    // 对 data 进行任意转换处理
		    return Qs.stringify(data)
		  }],
		  headers: {
		    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
		  },
		  data: {
		    username: username,
		    password: password
		  }
		}).then(function (response) {
			if(response.data.status === 0) {
				alert(response.data.message)
			} else if(response.data.status === 1) {
				dispatch(createLoginAction(response.data.data[0]._id))
			}
		})
	}
}

// 用户注册的处理函数
export const getRegisterClickAction = (username, password, nickname) => {
	//alert(`${username}+${password}+${nickname}`)
	return (dispatch) => {
		axios({
		  url: 'http://localhost:3001/api/user/register',
		  method: 'post',
		  transformRequest: [function (data) {
		    // 对 data 进行任意转换处理
		    return Qs.stringify(data)
		  }],
		  headers: {
		    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
		  },
		  data: {
		    username: username,
		    password: password,
		    nickname: nickname
		  }
		}).then(function (response) {
		  if(response.data.status === 0) {
		  	alert(response.data.message)
		  } else {
		  	if(response.data.status === 1) {
		  		alert('注册成功，请登录！')
		  		dispatch(createRegisterAction(response.data.status))
		  	}		
		  }
		})
	}
}
