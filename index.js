const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
let config=require('./config/config')
app.set('secret',config.secret)

//mongoose.connect(config.get('db'),(err,data)=>{
mongoose.connect("mongodb://localhost/todo",(err,data)=>{    
    if(err){
        console.log(err);
        console.log('database not connected')
    }else{
        //console.log('database connected')
    }
})

var routes = require('./routes/routes')
app.use('/api',routes)

let server = app.listen(5000,()=>{
    console.log('server started')
})

module.exports=server;