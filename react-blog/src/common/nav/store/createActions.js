import axios from 'axios'
import { constants } from './index'

const getUserMessageAction = data => ({
	type: constants.GET_USER_MSG,
	data: data
})

export const getUserMessage = (userID) => {
	return dispatch => {
		axios.get(`http://localhost:3001/api/user/getUserMsg?id=${userID}`).then((res) => {
			if(res.data.status === 1) {
				dispatch(getUserMessageAction(res.data.data))
			}
		})
	}
}

export const handleQuitClick = () => ({
	type: constants.HANDLE_QUIT_ACTION
})