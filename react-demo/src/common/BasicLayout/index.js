import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import 'antd/dist/antd.css'
import {
  Layout, Menu, Icon,
} from 'antd';

const {
  Header, Content, Footer, Sider,
} = Layout;
const SubMenu = Menu.SubMenu;

class BasicLayout extends Component {
  // submenu keys of first level
  // rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  // state = {
  //   openKeys: ['sub1'],
  // };

  // onOpenChange = (openKeys) => {
  //   const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
  //   if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
  //     this.setState({ openKeys });
  //   } else {
  //     this.setState({
  //       openKeys: latestOpenKey ? [latestOpenKey] : [],
  //     });
  //   }
  // }

  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <Link to='/'><Icon type="home" /><span>Home</span></Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span >TodoList Demo</span></span>}
            >
              <Menu.Item key="3"><Link to='/todolistdemo1'>antd+redux-thunk</Link></Menu.Item>
              <Menu.Item key="4"><Link to='/todolistdemo2'>redux-saga</Link></Menu.Item>
              <Menu.Item key="5"><Link to='/todolistdemo3'>react-redux</Link></Menu.Item>
              <Menu.Item key="6"><Link to='/todolistdemo4'>react</Link></Menu.Item>

            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="7"><Link to='/test1'>Drawer</Link></Menu.Item>
              <Menu.Item key="8"><Link to='/test2'>Quill</Link></Menu.Item>
              <Menu.Item key="9"><Link to='/test3'>Nav</Link></Menu.Item>

            </SubMenu>
            
            <Menu.Item key="10">
              <Link to='/records'>
                <Icon type="file" />
                <span>BillBook</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub3"
              title={<span><Icon type="team" /><span>React-tech</span></span>}
            >
              <Menu.Item key="11"><Link to='/react-tech/demo1'>state</Link></Menu.Item>
              <Menu.Item key="12"><Link to='/react-tech/demo2'>refs</Link></Menu.Item>

            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0, textAlign: "center", fontSize: '30px' }}>React Demo</Header>
          <Content style={{ margin: '20px' }}>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default BasicLayout