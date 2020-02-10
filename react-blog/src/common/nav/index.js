import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createActions } from './store'
import { Logo, NavWrapper, NavLeft, SearchWrapper, NavRight } from './style'
import { Input, Menu, Avatar, Icon } from 'antd'

const SubMenu = Menu.SubMenu

class Nav extends Component {
  render() {
    const Search = Input.Search;
    const { nickname, avatar_url, userID, isLogin } = this.props
    const AvatarComponent = (avatar_url) => {
      if(avatar_url === '') {
        return  <Avatar size="large" style={{ backgroundColor: '#87d068' }} icon="user" />
      }
      else {
        return (
          <Avatar size="large" src={avatar_url} />
        )
      }
    }
    if(!isLogin) {
      return (
        <Redirect push to="/" />
      )
    } else {
      return (
        <NavWrapper>
          <NavLeft>
            <Link to='/'><Logo /></Link>
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '52px', float: 'left' }}
            >
              <Menu.Item key="1"><Link to='/'>首页</Link></Menu.Item>
              <Menu.Item key="2"><Link to='/topic'>话题</Link></Menu.Item>
              <Menu.Item key="3">待定</Menu.Item>
            </Menu>
            <SearchWrapper>
              <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ marginTop: '10px' }}
                enterButton
              />
            </SearchWrapper>
          </NavLeft>
          <NavRight>
            <Menu
              theme="light"
              mode="horizontal"
              style={{ lineHeight: '52px', float: 'right' }}
              onClick = {this.props.handleItemClick}
            >
              <Menu.Item key="1">您好，{nickname}</Menu.Item>
              <SubMenu 
                title={<span className="submenu-title-wrapper">
                  <Avatar size="large" src={avatar_url} />
              </span>}>
                <Menu.Item key="setting:1"><Link to={'/profile/'+ userID }><Icon type="user" />我的主页</Link></Menu.Item>
                <Menu.Item key="setting:2"><Icon type="logout" />退出</Menu.Item>
              </SubMenu>
            </Menu>
            
          </NavRight>
        </NavWrapper>
      )
    }
    
  }
  componentDidMount() {
    this.props.getUserMessage(this.props.userID)
  }
}
const mapStateToProps = state => {
  const loginState = state.get('login')
  const navState = state.get('nav')
  return {
    userID: loginState.userID,    // 获取当前登录用户的ID
    isLogin: loginState.isLogin,   //  获取当前用户登录状态
    nickname: navState.nickname,
    avatar_url: navState.avatar_url
  }
}

const mapDispatchToProps = dispatch => ({
  getUserMessage: (userID) => {
    const action = createActions.getUserMessage(userID)
    dispatch(action)
  },
  handleItemClick: (item, key, keyPath) => {
    if(item.key === 'setting:2') {
      console.log('handleItemClick')
      const action = createActions.handleQuitClick()
      dispatch(action)
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)