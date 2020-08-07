import { FORM_PROJECT, GETPROJECTS, ADD_PROJECT } from '../../types'

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
				form: false
			}
		default:
			return state;
	}
}