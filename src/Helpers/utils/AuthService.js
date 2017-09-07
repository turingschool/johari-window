import Auth0Lock from 'auth0-lock'
import { EventEmitter } from 'events'
import { isTokenExpired } from './jwtHelper'
import { store } from '../../index.js'
import { push } from 'react-router-redux'
import * as actions from '../../Redux/actions'

export default class AuthService extends EventEmitter {
  constructor(clientId, domain) {
    super()
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: window.location.origin + "/login",
        responseType: 'token'
      }
    })
    this.lock.on('authenticated', this._doAuthentication.bind(this))
    this.login = this.login.bind(this)
    this.logout = this.logout.bind(this)
  }

  _doAuthentication(authResult) {
    this.setToken(authResult.idToken)
    this.setProfile(authResult.idToken)
  }

  setProfile(token=this.getToken()) {
    if(!token) return
    this.lock.getProfile(token, (error, profile) => {
      if (error) {
        console.log('Error loading the Profile', error)
      } else {
        if (!profile.name) {
          alert("Whoops! You haven't filled out your 'Name' field on your GitHub profile. Go update that, and try logging in again 👍.")
        } else {
          const user_info = {
            "user": {
              "name": profile.name || "NO_NAME",
              "github": profile.nickname,
              "token": token
            }
          };
          store.dispatch(push('/'))
          store.dispatch(actions.fetchUser(user_info))
        }
      }
    })
  }

  login() {
    this.lock.show()
  }

  loggedIn() {
    const token = this.getToken()
    return !!token && !isTokenExpired(token)
  }

  setToken(idToken) {
    localStorage.setItem('id_token', idToken)
  }

  getToken() {
    return localStorage.getItem('id_token')
  }

  logout() {
    localStorage.removeItem('id_token')
    store.dispatch(actions.addUser({}))
    store.dispatch(push('/'))
  }
}
