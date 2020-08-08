import React, { useContext } from 'react';
import ProjectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';


const Task = ({ task }) => {


	// Extract if a project is active
	const projectsContext = useContext(ProjectContext)
	const { project } = projectsContext;

	// Getting function from task context
	const tasksContext = useContext(taskContext)
	const { deleteTask, getTasks } = tasksContext

	// Extract the project
	const [currentProject] = project

	// Function that is executed, when the user presses the delete task button
	const taskDelete = (id) => {
		deleteTask(id)
		getTasks(currentProject.id)
	}
	return (
		<li className="tarea sombra">
			<p>{task.name}</p>

			<div className="estado">
				{task.state ?
					(
						<button
							type="button"
							className="completo"
						>Completo</button>
					) :
					(
						<button
							type="button"
							className="incompleto"
						>Incompleto</button>

					)
				}
			</div>
			<div className="acciones">
				<button
					type="button"
					className="btn btn-primario"
				>Editar</button>

				<button
					type="button"
					className="btn btn-segundario"
					onClick={() => taskDelete(task.id)}
				>Eliminar</button>
			</div>
		</li>
	);
}

export default Task;