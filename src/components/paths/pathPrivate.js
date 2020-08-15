import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PathPrivate = ({ component: Component, ...props }) => {

	const authContext = useContext(AuthContext);
	const { loading, authenticated, userAuthenticated } = authContext;

	useEffect(() => {
		userAuthenticated()
	}, [])
	return (
		<Route
			{...props} render={props => !authenticated && !loading ? (
				<Redirect to="/" />
			) : (
					<Component {...props} />
				)}

		/>
	);
}

export default PathPrivate;
