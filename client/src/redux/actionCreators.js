import {
  SET_PRODUCTS,
  SET_ORDERS,
  SET_ADMIN
} from './actions'

export const setProducts = products => ({
  type: SET_PRODUCTS,
  products
})

export const setOrders = orders => ({
  type: SET_ORDERS,
  orders
})

export const setProducts = admin => ({
  type: SET_ADMIN,
  admin
})
