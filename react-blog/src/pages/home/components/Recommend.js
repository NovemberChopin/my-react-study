import React, { Component } from 'react'
import { RecommendWrapper } from '../style'
import { List, Avatar, Button, Icon, Card } from 'antd'
import { Link } from 'react-router-dom'

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 5',
  },
];

export default class RecommendComponent extends Component {
  render() {
    return (
      <RecommendWrapper>
        <Card bordered={false} title="推荐作者" bodyStyle={{ padding: 0 }} >
          <List
            itemLayout="horizontal"
            dataSource={data}
            style={{ overflow: 'hidden', float: 'left' }}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar size='large' src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="100人点赞 50粉丝"
                />
              </List.Item>
            )}
          />
        </Card>
        <Link to="/recommenduser">
          <Button type='primary'>查看全部<Icon type="right" /></Button>          
        </Link>
      </RecommendWrapper>
      
    )
  }
}