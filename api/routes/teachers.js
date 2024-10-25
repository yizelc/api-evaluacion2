const express = require("express");
const router = express.Router();

// Simulación de datos de docentes
let teachers = [
  {
    idDocente: 1,
    nombre: "Juan",
    apellidoPaterno: "Pérez",
    apellidoMaterno: "García",
    carrera: "Matemáticas",
  },
  {
    idDocente: 2,
    nombre: "Ana",
    apellidoPaterno: "López",
    apellidoMaterno: "Martínez",
    carrera: "Física",
  },
];

// Obtener todos los docentes
router.get("/", (req, res) => {
  res.json(teachers);
});

// Obtener un docente por ID
router.get("/:idDocente", (req, res) => {
  const teacher = teachers.find((t) => t.idDocente == req.params.idDocente);
  if (teacher) {
    res.json(teacher);
  } else {
    res.status(404).json({ message: "Docente no encontrado" });
  }
});

// Crear un nuevo docente
router.post("/", (req, res) => {
  const newTeacher = { idDocente: teachers.length + 1, ...req.body };
  teachers.push(newTeacher);
  res.json({ message: "Docente creado", teacher: newTeacher });
});

// Actualizar un docente
router.put("/:idDocente", (req, res) => {
  const index = teachers.findIndex((t) => t.idDocente == req.params.idDocente);
  if (index !== -1) {
    teachers[index] = { idDocente: req.params.idDocente, ...req.body };
    res.json({ message: "Docente actualizado", teacher: teachers[index] });
  } else {
    res.status(404).json({ message: "Docente no encontrado" });
  }
});

// Eliminar un docente
router.delete("/:idDocente", (req, res) => {
  const index = teachers.findIndex((t) => t.idDocente == req.params.idDocente);
  if (index !== -1) {
    teachers.splice(index, 1);
    res.json({ message: "Docente eliminado" });
  } else {
    res.status(404).json({ message: "Docente no encontrado" });
  }
});

module.exports = router;
