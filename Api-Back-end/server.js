require('dotenv').config(); // Cargar variables de entorno
const express = require('express');
const sequelize = require('./config/database'); // Conexión a la base de datos
const cors = require('cors');

const app = express();

// Ruta base para probar
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente!');
});

// Puerto
const PORT = process.env.PORT || 3000;

// Probar la conexión a la base de datos y arrancar el servidor
sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos exitosa.');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

//Sincronizacion de models
const User = require('./models/User');
const Task = require('./models/Task');

sequelize
  .sync({ force: true }) // Esto elimina y recrea las tablas cada vez; usa { alter: true } en producción
  .then(() => {
    console.log('Modelos sincronizados con la base de datos.');
  })
  .catch((error) => {
    console.error('Error al sincronizar los modelos:', error);
  });

  //Rutas 
  const authRoutes = require('./routes/auth');

app.use(express.json()); // Para manejar JSON en las solicitudes
app.use('/auth', authRoutes); // Registrar las rutas de autenticación

//Ruta task 
const taskRoutes = require('./routes/tasks');
app.use('/tasks', taskRoutes); // Registrar las rutas de tareas




