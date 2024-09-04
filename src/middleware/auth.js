const jwt = require('jsonwebtoken');

// Usa JWT para la autenticación de los usuarios
const auth = (req, res, next) => {
    const token = req.header('Authorization').split(' ');
    if (!token) {
        return res.status(401).json({ message: 'No hay token, autorización denegada' });
    }

    try {
        const decoded = jwt.verify(token[1], process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token no es válido' });
    }
};

module.exports = auth;
