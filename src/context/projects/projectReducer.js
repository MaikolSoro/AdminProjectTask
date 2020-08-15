import { FORM_PROJECT, GETPROJECTS, ADD_PROJECT, VALIDATE_FORM, CURRENT_PROJECT, DELETE_PROJECT } from '../../types'

export default (state, action) => {
	switch (action.type) {

		case FORM_PROJECT:
			return {
				...state,
				form: true
			}
		case GETPROJECTS:
			return {
				...state,
				projects: action.payload
			}
		case ADD_PROJECT:
			return {
				...state,
				projects: [...state.projects, action.payload],
				form: false,
				errorform: false
			}
		case VALIDATE_FORM:
			return {
				...state,
				errorform: true
			}
		case CURRENT_PROJECT:
			return {
				...state,
				project: state.projects.filter(project => project._id === action.payload)
			}
		case DELETE_PROJECT:
			return {
				...state,
				projects: state.projects.filter(project => project.id !== action.payload),
				project: null
			}
		default:
			return state;
	}
}