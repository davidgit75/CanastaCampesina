import axios from 'axios'
import { ADMIN_BASE } from '../api/routes'
import { existLocalToken, getToken, setToken } from '../helpers/'
import { setLoading, setAdmins } from '../redux/actionCreators'

export const getAdmins = () => {
  return dispatch => {
    // dispatch(setLoading(true))
    axios.get(ADMIN_BASE)
      .then(data => {
        dispatch(setAdmins(data.data))
        // dispatch(setLoading(false))
      })
      .catch(error => {
        // dispatch(setLoading(false))
      })
  }
}

export const addAdmin = (credentials, callback) => {
  return dispatch => {
    axios.post(ADMIN_BASE, credentials)
      .then(data => {
        callback()
      })
      .catch(error => {})
  }
}

export const removeAdmin = _id => {
  return axios.delete(`${ADMIN_BASE}/${_id}`)
}

export const editAdmin = credentials => {
  return axios.put(ADMIN_BASE, credentials)
}
