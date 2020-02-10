import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Avatar } from 'antd'

import { MessageWrapper, ShowProfileMess } from './style'

const ProfileMess = (nickname) => (
  <ShowProfileMess>
    <div className="title">
      <div className="name">十一月的萧邦</div>
      <span className="desc">读书消得泼茶香当时只道是寻常</span>
    </div>
  </ShowProfileMess>
)

class PersonalMessage extends Component {
  render() {
    return (
      <MessageWrapper>
        <div className='pic'>
          
        </div>
        <div className='message'>
          <div className="avatar">
            <Avatar shape="square" size="large" style={{ height: '150px', width: '150px' }} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />
          </div>
          <div className="profileHeaderContent">
            <ProfileMess />
          </div>
        </div>
      </MessageWrapper>
    )
  }
}
const mapStateToProps = (state) => {
  const navState = state.get('nav')
  return {
    isShowProfileMess: state.getIn(['profile', 'message', 'isShowProfileMess']),
    nickname: navState.nickname
  }
}

export default connect(mapStateToProps, null)(PersonalMessage)