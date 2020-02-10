import React from 'react'
import { connect } from 'react-redux'
import { createActions } from '../store'
import {
  Comment, Avatar, Form, Button, List, Input,
} from 'antd';


const TextArea = Input.TextArea;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={props => <Comment {...props} />}
  />
)

const Editor = ({
  onChange, onSubmit, value,
}) => (
  <div>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        
        onClick={onSubmit}
        type="primary"
      >
        添加评论
      </Button>
    </Form.Item>
  </div>
);

class CommentComponent extends React.Component {

  // handleSubmit = () => {
  //   if (!this.state.value) {
  //     return;
  //   }
  //   this.setState({
  //     value: '',
  //     comments: [
  //       {
  //         author: 'Han Solo',
  //         avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  //         content: <p>{this.state.value}</p>,
  //         datetime: moment().fromNow(),
  //       },
  //       ...this.state.comments,
  //     ],
  //   });
  // }

  render() {
    const { comments } = this.props.detailState.blogInfo
    const { value } = this.props.detailState
    const { nickname, userID, avatar_url } = this.props
    //console.log(value, nickname, userID, avatar_url)
    return (
      <div>
        {comments.length > 0 && <CommentList comments={comments} />}
        <Comment
          avatar={(
            <Avatar
              src={avatar_url}
              alt={nickname}
            />
          )}
          content={(
            <Editor
              onChange={this.props.handleChange}
              onSubmit={(value, nickname, userID, avatar_url) => {
                this.props.handleSubmit(value, nickname, userID, avatar_url)
              }}
        
              value={value}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToprops = (state) => {
	const loginState = state.get('login')
	const navState = state.get('nav')
	return {
		detailState: state.get('detail'),
		nickname: navState.nickname,		    // 当前用户的昵称
		avatar_url: navState.avatar_url,		// 当前用户的头像地址
		userID: loginState.userID						// 当前用户的id
	}
}

const mapDispatchToProps = dispatch => ({
  handleChange: e => {
    const action = {
      type: 'CHANGE_COMMENT_VALUE',
      data: e.target.value
    }
    dispatch(action)
  },
  handleSubmit: (value, nickname, userID, avatar_url) => {
    if(!value) {
      alert("请输入数据!")
    } else {
      const action = createActions.handleSubmit(value, nickname, userID, avatar_url)
      dispatch(action)
    }
  }
})

export default connect(mapStateToprops, mapDispatchToProps)(CommentComponent)