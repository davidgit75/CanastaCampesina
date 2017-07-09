import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'

const initStates = {
  products: [],
  orders: [],
  admins: [],
  user: null,
  loading: true
}

const middleware = applyMiddleware(thunk, createLogger())

export default createStore(reducer, initStates, middleware)
