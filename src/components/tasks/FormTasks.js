import React, { useContext, useState } from 'react'
import ProjectContext from '../../context/projects/projectContext'
import taskContext from '../../context/tasks/taskContext';


const FormTasks = () => {

	// Extract if a project is active
	const projectsContext = useContext(ProjectContext)
	const { project } = projectsContext;

	// Getting function from task context
	const tasksContext = useContext(taskContext)
	const { errortask, addTask, validTask, getTasks } = tasksContext;

	// State the form
	const [task, saveTask] = useState({
		name: ''
	})
	// Extract the name project
	const { name } = task;
	// If there is not a project selected

	if (!project) return null

	// Array destructuring to extract the current project
	const [currentProject] = project;

	// Read form values
	const handleChange = e => {
		saveTask({
			...task,
			[e.target.name]: e.target.value
		})
	}
	const onSubmit = e => {
		e.preventDefault()

		// validate
		if (name.trim() === '') {
			validTask()
			return;
		}

		// Add the new task to the task state
		task.projectId = currentProject.id
		task.estado = false
		addTask(task)

		// 	Getting and filter the task in the current project
		getTasks(currentProject.id)

		// Restart the form
		saveTask({
			name: ''
		})

	}
	return (
		<div className="formulario">
			<form
				onSubmit={onSubmit}
			>
				<div className="contenedor-input">
					<input
						type="text"
						className="input-text"
						placeholder="Nombre de la tarea"
						name="name"
						value={name}
						onChange={handleChange}

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
			{errortask ? <p className="mensaje error">El nombre  de la tarea es obligatorio</p> : null}
		</div>

	);
}

export default FormTasks;