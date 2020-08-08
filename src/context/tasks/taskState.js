import React, { useReducer } from 'react'
import TaskContext from './taskContext'
import TaskReducer from './taskReducer'
import { TASKS_PROJECT, ADD_TASK, VALIDATE_TASK } from '../../types';


const TaskState = props => {
	const initialState = {
		tasks: [
			{ name: 'Eligir plataforma', state: true, projectId: 1 },
			{ name: 'Eligir Colores', state: false, projectId: 2 },
			{ name: 'Eligir Hosting', state: true, projectId: 3 },
		],
		tasksproject: null,
		errortask: false
	}

	// Create dispatch and state
	const [state, dispatch] = useReducer(TaskReducer, initialState)

	// Create the functions

	// Getting  tasks for a project

	const getTasks = projectId => {
		dispatch({
			type: TASKS_PROJECT,
			payload: projectId
		})
	}

	// Add a task to the selected project
	const addTask = task => {
		dispatch({
			type: ADD_TASK,
			payload: task
		})
	}

	// Valid  and shows an error if necessary
	const validTask = () => {
		dispatch({
			type: VALIDATE_TASK
		})
	}
	return (
		<TaskContext.Provider
			value={{
				tasks: state.tasks,
				tasksproject: state.tasksproject,
				errortask: state.errortask,
				getTasks,
				addTask,
				validTask
			}}
		>
			{props.children}
		</TaskContext.Provider>
	)

}

export default TaskState;