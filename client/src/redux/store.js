import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'

const initStates = {
  products: [],
  orders: [],
  admin: {}
}

const middleware = applyMiddleware(thunk, createLogger())

export default createStore(reducer, initStates, middleware)
