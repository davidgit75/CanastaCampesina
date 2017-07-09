import axios from 'axios'

export const getToken = () => window.localStorage.getItem('canasta_auth')
export const setToken = token => {
  window.localStorage.setItem('canasta_auth', token)
  setAxiosHeaders(token)
}
export const removeToken = () => window.localStorage.removeItem('canasta_auth')

export const existLocalToken = () => {
  const tokenLocal = window.localStorage.getItem('canasta_auth')
  return tokenLocal !== null
}

export const setAxiosHeaders = token => axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
