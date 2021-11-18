const UserService = require('../services/user.service')
const UserFactory = require('../factories/user.factory')


const getUsers = async function (req, res, next) {
  const users = await UserService.getUsers()
  return res.send(users)
}

const createUser = async (req, res) => {
  try {
    const factory = await UserFactory.create(req.body)   
    console.log(factory)
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

module.exports = { getUsers, createUser, loginUser }
