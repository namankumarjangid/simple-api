const express = require('express');
require('./db/conn');
const PORT = process.env.PORT || 5000;
const studentRouter = require('./router/student');
const app = express();

const { STUDENTSDB } = require('./config/key');
const Student = require('./models/students');


//1 create a new router 
//2 we need to define the router
app.use(express.json());
app.use(studentRouter);  //3 register our router

app.listen(PORT, () => {
    console.log("listning at", PORT)
});