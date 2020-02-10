import React, { Component, Fragment } from 'react';
// react-redux提供的第二个API connect
import { connect } from 'react-redux';

class TodoListDemo3 extends Component {

  render() {
    const { list, inputValue, handleInputChange, handleDeleteItem, handleBtnClick } = this.props;
    return (
      <Fragment>
        <h4>使用react-redux实现TodoList：</h4>
        <div>
          <input onChange={handleInputChange} value={inputValue} />
          <button onClick={() => { handleBtnClick(inputValue) }}>提交</button>
        </div>
        <ul>
          {
            list.map((item, index) => (
              <li key={index} onClick={() => { handleDeleteItem(index) }}>{item}</li>
            ))
          }
        </ul>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.TodoDemo3.inputValue,
    list: state.TodoDemo3.list,
    // inputValue: state.getIn(['TodoDemo3', 'inputValue']),
    // list: state.getIn(['TodoDemo3', 'list'])
  }
}
const mapDispatchToProps = (dispatch) => ({
  handleInputChange(e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    dispatch(action);
  },
  handleBtnClick(inputValue) {
    if (inputValue) {
      const action = {
        type: 'add_item'
      }
      dispatch(action);
    } else {
      alert('请在输入框内输入内容');
    }


  },
  handleDeleteItem(index) {
    const action = {
      type: 'delete_item',
      index: index
    }
    dispatch(action);
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoListDemo3);