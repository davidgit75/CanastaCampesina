import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAdmins, addAdmin, removeAdmin } from '../../api/admins'
import TableAdmins from './TableAdmins'

class TableAdminsContainer extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false
    }
  }

  removeAdmin(id) {
    console.log('remove', id)
    removeAdmin(id)
      .then(data => this.props.getAllAdmins())
      .catch(error => console.log(`Error deleting admin ${error}`))
  }

  editAdmin(id) {
    console.log('edit', id)
  }

  addAdmin(credentials, callback) {
    console.log('addAdmin', credentials, callback)
    this.props.addNewAdmin(credentials, () => {
      callback()
      this.setState({ showModal: false })
      this.props.getAllAdmins()
    })
  }

  componentDidMount() {
    this.props.getAllAdmins()
  }

  render() {
    return (
      <TableAdmins
        admins={this.props.admins}
        editAdmin={id => this.editAdmin(id)}
        removeAdmin={id => this.removeAdmin(id)}
        addAdmin={(credentials, callback) => this.addAdmin(credentials, callback)}
        showModal={this.state.showModal}
        setModalVisibility={v => this.setState({ showModal: v })}
      />
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
