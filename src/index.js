require('dotenv').config(); // Configura las variables de entorno
const express = require('express');
const restaurantesRouter = require('./routes/restaurantesRoute');
const authRouter = require('./routes/authRoute');

const app = express();
const port = 3000;

app.use(express.json());

// Routers
app.use('/restaurantes', restaurantesRouter);
app.use('/auth', authRouter)

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
