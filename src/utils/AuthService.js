import Auth0Lock from 'auth0-lock'
import { EventEmitter } from 'events'
import { store } from '../index.js'
import * as actions from '../actions'
import { push } from 'react-router-redux'

export default class AuthService extends EventEmitter {
  constructor(clientId, domain) {
    super()
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: 'http://localhost:3000/login',
        responseType: 'token'
      }
    })
    this.lock.on('authenticated', this._doAuthentication.bind(this))
    this.login = this.login.bind(this)
    this.profile = {}
  }

  _doAuthentication(authResult) {
    this.setToken(authResult.idToken)
    this.setProfile(authResult.idToken)
  }

  setProfile(token=this.getToken(), callback) {
    if(!token) return
    this.lock.getProfile(token, (error, profile) => {
      if (error) {
        console.log('Error loading the Profile', error)
      } else {
        const user_info = {
          "user": {
            "name": profile.name,
            "github": profile.nickname,
            "token": token
          }
        };
        store.dispatch(actions.fetchUser(user_info))
        store.dispatch(push('/'))

          // .then((user) => {
          //   fetch(`https://johariwindowapi.herokuapp.com/api/v1/users/${user.id}/assignments`)
          //   .then(result => result.json())
          //   .then(data => store.dispatch({ type: 'ADD_ASSIGNEES', assignees: data}))
          // })
          // .catch(error => console.log(error))
      }
    })
  }

  login() {
    this.lock.show()
  }

  loggedIn() {
    return !!this.getToken()
  }

  setToken(idToken) {
    localStorage.setItem('id_token', idToken)
  }

  getToken() {
    return localStorage.getItem('id_token')
  }

  logout() {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    localStorage.removeItem('user');
  }
}
