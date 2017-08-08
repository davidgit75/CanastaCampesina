const Order = require('./order.model')
const Saler = require('../Saler/saler.model')

const getAll = (req, res) => {
  Order.find()
    .then(orders => res.status(200).send(orders))
    .catch(error => res.status(500).send(error))
}

const setAvailableOnOrder = (salerId, callbackSuccess, callbackError) => {
  Saler.find()
    .then(orders => {
      orders.map(order => {
        order.products.map(product => {
          if (product.quantity === product.sold) {
            Saler.update(
              { _id: salerId, 'product._id': product._id },
              {
                $set: { available: false },
              }
            )
              .then(orders => console.log('available field on saler/products updated'))
              .catch(error => console.log(error))
          }
        })
      })
    })
    .catch(error => console.log('error set available field', error))
}

const add = (req, res) => {
  console.log('add order', req.body)
  if (req.body) {
    const newOrder = new Order(req.body)
    newOrder.save(error => {
      if (error) {
        res.status(500).send(error)
      } else {
        Saler.update(
          { _id: req.body.salerId, 'products._id': req.body.productId },
          {
            $inc: { sold: 1, quantity: -1 },
          }
        )
          .then(orders => {
            setAvailableOnOrder(req.body.salerId)
            res.status(200).send('order and products updated');
          })
          .catch(error => res.status(500).send(error))
      }
    })
  } else {
    res.status(500).send('No order to add')
  }
}

const remove = (req, res) => {
  console.log('delete order', req.body)
  if (req.body._id) {
    Order.remove({ _id: req.body._id })
      .then(doc => res.status(200).send('order deleted'))
      .catch(error => res.status(500).send(error))
  } else {
    res.status(500).send('No order to delete')
  }
}

module.exports = {
  getAll,
  add,
  remove
}
