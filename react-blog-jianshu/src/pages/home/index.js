//引入PureComponent组建可以提高组建的性能，避免不必要的渲染
//PureComponent结合immutable数据管理可以完美结合不会出现问题
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { 
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
 } from './style';

class Home extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt="" className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4598/6eab2d9b6506c6302c4b5602405021a9e321408b.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null }
      </HomeWrapper>
    )
  }

  componentDidMount() {
      this.props.changeHomeData();
      this.bindEvents();
  }
  //在组建将要卸载时给事件解绑
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollShow);
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollShow);
  }
}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})
const mapDispatchToProps = (dispatch) => ({
  changeHomeData() {
    //此时的action是一个函数
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  changeScrollShow() {
    if (document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);