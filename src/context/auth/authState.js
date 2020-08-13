import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import clientAxios from '../../config/axios';


import {
	SUCCESSFUL_REGISTRATION,
	REGISTRATION_ERROR
	// GETTING_USER,
	// LOGIN_SUCCESSFUL,
	// LOGIN_ERROR,
	// LOGOUT
} from '../../types';

const AuthState = props => {

	const initialState = {
		token: localStorage.getItem('token'),
		authenticated: null,
		user: null,
		message: null
	}

	const [state, dispatch] = useReducer(AuthReducer, initialState);
	// the functions

	const registerUser = async information => {
		try {
			const response = await clientAxios.post('/api/users', information)

			dispatch({
				type: SUCCESSFUL_REGISTRATION,
				payload: response.data
			})

		} catch (error) {
			// console.log(error);
			const alert = {
				msg: error.response.data.msg,
				category: 'alert-error'
			}

			dispatch({
				type: REGISTRATION_ERROR,
				payload: alert
			})
		}
	}
	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				authenticated: state.authenticated,
				user: state.user,
				message: state.message,
				registerUser
			}}
		>
			{props.children}

		</AuthContext.Provider>
	)
}

export default AuthState;
