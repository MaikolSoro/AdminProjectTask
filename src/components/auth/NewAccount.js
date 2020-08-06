import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NewAccount = () => {
	// STATE TO LOGIN
	const [user, saveUser] = useState({
		name: '',
		email:'',
		password:'',
		confirmar: ''
	});

	// extract form user
	const { name, email, password, confirmar } = user;

	const onChangeRegister = (e) => {
		saveUser({
			...user,
			[e.target.name] : e.target.value
		});
	}
	// when the user wants to login 
	const onSubmit = e => {
		e.preventDefault();

		// Validate that there are no empty fields

		// minimum password of 6 characters 

		// Check if the two passwords are the same
		// Pass it to action
	}
	return ( 
		<div className="form-usuario">
			<div className="contenedor-form  sombra-dark">
				<h1>Obtener una cuenta</h1>

				<form
					onSubmit={onSubmit}
				>
					<div className="campo-form">
						<label htmlFor="name">Nombre</label>
							<input 
								type="text"
								id="name"
								name="name"
								placeholder="Tu Nombre"
								value={name}
								onChange={onChangeRegister}
							/>
					</div>
					<div className="campo-form">
						<label htmlFor="email">Email</label>
							<input 
								type="email"
								id="email"
								name="email"
								placeholder="Tu Email"
								value={email}
								onChange={onChangeRegister}
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
								onChange={onChangeRegister}
							/>
					</div>
					<div className="campo-form">
						<label htmlFor="confirmar">Confirmar password</label>
							<input 
								type="password"
								id="confirmar"
								name="confirmar"
								placeholder="Repite tu password"
								value={confirmar}
								onChange={onChangeRegister}
							/>
					</div>

					<div className="campo-form">
						<input type="submit" className="btn btn-primario btn-block" value="Registrame" />
					</div>

				</form>
				<Link to={'/'} className="enlace-cuenta">
					Volver a Iniciar Sesión
				</Link>
			</div>
		</div>
	 );
}

 
export default NewAccount;