const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/company").then(()=>{
    console.log("Connection Established")
}).catch((err)=>{
    console.log(err)
})

const express = require("express")
const app = new express()
app.set("view engine", "pug")
app.set("views", "./views")

const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const employee = require("./controllers/empController")

app.get("/", employee.findEmployee)

app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.post("/signup", employee.insertEmployee)

app.listen(8080,()=>{
    console.log("Server Running...")
})