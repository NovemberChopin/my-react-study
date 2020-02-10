import axios from 'axios';
import * as constants from './constants';

const changeHomeDate = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  articleList: result.articleList,
  recommendList: result.recommendList,
  topicList: result.topicList
})

const addHomeList = (result, nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  articleList: result,
  nextPage: nextPage
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      dispatch(changeHomeDate(result));
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data;
      dispatch(addHomeList(result, page+1)); 
    })
  }
}

export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show: show
})