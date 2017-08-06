import React, { Component } from 'react'
import Dialog from 'react-md/lib/Dialogs'
import Button from 'react-md/lib/Buttons/Button'
import TextField from 'react-md/lib/TextFields'
import Chip from 'react-md/lib/Chips'

class ModalSaler extends Component {
  constructor(props) {
    super(props)
    this.state = {
      saler: null
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ saler: nextProps.saler })
  }

  removeProduct(index) {
    if (this.props.type === 'edit') {
      let products = [...this.state.saler.products]
      products.splice(index, 1)
      const saler = {...this.state.saler}
      saler.products = products
      this.setState({ saler })
    }
  }

  getActions() {
    const actions = []
    if (this.props.type === 'edit') {
      actions.push({
        onClick: () => {
          if (this.props.type === 'edit') {
            this.props.action(this.state.saler)
            this.props.reject()
          }
        },
        primary: true,
        label: 'Editar productor(a)',
      })
    }
    actions.push({
      onClick: () => this.props.reject(),
      primary: true,
      label: 'Cancelar',
    })
    return actions
  }

  render() {
    return (
      <Dialog
        id="modalModalActionSaler"
        visible={this.props.visible}
        title={this.props.title}
        aria-labelledby="modalNewAdminDescription"
        modal
        actions={this.getActions()}
      >
        <div className='md-grid'>
          <div className='md-cell md-cell--12'>
            <TextField
              fullWidth
              disabled={this.props.type === 'show'}
              id="txtfSalerName"
              label="Productor(a)"
              className="md-cell md-cell--12 md-cell--bottom"
              value={this.state.saler ? this.state.saler.name : ''}
              onChange={v => {
                const salerCopy = {...this.state.saler}
                salerCopy.name = v
                this.setState({ saler: salerCopy })
              }}
            />
          </div>

          <div className='md-cell md-cell--12'>
            {
              this.state.saler && this.state.saler.products && this.state.saler.products.length ?
                this.state.saler.products.map((product, i) => (
                  <Chip key={i} label={product.name} onClick={() => this.removeProduct(i)} removable={this.props.type === 'edit'} />
                ))
              : null
            }
          </div>
        </div>
      </Dialog>
    )
  }
}

export default ModalSaler
