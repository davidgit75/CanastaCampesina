import {
  SET_PRODUCTS,
  SET_ORDERS,
  SET_USER,
  SET_ADMINS,
  SET_LOADING
} from './actions'

export const setProducts = products => ({
  type: SET_PRODUCTS,
  products
})

export const setOrders = orders => ({
  type: SET_ORDERS,
  orders
})

export const setUser = user => ({
  type: SET_USER,
  user
})

export const setAdmins = admins => ({
  type: SET_ADMINS,
  admins
})

export const setLoading = loading => ({
  type: SET_LOADING,
  loading
})
