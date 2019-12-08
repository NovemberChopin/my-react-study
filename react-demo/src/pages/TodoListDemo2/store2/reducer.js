import * as actionTypes from './actionTypes';

const defaultData = {
  inputValue: '',
  list: []
}

export default (state = defaultData, action) => {
  if (action.type === actionTypes.CHANGE_INPUT) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if(action.type === actionTypes.ADD_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = '';
    return newState;
  }
  if(action.type === actionTypes.DELETE_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);
    return newState;
  }
  
  if (action.type === actionTypes.INIT_LIST) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.data;
    return newState;
  }
  return state;
}