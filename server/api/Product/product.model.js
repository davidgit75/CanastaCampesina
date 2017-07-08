const mongoose = require('mongoose')

const schema = mongoose.Schema(
  {
    name: { type: String, required: true },
    unitBase : { type: String, required: true },
    price : { type: Number, required: true },
    quantity : { type: Number, required: true },
    available : { type: Boolean, required: true, default: true },
  },
  { versionKey: false }
)

module.exports = mongoose.model('product', schema, 'product')
