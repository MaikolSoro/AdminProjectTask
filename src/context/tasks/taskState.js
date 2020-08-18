import React, { useReducer } from 'react'
import TaskContext from './taskContext'
import TaskReducer from './taskReducer'
import clientAxios from '../../config/axios'
import {
	TASKS_PROJECT,
	ADD_TASK,
	VALIDATE_TASK,
	DELETE_TASK,
	STATE_TASK,
	CURRENT_TASK,
	UPDATE_TASK,
	ClEANTASK
} from '../../types';


const TaskState = props => {
	const initialState = {

		tasksproject: [],
		errortask: false,
		taskselected: null
	}

	// Create dispatch and state
	const [state, dispatch] = useReducer(TaskReducer, initialState)

	// Create the functions

	// Getting  tasks for a project

	const getTasks = async project => {

		try {
			const result = await clientAxios.get('/api/tasks', { params: { project } })
			console.log(result)
			dispatch({
				type: TASKS_PROJECT,
				payload: result.data.tasks
			})
		} catch (error) {
			console.log(error)
		}

	}

	// Add a task to the selected project
	const addTask = async task => {

		try {
			const result = await clientAxios.post('/api/tasks', task)
			console.log(result)

			dispatch({
				type: ADD_TASK,
				payload: task
			})
		} catch (error) {
			console.log(error);
		}

	}

	// Valid  and shows an error if necessary
	const validTask = () => {
		dispatch({
			type: VALIDATE_TASK
		})
	}

	// Deleted task by id
	const deleteTask = async (id, project) => {

		try {
			await clientAxios.delete(`/api/tasks/${id}`, { params: { project } })
			dispatch({
				type: DELETE_TASK,
				payload: id
			})
		} catch (error) {
			console.log(error)
		}

	}

	// Change the status of each task
	const changeStatusTask = (task) => {

		dispatch({
			type: STATE_TASK,
			payload: task
		})
	}

	// Extract a task for editing
	const saveCurrentTask = task => {
		dispatch({
			type: CURRENT_TASK,
			payload: task
		})
	}

	// Edit or modify new task 
	const updateTask = (task) => {
		dispatch({
			type: UPDATE_TASK,
			payload: task
		})
	}

	const cleanTask = () => {
		dispatch({
			type: ClEANTASK,

		})
	}
	return (
		<TaskContext.Provider
			value={{

				tasksproject: state.tasksproject,
				errortask: state.errortask,
				taskselected: state.taskselected,
				getTasks,
				addTask,
				validTask,
				deleteTask,
				changeStatusTask,
				saveCurrentTask,
				updateTask,
				cleanTask
			}}
		>
			{props.children}
		</TaskContext.Provider>
	)

}

export default TaskState;