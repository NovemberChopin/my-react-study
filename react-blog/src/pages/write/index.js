import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'
import { connect } from 'react-redux'
import { createActions } from './store'
import { Form, Input, Button } from 'antd'
import { WriteWrapper, WriteLeft, ContentWrapper } from './style'


class WriteCom extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault()
    const { nickname, userID, avatar_url } = this.props
    this.props.form.validateFields((error, values) => {
      if (!error) {
        const submitData = {
          title: values.title,
          content: values.content.toHTML() // or values.content.toHTML()
        }
        this.props.writeBlogSubmit(submitData, userID, nickname, avatar_url)
      }
    })

  }

  render() {
  	const { getFieldDecorator } = this.props.form
    const controls = ['bold', 'italic', 'underline', 'text-color', 'separator', 'link', 'separator', 'media' ]
    const formItemLayout = {
      labelCol: { span: 3 },
      wrapperCol: { span: 21 },
    }
    return (
      <WriteWrapper>
      	<ContentWrapper>
      		<div className="demo-container">
		        <Form layout='horizontal' onSubmit={this.handleSubmit}>
		          <Form.Item {...formItemLayout} label="文章标题">
		            {getFieldDecorator('title', {
		              rules: [{
		                required: true,
		                message: '请输入标题',
		              }],
		            })(
		              <Input size="large" placeholder="请输入标题"/>
		            )}
		          </Form.Item>
		          <Form.Item {...formItemLayout} label="文章正文">
		            {getFieldDecorator('content', {
		              validateTrigger: 'onBlur',
		              rules: [{
		                required: true,
		                validator: (_, value, callback) => {
		                  if (value.isEmpty()) {
		                    callback('请输入正文内容')
		                  } else {
		                    callback()
		                  }
		                }
		              }],
		            })(
		            	<BraftEditor
		                className="my-editor"
		                controls={controls}
		                style={{
											'borderStyle': 'solid', 
											'borderWidth': '1px', 
											'borderColor': 'rgb(208,205,205)'
										}}
		                placeholder="请输入正文内容"
		              />
		              
		            )}
		          </Form.Item>
		          <Form.Item {...formItemLayout}>
		            <Button size="large" type="primary" htmlType="submit">提交</Button>
		          </Form.Item>
		        </Form>
		      </div>
      	</ContentWrapper>
      </WriteWrapper>
    )
  }
}

const Write = Form.create()(WriteCom)

const mapDispatchToProps = (dispatch) => ({
	writeBlogSubmit: (submitData, userID, nickname, avatar_url) => {

		const action = createActions.getSubmitBlog(submitData, userID, nickname, avatar_url)
		
		dispatch(action)
	}
})

const mapStateToProps = state => {
	const loginState = state.get('login')
	const navState = state.get('nav')
	return {
		userID : loginState.userID,		// 获取当前用户
		nickname: navState.nickname,		    // 当前用户的昵称
		avatar_url: navState.avatar_url,		// 当前用户的头像地址
	} 
}

export default connect(mapStateToProps, mapDispatchToProps)(Write)