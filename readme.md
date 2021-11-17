# Proyecto Taller de programación 2
# _Tecno H4rd_


[![Build Status][1]](https://github.com/Dephros/Tecno-H4rd)

Tecno H4rd es una aplicación destinada a la venta de hardware de computación.
Tecnologias usadas: node.js y vue.js.

## Lógica de negocio
El sistema posee 4 caracteristicas principales:

- Regristro y login de usuario
    - El sistema pedirá al usuario loguearse con su cuenta o poder crearse una en el momento ingresando sus datos.
    - El sistema distingue si la cuenta tiene rol administrador o comprador y otorga las funcionalidades que corresponda.
- Carga y control de stock
    - La cantidad de stock inicial es la cantidad cargada en la base de datos. No hay límite de cantidad por producto. Cuando se vende un producto, el sistema resta la cantidad       que se vendió a la cantidad actual. Cuando no haya más stock de un producto, no se podrá vender el mismo y se notificará al administrador la falta de este. El                   administrador podrá cargar mas stock en los productos.
- Ventas
    - Las compras realizadas por los usuarios se podrán pagar en efectivo o con tarjeta de crédito y débito.
    - Todas las ventas se realizarán de manera online por un usuario registrado. No se puede comprar de manera presencial (si pagar). Si el usuario decide pagar en efectivo,           tiene un plazo de 5 días hábiles para pagar el producto, o la venta se cancela automáticamente.
- Entrega de las compras
    - Se podrán retirar de manera presencial por el usuario que compró el producto, mostrando su DNI, o se podrá enviar al domicilio que indique el comprador al momento de la         compra.

## Roles
- Usuario Administrador: tiene la capacidad de visualizar y agregar nuevo stock a los productos.
- Usuario Comprador: tiene la capacidad de utilizar todas las funcionalidades menos la de carga y control de stock que le corresponde al administrador.

## Funcionalidades

- Carga y control de stock.
- Regristro y login de usuario.
- Búsqueda de productos filtrando por categorías.
- Búsqueda de productos filtrando por nombre.
- Ordenar por precio.
- Visualización de stock de los productos.
- Agregar productos a carrito de compra.
- Guardar métodos de pago.
- Poder realizar la compra.
- Historial de compras por usuario.

## Descripción de las funcionalidades

- Regristro y login de usuario
     - El username será el email; no podran haber dos usuarios registrados con el mismo email ni con el mismo dni.
- Búsqueda de productos filtrando por categorías
    - Poder filtrar por categoría de productos y dentro de las mismas poder filtrar por especificaciones.
- Búsqueda de productos filtrando por nombre
    - Barra de búsqueda que permite buscar por nombre, si el producto no existe, se notificará.
- Ordenar por precio
    - Permite ordenar por precio de mayor a menor o viceversa la lista de artículos.
- Agregar productos a carrito de compra
    - Permite al usuario guardar los artículos dentro de un carrito, para que luego pueda comprarlos en una sola transacción.
- Guardar métodos de pago
    - El usuario puede guardar los datos de una tarjeta de crédito o débito. Se verifica que el número de la tarjeta sea valido; si no es valido, se notificará.
    - Los datos que se pedirán para guardar el medio de pago serán:
        - numero de tarjeta, fecha de expiración, nombre, apellido,dni del titular y el código de seguridad. Este último no quedará registrado en la base de datos, solo se usará           para verificar la validez de la tarjeta.
- Poder realizar la compra
   - Se podrá pagar en efectivo o con tarjeta de crédito o débito.
   - Utilizando los medios de pagos disponibles, se realiza la compra de los artículos que están en el carrito. En el caso de tarjetas: si no hay tarjetas guardadas, se deberá        cargar; si las hay, se elegirá aquella que se va a utilizar y se deberá ingresar el código de seguridad.
- Historial de compras por usuario.
    - Se podrá consultar el historial de compras que tenga el usuario. En el historial se mostrará que ítems contenía el carrito a la hora de realizar la compra. Tendrá los           siguientes datos: fecha de compra, total y método de pago utilizado. No se podrá borrar el historial.

## Contacto

- Integrantes
    - Fernando Bernasconi (fernandobernasconi@gmail.com)
    - Lautaro Valenzuela (lautarovalenzuela94@gmail.com)
    - Miguel Angel Traversaro (migueltraversaro@gmail.com)
    - Miguel Hernán Pinella (mhpinella@gmail.com)

## Repositorio GitHub

[Link al repositorio](https://github.com/Dephros/Tecno-H4rd)

[1]:https://icon-library.com/images/github-icon-for-resume/github-icon-for-resume-14.jpg
