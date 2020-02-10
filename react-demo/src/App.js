import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'


import BasicLayout from './common/BasicLayout'
import Home from './pages/Home'
import TodoListDemo1 from './pages/TodoListDemo1'
import TodoListDemo2 from './pages/TodoListDemo2'
import TodoListDemo3 from './pages/TodoListDemo3'
import TodoListDemo4 from './pages/TodoListDemo4'
import Test1 from './pages/Test1'
import Quill from './pages/Test2';
import Test3 from './pages/Test3'

import NoMatch from './pages/NoMatch';
import Records from './pages/BillBook';

import Demo1 from './pages/react-tech/Demo1'
import Demo2 from './pages/react-tech/Demo2'


class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Provider store={store}>
            <BasicLayout>
              <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/todolistdemo1' component={TodoListDemo1}></Route>
                <Route path='/todolistdemo2' component={TodoListDemo2}></Route>
                <Route path='/todolistdemo3' component={TodoListDemo3}></Route>
                <Route path='/todolistdemo4' component={TodoListDemo4}></Route>
                <Route path='/test1' component={Test1}></Route>
                <Route path='/test2' component={Quill}></Route>
                <Route path='/test3' component={Test3}></Route>
                <Route path='/records' component={Records}></Route>
                <Route path='/react-tech' render={() => (
                  <Switch>
                    <Route path='/react-tech/demo1' component={Demo1} />
                    <Route path='/react-tech/demo2' component={Demo2} />
                  </Switch>
                )} />
                <Route component={NoMatch} ></Route>
              </Switch>
            </BasicLayout>
          </Provider>
        </BrowserRouter>
      </Fragment>
    )
  }
}

export default App