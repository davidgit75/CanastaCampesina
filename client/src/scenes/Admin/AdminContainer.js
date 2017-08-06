import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from '../../components/Login'
import { checkCredentials, login } from '../../api/auth'
import Loader from '../../components/Loader'
import { removeToken, setToken } from '../../helpers'
import { setUser as setUserAction, setLoading as setLoadingAction } from '../../redux/actionCreators'
import Admin from './Admin'

class AdminContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      error: false
    }
  }
  componentDidMount() {
    this.props.checkCredentials()
  }

  async login(credentials) {
    console.log('login xD')
    try {
      const response = await login(credentials)
      setToken(response.data.token)
      this.props.setUser(response.data.admin)
      this.props.setLoading(false)
    } catch (error) {
      this.setState({ error: true })
    }
  }

  logout() {
    removeToken()
    this.props.setUser(null)
  }

  render() {
    return (
      <div>
        {
          this.props.loading ?
            <Loader />
          :
            !this.props.user ?
              <Login
                {...this.state}
                login={c => this.login(c)}
                setUsername={u => this.setState({ username: u })}
                setPassword={p => this.setState({ password: p })}
              />
            :
              <Admin
                logout={() => this.logout()}
                user={this.props.user}
                dataForm={this.state}
              />
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
  },
  setLoading(loading) {
    return dispatch(setLoadingAction(loading))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer)
