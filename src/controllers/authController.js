const { registerUser, loginUser } = require('../services/authService');

// Procesa petición de registro

const register = async (req, res) => {
    const { email, password } = req.body;

    try {
        await registerUser(email, password);
        res.status(201).json({ message: 'Usuario registrado con éxito' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Procesa petición de login 

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const token = await loginUser(email, password);
        // Token para autenticación 
        res.json({ token });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    register,
    login,
};
