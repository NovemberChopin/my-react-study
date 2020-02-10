import reducer from './reducer'
import * as createActions from './createActions'
import * as constants from './constants'

export {
	reducer,
	createActions,
	constants
}
//如果用如下导出方式
//export default reducer;
//则在总的reducer中应如下方式引入
//import headerReducer from '../common/header/store';
