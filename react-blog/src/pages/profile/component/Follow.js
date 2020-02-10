import React, {
  Component
} from 'react'
import {
  connect
} from 'react-redux'
import {
  createActions
} from '../store'
import {
  List,
  Avatar,
  Button
} from 'antd';

// 我关注的人的列表


class Follow extends Component {

  render() {

    const ButtonComponent = ({isFollow,itemKey}) => (
      <div>
        {
          isFollow ?
            <Button onClick={() => this.props.handleButtonClick(itemKey)} type="">已关注</Button>
            : <Button onClick={() => this.props.handleButtonClick(itemKey)} type="primary">关注</Button>
        }
      </div>
    )
    const { follow } = this.props
    return (
      <List
        itemLayout="horizontal"
        dataSource={follow.toJS()}
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        renderItem={item => (
          <List.Item
            actions={[<ButtonComponent itemKey={item.id} isFollow={item.isFollow} />]} >
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
  follow: state.getIn(['profile', 'content', 'attention', 'follow'])
})

const mapToDispatch = (dispatch) => ({
  handleButtonClick(key) {
    dispatch(createActions.changeFollowFlag(key))
  }
})

export default connect(mapToProps, mapToDispatch)(Follow)