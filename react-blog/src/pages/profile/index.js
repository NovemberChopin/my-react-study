import React, {
  Component
} from 'react'
import {
  connect
} from 'react-redux'
import {
  ProfileWrapper,
  ContentLeft,
  ContentRight
} from './style'
import {
  createActions
} from './store'

import RightContent from './component/SiderContent'
import MainContent from './component/MainContent'
import PersonMessage from './component/PersonMessage'

class Profile extends Component {
  render() {
    return (
      <ProfileWrapper>
        <div>
          <PersonMessage />
        </div>
        <div>
          <ContentLeft>
            <MainContent 
              activeKey={this.props.activeKey}
              activeAttentionKey={this.props.activeAttentionKey}
            />
          </ContentLeft>
          <ContentRight>
            <RightContent />
          </ContentRight>
        </div>
      </ProfileWrapper>
    )
  }

  componentDidMount() {
    const author_id = this.props.match.params.id
    this.props.changeProfileData(author_id)
  }
}
const mapStateToProps = (state) => ({
  isShowProfileMess: state.getIn(['profile', 'isShowProfileMess']),
  activeKey: state.getIn(['profile', 'achivement', 'activeKey']),
  activeAttentionKey: state.getIn(['profile', 'achivement', 'activeAttentionKey'])
})

const mapStateToDispatch = (dispatch) => ({
  changeProfileData(author_id) {
    const action = createActions.getProfileData(author_id);
    dispatch(action)
  }
})
export default connect(mapStateToProps, mapStateToDispatch)(Profile)