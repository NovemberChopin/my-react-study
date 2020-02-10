import {
	fromJS
} from 'immutable'
import {
	constants
} from './index'

const defaultState = fromJS({
	listData: []
})
export default (state = defaultState, action) => {
	if (action.type === constants.GET_HOME_DATA) {
		return state.set('listData', fromJS(action.data))
	}
	return state
}