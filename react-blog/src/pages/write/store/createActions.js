import axios from 'axios'

import { constants } from './index'
const Qs = require('qs')

// const action = {
// 	type: constants.SUBMIT_BLOG,
// 	title: submitData.title,
// 	content: submitData.content,
// 	author_id: userID,
// 	author_nickname: nickname, 
// 	avatar_url: avatar_url
// }

// 处理博客提交函数
export const getSubmitBlog = (submitData, userID, nickname, avatar_url) => {
	
	const reg = new RegExp("<.+?>","g")
  const msg = submitData.content.replace(reg, '')
  const describe = msg.substring(0, 65)
	const blogData = {
		title: submitData.title,
		describe: describe,
		content: submitData.content,
		author_id: userID,
		author_nickname: nickname, 
		avatar_url: avatar_url,
	}
	//console.log(blogData)
	return (dispatch) => {
		axios({
		  url: 'http://localhost:3001/api/blog/addBlog',
		  method: 'post',
		  transformRequest: [function (data) {
		    // 对 data 进行任意转换处理
		    return Qs.stringify(data)
		  }],
		  headers: {
		    'deviceCode': 'A95ZEF1-47B5-AC90BF3'
		  },
		  data: blogData
		}).then(function (response) {
		  if(response.data.status === 0) {
		  	alert(response.data.message)
		  } else {
		  	// 把数据存入store中
		  	alert("发表成功")
		  }
		})
	}
}