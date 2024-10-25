const express = require("express");
const router = express.Router();

// Simulación de datos de alumnos
let students = [
  {
    idAlumno: 1,
    nombre: "Carlos",
    apellidoPaterno: "Gómez",
    apellidoMaterno: "Ramírez",
    carrera: "Ingeniería",
    grupo: "A",
  },
  {
    idAlumno: 2,
    nombre: "María",
    apellidoPaterno: "Fernández",
    apellidoMaterno: "López",
    carrera: "Arquitectura",
    grupo: "B",
  },
];

// Obtener todos los alumnos
router.get("/", (req, res) => {
  res.json(students);
});

// Obtener un alumno por ID
router.get("/:idAlumno", (req, res) => {
  const student = students.find((s) => s.idAlumno == req.params.idAlumno);
  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ message: "Alumno no encontrado" });
  }
});

// Crear un nuevo alumno
router.post("/", (req, res) => {
  const newStudent = { idAlumno: students.length + 1, ...req.body };
  students.push(newStudent);
  res.json({ message: "Alumno creado", student: newStudent });
});

// Actualizar un alumno
router.put("/:idAlumno", (req, res) => {
  const index = students.findIndex((s) => s.idAlumno == req.params.idAlumno);
  if (index !== -1) {
    students[index] = { idAlumno: req.params.idAlumno, ...req.body };
    res.json({ message: "Alumno actualizado", student: students[index] });
  } else {
    res.status(404).json({ message: "Alumno no encontrado" });
  }
});

// Eliminar un alumno
router.delete("/:idAlumno", (req, res) => {
  const index = students.findIndex((s) => s.idAlumno == req.params.idAlumno);
  if (index !== -1) {
    students.splice(index, 1);
    res.json({ message: "Alumno eliminado" });
  } else {
    res.status(404).json({ message: "Alumno no encontrado" });
  }
});

module.exports = router;
