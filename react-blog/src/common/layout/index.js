// src/common/layout/index.js
import React, { Component, Fragment } from 'react'
import { headerWrapper } from './style'
import { Layout } from 'antd'

import Nav from '../nav'

class Header extends Component {
  render() {
    const {
      Header, Content, Footer
    } = Layout;
    return (
      <Fragment>
        <Layout>
          <Header style={headerWrapper}>
            <Nav />
          </Header>
          <Content style={{ marginTop: 64, padding: '0 50px'}}>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Fragment>
    )
  }
}

export default Header