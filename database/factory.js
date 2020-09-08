'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Hash = use('Hash')

Factory.blueprint('App/Models/User', async (faker) => {
  return {
    name: faker.name(),
    email: faker.email(),
    city: faker.state({ full: true }),
    neighborhood: faker.city(),
    avatar: faker.avatar(),
    password: await Hash.make(faker.password())
  }
})

Factory.blueprint('App/Models/Product', (faker) => {
  return {
    name: faker.name(),
    type: faker.animal(),
    amount: faker.integer({ min: 0, max: 200 }),
    sell: faker.bool(),
    thumbnail: faker.avatar(),
    price: faker.floating({ min: 0, max: 200 })
  }
})
