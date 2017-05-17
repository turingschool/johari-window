import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ auth, component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      auth.loggedIn()
        ? (<Component user={user} {...rest}/>)
        : (<Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )
    )}
  />
);
