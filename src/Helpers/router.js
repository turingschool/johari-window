import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ auth, component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      auth.loggedIn() ? (
        <Component user={user} {...rest}/>
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    )}
  />
)

export const AdminRoute = ({
  auth, component: Component, user, ...rest
}) => (
  <Route
    {...rest}
    render={props => {
      const cohortID = { cohortID: props.match.params.id }
      return (
        auth.loggedIn() && user.role === "staff" ? (
          <Component user={user} {...rest} {...cohortID} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location }
            }}
          />
        )
      )
    }}
  />
)
