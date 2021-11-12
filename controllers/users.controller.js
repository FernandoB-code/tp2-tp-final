const UserService = require('../services/user.service')

const getProductos = async function (req, res, next) {
  const productos = await UserService.getProductos() 
  
  return res.send(productos)
  res.json(productos)
}

const createUser = async (req, res) => {
  try {
    const result = await UserService.addUser(req.body)
    res.send(result)
  } catch (error) {
    res.status(409).json( {error: error.message})
  }
}

// S. O. L. I. D.

const loginUser = async (req, res) => {
  try {
    const {user,token} = await UserService.login(req.body.email, req.body.password)
    res.send({user,token})
  } catch (error) {
    res.status(401).send(error.message)
  }
}

module.exports = { getProductos, createUser, loginUser }
