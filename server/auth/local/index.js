const Admin = require('../../api/Admin/admin.model')
const { stringEmpty, encrypt, decodeToken } = require('../../helpers')

const midAuthAdmin = (req, res, next) => {
  let { username, password } = req.body
  const token = req.header.authorization
  console.log('token', token)
  password = encrypt(password)
  if (stringEmpty(username) || stringEmpty(password)) {
    res.status(401).send('Admin information is not enought')
  } else {
    if (token) {
      const credentials = decodeToken(token)
      delete credentials.iat
      delete credentials.exp
      Admin.findOne(credentials)
        .then(admin => {
          if (admin) next()
          else res.status(401).send('User does not exist')
        })
        .catch(error => res.status(500).send(error))
    } else {
      res.status(401).send('Token does not exist')
    }
  }
}

module.exports = {
  midAuthAdmin
}
