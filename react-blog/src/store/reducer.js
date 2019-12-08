import {combineReducers} from 'redux-immutable'

import {reducer as navReducer} from '../common/nav/store'
import {reducer as homeReducer} from '../pages/home/store'
import {reducer as profileReducer} from '../pages/profile/store'
import {reducer as detailReducer} from '../pages/detail/store'
import {reducer as loginReducer} from '../pages/loginAndRegister/store'

const reducer = combineReducers({
	login: loginReducer,
	nav: navReducer,
	home: homeReducer,
	detail: detailReducer,
	profile: profileReducer,
})

export default reducer