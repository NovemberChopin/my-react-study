import React, { Component } from 'react'
import { Tabs } from 'antd'
import { connect } from 'react-redux'
import ArticleList from './ArticleList'



class ListComponent extends Component {
  
  render() {
    const TabPane = Tabs.TabPane;
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="推荐" key="1">
          <ArticleList listData={this.props.listData.toJS()} />
        </TabPane>
        <TabPane tab="关注" key="2">
          <ArticleList listData={this.props.listData.toJS()} />
        </TabPane>
      </Tabs>
    )
  }
}

const mapToProps = (state) => ({
  listData: state.getIn(['home', 'listData'])
})

export default connect(mapToProps, null)(ListComponent)