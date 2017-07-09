import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextField from 'react-md/lib/TextFields'
import Button from 'react-md/lib/Buttons/Button'
import { login } from '../../api/auth'

import './styles.css'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <div className='md-grid container-login'>
        <TextField
          fullWidth
          id="floatingAdmin"
          label="Administrador(a)"
          className="md-cell md-cell--12 md-cell--bottom"
          value={this.state.username}
          onChange={v => this.setState({ username: v })}
        />

        <TextField
          fullWidth
          id="floatingPass"
          label="Contraseña"
          className="md-cell md-cell--12 md-cell--bottom"
          type='password'
          value={this.state.password}
          onChange={v => this.setState({ password: v })}
        />

        <Button
          raised
          primary
          label='Ingresar'
          className="md-cell md-cell--12 md-cell--bottom"
          onClick={() => this.props.login(this.state)}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  admin: state.admin,
  login: state.login
})

const mapDispatchToProps = dispatch => ({
  login(credentials) {
    return dispatch(login(credentials))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
