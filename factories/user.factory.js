const User = require("../models/user")
const {generateAuthToken} = require("../services/auth.service")
const {userSchema} = require("../validators/user.validator")

module.exports = {
    create: async (user) => {
        const result = await userSchema.validateAsync(user)
        console.log(result)
        const domainUser = new User(user.email,user.password)
        const usuario = generateAuthToken(domainUser)
        return usuario
    }
}

