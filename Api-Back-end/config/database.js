const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'todo_list', // Nombre de la base de datos
  'root', // Usuario de la base de datos
  'Admin123#', // Contraseña del usuario
  {
    host: '127.0.0.1', // Dirección del servidor de la base de datos
    port: 3306, // Puerto de la base de datos
    dialect: 'mysql', // Motor de base de datos
  }
);

sequelize
  .authenticate()
  .then(() => console.log('Conexión a la base de datos exitosa.'))
  .catch((error) => console.error('Error al conectar a la base de datos:', error));

module.exports = sequelize;
