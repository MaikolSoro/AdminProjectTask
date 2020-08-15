/* eslint-disable no-unused-vars */

import React, { useReducer } from 'react'
import ProjectContext from './projectContext'
import ProjectReducer from './projectReducer'
import { FORM_PROJECT, GETPROJECTS, ADD_PROJECT, VALIDATE_FORM, CURRENT_PROJECT, DELETE_PROJECT } from '../../types'
import clientAxios from '../../config/axios'

const ProjectState = props => {


	const initialState = {

		projects: [],
		form: false,
		errorform: false,
		project: null
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

	const getProjects = async () => {
		try {
			const result = await clientAxios.get('/api/projects')

			dispatch({
				type: GETPROJECTS,
				payload: result.data.projects
			})
		} catch (error) {

		}

	}

	// Add new project
	const AddProject = async project => {

		try {

			const result = await clientAxios.post('/api/projects', project)
			// Insert the project in the state
			dispatch({
				type: ADD_PROJECT,
				payload: project
			})
		} catch (error) {

		}
	}

	// Valid the form for errors
	const showError = () => {
		dispatch({
			type: VALIDATE_FORM
		})
	}

	// Select the project that the user clicks
	const currentProject = projectId => {
		dispatch({
			type: CURRENT_PROJECT,
			payload: projectId
		})
	}

	// Delete a project

	const deleteProject = projectId => {
		dispatch({
			type: DELETE_PROJECT,
			payload: projectId
		})
	}

	return (
		<ProjectContext.Provider
			value={{
				projects: state.projects,
				form: state.form,
				errorform: state.errorform,
				project: state.project,
				showForm,
				getProjects,
				AddProject,
				showError,
				currentProject,
				deleteProject
			}}
		>
			{props.children}
		</ProjectContext.Provider>
	)
}

export default ProjectState

