const Admin = require('../../api/Admin/admin.model')
const { stringEmpty, encrypt, decodeToken } = require('../../helpers')

const midAuthAdmin = (req, res, next) => {
  console.log('midAuthAdmin', req.headers);
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1]
    if (token) {
      const credentials = decodeToken(token)
      delete credentials.iat
      delete credentials.exp
      credentials.password = encrypt(credentials.password)
      Admin.findOne(credentials)
        .then(admin => {
          if (admin) next()
          else res.status(401).send('User does not exist')
        })
        .catch(error => res.status(500).send(error))
    } else {
      res.status(401).send('Token does not exist')
    }
  } else {
    res.status(401).send('Token is not correct')
  }
}

module.exports = {
  midAuthAdmin
}
