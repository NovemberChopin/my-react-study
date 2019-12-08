import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'antd'
import { ListItem, ListInfo, ListBottom } from '../style'

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginLeft: 20 }} />
    {text}
  </span>
)

class ArticleList extends Component {
  render() {
    const { listData } = this.props
    return (
      listData.map((item) => (
        <ListItem key={item.id}>
          <img alt='加载中' className='pic' src={item.pic_url} />
          <ListInfo>
            <Link to={'/detail/' + item._id} >
              <h3 className='title'>{item.title}</h3>    
            </Link>
            <p className='desc'>{item.describe}</p>
            <ListBottom>
              <p>
                <Link  to={'/profile/' + item.author_id}>
                    {item.author_nickname}
                </Link>
                <IconText type="like-o" text={item.meta.likeNum} />
                <IconText type="message" text={item.meta.commentNum} />
              </p>
            </ListBottom>
          </ListInfo>
        </ListItem>
      ))
    )
  }
}

export default ArticleList