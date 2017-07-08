const mongoose = require('mongoose')

const schema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: false }
  },
  { versionKey: false }
)

module.exports = mongoose.model('client', schema, 'client')
