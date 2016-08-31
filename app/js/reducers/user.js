import { LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGIN_REQUEST } from '../constants/user';

const getUserData = () => {
	return {
		name: 'Voljka'
	}
}

const initialState = getUserData();

export default function understate(state = initialState, action) {

	switch (action.type) {

		case LOGIN_REQUEST: 
			// TDO
			return {}

		case LOGIN_SUCCESS: 
			// TDO
			return {}

		case LOGIN_FAILED: 
			// TDO
			return {}

		case LOGOUT_SUCCESS: 
			// TDO
			return {}

		default:
			return state

	}
}