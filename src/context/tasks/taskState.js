import React, { useReducer } from 'react'
import TaskContext from './taskContext'
import TaskReducer from './taskReducer'
import * as uuid from 'uuid'
import { TASKS_PROJECT, ADD_TASK, VALIDATE_TASK, DELETE_TASK, STATE_TASK } from '../../types';


const TaskState = props => {
	const initialState = {
		tasks: [
			{ id: 1, name: 'Eligir plataforma', state: true, projectId: 1 },
			{ id: 2, name: 'Eligir Colores', state: false, projectId: 2 },
			{ id: 3, name: 'Eligir Hosting', state: true, projectId: 3 },
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
		task.id = uuid.v4();
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

	// Deleted task by id
	const deleteTask = id => {
		dispatch({
			type: DELETE_TASK,
			payload: id
		})
	}

	// Change the status of each task
	const changeStatusTask = (task) => {

		dispatch({
			type: STATE_TASK,
			payload: task
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
				validTask,
				deleteTask,
				changeStatusTask
			}}
		>
			{props.children}
		</TaskContext.Provider>
	)

}

export default TaskState;