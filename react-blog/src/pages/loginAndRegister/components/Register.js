import React from 'react'
import { connect } from 'react-redux' 
import { Input, Icon, Button } from 'antd'
import { createActions } from '../store'

class Register extends React.Component {
	render() {
		const { username, password, passwordComfime, nickname } = this.props
		return (
			<div>
				<Input
					id = "username"
			    placeholder="输入账号"
			    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
			    style={{marginBottom: '20px'}}
			    onChange = {this.props.handleInputChange}
			  />
			  <Input 
			  	id = "password"
			  	placeholder="输入密码"
			  	prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
			  	type="password"  
			  	style={{marginBottom: '20px'}}
			  	onChange = {this.props.handleInputChange}
			  />
			  <Input 
			  	id = "passwordComfime"
			  	placeholder="再次输入密码"
			  	prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} 
			  	type="password"  
			  	style={{marginBottom: '20px'}}
			  	onChange = {this.props.handleInputChange}
			  />
			  <Input 
			  	id = "nickname"
			  	placeholder="输入昵称"
			  	prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}   
			  	style={{marginBottom: '20px'}}
			  	onChange = {this.props.handleInputChange}
			  />
			  <Button 
			  	type="primary" 
			  	block 
			  	onClick={ () =>{this.props.handleRegister(username, password, passwordComfime, nickname)} } 
			  >注册</Button>

			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const data = state.get('login')
	return {
		username: data.username,
		password: data.password,
		passwordComfime: data.passwordComfime,
		nickname: data.nickname
	}
}

const mapDispatchToProps = dispatch => ({
  handleInputChange: e => {
    const action = createActions.getInputChangeAction(e.target.value, e.target.id)
    dispatch(action)
  },
  handleRegister: (username, password, passwordComfime, nickname) => {
  	if(username && password && passwordComfime && nickname) {
  		if(password === passwordComfime) {
  			const action = createActions.getRegisterClickAction(username, password, nickname)
  			dispatch(action)
  		} else {
  			alert('两次密码不一样，请重新输入！')
  		}
  	} else {
  		alert('请输入完整！')
  	}
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)