import React, { Component } from 'react'
import Dialog from 'react-md/lib/Dialogs'
import Button from 'react-md/lib/Buttons/Button'
import TextField from 'react-md/lib/TextFields'

class ModalBuy extends Component {
  render() {
    return (
      <div>
        <Dialog
        id="modalBuyProduct"
        visible={this.props.visible}
        title={this.props.title}
        aria-labelledby="modalBuyProduct"
        modal
        actions={[{
          onClick: () => this.props.buyProduct(),
          primary: true,
          label: 'Comprar producto',
        }, {
          onClick: () => this.props.cancel(),
          primary: true,
          label: 'Cancelar',
        }]}
      >
        <div className='md-grid'>
          <div className='md-cell md-cell--12'>
            <TextField
              fullWidth
              id="quntityBuyProduct"
              label="Cantidad"
              className="md-cell md-cell--12 md-cell--bottom"
              value={this.props.quantityToBuy}
              onChange={v => this.props.setQuantity(v)}
            />
          </div>
        </div>
      </Dialog>
      </div>
    )
  }
}

export default ModalBuy