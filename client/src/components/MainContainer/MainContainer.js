import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

import Admin from '../../scenes/Admin'
import App from '../../scenes/App'

class MainContainer extends Component {
  render() {
    return (
      <div>
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/app' component={App} />
        {/*<Route path='/' render={() => (<Redirect to='/app' />)} />*/}
      </div>
    )
  }
}

export default MainContainer
