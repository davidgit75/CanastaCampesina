export const getToken = () => window.localStorage.getItem('canasta_auth')
export const setToken = token => window.localStorage.setItem('canasta_auth', token)
export const removeToken = () => window.localStorage.removeItem('canasta_auth')

export const existLocalToken = () => {
  const tokenLocal = window.localStorage.getItem('canasta_auth')
  return tokenLocal !== null
}
