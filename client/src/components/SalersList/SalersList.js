import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from 'react-md/lib/Cards/Card'
import CardTitle from 'react-md/lib/Cards/CardTitle'
import CardActions from 'react-md/lib/Cards/CardActions'
import CardText from 'react-md/lib/Cards/CardText'
import DataTable from 'react-md/lib/DataTables/DataTable'
import TableHeader from 'react-md/lib/DataTables/TableHeader'
import TableBody from 'react-md/lib/DataTables/TableBody'
import TableRow from 'react-md/lib/DataTables/TableRow'
import TableColumn from 'react-md/lib/DataTables/TableColumn'
import Button from 'react-md/lib/Buttons'
import TextField from 'react-md/lib/TextFields'
import Collapse from 'react-md/lib/Helpers/Collapse'
import SelectField from 'react-md/lib/SelectFields'
import List from 'react-md/lib/Lists/List'
import ListItem from 'react-md/lib/Lists/ListItem'
import Avatar from 'react-md/lib/Avatars'
import FontIcon from 'react-md/lib/FontIcons'
import Divider from 'react-md/lib/Dividers'
import Subheader from 'react-md/lib/Subheaders'

import axios from 'axios'
import ModalConfirmation from '../ModalConfirmation'
import ModalSaler from '../ModalSaler'
import {
  getSalers as getSalersAction,
  addSaler as addSalerAction,
  addProduct as addProductAction,
  removeSaler, 
  editSaler
} from '../../api/salers'

import Saler from './Saler'
import './styles.css'

class SalersList extends Component {
  constructor() {
    super()
    this.state = {
      hideNewSalerForm: true,
      hideNewProductForm: true,
      newSaler: '',
      newProduct: {
        name: '',
        unitBase: '',
        price: '',
        quantity: ''
      },
      ownerProduct: '',
      showModalConfirmation: false,
      idToRemove: '',
      showModalSaler: false,
      salerFocus: {
        title: '',
        type: 'edit',
        saler: null
      }
    }
  }

  componentDidMount() {
    this.props.getSalers()
  }

  setProduct(subState, value) {
    const cProduct = {...this.state.newProduct}
    cProduct[subState] = value
    this.setState({ newProduct: cProduct })
  }

  enableButtonAddNewProduct() {
    return this.state.newProduct.name.length > 0 &&
           this.state.newProduct.unitBase.length > 0 &&
           this.state.newProduct.price.lenght > 0 &&
           this.state.newProduct.quantity.length > 0
  }

  async editSaler(saler) {
    try {
      const response = await editSaler(saler)
      console.log('response editSaler', response)
      this.props.getSalers()
    } catch (error) {
      console.log('error editing saler', error)
    }
  }

  openModalToEdit() {
    this.setState({  })
  }

  async removeSaler(_id) {
    const remotion = await removeSaler(_id)
    console.log('remotion', remotion);
    if (remotion.status === 200) {
      this.setState({ idToRemove: '', showModalConfirmation: false })
      this.props.getSalers();
    } else {
      console.log(remotion.data)
    }
  }
  
  openModalConfirmation(id) {
    this.setState({ showModalConfirmation: true, idToRemove: id })
  }

