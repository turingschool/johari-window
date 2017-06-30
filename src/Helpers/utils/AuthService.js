import Auth0Lock from 'auth0-lock'
import { EventEmitter } from 'events'
import { store } from '../../index.js'
import { push } from 'react-router-redux'
import * as actions from '../../Redux/actions'

export default class AuthService extends EventEmitter {
  constructor(clientId, domain) {
    super()
    console.log("environment:", process.env.NODE_ENV)
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: process.env.NODE_ENV === "development" ? (
          'http://localhost:3000/login'
        ) : (
          'https://johariwindow.herokuapp.com/login'
        ),
        responseType: 'token'
      }
    })
    this.lock.on('authenticated', this._doAuthentication.bind(this))
    this.login = this.login.bind(this)
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
        const user_info = {
          "user": {
            "name": profile.name,
            "github": profile.nickname,
            "token": token
          }
        };
        store.dispatch(push('/'))
        store.dispatch(actions.fetchUser(user_info))
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
    localStorage.removeItem('id_token')
    localStorage.removeItem('profile')
    localStorage.removeItem('user')
  }
}
