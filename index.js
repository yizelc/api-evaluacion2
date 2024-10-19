const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
const authRoutes = require("./routes/auth");
const evaluationRoutes = require("./routes/evaluations");
const teacherRoutes = require("./routes/teachers"); // Nueva ruta para docentes
const studentRoutes = require("./routes/students"); // Nueva ruta para alumnos

app.use("/api/auth", authRoutes);
app.use("/api/evaluations", evaluationRoutes);
app.use("/api/teachers", teacherRoutes); // Ruta de docentes
app.use("/api/students", studentRoutes); // Ruta de alumnos

// Puerto de la aplicación
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
