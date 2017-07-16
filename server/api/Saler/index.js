const controllers = require('./saler.controller')
const router = require('express').Router()

router.get('/', controllers.getAll)
router.post('/', controllers.addSaler)
router.post('/product', controllers.addProduct)

module.exports = router
