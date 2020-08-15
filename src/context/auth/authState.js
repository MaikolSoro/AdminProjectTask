import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';

import clientAxios from '../../config/axios';
import tokenAuth from '../../config/token';

import {
	SUCCESSFUL_REGISTRATION,
	REGISTRATION_ERROR,
	LOGIN_ERROR,
	GETTING_USER,
	LOGIN_SUCCESSFUL,
	LOGOUT
} from '../../types';

const AuthState = props => {

	const initialState = {
		token: localStorage.getItem('token'),
		authenticated: null,
		user: null,
		message: null,
		loading: true
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
		} catch (error) {
			console.log(error);
			dispatch({
				type: LOGIN_ERROR

			})
		}
	}

	// when the user  login

	const login = async info => {
		try {
			const response = await clientAxios.post('/api/auth', info);
			console.log(response);
			dispatch({
				type: LOGIN_SUCCESSFUL,
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
				type: LOGIN_ERROR,
				payload: alert
			})
		}
	}

	// Logout of the user
	const logout = () => {

		dispatch({
			type: LOGOUT
		})
	}
	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				authenticated: state.authenticated,
				user: state.user,
				message: state.message,
				loading: state.loading,
				registerUser,
				login,
				userAuthenticated,
				logout
			}}
		>
			{props.children}

		</AuthContext.Provider>
	)
}

export default AuthState;
