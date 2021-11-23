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
  addProducto: async (prod) => {
    return ProductoRepository.addProducto(prod)
  },
  addCompra: async (compra) => {
    return ProductoRepository.addCompra(compra)
  }
}
