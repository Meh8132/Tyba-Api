const express = require('express');
const { obtenerRestaurantesCercanos, obtenerConsultasRealizadas } = require('../controllers/restaurantesController');
const auth = require('../middleware/auth')

const router = express.Router();

// Ruta para obtener restaurantes (requiere autorización)
router.post('/', auth, obtenerRestaurantesCercanos);

// Ruta para obtener las consultas realizadas por el usuario autenticado
router.get('/consultas', auth, obtenerConsultasRealizadas);

module.exports = router;
