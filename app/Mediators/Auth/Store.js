const User = use('App/Models/User')

module.exports = async ({ username, name, email, password }) => {
  const userExists = await User.findBy('username', username)

  if (!userExists) {
    const user = await User.create({ username, name, email, password })

    return { status: 201, data: user }
  } else {
    return { status: 400, data: { error: 'User already exists' } }
  }
}
