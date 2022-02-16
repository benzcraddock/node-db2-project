exports.seed = async function(knex) {
  await knex('cars').truncate()
  return knex('cars').insert([
    {vin: '1FTFW1EF1DKF66254', make: 'mercedes', model: 'e class', mileage: 50000, title: 'used', transmission: 'auto'},
    {vin: '2C3CDYBT1CH271676', make: 'subaru', model: 'outback', mileage: 25000, transmission: 'manual'},
    {vin: 'JN8AZ1MWXCW238247', make: 'ferrari', model: 'enzo', mileage: 60000, title: 'used'},
  ])
}
