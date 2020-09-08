'use strict'

const presenter = use('App/Mediators/Product')

class ProductController {
  async store ({ request, response }) {
    const { status, data } = await presenter
      .Store(request.only(['name', 'type', 'amount', 'sell', 'thumbnail', 'price']))

    return response.status(status).send(data)
  }
}

module.exports = ProductController
