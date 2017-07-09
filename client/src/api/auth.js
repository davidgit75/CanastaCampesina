import axios from 'axios'
import { ADMIN_AUTH_CHECK, ADMIN_AUTH } from '../api/routes'
import { existLocalToken, getToken, setToken, setAxiosHeaders } from '../helpers/'
import { setLoading, setUser } from '../redux/actionCreators'

export const checkCredentials = () => {
  return dispatch => {
    dispatch(setLoading(true))
    if (existLocalToken()) {
      setAxiosHeaders(getToken())
      axios.post(ADMIN_AUTH_CHECK, { token: getToken() })
        .then(data => {
          if (data.data) {
            dispatch(setUser(data.data))
            dispatch(setLoading(false))
          }
        })
        .catch(error => {
          console.log(`Error checking credentials: ${JSON.stringify(error)}`)
          dispatch(setUser(null))
          dispatch(setLoading(false))
        })
    } else {
      console.log('Not exist token')
      dispatch(setLoading(false))
    }
  }
}

export const login = credentials => {
  return dispatch => {
    dispatch(setLoading(true))
    axios.post(ADMIN_AUTH, credentials)
      .then(data => {
        console.log('answer login', data)
        if (data.data.token && data.data.admin) {
          setToken(data.data.token)
          dispatch(setUser(data.data.admin))
          dispatch(setLoading(false))
        }
      })
      .catch(error => {
        console.log(`Error checking credentials: ${JSON.stringify(error)}`)
        console.log(`ERROR => ${error}`)
        dispatch(setLoading(false))
      })
  }
}
