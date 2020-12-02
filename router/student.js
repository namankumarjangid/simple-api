const express = require('express');
const Student = require('../models/students');
const router = new express.Router();

// method 1 =  promises with catch and then

// router.post("/students", (req, res) => {
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(() => {
//         res.status(201).send(user)
//     }).catch((e) => {
//         res.status(400).send(e)
//     })
// });

// method 2 = promise with try and catch block
router.post("/students", async (req, res) => {
    try {
        // console.log(req.body);
        const user = new Student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (e) {
        res.status(400).send(e);
    }
});

// read  the data of registered students
router.get("/students", async (req, res) => {

    try {
        const studentsData = await Student.find();
        res.send(studentsData)
    } catch (e) {
        res.send(e)
    }
})

// get the indivisual student data using id
router.get("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        res.send(_id);
    } catch (e) {
        res.send(e)
    }
})

// update the students by its id
router.patch("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id;
        const updateStudent = await Student.findByIdUpdate(_id, req.body, {
            new: true
        });
        res.send(updateStudent)
    } catch (e) {
        res.status(404).send(e)
    }
});

// delete the students by it id
router.delete("/students/:id", async (req, res) => {
    try {
        // const id = req.params.id;    also can be written as below
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if (!req.params.id) {
            return res.status(404).send()
        }
        res.send(deleteStudent)
    } catch (e) {
        res.status(500).send(e)
    }
});



module.exports = router;