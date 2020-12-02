const mongoose = require('mongoose');
const { STUDENTSDB } = require('../config/key');

mongoose.connect(STUDENTSDB, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("connection is succesfull")
}).catch((err) => {
    console.log("no conn" + err)
})
// bc2VjVrzFsQ9JG7l