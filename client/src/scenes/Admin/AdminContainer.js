import React, { Component } from 'react'
import { connect } from 'react-redux'
import Login from '../../components/Login'
import { checkCredentials } from '../../redux/thunk'
import Loader from '../../components/Loader'

class AdminContainer extends Component {
  componentWillMount() {
    this.props.checkCredentials()
  }

  render() {
    console.log('props', this.props)
    return (
      <div>
        {
          this.props.loading ?
            <Loader />
          :
            !this.props.admin ?
              <Login />
            :
              <p>Admin App</p>
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  admin: state.admin,
  loading: state.loading
})

const mapDispatchToProps = dispatch => ({
  checkCredentials: () => dispatch(checkCredentials())
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer)
