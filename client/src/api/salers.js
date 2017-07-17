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
    axios.post(SALERS, { name })
      .then(data => callback())
      .catch(error => console.log(error))
  }
}

export const addProduct = (saler, product, callback) => {
  return (dispatch) => {
    axios.post(`${SALERS}/product`, { saler, product })
      .then(data => callback())
      .catch(error => console.log(error))
  }
}

export const removeSaler = _id => {
  return axios.delete(SALERS, { _id })
}
