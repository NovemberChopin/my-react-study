import React, {
  Component,
  Fragment
} from 'react';
import {
  Provider
} from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from './store'
import {
  GlobalStyle
} from './style'

import 'antd/dist/antd.css'

import Layout from './common/layout'
import LoginAndRegister from './pages/loginAndRegister'
import Home from './pages/home'
import Topic from './pages/topic'
import Profile from './pages/profile'
import Write from './pages/write'
import Detail from './pages/detail'
import RecommendUser from './pages/recommendUser'

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={LoginAndRegister} />
              <Route path='/' render={() => (
                <Layout>
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/write" component={Write} />
                  <Route exact path="/detail/:id" component={Detail} />
                  <Route exact path="/topic" component={Topic} />
                  <Route exact path="/profile/:id" component={Profile} />
                  <Route exact path="/recommenduser" component={RecommendUser} />
                </Layout>
              )} />
            </Switch>
          </BrowserRouter>
        </Provider>
      </Fragment>
    );
  }
}

export default App;