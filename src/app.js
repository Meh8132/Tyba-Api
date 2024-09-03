require('dotenv').config(); // Configura las variables de entorno
const express = require('express');
const restaurantesRouter = require('./routes/restaurantesRoute');

const app = express();
const port = 3000;

app.use(express.json());

// Usa el router de restaurantes
app.use('/restaurantes', restaurantesRouter);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
