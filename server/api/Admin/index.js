const controllers = require('./admin.controller')
const router = require('express').Router()

router.post('/auth', controllers.auth)
router.post('/auth/check', controllers.checkCredentials)

module.exports = router
