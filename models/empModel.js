const mongoose = require("mongoose")
const emp = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
})
const Emp = mongoose.model("Employee", emp)
module.exports = Emp;