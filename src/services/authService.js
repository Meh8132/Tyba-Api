const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

// Función de registro de usuario y almacenamiento en la DB

async function registerUser(email, password) {
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
        throw new Error('El usuario ya existe');
    }
    const user = await User.create({ email, password});
    return user;
}

// Función de Login de usuario

async function loginUser(email, password) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
        throw new Error('Credenciales inválidas');
    }

    // Compara la contraseña con su hash 

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error('Credenciales inválidas');
    }
    // Token generado en login
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: '1h',    // Logout automático, el token expira en una hora
    });

    return token;
}

module.exports = {
    registerUser,
    loginUser,
};
