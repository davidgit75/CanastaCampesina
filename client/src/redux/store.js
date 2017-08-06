import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

const initStates = {
  salers: [],
  orders: [],
  admins: [],
  user: null,
  loading: true
}

const middleware = applyMiddleware(thunk)

export default createStore(reducer, initStates, middleware)
