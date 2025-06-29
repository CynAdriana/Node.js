const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Importa la conexión a la base de datos

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true, // Agrega createdAt y updatedAt automáticamente
});

module.exports = User;
