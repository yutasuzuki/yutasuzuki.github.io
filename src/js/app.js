import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import store from './configureStore'
import IndexApp from './pages/index'
import DetailApp from './pages/detail'
import { PATH } from './constants'

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/'>
        <IndexRoute component={IndexApp}/>
        <Route path='/detail' component={DetailApp}/>
        <Route path='/tags' component={DetailApp}/>
        <Route path='*' component={IndexApp}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
