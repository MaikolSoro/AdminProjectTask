import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext'


const Bar = () => {

	// Extract the information of authentication

	const authContext = useContext(AuthContext)
	const { user, userAuthenticated } = authContext

	useEffect(() => {
		userAuthenticated()
	}, [])

	return (
		<header className="app-header">
			{
				user ? <p className="nombre-usuario">Hola<span>{user.name}</span></p>
					: null
			}

			<nav className="nav-principal">
				<a href="#!">Cerrar Sesión</a>
			</nav>
		</header>

	);
}

export default Bar;