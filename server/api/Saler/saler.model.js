const mongoose = require('mongoose')

const schema = mongoose.Schema(
  {
    name: { type: String, required: true },
    products: [
      { type: mongoose.Schema.Types.ObjectId }
    ]
  },
  { versionKey: false }
)

module.exports = mongoose.model('saler', schema, 'saler')
