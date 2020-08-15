
import {
	SUCCESSFUL_REGISTRATION,
	REGISTRATION_ERROR,
	LOGIN_ERROR,
	GETTING_USER,
	LOGIN_SUCCESSFUL,
	LOGOUT,
	// 	GETTING_USER,
	// 	LOGIN_SUCCESSFUL,
	// 	LOGIN_ERROR,
	// 	LOGOUT
} from '../../types';

export default (state, action) => {
	switch (action.type) {
		case LOGIN_SUCCESSFUL:
		case SUCCESSFUL_REGISTRATION:
			localStorage.setItem('token', action.payload.token);
			return {
				...state,
				authenticated: true,
				message: null
			}
		case LOGOUT:
		case LOGIN_ERROR:
		case REGISTRATION_ERROR:
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				user: null,
				authenticated: null,
				message: action.payload
			}
		case GETTING_USER:
			return {
				...state,
				authenticated: true,
				user: action.payload
			}
		default:
			return state;
	}
}