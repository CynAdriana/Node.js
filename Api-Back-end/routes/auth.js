const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Importa el modelo de Usuario
const router = express.Router();

// Clave secreta para JWT
const JWT_SECRET = process.env.JWT_SECRET || 'clave_secreta_super_segura';

// Ruta para registrar un usuario
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe.' });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el usuario
    const newUser = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({ message: 'Usuario registrado con éxito.', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error al registrar el usuario.', error });
  }
});

// Ruta para iniciar sesión
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verificar si el usuario existe
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Credenciales inválidas.' });
    }

    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Credenciales inválidas.' });
    }

    // Generar el token JWT
    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Inicio de sesión exitoso.', token });
  } catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión.', error });
  }
});

module.exports = router;
