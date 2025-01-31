import {
	FORM_PROJECT, GETPROJECTS,
	ADD_PROJECT, VALIDATE_FORM,
	CURRENT_PROJECT, DELETE_PROJECT, PROJECT_ERROR
} from '../../types'

export default (state, action) => {
	switch (action.type) {

		case FORM_PROJECT:
			return {
				...state,
				form: true
			}
		case GETPROJECTS:
			// console.log(action.payload)
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
				projects: state.projects.filter(project => project._id !== action.payload),
				project: null
			}
		case PROJECT_ERROR:
			return {
				...state,
				message: action.payload
			}
		default:
			return state;
	}
}