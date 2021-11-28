module.exports = class User {
    constructor(email, password, nombre, apellido, edad, direccion, altura) {
        this.email = email;
        this.password = password;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.direccion = direccion;
        this.altura = altura;
        this.esAdmin = false;
    }
}