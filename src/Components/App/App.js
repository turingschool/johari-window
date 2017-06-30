import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { PrivateRoute, AdminRoute } from '../../Helpers/router'
import Sidebar from './Sidebar/Sidebar'
import Cohort from '../Cohort/CohortContainer'
import Login from '../Login/LoginContainer'
import Main from '../Main/MainContainer'
import Johari from '../Johari/JohariContainer'
import NoMatch from '../NoMatch/NoMatch'
import MyWindow from '../MyWindow/MyWindowContainer'
import Admin from '../Admin/AdminContainer'
import AuthService from '../../Helpers/utils/AuthService'
import * as Actions from '../../Redux/actions/index'
import { bindActionCreators } from 'redux'
import "./_app.sass"

const auth = new AuthService(
  'Uj8xsUj6Hvdmep3V9d2TOQJFqgLOSIym',
  'turingschool.auth0.com'
)


class App extends Component {

  componentWillMount() {
    if (auth.loggedIn) {
      auth.setProfile()
    }
  }

  render() {
    const { dispatch, user } = this.props
    const setAssignee = bindActionCreators(Actions.setAssignee, dispatch)

    return (
    <div>
      <div className='App'>
        <Sidebar user={user} />
      </div>

      <div className='Router'>
        <Switch>
          <PrivateRoute 
            auth={auth} 
            exact path='/' 
            setAssignee={setAssignee}
            component={Main} 
          />
          <AdminRoute 
            path='/admin/cohort/:id'
            user={user}
            auth={auth}
            component={Cohort}
          />
          <Route path='/johari/:id'
            render={({match}) => <Johari evaluateeID={match.params.id}  /> }
          />
          <PrivateRoute auth={auth} path='/mywindow' component={MyWindow} />
          <AdminRoute user={user} auth={auth} path='/admin' component={Admin} />
          <Route path='/login' render={() => <Login auth={auth}/> } />
          <Route component={ NoMatch } />
        </Switch>
      </div>
    </div>
    )
  }
}

export default App
