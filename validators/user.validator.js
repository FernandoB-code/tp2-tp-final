const Joi = require('joi');

const validar = (user) =>{
    const scheme = Joi.object({
        email: Joi.string()
            .alphanum()
            .min(3)
            .max(15)
            .required(),
    
        password: Joi.string()
            .alphanum()
            .min(5)
            .max(15)
            .required(),
    })

    return scheme.validate(user)
}




// scheme.validate({ user });
// // -> { value: { username: 'abc', birth_year: 1994 } }

module.exports = {validar}