const Product = use('App/Models/Product')

module.exports = async ({ neighborhood }) => {
  if (neighborhood) {
    const products = await Product.query().where('neighborhood', neighborhood).fetch()

    if (products.rows.length === 0) {
      return { status: 204, data: { error: 'Products not found' } }
    }

    return { status: 200, data: products }
  } else {
    const products = await Product.all()

    if (!products) {
      return { status: 204, data: { error: 'Products not found' } }
    }

    return { status: 200, data: products }
  }
}
