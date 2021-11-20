const express = require('express');
const router = express.Router();
const joi = require('joi');
const productos = require('../data/productos');
const { getProductos, createProducto, updateProducto, createCompra } = require('../controllers/productos.controller');


// /api/productos/
router.get('/', getProductos);

router.post('/', createProducto);

router.put('/:id', updateProducto);

router.post('/compra', createCompra);



router.get('/:id', async (req,res)=>{
    const producto = await productos.getProducto(req.params.id);
    if(producto){
        res.json(producto);
    } else {
        res.status(404).send('Producto no encontrado');
    }
});

router.delete('/:id', async (req, res)=>{
    const producto = await productos.getProducto(req.params.id)
    if(!producto){
        res.status(404).send('Producto no encontrado');
    } else {
        productos.deleteProducto(req.params.id);
        res.status(200).send('Producto eliminado');
    }
});


module.exports = router;
