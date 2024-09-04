const express = require('express');
const { register, login } = require('../controllers/authController');

const router = express.Router();

// Rutas para el registro y login de usuarios
router.post('/registro', register);
router.post('/login', login);

module.exports = router;
