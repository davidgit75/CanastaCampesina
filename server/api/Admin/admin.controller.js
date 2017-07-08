const Admin = require('./admin.model')
const { encodeToken, encrypt } = require('../../helpers')

const auth = (req, res) => {
  if (req.body && req.body !== {}) {
    const query = {
      username: req.body.username,
      password: encrypt(req.body.password)
    }

    Admin.findOne(query)
      .then(admin => {
        if (admin) {
          const token = encodeToken(req.body)
          res.status(200).send({ token })
        } else {
          res.status(400).send('Data is not correct')
        }
      })
      .catch(error => console.log(`Error finding admin ${error}`))
  } else {
    res.status(400).send('Data is not enought')
  }
}

module.exports = {
  auth
}
