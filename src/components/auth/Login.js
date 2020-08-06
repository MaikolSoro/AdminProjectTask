import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

	// STATE TO LOGIN
	const [user, saveUser] = useState({
		email:'',
		password:''
	});

	// extract form user
	const { email, password } = user;

	const onChangeLogin = (e) => {
		saveUser({
			...user,
			[e.target.name] : e.target.value
		});
	}
	// when the user wants to login 
	const onSubmit = e => {
		e.preventDefault();

		// Validate that there are no empty fields

		// Pass it to action
	}
	return ( 
		<div className="form-usuario">
			<div className="contenedor-form  sombra-dark">
				<h1>Iniciar Sesión</h1>

				<form
					onSubmit={onSubmit}
				>
					<div className="campo-form">
						<label htmlFor="email">Email</label>
							<input 
								type="email"
								id="email"
								name="email"
								placeholder="Tu Email"
								value={email}
								onChange={onChangeLogin}
							/>
					</div>
					<div className="campo-form">
						<label htmlFor="password">Password</label>
							<input 
								type="password"
								id="password"
								name="password"
								placeholder="Tu Password"
								value={password}
								onChange={onChangeLogin}
							/>
					</div>

					<div className="campo-form">
						<input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesión" />
					</div>

				</form>
				<Link to={'/new-account'} className="enlace-cuenta">
					Obtener cuenta
				</Link>
			</div>
		</div>
	 );
}
 
export default Login;