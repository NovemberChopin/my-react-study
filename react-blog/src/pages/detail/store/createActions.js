import axios from 'axios'
import moment from 'moment';
import {
	constants
} from './index'

const getBlogInfoAction = result => ({
	type: constants.GET_BLOG_INFO,
	data: result
})

export const getBlogInfo = (id) => {
	return (dispatch) => {
		axios.get(`http://localhost:3001/api/blog/getBlogByID?id=${id}`).then(res => {
			// console.log(res)
			dispatch(getBlogInfoAction(res.data.data))
		})
	}
}

// export const getBlogInfo = (id) => {
// 	return (dispatch) => {
// 		axios.get('/api/detailList.json').then(res => {
// 			dispatch(getBlogInfoAction(res.data.data))
// 		})
// 	}
// }

export const handleSubmit = (value, nickname, userID, avatar_url) => {
	return {
		type: 'SUBMIT_COMMENT',
    value: value,
    nickname: nickname,
    userID: userID,
    avatar_url: avatar_url,
    datetime: moment().fromNow()
	}
}