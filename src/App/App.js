import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Axios from 'axios';
import User from '../User/User';
import { PrivateRoute } from '../router'
import Sidebar from './Sidebar/Sidebar';
import Cohort from '../Cohort/CohortContainer';
import Login from '../Login/LoginContainer';
import Main from '../Main/MainContainer';
import Johari from '../Johari/JohariContainer';
import NoMatch from '../NoMatch/NoMatch';
import MyWindow from '../MyWindow/MyWindowContainer';
import Admin from '../Admin/AdminContainer';
import "./_app.sass";
import AuthService from '../utils/AuthService';

const auth = new AuthService('Uj8xsUj6Hvdmep3V9d2TOQJFqgLOSIym', 'turingschool.auth0.com');


class App extends Component {

  componentWillMount() {
    if (auth.loggedIn) {
      auth.setProfile()
    }
  }

  render() {
    return (
    <div>
      <div className='App'>
        <Sidebar user={this.props.user} auth={auth}/>
      </div>

      <div className='Router'>
        <Switch>
          <PrivateRoute auth={auth} exact path='/' component={Main} />
          <Route path='/admin/cohort/:id'
            render={({match}) => <Cohort cohortID={match.params.id} /> }
          />
          <Route path='/johari/:id'
            render={({match}) => <Johari evaluateeID={match.params.id}  /> }
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
