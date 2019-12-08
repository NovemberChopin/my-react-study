import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux';
import {
  CSSTransition
} from 'react-transition-group';
import * as actionCreators from './store/actionCreators';
//因为推出时需要改变login页面的数据，故需要引入login页面的actionCreators
import {
  actionCreators as LoginActionCreators
} from '../../pages/login/store';
import {
  Link
} from 'react-router-dom';

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  Addition,
  Button,
  NavSearch,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from './style'

class Header extends Component {

  getListArea() {
    //结构赋值语法糖
    const {
      focused,
      list,
      page,
      totaPage,
      mouseIn,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage
    } = this.props;
    //此时list为immutable数组，需要将其转化为普通数组才可以进行下标操作
    const newList = list.toJS();
    const pageList = []; //存放要显示的列表数据
    let pageListNum = 10;
    if (page === totaPage) {
      pageListNum = totaPage % 10;
    }
    if (newList.length) { //只有当列表有数据时才循环
      for (let i = (page - 1) * 10; i < (page - 1) * 10 + pageListNum; i++) {
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
              <SearchInfoSwitch onClick={() => handleChangePage(page, totaPage, this.spinIcon)}>
                <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>换一批
              </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            { pageList }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render() {
    const {
      focused,
      list,
      login,
      logout,
      handleInputFocus,
      handleInputBlur
    } = this.props;
    return (
      <HeaderWrapper>
        <Link to='/'><Logo /></Link>
        <Nav>
          <NavItem className='left active'>
            <i className="iconfont">&#xe627;</i>首页
          </NavItem>
          <NavItem className='left'>
            <i className="iconfont">&#xe610;</i>下载APP
          </NavItem>
          {
            login ? <NavItem onClick={logout} className='right'>退出</NavItem> : 
              <Link to='/login'><NavItem className='right'>登陆</NavItem></Link> 
          }
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
            <NavSearch
              className={focused ? 'focused' : ''}
              onFocus={() => handleInputFocus(list)}
              onBlur={handleInputBlur}
            ></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
              &#xe617;
            </i>

            {this.getListArea()}
          </SearchWrapper>
        </Nav>

        <Addition>
          <Link to='/write'>
            <Button className='writting'>
              <i className="iconfont">&#xe61c;</i>写文章
            </Button>
          </Link>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

//把store中的数据和Props连接，其中state就是store中的数据
const mapStateToProps = (state) => {
  return {
    //state是immutable数据，不可直接更改
    //下面两句话等价
    //focused: state.get('header').get('focused')
    //在state下面的header中取focused的值
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totaPage: state.getIn(['header', 'totaPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      if (list.size === 0) {
        //当搜索框聚焦时发送异步请求获取列表数据
        dispatch(actionCreators.getList());
      }
      //创建好鼠标聚焦的并action发送给store
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },

    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },

    handleChangePage(page, totaPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
      if (page < totaPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout() {
      //向login页面的reducer发送action
      dispatch(LoginActionCreators.logout())
    }
  }
}
export default connect(mapStateToProps, mapDispathToProps)(Header);