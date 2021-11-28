const Joi = require('joi');

const userSchema = Joi.object({

    email: Joi.string().email().required(),       
    password: Joi.string().required(),    
    nombre: Joi.string().required(), 
    apellido: Joi.string().required(), 
    edad: Joi.string().required(), 
    direccion: Joi.string().required(), 
    altura: Joi.number().integer().required(),
})

module.exports = {
    userSchema
}