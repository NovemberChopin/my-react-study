import { createStore, compose, applyMiddleware } from 'redux';
//因为中间件作用于action和store之间，所以要在store创建处使用中间件

import thunk from 'redux-thunk';
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

export default store;