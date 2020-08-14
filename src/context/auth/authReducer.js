
import {
	SUCCESSFUL_REGISTRATION,
	REGISTRATION_ERROR,
	LOGIN_ERROR,
	GETTING_USER,
	// 	GETTING_USER,
	// 	LOGIN_SUCCESSFUL,
	// 	LOGIN_ERROR,
	// 	LOGOUT
} from '../../types';

export default (state, action) => {
	switch (action.type) {

		case SUCCESSFUL_REGISTRATION:
			localStorage.setItem('token', action.payload.token);
			return {
				...state,
				authenticated: true,
				message: null
			}
		case LOGIN_ERROR:
		case REGISTRATION_ERROR:
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				message: action.payload
			}
		case GETTING_USER:
			return {
				...state,
				user: action.payload
			}
		default:
			return state;
	}
}