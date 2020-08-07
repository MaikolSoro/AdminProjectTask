/* eslint-disable no-unused-vars */

import React, { useReducer } from 'react'
import * as uuid from 'uuid'

import ProjectContext from './projectContext'
import ProjectReducer from './projectReducer'
import { FORM_PROJECT, GETPROJECTS, ADD_PROJECT, VALIDATE_FORM } from '../../types'


const ProjectState = props => {

	const projects = [
		{ id: 1, name: 'Tienda Virtual' },
		{ id: 2, name: 'Internet' },
		{ id: 3, name: 'Diseño de Sitio web' }
	]
	const initialState = {

		projects: [],
		form: false,
		errorform: false
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

	// Add new project
	const AddProject = project => {
		project.id = uuid.v4();

		// Insert the project in the state
		dispatch({
			type: ADD_PROJECT,
			payload: project
		})
	}

	// Valid the form for errors
	const showError = () => {
		dispatch({
			type: VALIDATE_FORM
		})
	}
	return (
		<ProjectContext.Provider
			value={{
				projects: state.projects,
				form: state.form,
				errorform: state.errorform,
				showForm,
				getProjects,
				AddProject,
				showError
			}}
		>
			{props.children}
		</ProjectContext.Provider>
	)
}

export default ProjectState

