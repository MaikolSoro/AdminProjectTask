import React, { Fragment, useContext } from 'react'
import Task from './Task'
import ProjectContext from '../../context/projects/projectContext'
import taskContext from '../../context/tasks/taskContext'
import { CSSTransition, TransitionGroup } from 'react-transition-group'


const ListTask = () => {

	// Extract projects from initial state

	const projectsContext = useContext(ProjectContext);
	const { project, deleteProject } = projectsContext;

	// Getting project tasks
	const tasksContext = useContext(taskContext)
	const { tasksproject } = tasksContext;

	// If there is not a project selected

	if (!project) return <h2>Selecciona un proyecto</h2>

	// Array destructuring to extract the current project
	const [currentProject] = project;


	// Delete a project
	const onClickDelete = () => {
		deleteProject(currentProject.id)
	}
	return (
		<Fragment>
			<h2>Proyectos: {currentProject.name} </h2>
			<ul className="listado-tareas">
				{
					tasksproject.length === 0 ? (<li className="tarea"><p>No hay tareas</p></li>)
						:
						<TransitionGroup>

							{tasksproject.map(task => (
								<CSSTransition
									key={task.id}
									timeout={200}
									classNames="tarea"

								>
									<Task
										task={task}
									/>
								</CSSTransition>
							))}
						</TransitionGroup>
				}
			</ul>
			<button
				type="button"
				className="btn btn-primario"
				onClick={onClickDelete}
			>Eliminar Proyectos &times;</button>
		</Fragment>

	);
}

export default ListTask;