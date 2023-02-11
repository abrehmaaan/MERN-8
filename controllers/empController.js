const Emp = require("../models/empModel")
const insertEmployee = async(req, res)=>{
    try{
        const employee = new Emp({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        const result = await employee.save()
        res.send("Registration Successful")
    }
    catch(err){
        res.send(err.message)
    }
}

const findEmployee = async(req, res)=>{
    try{
        const result = await Emp.find()
        res.send(result)
    }
    catch(err){
        res.send(err.message)
    }
}

module.exports = {insertEmployee, findEmployee}