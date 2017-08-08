const controllers = require('./order.controller')
const router = require('express').Router()

router.get('/', controllers.getAll)
router.post('/add', controllers.add)
router.delete('/:id', controllers.remove)

module.exports = router
