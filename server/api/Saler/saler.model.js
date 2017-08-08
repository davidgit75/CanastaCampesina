const mongoose = require('mongoose')

const schemaProduct = mongoose.Schema(
  {
    name: { type: String, required: true },
    unitBase : { type: String, required: true },
    price : { type: Number, required: true },
    quantity : { type: Number, required: true },
    sold: { type: Number, required: true, default: 0 },
    available : { type: Boolean, required: true, default: true },
  },
  { versionKey: false }
)

const schemaSaler = mongoose.Schema(
  {
    name: { type: String, required: true },
    products: [ schemaProduct ]
  },
  { versionKey: false }
)

module.exports = mongoose.model('saler', schemaSaler, 'saler')

/*

{
    "_id" : ObjectId("596136030a1f9af0e8eeba59"),
    "name" : "Don Fabio, Verede el Orejón, Municipio de Briceño. (Movimiento Ríos Vivos)",
    "products" : [
        {
            "name" : "Guayaba pintona",
            "unitBase" : "Libra",
            "price" : NumberInt(13000),
            "quantity" : NumberInt(7),
            "available" : true
        }
    ]
}

*/
