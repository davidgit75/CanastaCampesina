const controllers = require('./admin.controller')
const router = require('express').Router()

router.post('/auth', controllers.auth)

module.exports = router
