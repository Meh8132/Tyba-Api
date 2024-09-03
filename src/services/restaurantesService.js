const axios = require('axios');

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

// Obtiene las coordenadas de la ciudad a partir de API de google
async function coordinatesFromCity(city) {
    const geocodeResponse = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
        params: {
            address: city,
            key: GOOGLE_API_KEY,
        },
    });
    const geocodeData = geocodeResponse.data;

    if (geocodeData.status !== 'OK') {
        throw new Error('No se pudo encontrar la ciudad proporcionada.');
    }
    // Coordenadas de la ciudad
    return geocodeData.results[0].geometry.location;
}

// Busca los restaurantes mas cercanos a las coordenadas
async function nearbyRestaurants(location) {
    const placesResponse = await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json`, {
        params: {
            location: `${location.lat},${location.lng}`,
            radius: 1500,
            type: 'restaurant',
            key: GOOGLE_API_KEY,
        },
    });

    const placesData = placesResponse.data;

    if (placesData.status !== 'OK') {
        throw new Error('No se pudieron encontrar restaurantes cercanos.');
    }
    // Objeto devuelto al controller con información de los restaurantes
    return placesData.results.map((place) => ({
        name: place.name,
        address: place.vicinity,
        rating: place.rating,
    }));
}

module.exports = {
    coordinatesFromCity,
    nearbyRestaurants,
};
