import {
  SET_PRODUCTS,
  SET_ORDERS,
  SET_ADMIN,
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

export const setAdmin = admin => ({
  type: SET_ADMIN,
  admin
})

export const setLoading = loading => ({
  type: SET_LOADING,
  loading
})
