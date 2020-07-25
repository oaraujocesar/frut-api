'use strict'
const Route = use('Route')

Route.group(() => {
  Route.post('signup', 'AuthController.store')
}).prefix('v1/client/auth')
