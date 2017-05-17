import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';
import './app.css';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import AuthService from './utils/AuthService';
import App from './App/AppContainer';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
import reducers from './reducers'

const history = createHistory()
const middleware = routerMiddleware(history)
export const store = createStore(
  reducers, devTools,
  applyMiddleware(thunk, middleware)
)

render(
  <Provider store={store} >
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
