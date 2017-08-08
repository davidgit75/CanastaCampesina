const adminRoutes = require('../api/Admin')
const salersRoutes = require('../api/Saler')
const ordersRoutes = require('../api/Order')

module.exports = app => {
  app.use('/admin', adminRoutes),
  app.use('/saler', salersRoutes),
  app.use('/order', ordersRoutes)
}
