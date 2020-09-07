'use strict'
const Route = use('Route')

Route.group(() => {
  Route.post('signup', 'AuthController.store')
  Route.post('signin', 'AuthController.signin')
}).prefix('v1/client/auth')
