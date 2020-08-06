import React, { Fragment, useState } from 'react';

const NewProject = () => {

	// state for project
	const [project, saveProject] = useState({
		name: ''
	});

	// Extract the project name
	const { name } = project;

	// Read the contents of the input
	const onChangeProject = (e) => {
		saveProject({
			...project,
			[e.target.name] : e.target.value
		});
	}

	// when the user send a project
	const onSubmitProject = (e) => {
		e.preventDefault();

		// validate the project

		// Add to state
	}

	return ( 
		<Fragment> 
			<button
			type="button"
			className="btn btn-block btn-primario"
			>Nuevo Proyecto</button>

				<form
				className="formulario-nuevo-proyecto"
				onSubmit={onSubmitProject}
				>
				<input 
					type="text"
					className="input-text"
					placeholder="Nombre Proyecto"
					name="name"
					value={name}
					onChange={onChangeProject}
				/>
				<input 
				type="submit"
				className="btn btn-primario btn-block"
				value="Agregar Proyecto"
				/>
				</form>
		</Fragment> 
	);
}
 
export default NewProject;