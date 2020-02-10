import React, { Component } from 'react';
//引入UI组件
import TodoListUI from './TodoListUI';
import store from '../../store'
import * as actionCreators from './store/actionCreators'

class TodoList extends Component {
  constructor(props) {
    super(props);
    //把此页面的store传给state
    this.state = store.getState().TodoDemo1
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    //监听store中的数据，当store中的数据发生变化时，更新当前组建中的数据
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        list={this.state.list}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }

  //当组件挂载完成后执行
  componentDidMount() {
    //this.mounted = true 表示当前组件已经挂载
    this.mounted = true
    const action = actionCreators.getTodoList();
    //store调用dispatch方法,action就会被执行
    store.dispatch(action);
  }

  componentWillUnmount() {
    this.mounted = false
  }

  //当数据框内输入数据时，把动作传给store
  handleInputChange(e) {
    const action = actionCreators.getInputChangeAction(e.target.value);
    store.dispatch(action);
  }

  //按钮点击后的动作
  handleBtnClick() {
    if (this.state.inputValue) {
      const action = actionCreators.getAddItemAction();
      store.dispatch(action);
    } else {
      alert('请输入数据');
    }

  }

  //当点击item时
  handleItemDelete(index) {
    const action = actionCreators.getDeleteItemAction(index);
    store.dispatch(action);
  }


  //当store中数据改变时。更新组件内的数据
  handleStoreChange() {
    if(this.mounted) {
      //只有当组件未被卸载时更新组件内容
      this.setState(store.getState().TodoDemo1);
    }
    
  }
}

export default TodoList;
