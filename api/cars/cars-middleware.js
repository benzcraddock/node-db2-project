const Car = require('./cars-model')

const checkCarId = async (req, res, next) => {
  try {
    const car = await Car.getById(req.params.id)

    if(!car) {
      next({
        status: 404,
        message: `car with id ${req.params.id} is not found`
      })
    } else {
      req.car = car
      next()
    }
  }
  catch(err) {
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  const error = { status: 400 }

  if(!req.body.vin) {
    error.message = 'vin is missing'
  } else if(!req.body.make) {
    error.message = 'make is missing'
  } else if(!req.body.model) {
    error.message = 'model is missing'
  } else if(!req.body.mileage) {
    error.message = 'mileage is missing'
  } else {
    res.json(req.body)
    next()
  }

  if(error.message) {
    next(error)
  } else {
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  
}

const checkVinNumberUnique = async (req, res, next) => {
  try {
    const car = await Car.getById(req.params.id)

    if(!car) {
      next({
        status: 404,
        message: `car with id ${req.params.id} is not found`
      })
    } else {
      req.car = car
      next()
    }
  }
  catch(err) {
    next(err)
  }
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}
