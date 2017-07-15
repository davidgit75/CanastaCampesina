const adminRoutes = require('../api/Admin')
const salersRoutes = require('../api/Saler')

module.exports = app => {
  app.use('/admin', adminRoutes),
  app.use('/saler', salersRoutes)
}
