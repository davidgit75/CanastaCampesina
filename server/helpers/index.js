const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const Admin = require('../api/Admin/admin.model')
const { secretJWT } = require('../config/auth')

const stringEmpty = string => string === undefined || string === null || string.length === 0

const encodeToken = credentials => jwt.sign(credentials, secretJWT)

const decodeToken = token => {
  let decoded
  try {
    decoded = jwt.decode(token, secretJWT)
  } catch(error) {
    decoded = null
  }
  return decoded
}

const encrypt = str => crypto.createHash('md5').update(str).digest('hex')

module.exports = {
  encodeToken,
  decodeToken,
  encrypt,
  stringEmpty
}
