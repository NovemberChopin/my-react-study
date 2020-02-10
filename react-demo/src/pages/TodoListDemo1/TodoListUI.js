import React, { Component, Fragment } from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css'

class TodoListUI extends Component {
  render() {
    return (
      <Fragment>
        <p>使用Antd前端UI框架和redux-thunk中间件：</p>
        <div style={{ marginTop: '10px', marginLeft: '10px' }}>
          < Input
            value={this.props.inputValue}
            placeholder="Basic usage"
            style={{ width: '300px', marginRight: '10px' }}
            onChange={this.props.handleInputChange}
          />
          <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
          <List
            style={{ marginTop: '10px', width: '300px' }}
            bordered
            dataSource={this.props.list}
            renderItem={(item, index) => (
              <List.Item onClick={() => { this.props.handleItemDelete(index) }}>
                {item}
              </List.Item>
            )}
          />
        </div>
      </Fragment>
    )
  }
}


export default TodoListUI;