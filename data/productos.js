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

async function updateStock(id,nuevoStock){
    const clientmongo = await connection.getConnection();
    const result = await clientmongo.db('tecno')
                    .collection('productos')
                    .updateOne({_id: new objectId(id)}, { $set: { stock: nuevoStock }});
    return result;
}

async function deleteProducto(id){
    const clientmongo = await connection.getConnection();
    const result = await clientmongo.db('tecno')
                    .collection('productos')
                    .deleteOne({_id: new objectId(id)});
    return result;
}

async function addCompra(compra){
    const clientmongo = await connection.getConnection();
    let venta = {
        id_comprador: compra.usuario._id,
        nombre: compra.usuario.nombre,
        apellido: compra.usuario.apellido,
        productos: [],
        total: 0,
        fecha: new Date().toLocaleString()
    }
    for (let p of compra.compras) {
        let prod = await getProducto(p._id)
        if(prod.stock >= p.cantidad) {
            venta.productos.push({
                _id: p._id,
                producto: p.producto,
                precio: p.precio,
                cantidad: p.cantidad
            })
            await updateStock(p._id, prod.stock - p.cantidad)
        } else {
            throw Error('No hay suficiente stock disponible.')
        }
        venta.total += p.precio * p.cantidad
    }
    const result = await clientmongo.db('tecno')
                .collection('compras')
                .insertOne(venta);
    return result;  
}

module.exports = {getProductos, getProducto, addProducto, updateProducto, deleteProducto, addCompra};