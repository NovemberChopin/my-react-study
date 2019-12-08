// import { createStore, applyMiddleware, compose } from 'redux';
// import reducer from './reducer';
// //使用redux-thunk中间件来处理异步请求
// import thunk from 'redux-thunk';

// const composeEnhancers =
//   typeof window === 'object' &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(thunk),
//   // other store enhancers if any
// );
// const store = createStore(reducer, enhancer);

// export default store;

import reducer from './reducer'

export { reducer }