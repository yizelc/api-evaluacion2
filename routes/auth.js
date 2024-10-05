const express = require('express');
const router = express.Router();

// Simulación de usuarios registrados
const users = [
  { id: 1, username: 'docente', password: '123456', role: 'teacher' },
  { id: 2, username: 'estudiante', password: '123456', role: 'student' }
];

// Ruta para iniciar sesión
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Buscar usuario
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    res.json({ message: 'Inicio de sesión exitoso', user });
  } else {
    res.status(401).json({ message: 'Credenciales incorrectas' });
  }
});

module.exports = router;
