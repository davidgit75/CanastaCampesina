import React, { Component } from 'react'
import TextField from 'react-md/lib/TextFields'
import Button from 'react-md/lib/Buttons/Button'
import { login } from '../../api/auth'

import './styles.css'

export default class Login extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='md-grid container-login'>
        <TextField
          fullWidth
          id="floatingAdmin"
          label="Administrador(a)"
          className="md-cell md-cell--12 md-cell--bottom"
          value={this.props.username}
          onChange={v => this.props.setUsername(v)}
        />

        <TextField
          fullWidth
          id="floatingPass"
          label="Contraseña"
          className="md-cell md-cell--12 md-cell--bottom"
          type='password'
          value={this.props.password}
          onChange={v => this.props.setPassword(v)}
        />

        <Button
          raised
          primary
          label='Ingresar'
          className="md-cell md-cell--12 md-cell--bottom"
          onClick={() => this.props.login({ username: this.props.username, password: this.props.password })}
        />

        { this.props.error ? <div style={{ marginTop: 25, marginLeft: 100, fontSize: 20, color: '#FF0000' }}><b>Error de logueo</b></div> : null }
      </div>
    )
  }
}
