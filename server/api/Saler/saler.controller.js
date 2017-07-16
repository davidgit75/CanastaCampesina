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
  res.status(200).send([])
}

module.exports = {
  getAll,
  addSaler,
  addProduct
}
