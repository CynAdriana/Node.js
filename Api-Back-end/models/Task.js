const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User'); // Importa el modelo de usuario para la relación

const Task = sequelize.define('Task', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  timestamps: true,
});

// Relación: Un Usuario tiene muchas Tareas
Task.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });
User.hasMany(Task, { foreignKey: 'userId' });

module.exports = Task;
