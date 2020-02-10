//redux - immutable生成的reducer对象为immutable对象
import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store';
import { reducer as detailReducer } from '../pages/detail/store';
import { reducer as loginReducer } from '../pages/login/store';
//如果一个reducer处理所有的数据，reducer文件就会太庞大不可维护
//combineReducers可以把多个reducer整合为一个大的reducer
const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
  login: loginReducer
});

export default reducer;