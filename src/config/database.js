const { Sequelize } = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL

// Conexión a base de datos

const sequelize = new Sequelize(DATABASE_URL, {dialect: 'postgres'});

// Test de conexión a la base de datos

sequelize.authenticate()
    .then(() => console.log('Conexión a PostgreSQL exitosa'))
    .catch(err => console.error('Error al conectar a PostgreSQL:', err));

module.exports = sequelize;
