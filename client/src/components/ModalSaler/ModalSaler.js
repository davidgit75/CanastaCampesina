import React, { Component } from 'react'
import Dialog from 'react-md/lib/Dialogs'
import Button from 'react-md/lib/Buttons/Button'
import TextField from 'react-md/lib/TextFields'
import Chip from 'react-md/lib/Chips'
import List from 'react-md/lib/Lists/List'
import ListItem from 'react-md/lib/Lists/ListItem'
import Divider from 'react-md/lib/Dividers'
import Subheader from 'react-md/lib/Subheaders'
import Avatar from 'react-md/lib/Avatars'
import FontIcon from 'react-md/lib/FontIcons'
import Toolbar from 'react-md/lib/Toolbars'
import Card from 'react-md/lib/Cards/Card'

const InfoIcon = () => <FontIcon>info</FontIcon>;
const StarIcon = () => <FontIcon>star</FontIcon>;

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

  describeProducts() {
    if (this.state.saler) {
      return this.state.saler.products.map((product, i) => (
        <Card key={`${product}-${i}`} className="md-block-centered md-cell md-cell--6">
          <List className="md-cell md-paper">
            <Subheader primaryText={product.name} />
            <ListItem
              primaryText='Unidad'
              secondaryText={product.unitBase}
            />
            <ListItem
              primaryText='Precio'
              secondaryText={`$CO ${product.price}`}
            />
            <ListItem
              primaryText='Cantidad ofertada'
              secondaryText={product.quantity}
            />
            <ListItem
              primaryText='Vendidos'
              secondaryText={product.sold > 0 ? product.sold : 'Sin ventas aún'}
            />
            <ListItem
              primaryText='Disponibles'
              secondaryText={product.availabeQuantity}
            />
          </List>
        </Card>
      ));
    }
  }

  render() {
    const nav = <Button icon onClick={() => this.props.reject()}>close</Button>
    return (
      <Dialog
        id="modalModalActionSaler"
        visible={this.props.visible}
        aria-labelledby="modalNewAdminDescription"
        contentStyle={{ maxHeight: 300, overflowY: 'scroll' }}
        modal
        actions={this.getActions()}
        fullPage
      >
        <Toolbar
          colored
          nav={nav}
          title={this.props.title}
          fixed
        />
        <div className='md-grid md-toolbar-relative'>
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

          {this.describeProducts()}
        </div>
      </Dialog>
    )
  }
}

export default ModalSaler
