const connection = require('./connection');
let objectId = require('mongodb').ObjectId;

async function getProductos(){
    const clientmongo = await connection.getConnection();
    console.log(clientmongo);
    const productos = await clientmongo.db('tecno')
                    .collection('productos')
                    .find()
                    .toArray();
    return productos;
}

async function getProducto(id){
    const clientmongo = await connection.getConnection();
    const producto = await clientmongo.db('tecno')
                    .collection('productos')
                    .findOne({_id: new objectId(id)});
    return producto;
}

async function addProducto(producto){
    const clientmongo = await connection.getConnection();
    const result = await clientmongo.db('tecno')
                    .collection('productos')
                    .insertOne(producto);
    return result;
}

async function updateProducto(id,nuevoStock){
    const clientmongo = await connection.getConnection();
    let stockNuevo = parseInt(Object.values(nuevoStock)[0])
    const result = await clientmongo.db('tecno')
                    .collection('productos')
                    .updateOne({_id: new objectId(id)}, { $set: { stock: stockNuevo }});
    return result;
}

async function deleteProducto(id){
    const clientmongo = await connection.getConnection();
    const result = await clientmongo.db('tecno')
                    .collection('productos')
                    .deleteOne({_id: new objectId(id)});
    return result;
}

module.exports = {getProductos, getProducto, addProducto, updateProducto, deleteProducto};