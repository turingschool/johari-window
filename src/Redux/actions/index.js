import Axios from 'axios'
import * as types from '../types'
import User from '../../Helpers/User/User'

export const addUser = (user) => {
  return {
    type: types.ADD_USER,
    data: user
  }
}

export const addAssignees = (assignees) => {
  return {
    type: types.ADD_ASSIGNEES,
    data: assignees
  }
}

export const fetchUser = (user_info) => {
  return (dispatch) => {
    Axios.post('https://johariwindowapi.herokuapp.com/api/v1/users', user_info)
    .then(result => {
      const user = new User(result.data);
      dispatch(addUser(user))
      return user;
    })
  }
}
