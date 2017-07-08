import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import store from './redux/store'

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route component={MainContainer} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('app')
)
