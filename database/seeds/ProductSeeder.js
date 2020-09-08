'use strict'

/*
|--------------------------------------------------------------------------
| ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class ProductSeeder {
  async run () {
    const user = await Factory.model('App/Models/User').create()
    const products = await Factory.model('App/Models/Product').make()

    await user.products().save(products)

    console.log(products)
  }
}

module.exports = ProductSeeder
