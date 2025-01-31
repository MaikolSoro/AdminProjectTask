import React, { useContext } from 'react';
import ProjectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';


const Task = ({ task }) => {


	// Extract if a project is active
	const projectsContext = useContext(ProjectContext)
	const { project } = projectsContext;

	// Getting function from task context
	const tasksContext = useContext(taskContext)
	const { deleteTask, getTasks, updateTask, saveCurrentTask } = tasksContext

	// Extract the project
	const [currentProject] = project

	// Function that is executed, when the user presses the delete task button
	const taskDelete = (id) => {
		deleteTask(id, currentProject._id)
		getTasks(currentProject.id)
	}

	// Function that modifies the status of tasks
	const changeStatus = task => {
		if (task.state) {
			task.state = false
		} else {
			task.state = true
		}
		updateTask(task)
	}
	// Add a current task when the user wants to edit it
	const selectTask = (task) => {
		saveCurrentTask(task)
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
							onClick={() => changeStatus(task)}
						>Completo</button>
					) :
					(
						<button
							type="button"
							className="incompleto"
							onClick={() => changeStatus(task)}
						>Incompleto</button>

					)
				}
			</div>
			<div className="acciones">
				<button
					type="button"
					className="btn btn-primario"
					onClick={() => selectTask(task)}
				>Editar</button>

				<button
					type="button"
					className="btn btn-segundario"
					onClick={() => taskDelete(task._id)}
				>Eliminar</button>
			</div>
		</li>
	);
}

export default Task;