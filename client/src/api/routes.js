import ENV_CONFIG from '../config/environment'

const URL_BASE = `${ENV_CONFIG.host}:${ENV_CONFIG.port}`
export const ADMIN_BASE = `${URL_BASE}/admin`
export const ADMIN_AUTH = `${ADMIN_BASE}/auth`
export const ADMIN_AUTH_CHECK = `${ADMIN_AUTH}/check`
