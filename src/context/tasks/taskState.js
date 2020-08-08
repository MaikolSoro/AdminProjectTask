import React, { useReducer } from 'react'
import TaskContext from './taskContext'
import TaskReducer from './taskReducer'
import { TASKS_PROJECT } from '../../types';


const TaskState = props => {
	const initialState = {
		tasks: [
			{ name: 'Eligir plataforma', state: true, projectId: 1 },
			{ name: 'Eligir Colores', state: false, projectId: 2 },
			{ name: 'Eligir Hosting', state: true, projectId: 3 },
		],
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
	return (
		<TaskContext.Provider
			value={{
				tasks: state.tasks,
				getTasks
			}}
		>
			{props.children}
		</TaskContext.Provider>
	)

}

export default TaskState;