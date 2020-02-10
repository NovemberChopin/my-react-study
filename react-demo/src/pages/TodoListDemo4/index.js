import React, {
  Component,
  Fragment
} from 'react';
import TodoItemDemo2 from './TodoItemDemo4';

class TodoListDemo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    //bind方法中的this是指向的组件TodoListDemo2
    this.handleInpitChange = this.handleInpitChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelect = this.handleItemDelect.bind(this);
  }
  render() {
    return (
      <Fragment>
        <input
          value={this.state.inputValue}
          onChange={this.handleInpitChange}
        />
        <button onClick={this.handleBtnClick}> 确定 </button>
        <ul>
          <div>
            {
              this.getItem()
            }
          </div>

        </ul>
      </Fragment>
    )
  }

  getItem() {
    return this.state.list.map((item, index) => ((
      <TodoItemDemo2
        key={index}
        content={item}
        index={index}
        deleteItem={this.handleItemDelect}
      />
    )))
  }

  handleInpitChange(e) {
    const value = e.target.value;
    //setState是一个异步函数，赋值时尽量给值做一个保存
    this.setState(() => ({
      inputValue: value
    }))
  }
  handleBtnClick() {
    //不明白为啥下面这样写不可以
    // const list = this.state.list;
    // const newList = list.push(this.state.inputValue);
    // this.setState(() => ({
    // 	list: newList,
    // 	inputValue: ''
    // }))

    //setState会接受一个参数，表示修改之前的那个数据
    this.setState((preState) => ({
      list: [...preState.list, preState.inputValue],
      inputValue: ''
    }))
  }

  handleItemDelect(index) {
    this.setState((preState) => {
      const list = [...preState.list];
      //注意： list.splice(index, 1); splice方法返回的是删除的值，而不是删除后的数组
      list.splice(index, 1);
      return {
        list: list
      }
    })
  }
}

export default TodoListDemo1;