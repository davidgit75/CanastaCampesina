import React, { Component } from 'react'
import Dialog from 'react-md/lib/Dialogs'
import Button from 'react-md/lib/Buttons/Button'
import TextField from 'react-md/lib/TextFields'

class ModalEditSaler extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Dialog
          id="modalEditSaler"
          visible={this.props.visible}
          title={this.props.title}
          aria-labelledby="modalNewAdminDescription"
          modal
          actions={[{
            onClick: () => {
              if (!this.disableAddButton()) {
                if (this.props.type === 'add') this.props.addAdmin()
                if (this.props.type === 'edit') this.props.editAdmin()
              }
            },
            primary: true,
            label: this.props.type === 'add' ? 'Agregar administrador(a)': 'Editar administrador(a)',
          }, {
            onClick: () => this.props.rejectAction(),
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
                value={this.props.data.username}
                onChange={v => {
                  const cData = this.props.data
                  cData['username'] = v
                  this.props.setData(cData)
                }}
              />
            </div>

            <div className='md-cell md-cell--12'>
              <TextField
                fullWidth
                id="floatingNewAdminPass"
                label="Contraseña"
                className="md-cell md-cell--12 md-cell--bottom"
                value={this.props.data.password}
                onChange={v => {
                  const cData = this.props.data
                  cData['password'] = v
                  this.props.setData(cData)
                }}
              />
            </div>
          </div>
        </Dialog>
      </div>
    )
  }
}

export default ModalEditSaler
