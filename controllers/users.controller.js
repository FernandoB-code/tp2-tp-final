const UserService = require('../services/user.service')

const getAllUsers = async function (req, res, next) {
  const users = await UserService.getAllUsers()
  
  res.send(users)
  res.json(users)
}

const createUser = async (req, res) => {
  try {
    const result = await UserService.addUser(req.body)
    res.send(result)
  } catch (error) {
    res.status(404).send(error.message)
  }
}

// S. O. L. I. D.

const loginUser = async (req, res) => {
  try {
    const { user, token } = UserService.login(req.body.email, req.body.password)

    res.send({ user, token })
  } catch (error) {
    res.status(401).send(error.message)
  }
}

module.exports = { getAllUsers, createUser, loginUser }
