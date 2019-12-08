import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createActions } from './store'
import { LoginBox } from './style'
import { Card } from 'antd';

import Login from './components/Login'
import Register from './components/Register'

const tabList = [{
  key: 'tab1',
  tab: '登录',
}, {
  key: 'tab2',
  tab: '注册',
}];

const contentList = {
  tab1: <Login />,
  tab2: <Register />
};
class LoginAndRegister extends Component {
  render () {
    return (
      <LoginBox>
        <Card
          style={{ width: '100%' }}
          tabList={tabList}
          activeTabKey={this.props.keys}
          onTabChange={(key) => { this.props.onTabChange(key, 'key'); }}
        >
          {contentList[this.props.keys]}
        </Card>
      </LoginBox>
    )
  }
}

const mapStateToProps = (state) => {
  const loginState = state.get('login')
  return {
    keys: loginState.key
  }
}

const mapDispatchToProps = dispatch => ({
  onTabChange: (key, type) => {
    const action = createActions.getChangeTabAction(key, type)
    dispatch(action)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginAndRegister)
