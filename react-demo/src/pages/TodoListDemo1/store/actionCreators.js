import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getInputChangeAction = (value) => ({
  type: actionTypes.CHANGE_INPUT_VALUE,
  value: value
});
export const getAddItemAction = () => ({
  type: actionTypes.ADD_TODO_ITEM,
});

export const getDeleteItemAction = (index) => ({
  type: actionTypes.DELETE_TODO_ITEM,
  index: index
});

const initListAction = (data) => ({
  type: actionTypes.INIT_LIST_ACTION,
  data
})
//使用了redux-thunk后action可以是一个函数
export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/api/list.json').then((res) => {
      const data = res.data.data;
      const action = initListAction(data);
      dispatch(action);
    })
  }
}