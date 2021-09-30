const express = require('express')
const app = express.Router()
let tokenVerify=require('./tokenVerify')

let addTask=require('./addTask')
app.post('/addTask',tokenVerify,addTask)

let allTask=require('./allTask')
app.get('/allTask',tokenVerify,allTask.allTask)

let updateTask =require('./updateTask')
app.post('/updateTask',tokenVerify,updateTask)

let deleteTask=require('./deleteTask')
app.post('/deleteTask',tokenVerify,deleteTask.delete)

var register=require('./register')
app.post('/register',register.register)

var login=require('./login')
app.post('/login',login.login)

var completedTask=require('./completedTask')
app.get('/completedTask',tokenVerify,completedTask.completedTask)

var pendingTask=require('./pendingTask')
app.get('/pendingTask',tokenVerify,pendingTask.pendingTask)
module.exports = app;