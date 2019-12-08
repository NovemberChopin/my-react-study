import React from 'react'
import { List, Avatar, Button } from 'antd';
import { connect } from 'react-redux';
import { createActions } from '../store'


class Followed extends React.Component {
  render() {
    const ButtonComponent = ({ isFollow, itemKey }) => (
      <div>
        {
          isFollow ?
            <Button onClick={() => this.props.handleButtonClick(itemKey)} type="">已关注</Button>
            : <Button onClick={() => this.props.handleButtonClick(itemKey)} type="primary">关注</Button>
        }
      </div>
    )
    const { followed } = this.props
    return (
      <List
        itemLayout="horizontal"
        dataSource={followed.toJS()}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        renderItem={item => (
          <List.Item
            actions={[<ButtonComponent itemKey={item.id} isFollow={item.isFollow} />]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      />
    )
  }
}
const mapToProps = (state) => ({
  followed: state.getIn(['profile', 'content', 'attention', 'followed'])
})

const mapToDispatch = (dispatch) => ({
  handleButtonClick(key) {
    dispatch(createActions.changeFollowedFlag(key))
  }
})

export default connect(mapToProps, mapToDispatch)(Followed)
