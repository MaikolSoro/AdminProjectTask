import React, { useReducer } from 'react'
import TaskContext from './taskContext'
import TaskReducer from './taskReducer'

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

	return (
		<TaskContext.Provider
			value={{
				tasks: state.tasks
			}}
		>
			{props.children}
		</TaskContext.Provider>
	)

}

export default TaskState;