/**
 * 首页的数据以及操作
 * 
 */
//import * as constants from './constants';
//immutable库，让数据不可更改
import { fromJS } from 'immutable';
import * as constants from './constants';

//第一步：把数据转化
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false     //是否显示回到顶部按钮
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      });
    case constants.ADD_ARTICLE_LIST:
      return state.merge({
        articleList: state.get('articleList').concat(fromJS(action.articleList)),
        articlePage: action.nextPage
      });
    case constants.TOGGLE_SCROLL_TOP:
      return state.set('showScroll', action.show);
    default:
      return state;
  }
}

