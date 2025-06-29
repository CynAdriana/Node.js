const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'clave_secreta_super_segura';

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Acceso denegado. Token no proporcionado.' });
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next(); // Continúa hacia la siguiente función
  } catch (error) {
    res.status(400).json({ message: 'Token inválido.' });
  }
};

module.exports = authenticateToken;
