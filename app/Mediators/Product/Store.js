const Product = use('App/Models/Product')

module.exports = async ({ name, type, amount, sell, thumbnail, price }) => {
  const product = await Product.create({ name, type, amount, sell, thumbnail, price })
  return { status: 201, data: product }
}
