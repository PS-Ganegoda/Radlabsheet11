const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const StudentModel = require('./models/student')


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://piumisarangag:login@cluster0.gziwyww.mongodb.net/')

app.post('/register',(req,res)=>{
StudentModel.create(req.body)
.then(student=>res.json(student))
.catch(err=>res.json(err))

})


app.listen(3004,()=>{
    console.log("Server is running")
})

