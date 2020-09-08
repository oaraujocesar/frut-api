const User = use('App/Models/User')

module.exports = async ({ name, email, password, neighborhood, city }) => {
  const emailExists = await User.findBy('email', email)

  if (!emailExists) {
    const user = await User.create({ name, email, password, neighborhood, city })
    return { status: 201, data: user }
  } else {
    return { status: 400, data: { error: 'User already exists' } }
  }
}
