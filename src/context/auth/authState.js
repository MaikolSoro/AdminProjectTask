import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';


// import {
// 	SUCCESSFUL_REGISTRATION,
// 	REGISTRATION_ERROR,
// 	GETTING_USER,
// 	LOGIN_SUCCESSFUL,
// 	LOGIN_ERROR,
// 	LOGOUT
// } from '../../types';

const AuthState = props => {

	const initialState = {
		token: localStorage.getItem('token'),
		authenticated: null,
		user: null,
		message: null
	}

	const [state, dispatch] = useReducer(AuthReducer, initialState);
	// the functions

	return (
		<AuthContext.Provider
			value={{
				token: state.token,
				authenticated: state.authenticated,
				user: state.user,
				message: state.message
			}}
		>
			{props.children}

		</AuthContext.Provider>
	)
}

export default AuthState;
