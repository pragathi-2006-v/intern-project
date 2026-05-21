const students = require("../models/studentModel");


// GET all students
const getStudents = (req, res) => {

    res.json(students);
};


// POST add student
const addStudent = (req, res) => {

    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age,
        course: req.body.course
    };

    students.push(newStudent);

    res.json({
        message: "Student Added Successfully",
        student: newStudent
    });
};


// PUT update student
const updateStudent = (req, res) => {

    const id = parseInt(req.params.id);

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student Not Found"
        });
    }

    student.name = req.body.name || student.name;
    student.age = req.body.age || student.age;
    student.course = req.body.course || student.course;

    res.json({
        message: "Student Updated Successfully",
        student
    });
};


// DELETE student
const deleteStudent = (req, res) => {

    const id = parseInt(req.params.id);

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student Not Found"
        });
    }

    const deletedStudent = students.splice(index, 1);

    res.json({
        message: "Student Deleted Successfully",
        deletedStudent
    });
};


module.exports = {
    getStudents,
    addStudent,
    updateStudent,
    deleteStudent
};