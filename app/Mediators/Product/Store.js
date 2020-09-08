const Product = use('App/Models/Product')
const User = use('App/Models/User')

// eslint-disable-next-line camelcase
module.exports = async ({ name, type, amount, sell, thumbnail, price }, user_id) => {
  const { neighborhood } = await User.findBy('id', user_id)

  if (!neighborhood) {
    return { status: 400, data: { error: 'neighborhood' } }
  }

  const product = await Product.create({ name, type, amount, sell, thumbnail, price, neighborhood, user_id })
  return { status: 201, data: product }
}
