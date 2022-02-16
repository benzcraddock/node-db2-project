exports.seed = async function(knex) {
  await knex('cars').truncate()
  return knex('cars').insert([
    {vin: '11111111', make: 'mercedes', model: 'e class', mileage: 50000, title: 'used', transmission: 'auto'},
    {vin: '22222222', make: 'subaru', model: 'outback', mileage: 25000, title: 'new', transmission: 'manual'},
    {vin: '33333333', make: 'ferrari', model: 'enzo', mileage: 60000, title: 'used', transmission: 'auto'},
  ])
}
