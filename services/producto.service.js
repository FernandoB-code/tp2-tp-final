const ProductoRepository = require('../data/productos')
const { generateAuthToken } = require('./auth.service')

module.exports = {
  updateProducto: async (id,nuevoStock) => {
    const productoUpdate = await ProductoRepository.updateProducto(id,nuevoStock)
    return productoUpdate
  },
  getProductos: async () => {
    return ProductoRepository.getProductos()
  },
  addProducto: async (user) => {
    return ProductoRepository.addProducto(user)
  }
}
