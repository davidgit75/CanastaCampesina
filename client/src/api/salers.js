import axios from 'axios'
import { SALERS } from './routes'
import { setSalers, setLoading } from '../redux/actionCreators'

export const getSalers = () => {
  return (dispatch) => {
    axios.get(SALERS)
      .then(salers => dispatch(setSalers(salers.data)))
      .catch(error => console.log(error))
  }
}

export const addSaler = (name, callback) => {
  return (dispatch) => {
    // dispatch(setLoading(true))
    axios.post(SALERS, { name })
      .then(data => {
        dispatch(setLoading(false))
        callback()
      })
      .catch(error => console.log(error))
  }
}

export const addProduct = () => {
  return null
}
