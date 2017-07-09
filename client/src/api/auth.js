import axios from 'axios'
import {
  ADMIN_AUTH_CHECK
} from './routes'
import { getToken, existLocalToken } from '../helpers'

export const checkCredentials = () => {
  if (existLocalToken) {
    axios.post(ADMIN_AUTH_CHECK, { token: getToken() })
  } else {

  }
}
