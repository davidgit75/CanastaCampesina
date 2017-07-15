import { combineReducers } from 'redux'
import {
  SET_SALERS,
  SET_ORDERS,
  SET_USER,
  SET_ADMINS,
  SET_LOADING
} from './actions'

const salersReducer = (state=[], action) => {
  const { type, salers } = action
  switch(type) {
    case SET_SALERS:
      return saler
    default:
      return state
  }
}

const ordersReducer = (state=[], action) => {
  const { type, orders } = action
  switch(type) {
    case SET_ORDERS:
      return orders
    default:
      return state
  }
}

const userReducer = (state={}, action) => {
  const { type, user } = action
  switch(type) {
    case SET_USER:
      return user
    default:
      return state
  }
}

const adminsReducer = (state={}, action) => {
  const { type, admins } = action
  switch(type) {
    case SET_ADMINS:
      return admins
    default:
      return state
  }
}

const loadingReducer = (state=null, action) => {
  const { type, loading } = action
  switch(type) {
    case SET_LOADING:
      return loading
    default:
      return state
  }
}

export default combineReducers({
  salers: salersReducer,
  orders: ordersReducer,
  admins: adminsReducer,
  user: userReducer,
  loading: loadingReducer
})
