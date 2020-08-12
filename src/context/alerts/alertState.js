import React, { useReducer } from 'react'
import alertReducer from './alerts/alertReducer'
import AlertaContext from './alerts/AlertaContext'

import { SHOW_ALERT, HIDE_ALERT } from '../../types'

const AlertState = props => {

	const initialState = {

		alert: null
	}
	const [state, dispatch] = useReducer(alertReducer, initialState)

	// Functions

	const showAlert = (msg, category) => {
		dispatch({
			type: SHOW_ALERT,
			payload: {
				msg,
				category
			}
		});

		setTimeout(() => {
			dispatch({
				type: HIDE_ALERT
			})
		}, 5000);
	}

	return (
		<AlertaContext.Provider
			value={{
				alert: state.alert,
				showAlert
			}}
		>
			{props.children}
		</AlertaContext.Provider>
	)
}

export default AlertState

