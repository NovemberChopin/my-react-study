import React, {
  Component,
  Fragment
} from 'react';
//导入react-redux的核心方法Provider，可以把store中的数据提供给其子组件
import {
  Provider
} from 'react-redux';
//导入路由模块  BrowserRouter: 表示路由  Route： 表示路由规则
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import store from './store/index'
import {
  GlobalStyle
} from './style';

//加载页面组件
import Header from './common/header';
import Home from './pages/home';
//使Detail组件按需加载
import Detail from './pages/detail/loadable';
import Login from './pages/login';
import Write from './pages/write';


class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />   {/* 引入全局样式 */}
        <Provider store={store}>    {/* 把store中的数据提供给子组件 */}
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/write' exact component={Write}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
            </div>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;