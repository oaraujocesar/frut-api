'use strict'

const presenter = use('App/Mediators/Product')

class ProductController {
  async store ({ request, response, auth }) {
    await auth.getUser()

    // eslint-disable-next-line camelcase
    const user_id = auth.user.$originalAttributes.id

    const { status, data } = await presenter
      .Store(request.only(['name', 'type', 'amount', 'sell', 'thumbnail', 'price']), user_id)

    return response.status(status).send(data)
  }

  async index ({ request, response, auth }) {
    const { status, data } = await presenter
      .List(request.get())

    return response.status(status).send(data)
  }
}

module.exports = ProductController
