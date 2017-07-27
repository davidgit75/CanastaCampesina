const controllers = require('./admin.controller')
const router = require('express').Router()
const middlewareAuth = require('../../auth/local').midAuthAdmin

router.get('/', middlewareAuth, controllers.getAll)
router.post('/', middlewareAuth, controllers.add)
router.delete('/:id', middlewareAuth, controllers.remove)
router.put('/', middlewareAuth, controllers.edit)
router.post('/auth', middlewareAuth, controllers.auth)
router.post('/auth/check', middlewareAuth, controllers.checkCredentials)

module.exports = router
