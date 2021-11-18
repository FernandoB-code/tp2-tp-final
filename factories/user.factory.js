const User = require("../models/user")
//const UserValidator = require("../validators/user.validator")
const {generateAuthToken} = require("../services/auth.service")
//const Joi = require('joi');
const {userSchema} = require("../validators/user.validator")

module.exports = {
    create: async (user) => {
        //UserValidator.validar(user)
        const result = await userSchema.validateAsync(user)
        const domainUser = new User(user.email,user.password)
        const usuario = generateAuthToken(domainUser)
        return usuario
    }
}

