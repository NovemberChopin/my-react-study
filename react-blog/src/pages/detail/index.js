import React, { Component } from 'react'
import { connect } from 'react-redux'

import { createActions } from './store'
import { Divider } from 'antd'

import HomeRightCom from '../home/components/HomeRight'
import Comment from './components/Comment'
import {
  DetailWrapper,
  DetailLeft,
  ContentWrapper,
  Header,
  Content,
} from './style.js'

class Detail extends Component {
  render() {
    const {
      title,
      content
    } = this.props.detailState.blogInfo
    // console.log(this.props.detailState)
    return (
      <DetailWrapper>
        <DetailLeft>
          <ContentWrapper>
            <Header>{title}</Header>
            <Divider />
            <Content 
              dangerouslySetInnerHTML = {
                {
                  __html: content
                }
              }
            />
            <Divider />
            <Comment />
          </ContentWrapper>
        </DetailLeft>
        <HomeRightCom />
      </DetailWrapper>
    )
  }
  componentDidMount() {
    // 获取参数id
    const id = this.props.match.params.id
    //console.log(id)
    this.props.getBlogInfo(id)
  }
}



const mapDispatchToProps = dispatch => ({
  getBlogInfo: (id) => {
    const action = createActions.getBlogInfo(id)
    dispatch(action)
  }
})
const mapStateToProps = (state) => ({
  detailState: state.get('detail')
})
export default connect(mapStateToProps, mapDispatchToProps)(Detail)