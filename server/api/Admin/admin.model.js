const mongoose = require('mongoose')

const schema = mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true }
  },
  { versionKey: false }
)

module.exports = mongoose.model('admin', schema, 'admin')
