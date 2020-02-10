import React, {
  Component
} from 'react'
import {
  Tabs
} from 'antd'
import {
  connect
} from 'react-redux'

import {
  createActions
} from '../store';

import Active from './Active'
import Article from '../../home/components/ArticleList'
import Archive from './Archive'
import WithNotes from './WithNotes'
import Collection from './Collection'
import Follow from './Follow'
import Followed from './Followed'

class MainContent extends Component {
  render() {
    const TabPane = Tabs.TabPane;
    return (
      <Tabs
        defaultActiveKey="1" 
        activeKey={this.props.activeKey} 
        onTabClick={(activeKey) => { this.props.handleShowTabs(activeKey)}}
      >
        <TabPane tab="动态" key="1" >
          <Active />
        </TabPane>
        <TabPane tab="文章" key="2">
          <Article listData={this.props.articleList.toJS()} />
        </TabPane>
        <TabPane tab="点滴" key="3">
          <WithNotes />
        </TabPane>
        <TabPane tab="归档" key="4">
          <Archive />
        </TabPane>
        <TabPane tab="收藏" key="5">
          <Collection />
        </TabPane>
        <TabPane tab="关注" key="6">
          <Tabs 
            defaultActiveKey="1"
            activeKey={this.props.activeAttentionKey}
            onTabClick={(activeKey) => { this.props.handleShowAttentionTabs(activeKey) }}
          >
            <TabPane tab="我关注的人" key="1">
              <Follow />
            </TabPane>
            <TabPane tab="关注我的人" key="2">
              <Followed />
            </TabPane>
          </Tabs>
        </TabPane>
      </Tabs>
    )
  }
}

const mapStateToProps = (state) => ({
  articleList: state.getIn(['profile', 'content', 'article'])
})

const mapStateToDispatch = (dispatch) => ({
  handleShowTabs(key) {
    const action = createActions.getTabsKeyAction(key)
    dispatch(action)
  },
  handleShowAttentionTabs(key) {
    dispatch(createActions.getAttentionKeyAction(key))
  }
})

export default connect(mapStateToProps, mapStateToDispatch)(MainContent)