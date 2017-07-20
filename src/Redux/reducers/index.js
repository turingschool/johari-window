import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import * as types from '../types'

const user = (state = {}, action) => (
  action.type === types.ADD_USER ? { ...action.data } : state
)

const assignees = (state = [], action) => (
  action.type === types.ADD_ASSIGNEES ? [ ...action.data ] : state
)

const assignee = (state = {}, action) => (
  action.type === types.SET_ASSIGNEE ? { ...action.data } : state
)

const myWindow = (state = {}, action) => (
  action.type === types.ADD_MY_WINDOW ? { ...action.data } : state
)

export default combineReducers({
  user,
  assignees,
  assignee,
  myWindow,
  router: routerReducer
})
