import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import clientAxios from '../../config/axios';
import tokenAuth from '../../config/token';

import {
	SUCCESSFUL_REGISTRATION,
	REGISTRATION_ERROR,
	LOGIN_ERROR,
	GETTING_USER
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
			// Getting the user
			userAuthenticated()

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
	// Return the user authenticated
	const userAuthenticated = async () => {
		const token = localStorage.getItem('token');
		if (token) {
			// TODO: Function to send the token by headers
			tokenAuth(token);
		}
		try {
			const response = await clientAxios.get('/api/auth');
			dispatch({
				type: GETTING_USER,
				payload: response.data.user
			});
			console.log(response);
		} catch (error) {
			console.log(error);
			dispatch({
				type: LOGIN_ERROR

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
