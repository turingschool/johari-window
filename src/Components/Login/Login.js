import React, { PropTypes as T } from 'react';
import AuthService from '../../Helpers/utils/AuthService';
import './Login.css'

export class Login extends React.Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {

    return (
      <div className='Login'>
        <h2>Login</h2>
        <button onClick={ this.props.auth.login.bind(this) } >Login</button>
      </div>
    )
  }
}

export default Login;
