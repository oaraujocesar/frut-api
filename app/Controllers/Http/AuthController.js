'use strict'

const presenter = use('App/Mediators/Auth')

class AuthController {
  async store ({ request, response }) {
    return presenter
      .Store(request.only(['username', 'name', 'email', 'password']))
      .then(({ status, data }) => response.status(status).send(data))
  }
}

module.exports = AuthController
