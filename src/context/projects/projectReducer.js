import { FORM_PROJECT, GETPROJECTS } from '../../types'

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
		default:
			return state;
	}
}