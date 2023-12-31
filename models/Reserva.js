const {DataTypes} = require('sequelize');
const { sequelize } = require('../database');

const Reserva = sequelize.define('Reserva', {
    // Model attributes are defined here
    quienrealiza: {
        type: DataTypes.STRING,
        allowNull: false
    },
    codigoreserva: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fechadevuelo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numerodeboleto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    

    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
   

  }, {
    createdAt: true,
    updatedAt: true,
    tableName: 'usuarios',

  });

  module.exports = Usuarios;
