import React from 'react'
import { connect } from 'react-redux' 
import { Redirect } from 'react-router-dom'
import { Input, Icon, Button } from 'antd'
import { createActions } from '../store'


class Login extends React.Component {

	render() {
		const { username, password, isLogin } = this.props
		if(isLogin) {
			return (
				<Redirect push to="/home" />
			)
		} else {
			return (
				<div>
					<Input
						id = "username"
				    placeholder="输入用户账户"
				    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
				    style={{marginBottom: '20px'}}
				    onChange = {this.props.handleInputChange}
				    value={username}
				  />
				  <Input 
				  	id = "password"
				  	placeholder="输入用户密码"
				  	prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
				  	type="password"
				  	style={{marginBottom: '20px'}}
				  	onChange = {this.props.handleInputChange}
				  	value = {password}
				  />
				  <Button 
				  	type="primary" 
				  	block 
				  	onClick={ () =>{this.props.handleLogin(username, password)} } 
				  >登录</Button>
				</div>
			)
		}
		
	}
}

const mapStateToProps = (state) => {
	const data = state.get('login')
	return {
		username: data.username,
		password: data.password,
		isLogin: data.isLogin
	}
}

const mapDispatchToProps = dispatch => ({
  handleInputChange: e => {
    const action = createActions.getInputChangeAction(e.target.value, e.target.id)
    dispatch(action)
  },
  handleLogin: (username, password) => {
  	if(username && password) {
  		const action = createActions.getLoginClickAction(username, password)
  		dispatch(action)
  	} else {
  		alert('用户名或密码不能为空！')
  	}
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)