import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
//使用redux-sage中间件来处理异步请求
import createSagaMiddleware from 'redux-saga'
import mySaga from '../pages/TodoListDemo2/store2/sagas';
//使用redux-thunk中间件
import thunk from 'redux-thunk'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
  applyMiddleware(thunk)
  // other store enhancers if any
);

const store = createStore(reducer, enhancer);

// then run the saga
sagaMiddleware.run(mySaga)

export default store;