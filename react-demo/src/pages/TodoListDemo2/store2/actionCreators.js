import * as actionTypes from './actionTypes';

export const getInputChangeAction = (value) => ({
  type: actionTypes.CHANGE_INPUT,
  value: value
});

export const getBtnClickAction = () => ({
  type: actionTypes.ADD_ITEM
});

export const getDeleteAction = (index) => ({
  type: actionTypes.DELETE_ITEM,
  index: index
});

export const initListAction = (data) => ({
  type: actionTypes.INIT_LIST,
  data
});

export const getInitList = () => ({
  type: actionTypes.GET_INIT_LIST
});