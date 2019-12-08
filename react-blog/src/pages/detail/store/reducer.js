import {
	constants
} from './index'

const defaultState = {
	blogInfo: {
		title: '',
		content: '',
		meta: {
			likeNum: 0,
			commentNum: 0
		},
		pic_url: '',
		blog_lable: [],
		_id: '',
		author_id: '',
		blog_catalog: '',
		createTime: '',
		comments: []
	},
	value: '' 		// 评论区输入框的值
}

export default (state = defaultState, action) => {
	if (action.type === constants.GET_BLOG_INFO) {
		const newState = JSON.parse(JSON.stringify(state))
		newState.blogInfo = action.data
		return newState
	}

	// 评论区输入框内容变化
	if (action.type === 'CHANGE_COMMENT_VALUE') {
		const newState = JSON.parse(JSON.stringify(state))
		newState.value = action.data
		return newState
	}

	if( action.type === 'SUBMIT_COMMENT') {
		const newState = JSON.parse(JSON.stringify(state))
		newState.blogInfo.comments = [...newState.blogInfo.comments, {
			userID: action.userID,
			author: action.nickname,		// 评论人的昵称
			avatar: action.avatar_url,		// 评论人的头像
			content: newState.value, 		// 评论的内容
			datetime: action.datetime
		}]
		return newState
	}
	return state
}