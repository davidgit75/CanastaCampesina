const app = require('express')()
const server = require('http').createServer(app)

const configExpress = require('./config/express')
const configRoutes = require('./config/routes')
const configDB = require('./config/database')
const configEnv = require('./config/environment')

configExpress(app)
configRoutes(app)
configDB(configEnv.db)

server.listen(configEnv.port, () => {
  console.log(`Express listening on ${configEnv.port}`)
})

module.exports = app
