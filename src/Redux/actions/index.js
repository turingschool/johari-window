import Axios from 'axios'
import * as types from '../types'
import User from '../../Helpers/User/User'
const url = "https://johariwindowapi.herokuapp.com/api/v1"

export const addUser = user => (
  {
    type: types.ADD_USER,
    data: user
  }
)

export const addAssignees = assignees => (
  {
    type: types.ADD_ASSIGNEES,
    data: assignees
  }
)

export const addMyWindow = data => (
  {
    type: types.ADD_MY_WINDOW,
    data: data
  }
)

export const fetchUser = (user_info, service = Axios) => (
  dispatch => (
    service.post(`${url}/users`, user_info)
      .then(result => {
        const user = new User(result.data)
        dispatch(addUser(user))
        return user
      })
      .then(user => {
        const usersUrl = `${url}/users/${user.id}`
        const resources = ["assignments", "descriptions"]
        const resourceResponses = resources
          .map(resource => service.get(`${usersUrl}/${resource}`))
        return Promise.all(resourceResponses)
      })
      .then(results => Promise.all(results.map(result => result.data)))
      .then(data => {
        const assignees = data[0]
        const descriptions = data[1]
        dispatch(addAssignees(assignees))
        dispatch(addMyWindow(descriptions))
      })
  )
)

export const setAssignee = (id, name) => (
  {
    type: types.SET_ASSIGNEE,
    data: { id: id, name: name }
  }
)

