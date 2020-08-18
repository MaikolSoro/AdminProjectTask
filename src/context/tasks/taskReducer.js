import {
	TASKS_PROJECT,
	ADD_TASK,
	VALIDATE_TASK,
	DELETE_TASK,
	STATE_TASK,
	CURRENT_TASK,
	UPDATE_TASK,
	ClEANTASK
} from '../../types';

export default (state, action) => {
	switch (action.type) {
		case TASKS_PROJECT:
			return {
				...state,
				tasksproject: action.payload
			}
		case ADD_TASK:
			return {
				...state,
				tasksproject: [action.payload, ...state.tasksproject],
				errortask: false
			}
		case VALIDATE_TASK:
			return {

				...state,
				errortask: true
			}
		case DELETE_TASK:
			return {
				...state,
				tasksproject: state.tasksproject.filter(task => task.id !== action.payload)
			}
		case UPDATE_TASK:
		case STATE_TASK:
			return {
				...state,
				tasksproject: state.tasksproject.map(task => task.id === action.payload.id ? action.payload : task)
			}
		case CURRENT_TASK:
			return {
				...state,
				taskselected: action.payload
			}

		case ClEANTASK:
			return {
				...state,
				taskselected: null
			}
		default:
			return state;
	}
}