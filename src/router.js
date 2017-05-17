import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './_shared.sass';

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
