import React, { Component } from 'react'
import TextField from 'react-md/lib/TextFields'
import Button from 'react-md/lib/Buttons/Button'

import './styles.css'

class Login extends Component {
  render() {
    return (
      <div className='md-grid container-login'>
        <TextField
          fullWidth
          id="floatingAdmin"
          label="Administrador(a)"
          className="md-cell md-cell--12 md-cell--bottom"
        />

        <TextField
          fullWidth
          id="floatingPass"
          label="Contraseña"
          className="md-cell md-cell--12 md-cell--bottom"
          type='password'
        />

        <Button raised primary label='Ingresar' className="md-cell md-cell--12 md-cell--bottom" />
      </div>
    )
  }
}

export default Login
