const Saler = require('./saler.model')

const getAll = (req, res) => {
  Saler.find()
    .then(salers => res.status(200).send(salers))
    .catch(error => res.status(500).send(error))
}

const addSaler = (req, res) => {
  console.log('addSaler')
  console.log(req.body)
  const newSaler = new Saler({
    name: req.body.name
  })

  newSaler.save()
    .then((salers) => res.status(200).send('Saler added successfully'))
    .catch(error => res.status(500).send(error))
}

const addProduct = (req, res) => {
  console.log('addProduct')
  console.log(req.body)
  if (req.body.saler && req.body.product) {
    Saler.update(
      { _id: req.body.saler },
      {
        $push: {
          'products': {
            name: req.body.product.name,
            unitBase: req.body.product.unitBase,
            price: req.body.product.price,
            quantity: req.body.product.quantity,
            availabeQuantity: req.body.product.quantity,
          }
        }
      }
    )
    .then(salers => {
      console.log('SALER UPDATED', salers)
      res.status(200).send(salers)
    })
    .catch(error => res.status(500).send(error))
  } else {
    res.status(401).send('Information is not enought')
  }
}

const removeSaler = (req, res) => {
  console.log('remove saler', req.params);
  if (req.params) {
    Saler.remove({ _id: req.params.id })
      .then(data => res.status(200).send('Saler removed successfully'))
      .catch(error => res.status(500).send(error))
  } else {
    res.status(401).send('Info is not enought')
  }
}

const editSaler = (req, res) => {
  if (req.body) {
    console.log('edit saler', req.body);
    Saler.update({ _id: req.body._id }, req.body)
      .then(data => res.status(200).send('Saler edited successfully'))
      .catch(error => res.status(500).send(error))
  } else {
    res.status(401).send('Info is not enought')
  }
}

module.exports = {
  getAll,
  addSaler,
  addProduct,
  removeSaler,
  editSaler
}
