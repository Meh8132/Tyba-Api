const { Sequelize } = require('sequelize');

// Conexión a base de datos

const sequelize = new Sequelize('tybaDB', 'tybaDB', 'CHGjcu02*', {
    host: 'localhost',
    dialect: 'postgres',
});

// Test de conexión a la base de datos

sequelize.authenticate()
    .then(() => console.log('Conexión a PostgreSQL exitosa'))
    .catch(err => console.error('Error al conectar a PostgreSQL:', err));

module.exports = sequelize;
