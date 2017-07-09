import React, { Component } from 'react'
import Dialog from 'react-md/lib/Dialogs'
import Button from 'react-md/lib/Buttons/Button'
import TextField from 'react-md/lib/TextFields'

class NewAdmin extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  disableAddButton() {
    return this.state.username.length <= 0 || this.state.password.length <= 0
  }

  render() {
    return (
      <Dialog
        id="modalNewAdmin"
        visible={this.props.visible}
        title="Agregar nuevo administrador"
        aria-labelledby="modalNewAdminDescription"
        modal
        actions={[{
          onClick: () => {
            if (!this.disableAddButton()) {
              this.props.addAdmin(this.state, () => {
                this.setState({ username: '', password: '' })
              })
            }
          },
          primary: true,
          label: 'Agregar',
        }, {
          onClick: () => {
            this.setState({ username: '', password: '' })
            this.props.rejectAction()
          },
          primary: true,
          label: 'Cancelar',
        }]}
      >
        <div className='md-grid'>
          <div className='md-cell md-cell--12'>
            <TextField
              fullWidth
              id="floatingNewAdmin"
              label="Administrador(a)"
              className="md-cell md-cell--12 md-cell--bottom"
              value={this.state.username}
              onChange={v => this.setState({ username: v })}
            />
          </div>

          <div className='md-cell md-cell--12'>
            <TextField
              fullWidth
              id="floatingNewAdminPass"
              label="Contraseña"
              className="md-cell md-cell--12 md-cell--bottom"
              value={this.state.password}
              onChange={v => this.setState({ password: v })}
            />
          </div>
        </div>
      </Dialog>
    )
  }
}

export default NewAdmin
