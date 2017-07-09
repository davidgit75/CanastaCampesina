import development from './development'
import production from './production'
const env = process.env.NODE_ENV || 'development'

export default env === 'development' ? development : production
