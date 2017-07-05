import React from 'react'
import PropTypes from 'prop-types'
import AuthService from '../../Helpers/utils/AuthService'

const Login = ({ auth }) => (
  <div className='Login'>
    <h2>Login</h2>
    <button onClick={ auth.login } >Login</button>
  </div>
)

Login.propTypes = {
  location: PropTypes.object,
  auth: PropTypes.instanceOf(AuthService)
}

export default Login
