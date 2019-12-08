import * as actionTypes from './actionTypes';

const defaultState = {
  inputValue: '',
  list: []
}

// reducer 可以接受state，但是绝不能修改state
// reducer 是一个纯函数，就是给固定的输入，一定会有固定的输出，而且没有副作用
export default (state = defaultState, action) => {

  if (action.type === actionTypes.CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === actionTypes.ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if (action.type === actionTypes.DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  if (action.type === actionTypes.INIT_LIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }
  return state;
};
