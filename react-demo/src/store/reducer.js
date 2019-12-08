import { combineReducers } from 'redux'

import { reducer as Todo1Reducer } from '../pages/TodoListDemo1/store'
import { reducer as Todo2Reducer } from '../pages/TodoListDemo2/store2'
import { reducer as Todo3Reducer } from '../pages/TodoListDemo3/store3'
import { reducer as BillReducer } from '../pages/BillBook/store'

const reducer = combineReducers({
  TodoDemo1: Todo1Reducer,
  TodoDemo2: Todo2Reducer,
  TodoDemo3: Todo3Reducer,
  BillReducer: BillReducer
})

export default reducer