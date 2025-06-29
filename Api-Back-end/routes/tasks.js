const express = require('express');
const Task = require('../models/Task'); // Modelo de la tabla Task
const authenticateToken = require('../middlewares/auth'); // Middleware para autenticación
const router = express.Router();

// Obtener todas las tareas del usuario autenticado
router.get('/', authenticateToken, async (req, res) => {
  try {
    const tasks = await Task.findAll({ where: { userId: req.user.userId } });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las tareas.', error });
  }
});

// Crear una nueva tarea
router.post('/', authenticateToken, async (req, res) => {
  const { description } = req.body;
  try {
    const newTask = await Task.create({ 
      description, 
      userId: req.user.userId 
    });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la tarea.', error });
  }
});

// Actualizar una tarea existente
router.put('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { description, completed } = req.body;
  try {
    const task = await Task.findOne({ where: { id, userId: req.user.userId } });
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada.' });
    }
    task.description = description !== undefined ? description : task.description;
    task.completed = completed !== undefined ? completed : task.completed;
    await task.save();
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la tarea.', error });
  }
});

// Eliminar una tarea
router.delete('/:id', authenticateToken, async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findOne({ where: { id, userId: req.user.userId } });
    if (!task) {
      return res.status(404).json({ message: 'Tarea no encontrada.' });
    }
    await task.destroy();
    res.status(200).json({ message: 'Tarea eliminada correctamente.' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la tarea.', error });
  }
});

module.exports = router;
