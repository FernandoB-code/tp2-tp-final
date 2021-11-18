const User = require("../models/user")
const UserValidator = require("../validators/user.validator")
const {generateAuthToken} = require("../services/auth.service")
const Joi = require('joi');

module.exports = {
    create: (user) => {
        UserValidator.validar(user)
        const domainUser = new User(user.email,user.password)
        const usuario = generateAuthToken(domainUser)
        return usuario
    }
}

