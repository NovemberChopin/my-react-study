import React, { Component, Fragment } from 'react';
import store from '../../store';
import * as actionCreators from './store2/actionCreators';

class TodoListDemo2 extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState().TodoDemo2;
    //this.setState(store.getState());
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    //subscribe()函数： 当store中数据发生变化时此函数就会自动执行，函数可以接受一个参数
    store.subscribe(this.handleStoreChange);
  }
  render() {
    return (
      <Fragment>
        <h4>使用redux数据框架和readux-sage中间件实现TodoList</h4>
        <input
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleBtnClick}>确定</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li onClick={this.handleDeleteItem.bind(this, index)} key={index}>{item}</li>
            })
          }
        </ul>
      </Fragment>
    )
  }
  componentDidMount() {
    this.mounted = true
    const action = actionCreators.getInitList();
    //console.log(action)
    store.dispatch(action);
  }
  componentWillUnmount() {
    this.mounted = false
  }

  handleInputChange(e) {
    const action = actionCreators.getInputChangeAction(e.target.value);
    //调用dispatch()函数把action传给store,然后store会把数据和action自动发送给reducer
    store.dispatch(action);
  }

  handleBtnClick() {
    if (this.state.inputValue) {
      const action = actionCreators.getBtnClickAction();
      store.dispatch(action);
    } else
      alert('请在输入框中输入数据');

  }

  handleDeleteItem(index) {
    const action = actionCreators.getDeleteAction(index);
    store.dispatch(action);
  }
  
  handleStoreChange() {
    if(this.mounted) {
      //此时的this指向当前组件
      //getState() 返回当前store的state，也等于reducer最后一次返回的值
      this.setState(store.getState().TodoDemo2);  //从本页store中取数据给当前组件
    }
  }
}

export default TodoListDemo2;