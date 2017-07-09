import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from '../../components/Login'
import { checkCredentials } from '../../api/auth'
import Loader from '../../components/Loader'
import { removeToken } from '../../helpers'
import { setUser as setUserAction } from '../../redux/actionCreators'
import Admin from './Admin'

class AdminContainer extends Component {
  componentWillMount() {
    this.props.checkCredentials()
  }

  logout() {
    removeToken()
    this.props.setUser(null)
  }

  render() {
    console.log('props', this.props)
    return (
      <div>
        {
          this.props.loading ?
            <Loader />
          :
            !this.props.user ?
              <Login />
            :
              <Admin logout={() => this.logout()} />
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  loading: state.loading
})

const mapDispatchToProps = dispatch => ({
  checkCredentials: () => dispatch(checkCredentials()),
  setUser(user) {
    return dispatch(setUserAction(user))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer)
