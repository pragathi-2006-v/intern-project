const express = require("express");

const router = express.Router();

const {
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent
} = require("../controllers/studentController");


// GET
router.get("/", getStudents);


// POST
router.post("/", addStudent);


// PUT
router.put("/:id", updateStudent);


// DELETE
router.delete("/:id", deleteStudent);


module.exports = router;