const UserRepository = require('../data/users')
const { generateAuthToken } = require('../services/auth.service')

module.exports = {
  login: async (email, password) => {
    const user = await UserRepository.findByCredentials(email, password)
    const token = generateAuthToken(user)
    return {user,token}
  },
  getProductos: async () => {
    return UserRepository.getProductos()
  },
  addUser: async (user) => {
    return UserRepository.addUser(user)
  }
}
