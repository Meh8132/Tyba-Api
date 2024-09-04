const express = require('express');
const { obtenerRestaurantesCercanos } = require('../controllers/restaurantesController');
const auth = require('../middleware/auth')

const router = express.Router();

// Ruta para obtener restaurantes (requiere autorización)
router.post('/', auth, obtenerRestaurantesCercanos);

module.exports = router;
