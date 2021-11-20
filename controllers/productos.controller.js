const ProductoService = require('../services/producto.service')

const getProductos = async function(req, res, next) {
  const productos = await ProductoService.getProductos() 
  return res.send(productos)
}

const createProducto = async (req, res) => {
  try {
    const result = await ProductoService.addProducto(req.body)
    res.send(result)
  } catch (error) {
    res.status(409).json( {error: error.message})
  }
}

// S. O. L. I. D.

const updateProducto = async (req, res) => {
  try {
    const producto = await ProductoService.updateProducto(req.params.id,JSON.parse(JSON.stringify(req.body)))
    res.send(producto)
  } catch (error) {
    res.status(401).send(error.message)
  }
}

const createCompra = async (req, res) => {
  try {
    const result = await ProductoService.addCompra(req.body)
    res.send(result)
  } catch (error) {
    res.status(409).json( {error: error.message})
  }
}

module.exports = { getProductos, createProducto, updateProducto, createCompra }