  render() {
    return (
      <div style={{ minHeight: 800 }}>

        {/* CARD WITH FORM TO ADD NEW SALER */}
        <div className='md-grid'>
          <div className='md-cell md-cell--12'>
            <Card>
              <CardTitle
                title='Nuevo productor'
                subtitle='Mostrar detalles'
              >
                <Button
                  className="md-cell--right" icon
                  onClick={() => this.setState({ hideNewSalerForm: !this.state.hideNewSalerForm })}
                >
                  {this.state.hideNewSalerForm ? 'visibility' : 'visibility_off'}
                </Button>
              </CardTitle>

              <Collapse collapsed={this.state.hideNewSalerForm}>
                <CardText className='md-grid'>
                  <TextField
                    id="floatingProductor"
                    label="Nombre del productor"
                    className="md-cell md-cell--12"
                    value={this.state.newSaler}
                    onChange={name => this.setState({ newSaler: name })}
                  />

                  <Button
                    className='md-cell md-cell--12'
                    raised
                    primary
                    disabled={this.state.newSaler.length === 0}
                    label="Agregar nuevo productor"
                    onClick={() => {
                      this.props.addNewSaler(this.state.newSaler, () => this.setState({ newSaler: '' }))
                      this.props.getSalers()
                    }}
                  />
                </CardText>

              </Collapse>

            </Card>


            <Card style={{ marginTop: 10 }}>
              <CardTitle
                title='Nuevo producto'
                subtitle='Mostrar detalles'
              >
                <Button
                  className="md-cell--right" icon
                  onClick={() => this.setState({ hideNewProductForm: !this.state.hideNewProductForm })}
                >
                  {this.state.hideNewProductForm ? 'visibility' : 'visibility_off'}
                </Button>
              </CardTitle>

              <Collapse collapsed={this.state.hideNewProductForm}>
                <CardText className='md-grid'>
                  <SelectField
                    id="salersSelect"
                    label="Propietario del producto"
                    menuItems={this.props.salers.map(saler => ({ label: saler.name, value: saler._id }))}
                    itemLabel="label"
                    itemValue="value"
                    className="md-cell md-cell--6"
                    helpOnFocus
                    value={this.state.ownerProduct}
                    onChange={(owner) => this.setState({ ownerProduct: owner })}
                  />

                  <TextField
                    id="floatingProducts"
                    label="Nombre del producto"
                    className="md-cell md-cell--6"
                    value={this.state.newProduct.name}
                    onChange={value => this.setProduct('name', value)}
                  />

                  <TextField
                    id="floatingUnitBase"
                    label="Unidad"
                    className="md-cell md-cell--4"
                    value={this.state.newProduct.unitBase}
                    onChange={value => this.setProduct('unitBase', value)}
                  />

                  <TextField
                    id="floatingPrice"
                    label="Precio"
                    className="md-cell md-cell--4"
                    value={this.state.newProduct.price}
                    onChange={value => this.setProduct('price', value)}
                  />

                  <TextField
                    id="floatingQuantity"
                    label="Cantidad"
                    className="md-cell md-cell--4"
                    value={this.state.newProduct.quantity}
                    onChange={value => this.setProduct('quantity', value)}
                  />

                  <Button
                    className='md-cell md-cell--12'
                    raised
                    primary
                    label="Agregar nuevo producto"
                    disabled={(Object.keys(this.state.newProduct).filter(info => this.state.newProduct[info].length > 0).length < 4) || this.state.ownerProduct.length === 0}
                    onClick={() => {
                      this.props.addProduct(this.state.ownerProduct, this.state.newProduct, () => {
                        this.setState({
                          newProduct: {
                            name: '',
                            unitBase: '',
                            price: '',
                            quantity: ''
                          },
                          ownerProduct: ''
                        })
                        this.props.getSalers()
                      })
                    }}
                  />
                </CardText>

              </Collapse>

            </Card>
          </div>
        </div>

        <div className='container-salers'>
          <div className="md-grid">
            {
              this.props.salers.map((saler, index) => {
                return (
                  <Saler
                    key={index}
                    saler={saler}
                    setFocusedSaler={(salerFocus) => {
                      const salerF = {...this.state.salerFocus}
                      salerF.type = 'show'
                      salerF.title = 'Ver información'
                      salerF.saler = saler
                      this.setState({ salerFocus: salerF, showModalSaler: true })
                    }}
                    openModal={() => {
                      const salerF = {...this.state.salerFocus}
                      salerF.type = 'edit'
                      salerF.title = 'Editar productor'
                      salerF.saler = saler
                      this.setState({ salerFocus: salerF, showModalSaler: true })
                    }}
                    removeSaler={() => this.openModalConfirmation(saler._id)}
                  />
                )
              })
            }
            {
              this.props.salers.length === 0
              ?  <h2>No hay productores</h2>
              : null
            }
          </div>
        </div>

        <ModalConfirmation
          visible={this.state.showModalConfirmation}
          title={'¿Segur@ que desea eliminar el productor?'}
          action={() => this.removeSaler(this.state.idToRemove)}
          close={() => this.setState({ showModalConfirmation: false })}
        />

        <ModalSaler
          visible={this.state.showModalSaler}
          {...this.state.salerFocus}
          reject={() => this.setState({ showModalSaler: false })}
          action={saler => this.editSaler(saler)}
          setSalerName={name => {
            const salerF = {...this.state.salerFocus}
            salerF.saler.name = name
            this.setState({ salerFocus: salerF })
          }}
        />

      </div>
    )
  }
}

const mapStateToProps = state => ({
  salers: state.salers
})

const mapDispatchToProps = dispatch => ({
  addNewSaler(name, callback) {
    return dispatch(addSalerAction(name, callback))
  },
  getSalers() {
    return dispatch(getSalersAction())
  },
  addProduct(saler, product, callback) {
    return dispatch(addProductAction(saler, product, callback))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SalersList)
