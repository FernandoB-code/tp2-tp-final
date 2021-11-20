const Product = require("../models/product")
const {productSchema} = require("../validators/product.validator")

module.exports = {
    create: async (producto) => {
        const result = await productSchema.validateAsync(producto)
        console.log(result)                
        return new Product(producto.imagen, producto.producto, producto.stock, producto.precio)
    }
}
