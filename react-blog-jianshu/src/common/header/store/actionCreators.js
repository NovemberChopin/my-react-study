import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});
export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
});
export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
});
export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page: page
})
//创建更改列表数据的action
const changeList = (data) => ({
  type: constants.CHANGE_LIST,
  //此时data是一个数组，需要把普通数组变为immutable数组
  data: fromJS(data),
  totaPage: Math.ceil(data.length / 10) //总共多少页
})

//当请求异步数据时，必须要返回一个函数，使用resux-thunk可以实现
//当使用了redux-thunk后可以返回一个函数
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data;
      const action = changeList(data.data);
      dispatch(action);
    }).catch(() => {
      console.log('error');
    })
  }
}