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

	const registerUser = async data => {
		try {
			const response = await clientAxios.post('/api/user', data)
			console.log(response);

			dispatch({
				type: SUCCESSFUL_REGISTRATION
			})

		} catch (error) {
			console.log(error);

			dispatch({
				type: REGISTRATION_ERROR
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
