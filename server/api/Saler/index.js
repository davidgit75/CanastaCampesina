const controllers = require('./saler.controller')
const router = require('express').Router()

router.get('/', controllers.getAll)

module.exports = router
