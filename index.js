const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
const authRoutes = require('./routes/auth');
const evaluationRoutes = require('./routes/evaluations');

app.use('/api/auth', authRoutes);
app.use('/api/evaluations', evaluationRoutes);

// Puerto de la aplicación
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
