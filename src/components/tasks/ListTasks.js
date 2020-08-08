import React, { Fragment, useContext } from 'react';
import Task from './Task';
import ProjectContext from '../../context/projects/projectContext';

const ListTask = () => {

	// Get the state of the projects

	const projectsContext = useContext(ProjectContext);
	const { project } = projectsContext;

	// If there is not a project selected

	if (!project) return <h2>Selecciona un proyecto</h2>

	// Array destructuring to extract the current project
	const [currentProject] = project;
	const tasks = [
		{ name: 'Eligir plataforma', state: true },
		{ name: 'Eligir Colores', state: false },
		{ name: 'Eligir Hosting', state: true },
	];

	return (
		<Fragment>
			<h2>Proyectos: {currentProject.name} </h2>
			<ul className="listado-tareas">
				{
					tasks.length === 0 ? (<li className="tarea"><p>No hay tareas</p></li>)
						:
						tasks.map(task => (
							<Task
								task={task}
							/>
						))
				}
			</ul>
			<button
				type="button"
				className="btn btn-primario"
			>Eliminar Proyectos &times;</button>
		</Fragment>

	);
}

export default ListTask;