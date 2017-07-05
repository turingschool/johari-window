import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'

import App from './Components/App/AppContainer'
import reducers from './Redux/reducers'
import './app.css'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
)
