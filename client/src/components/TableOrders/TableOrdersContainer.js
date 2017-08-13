import React, { Component } from 'react'
import { connect } from 'react-redux'
import List from 'react-md/lib/Lists/List'
import ListItem from 'react-md/lib/Lists/ListItem'
import Divider from 'react-md/lib/Dividers'
import Subheader from 'react-md/lib/Subheaders'
import Avatar from 'react-md/lib/Avatars'
import Card from 'react-md/lib/Cards/Card'
import CardTitle from 'react-md/lib/Cards/CardTitle'
import CardText from 'react-md/lib/Cards/CardText'
import Media, { MediaOverlay } from 'react-md/lib/Media'
import Button from 'react-md/lib/Buttons'
import DataTable from 'react-md/lib/DataTables/DataTable'
import TableHeader from 'react-md/lib/DataTables/TableHeader'
import TableBody from 'react-md/lib/DataTables/TableBody'
import TableRow from 'react-md/lib/DataTables/TableRow'
import TableColumn from 'react-md/lib/DataTables/TableColumn'
import { getSalers as getSalersAction } from '../../api/salers'
import EditDialogColumn from 'react-md/lib/DataTables/EditDialogColumn'

import ModalBuy from '../ModalBuy'

class TableOrdersContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      productSelected: null,
      salerSelected: null,
      quantityToBuy: '',
    }
  }

  componentDidMount() {
    this.props.getSalers()
  }

  getProducts(saler) {
    return saler.products.map((product, i) => (
      <TableBody key={`product-${i}`}>
        <TableRow>
          <TableColumn style={{ fontWeight: 'bold' }}>{product.name}</TableColumn>
          <TableColumn style={{ textAlign: 'center' }}>{product.unitBase}</TableColumn>
          <TableColumn style={{ textAlign: 'center' }}>{product.availabeQuantity}</TableColumn>
          <TableColumn style={{ textAlign: 'center' }}>{product.price}</TableColumn>
          <TableColumn>
            <Button
              style={{ marginTop: -16, color: 'green' }}
              icon
              onClick={() => this.setState({ productSelected: product, salerSelected: saler, showModal: true })}
            >
              shopping_cart
            </Button>
          </TableColumn>
        </TableRow>
      </TableBody>
    ))
  }

  getSalers() {
    return this.props.salers.map((saler, i) => (
      <div key={i} className='md-cell md-cell--12'>
        <Card key={i} className="md-block-centered">
          <CardText>
            <DataTable plain>
              <TableHeader>
                <TableRow>
                  <TableColumn style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>{saler.name}</TableColumn>
                  <TableColumn style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Unidad</TableColumn>
                  <TableColumn style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Cantidad disponible</TableColumn>
                  <TableColumn style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Precio ($)</TableColumn>
                  <TableColumn style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Comprar</TableColumn>
                </TableRow>
              </TableHeader>

              {this.getProducts(saler)}
            </DataTable>
          </CardText>
        </Card>
      </div>
    ))
  }

  isNumber(str) {
    return str
  }

  buyProduct() {
    if (this.state.quantityToBuy.length && this.isNumber(this.state.quantityToBuy)) {
      this.setState({ showModal: false, productSelected: null, salerSelected: null, quantityToBuy: '' })
    }
  }
  
  render() {
    return (
      <div className='md-grid' style={{ margin: 20 }}>
        {this.getSalers()}

        <ModalBuy
          visible={this.state.showModal}
          title='Comprar producto'
          quantityToBuy={this.state.quantityToBuy}
          setQuantity={q => this.setState({ quantityToBuy: q })}
          buyProduct={() => this.buyProduct()}
          cancel={() => this.setState({ showModal: false, productSelected: null, salerSelected: null })}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  salers: state.salers
})

const mapDispatchToProps = dispatch => ({
  getSalers() {
    return dispatch(getSalersAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TableOrdersContainer)
