/**
 * 存放网页头的数据以及操作
 * 
 */
import * as constants from './constants';
//immutable库，让数据不可更改
import { fromJS } from 'immutable';

//第一步：把数据转化
const defaultState = fromJS({
  focused: false,   //搜索框聚焦
  mouseIn: false,   //鼠标是否移入
  list: [],         //列表框的内容
  page: 1,          //当前是第几页
  totaPage: 1       //总共多少页
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.SEARCH_FOCUS:
      return state.set('focused', true);
    case constants.SEARCH_BLUR:
      return state.set('focused', false);
    case constants.CHANGE_LIST:
      return state.merge({
        list: action.data,
        totaPage: action.totaPage
      })
      //return state.set('list', action.data).set('totaPage', action.totaPage);
    case constants.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case constants.CHANGE_PAGE:
      return state.set('page', action.page);
    default:
      return state;
  }
}

//等价下面if语句

// export default (state = defaultState, action) => {
//   if (action.type === constants.SEARCH_FOCUS) { //搜索框聚焦时
//     //immutable对象的set方法，会结合之前immutable的对象的值
//     //和设置的值，返回一个全新的对象
//     return state.set('focused', true);
//     // return {
//     //   focused: true
//     // }
//   }
//   if (action.type === constants.SEARCH_BLUR) {  //搜索框失焦时
//     return state.set('focused', false);
//     // return {
//     //   focused: false
//     // }
//   }
//   if(action.type === constants.CHANGE_LIST) {
//     //此时的action.data是一个immutable数组
//     return state.set('list', action.data);
//   }
//   return state
// }