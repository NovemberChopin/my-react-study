import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Row, Col, Tag, Icon, List } from 'antd'
import { SiderWraper } from './style'
import { createActions } from '../store'

const getRamdomNum = () => {
  const color = ["pink", "red", "orange", "green", "cyan", "blue", "purple", "cyan", "volcano", "geekblue"]
  const randomNum = Math.floor(Math.random() * 10)
  return color[randomNum]
}

class SiderContent extends Component {

  

  render() {
    const activeKey = "6"
    const attentionActiveKey = "2"
    const subTabsDefaultKey = "1"
    const { lable, articleClass, followedNum, followNum, agreeNum, collectNum, commonNum  } = this.props
    return (
      <SiderWraper>
        <div className="card">
          <Card title="个人成就">
            <p><Icon style={{ marginRight: "10px" }} type="like" /><b>获得{agreeNum}次赞同</b></p>
            <p><Icon style={{ marginRight: "10px" }} type="edit" /><b>获得{collectNum}次收藏</b></p>
            <p><Icon style={{ marginRight: "10px" }} type="message" /><b>参与{commonNum}次公共编辑</b></p>
          </Card>
        </div>
        <div className="card">
          <Row>
            <Col span={12}>
              <Card bordered={true} onClick={() => { this.props.handleShowTabs(activeKey, subTabsDefaultKey)}}>
                <p className="title"><b>关注了</b></p>
                <p className="num">{followNum}</p>
              </Card>
            </Col>
            <Col span={12}>
              <Card bordered={true} onClick={() => { this.props.handleShowFellowed(activeKey, attentionActiveKey)}}>
                <p className="title"><b>关注者</b></p>
                <p className="num">{followedNum}</p>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="card">
          <Card title="标签">
            <div>
              {
                lable.map((item, index) => (
                  <Tag style={{ margin: '0 10px 15px 0' }} color={getRamdomNum()} key={index}>{item}</Tag>
                ))
              }
            </div>
          </Card>
        </div>
        <div className="card" >
          
          <Card title="文章分类">
            <List
              size="small"
              bordered={false}
              dataSource={articleClass}
              renderItem={item => (<List.Item>{item}</List.Item>)}
            />
          </Card>
        </div>
      </SiderWraper>
      
    )
  }
}

const mapStateToProps = (state) => ({
  lable: state.getIn(['profile', "achivement", "lable"]),
  articleClass: state.getIn(['profile', "achivement", "articleClass"]),
  followNum: state.getIn(['profile', "achivement", "followNum"]),
  followedNum: state.getIn(['profile', "achivement", "followedNum"]),

  agreeNum: state.getIn(['profile', "achivement", "agreeNum"]),
  collectNum: state.getIn(['profile', "achivement", "collectNum"]),
  commonNum: state.getIn(['profile', "achivement", "commonNum"]),
})

const mapStateToDispatch = (dispatch) => ({
  handleShowTabs(key, subKey) {
    dispatch(createActions.getTabsKeyAction(key))
    dispatch(createActions.getAttentionKeyAction(subKey))
  },
  handleShowFellowed(key, subKey) {
    dispatch(createActions.getTabsKeyAction(key))
    dispatch(createActions.getAttentionKeyAction(subKey))
  }
})

export default connect(mapStateToProps, mapStateToDispatch)(SiderContent)