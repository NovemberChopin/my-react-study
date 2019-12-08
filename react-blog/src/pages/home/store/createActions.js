import axios from 'axios'

import {
	constants
} from './index'

// createAction.js
const getHomeDataAction = (result) => ({
	type: constants.GET_HOME_DATA,
	data: result
})

export const getHomeData = () => {
	return (dispatch) => {
		axios.get('http://localhost:3001/api/blog/getAllList')
			.then((res) => {
			//console.log(res)
			dispatch(getHomeDataAction(res.data.data))
		})
	}
}

// export const getHomeData = () => {
//   return (dispatch) => {
//     axios.get('/api/homeList.json').then((res) => {
//       console.log(res)
//       dispatch(getHomeDataAction(res.data.data))
//     })
//   }
// }