const Saler = require('./saler.model')

const getAll = (req, res) => {
  Saler.findAll().populate('products')
    .then(salers => res.status(200).send(salers))
    .catch(error => res.status(500).send(error))
}

module.exports = {
  getAll
}
