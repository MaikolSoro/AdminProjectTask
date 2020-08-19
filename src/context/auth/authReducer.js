
import {
	SUCCESSFUL_REGISTRATION,
	REGISTRATION_ERROR,
	LOGIN_ERROR,
	GETTING_USER,
	LOGIN_SUCCESSFUL,
	LOGOUT

} from '../../types';

export default (state, action) => {
	switch (action.type) {
		case LOGIN_SUCCESSFUL:
		case SUCCESSFUL_REGISTRATION:
			localStorage.setItem('token', action.payload.token);
			return {
				...state,
				authenticated: true,
				message: null,
				loading: false
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
				message: action.payload,
				loading: false
			}
		case GETTING_USER:
			return {
				...state,
				authenticated: true,
				user: action.payload,
				loading: false
			}
		default:
			return state;
	}
}