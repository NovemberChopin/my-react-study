import React from 'react';
import ReactDOM from 'react-dom';
//import TodoList from './TodoList';    //用antd前端UI库和redux-thunk中间件实现TodoList
//import TodoListDemo2 from './TodoListDemo2';    //用redux-saga中间件实现todoList

//ReactDOM.render(< TodoListDemo3 / > , document.getElementById('root'));
//import Home from './BasicLayout.js'
import App from './App'

//使用react-redux组件
// import TodoListDemo3 from './TodoListDemo3';    
// import { Provider } from 'react-redux';
// import store from './store3';

//Provider组件和store做了关联，然后Provider中的所有组件都可以使用store中的值了
// const App = (
//   <Provider store={store}>
//     <TodoListDemo3 />
//   </Provider>
// )

ReactDOM.render(<App />, document.getElementById('root'));