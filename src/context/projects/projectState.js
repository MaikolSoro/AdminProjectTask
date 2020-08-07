/* eslint-disable no-unused-vars */

import React, { useReducer } from 'react'

import ProjectContext from './projectContext'
import ProjectReducer from './projectReducer'
import { FORM_PROJECT, GETPROJECTS } from '../../types'


const ProjectState = props => {

	const projects = [
		{ id: 1, name: 'Tienda Virtual' },
		{ id: 2, name: 'Internet' },
		{ id: 3, name: 'Diseño de Sitio web' }
	]
	const initialState = {

		projects: [],
		form: false
	}

	// Dispatch to execute actions

	const [state, dispatch] = useReducer(ProjectReducer, initialState)

	// Function series for the CRUD
	const showForm = () => {
		dispatch({
			type: FORM_PROJECT
		})
	}

	// Get the projects

	const getProjects = () => {
		dispatch({
			type: GETPROJECTS,
			payload: projects
		})
	}
	return (
		<ProjectContext.Provider
			value={{
				projects: state.projects,
				form: state.form,
				showForm,
				getProjects
			}}
		>
			{props.children}
		</ProjectContext.Provider>
	)
}

export default ProjectState

