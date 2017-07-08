const adminRoutes = require('../api/Admin')

module.exports = app => {
  app.use('/admin', adminRoutes)
}
