import { LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT_SUCCESS, LOGIN_REQUEST } from '../constants/user';

export function login(payload) {
	// TODO
	return {
		type: LOGIN_REQUEST
	}
}

export function logout() {
	// TODO
	return {
		type: LOGOUT_REQUEST
	}
}