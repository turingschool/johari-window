import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Axios from 'axios';
import User from '../user/User';
import { PrivateRoute } from '../router'
import Sidebar from './Sidebar/Sidebar';
import Cohort from '../cohort/CohortContainer';
import Login from '../login/LoginContainer';
import Main from '../main/MainContainer';
import Johari from '../johari/JohariContainer';
import NoMatch from '../NoMatch/NoMatch';
import MyWindow from '../MyWindow/MyWindowContainer';
import Admin from '../admin/AdminContainer';
import "./_app.sass";
import AuthService from '../utils/AuthService';

const auth = new AuthService('Uj8xsUj6Hvdmep3V9d2TOQJFqgLOSIym', 'turingschool.auth0.com');


class App extends Component {

  render() {
    return (
    <div>
      <div className='App'>
        <Sidebar user={this.props.user} auth={this.props.auth}/>
      </div>

      <div className='Router'>
        <Switch>
          <PrivateRoute auth={auth} exact path='/' component={Main} />
          <Route
            path='/admin/cohort/:id'
            render={({match}) =>
              <Cohort cohortID={match.params.id} />
            }
          />
          <Route
            path='/johari/:id'
            render={({match}) =>
              <Johari evaluateeID={match.params.id}  />
            }
          />
          <PrivateRoute auth={auth} path='/mywindow' component={MyWindow} />
          <PrivateRoute auth={auth} path='/admin' component={Admin} />
          <Route path='/login' render={() => <Login auth={auth}/> } />
          <Route component={ NoMatch } />
        </Switch>
      </div>
    </div>
    )
  }
}

export default App;
