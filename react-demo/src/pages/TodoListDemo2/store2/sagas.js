import { put, takeEvery } from 'redux-saga/effects';
import * as actionTypes from './actionTypes';
import * as actionCreators from './actionCreators';
import axios from 'axios';

//gengeate函数
function* getInitList() {
  try {
    const res = yield axios.get('/api/list.json');
    //console.log(res.data);
    const action = actionCreators.initListAction(res.data.data);
    yield put(action);
  } catch(e) {
    console.log('请求失败');
  }
  
}
//当有任何INIT_LIST类型的action时，运行getInitList函数
function* mySaga() {
  yield takeEvery(actionTypes.GET_INIT_LIST, getInitList);
}

export default mySaga;