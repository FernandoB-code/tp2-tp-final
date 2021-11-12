const ProductoRepository = require('../data/productos')
const { generateAuthToken } = require('./auth.service')

module.exports = {
  update: async (id) => {
    const producto = await ProductoRepository.updateProducto(id)
    return producto
  },
  getProductos: async () => {
    return ProductoRepository.getProductos()
  },
  addProducto: async (user) => {
    return ProductoRepository.addProducto(user)
  }
}
