/* eslint-disable no-unused-vars */

import React, { useReducer } from 'react'
import projectContext from './projectContext'
import projectReducer from './projectReducer'

const ProjectState = props => {

	const initialState = {
		form: false
	}

	// Dispatch to execute actions

	const [state, dispatch] = useReducer(projectReducer, initialState)

	// Function series for the CRUD

	return (
		<projectContext.Provider
			value={{
				form: state.form
			}}
		>
			{props.children}
		</projectContext.Provider>
	)
}

export default ProjectState

