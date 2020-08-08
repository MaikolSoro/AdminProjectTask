import React, { useContext } from 'react'
import ProjectContext from '../../context/projects/projectContext'
const FormTasks = () => {

	// Extract if a project is active
	const projectsContext = useContext(ProjectContext)
	const { project } = projectsContext;

	// If there is not a project selected

	if (!project) return null

	// Array destructuring to extract the current project
	// const [currentProject] = project;

	return (
		<div className="formulario">
			<form>
				<div className="contenedor-input">
					<input
						type="text"
						className="input-text"
						placeholder="Nombre de la tarea"
						name="name"

					/>
				</div>
				<div className="contenedor-input">
					<input
						type="submit"
						className="btn btn-primario btn-submit btn-block"
						value="Agregar Tarea"
					/>
				</div>
			</form>
		</div>

	);
}

export default FormTasks;