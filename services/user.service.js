const UserRepository = require('../data/users')
const { generateAuthToken } = require('../services/auth.service')

module.exports = {
  login: async (email, password) => {
    const user = await UserRepository.findByCredentials(email, password)
    // const token = 
    return { user, token: generateAuthToken(user) }
  },
  getAllUsers: async () => {
    return UserRepository.getAllUsers()
  },
  addUser: async (user) => {
    return UserRepository.addUser(user)
  }
}
