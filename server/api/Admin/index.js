const controllers = require('./admin.controller')
const router = require('express').Router()

router.get('/', controllers.getAll)
router.post('/', controllers.add)
router.delete('/:id', controllers.remove)
router.post('/auth', controllers.auth)
router.post('/auth/check', controllers.checkCredentials)

module.exports = router
