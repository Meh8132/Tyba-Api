const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

// Modelo de las consultas hechas por el usuario
const Query = sequelize.define('Query', {
    city: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    coordinates: {
        type: DataTypes.JSON,
        allowNull: true,
    },
    restaurantes: {
        type: DataTypes.JSON,
        allowNull: false,
    },
});

Query.belongsTo(User, { foreignKey: 'userId' });

module.exports = Query;
