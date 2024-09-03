const { coordinatesFromCity, nearbyRestaurants } = require('../services/restaurantesService');

async function obtenerRestaurantesCercanos(req, res) {
    const { city, coordinates } = req.body;

    try {
        let location;
        if (city) {
            location = await coordinatesFromCity(city);
        } else if (coordinates) {
            location = coordinates;
        } else {
            return res.status(400).json({ error: 'Debe proporcionar una ciudad o coordenadas.' });
        }

        const restaurantes = await nearbyRestaurants(location);
        res.json({ restaurantes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
}

module.exports = {
    obtenerRestaurantesCercanos,
};
