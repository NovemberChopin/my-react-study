import React, { PureComponent } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
//在react中页面跳转借助于react-router-dom组建可以实现单页内跳转，可以提高应用性能
import { Link } from 'react-router-dom';

class List extends PureComponent {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <div>
        {
          list.map((item, index) => (
            <Link key={index} to={'/detail/' + item.get('id')}>
              <ListItem>
                <img alt='' className='pic' src={item.get('imgUrl')} />
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            </Link>
          ))
        }
        <LoadMore onClick={() => getMoreList(page)}>查看更多</LoadMore>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
});

const mapDispatchToProps = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List);