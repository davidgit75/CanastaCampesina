const Admin = require('./admin.model')
const { encodeToken, encrypt, decodeToken, decrypt } = require('../../helpers')

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

// token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiJhYmMxMjMiLCJpYXQiOjE0OTk1NzM2MTh9.XgoqDl1KhQHaa9lnsz7ASWiYz04j_YQJq4nHcaM17E0
// password e99a18c428cb38d5f260853678922e03
const checkCredentials = (req, res) => {
  if (req.body) {
    const { token } = req.body
    try {
      const credentials = decodeToken(token)
      delete credentials.iat
      credentials.password = encrypt(credentials.password)
      Admin.findOne(credentials)
        .then(admin => {
          if (admin) {
            const query = {
              _id: admin._id,
              username: admin.username
            }
            res.status(200).send(query)
          } else {
            res.status(400).send('Data is not enought')
          }

        })
        .catch(error => res.status(500).send(error))
    } catch (error) {
      res.status(500).send(`Error converting password: ${error}`)
    }
  } else {
    res.status(400).send('Data is not enought')
  }
}

module.exports = {
  auth,
  checkCredentials
}
