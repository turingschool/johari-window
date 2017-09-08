import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import * as types from '../types'

const user = (state = {}, action) => (
	action.type === types.ADD_USER ? { ...action.data } : state
)

const outId = id => ({
	"===": x => x.user.id === id,
	"!==": x => x.user.id !== id,
})

const completeAssignee = (state, id) => {
	const user      = state.find(outId(id)["==="])
	const others    = state.filter(outId(id)["!=="])
	const completed = { 
		...user, 
		"completed?": true,
	}
	return [ completed, ...others ]
}

const assignees = (state = ["loading"], action) => {
	switch(action.type) {
		case types.ADD_ASSIGNEES:
			return [...action.data]
		case types.COMPLETE_ASSIGNEE:
			const id = parseInt(action.data.id, 10)
			return completeAssignee(state, id)
		default:
			return state
	}
}

const assignee = (state = {}, action) => (
	action.type === types.SET_ASSIGNEE ? { ...action.data } : state
)

const myWindow = (state = {}, action) => (
	action.type === types.ADD_MY_WINDOW ? { ...action.data } : state
)

const adjectives = (state = [], action) => {
	if (action.type === types.TOGGLE_ADJECTIVE) {
		const word = action.data
		const newState = state.includes(word)
			? state.filter(x => x !== word)
			: [ ...state, word ]
		return newState
	} else {
		return state
	}
}

export default combineReducers({
	user,
	assignees,
	assignee,
	myWindow,
	adjectives,
	router: routerReducer,
})
