const controllers = require('./saler.controller')
const router = require('express').Router()
const middlewareAuth = require('../../auth/local').midAuthAdmin

router.get('/', controllers.getAll)
router.post('/add', middlewareAuth, controllers.addSaler)
router.post('/edit', middlewareAuth, controllers.editSaler)
router.post('/product', middlewareAuth, controllers.addProduct)
router.delete('/:id', middlewareAuth, controllers.removeSaler)

module.exports = router
