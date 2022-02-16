const db = require('../../data/db-config')

const getAll = () => {
  return db('cars')
}

const getById = (id) => {
  return db('cars')
    .where('id', id)
    .first()
}

// ADDED GET BY VIN SO WE DONT HAVE TO DO DB CODE INSIDE MIDDLEWARE
const getByVin = (vin) => {
  return db('cars')
    .where('vin', vin)
    .first()
}

const create = (car) => {
  return db('cars')
    .insert(car)
    .then(([id]) => {
      return getByVin(id)
    })
}

module.exports = {
  getAll,
  getById,
  getByVin,
  create,
}
