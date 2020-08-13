
import {
	SUCCESSFUL_REGISTRATION,
	REGISTRATION_ERROR,
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
		case REGISTRATION_ERROR:
			return {
				...state,
				token: null,
				message: action.payload
			}
		default:
			return state;
	}
}