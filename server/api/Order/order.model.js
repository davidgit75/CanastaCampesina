const mongoose = require('mongoose')

const schema = mongoose.Schema(
  {
    client: { type: String, required: true },
    salerId: { type: String, required: true },
    product: { type: String, required: true } // _id of products on saler model
  },
  { versionKey: false }
)

module.exports = mongoose.model('order', schema, 'order')
