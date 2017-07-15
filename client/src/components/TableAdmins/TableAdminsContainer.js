import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAdmins, addAdmin, removeAdmin, editAdmin } from '../../api/admins'
import TableAdmins from './TableAdmins'
import ModalActionAdmin from '../ModalActionAdmin'
import ModalConfirmation from '../ModalConfirmation'

class TableAdminsContainer extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false,
      showCofirmation: false,
      editedAdmin: {
        _id: '',
        username: '',
        password: ''
      },
      typeModal: ''
    }
  }

  removeAdmin(id) {
    removeAdmin(id)
      .then(data => this.props.getAllAdmins())
      .catch(error => console.log(`Error deleting admin ${error}`))
  }

  openModalToEdit(admin) {
    this.setState({ editedAdmin: admin, typeModal: 'edit' })
  }

  editAdmin() {
    editAdmin(this.state.editedAdmin)
      .then(data => {
        this.setState({ showModal: false, editedAdmin: { username: '', password: '' } })
        this.props.getAllAdmins()
      })
      .catch(error => console.log(`Error updating admin: ${error}`))
  }

  addAdmin() {
    this.props.addNewAdmin(this.state.editedAdmin, () => {
      this.setState({ showModal: false, editedAdmin: { username: '', password: '' } })
      this.props.getAllAdmins()
    })
  }

  componentDidMount() {
    this.props.getAllAdmins()
  }

  render() {
    return (
      <div>
        <TableAdmins
          admins={this.props.admins}
          removeAdmin={admin => this.setState({ editedAdmin: admin, showCofirmation: true, showModal: false, typeModal: 'delete' })}
          showModal={this.state.showModal}
          setModalVisibility={v => this.setState({ showModal: v })}
          editedAdmin={this.state.editedAdmin}
          openModalToEdit={a => this.openModalToEdit(a)}
          setEditedAdmin={d => this.setState({ editedAdmin: d })}
          typeModal={this.state.typeModal}
          setTypeModal={v => this.setState({ typeModal: v })}
        />

        <ModalActionAdmin
          title='Agregar adminsitrador(a)'
          type={this.state.typeModal}
          data={this.state.editedAdmin}
          setData={d => this.setState({ editedAdmin: d })}
          visible={this.state.showModal}
          addAdmin={callback => this.addAdmin(callback)}
          editAdmin={() => this.setState({ showCofirmation: true, showModal: false })}
          rejectAction={() => {
            this.setState({ showModal: false, editedAdmin: { username: '', password: '' } })
          }}
        />

        <ModalConfirmation
          visible={this.state.showCofirmation}
          title={this.state.typeModal === 'edit' ? '¿Desea editar el administrador(a)?' : '¿Desea eliminar el administrador(a)?'}
          action={() => {
            const statesToChange = { showCofirmation: false, showModal: false, typeModal: '' }
            if (this.state.typeModal === 'edit') {
              this.editAdmin()
            } else if(this.state.typeModal === 'delete') {
              console.log('CONFIRMATION DELETE', this.state.editedAdmin)
              this.removeAdmin(this.state.editedAdmin._id)
              statesToChange.editedAdmin = {
                _id: '',
                username: '',
                password: ''
              }
            }
            this.setState(statesToChange)
          }}
          close={() => this.setState({ showCofirmation: false, showModal: false, editedAdmin: { username: '', password: '' } })}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  admins: state.admins
})

const mapDispatchToProps = dispatch => ({
  getAllAdmins() {
    return dispatch(getAdmins())
  },
  addNewAdmin(credentials, callback) {
    return dispatch(addAdmin(credentials, callback))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TableAdminsContainer)
