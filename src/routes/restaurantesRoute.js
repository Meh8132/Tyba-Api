const express = require('express');
const { obtenerRestaurantesCercanos } = require('../controllers/restaurantesController');

const router = express.Router();

// Ruta para obtener restaurantes cercanos
router.post('/', obtenerRestaurantesCercanos);

module.exports = router;
