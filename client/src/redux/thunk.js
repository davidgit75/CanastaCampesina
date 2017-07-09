import axios from 'axios'
import { ADMIN_AUTH_CHECK } from '../api/routes'
import { existLocalToken, getToken } from '../helpers/'
import { setLoading, setAdmin } from './actionCreators'

export const checkCredentials = () => {
  console.log('DISPATCH XD')
  return dispatch => {
    console.log('DISPATCH')
    dispatch(setLoading(true))
    if (existLocalToken()) {
      axios.post(ADMIN_AUTH_CHECK, { token: getToken() })
        .then(data => {
          if (data.data) {
            dispatch(setAdmin(data.data))
            dispatch(setLoading(false))
          }
        })
        .catch(error => {
          console.log(`Error checking credentials: ${JSON.stringify(error)}`)
          dispatch(setLoading(false))
        })
    } else {
      console.log('Not exist token')
      dispatch(setLoading(false))
    }
  }
}
