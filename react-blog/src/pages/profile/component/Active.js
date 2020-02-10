import React, { Component } from 'react'
import { Icon } from 'antd'
import { ListItem, ListInfo, ListBottom } from '../style'

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `蚂蚁设计 ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design, a design language for background  applications, is refined by Ant UED ED Team.',
    pic_url: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
  });
}
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginLeft: 20 }} />
    {text}
  </span>
);


export default class Active extends Component {
  render() {
    return (
      listData.map((item, index) => (

        <ListItem key={index}>
          <p className='activeType'>赞了文章</p>
          <img alt='' className='pic' src={item.pic_url} />
          <ListInfo>
            <h3 className='title'>{item.title}</h3>
            <p className='desc'>{item.description}</p>
            <ListBottom>
              <p>
                {item.title}
                <IconText type="star-o" text="156" />
                <IconText type="like-o" text="156" />
                <IconText type="message" text="2" />
              </p>
            </ListBottom>

          </ListInfo>
        </ListItem>
      ))
    )
  }
}