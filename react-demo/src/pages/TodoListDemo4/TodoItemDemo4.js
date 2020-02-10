//子组件
import React, { Component } from 'react';

class TodoItemDemo2 extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  //当父组件的render函数被运行时它的子组件都会被运行
  render() {
    return (
      <div
        onClick={this.handleDelete}
      >
        {this.props.content}
      </div>
    )
  }
  handleDelete() {
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
}

export default TodoItemDemo2;