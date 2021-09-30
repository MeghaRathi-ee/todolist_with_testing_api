const mongoose = require('mongoose')
const Schema = mongoose.Schema

let newTask = new Schema({
    task:String,
    CreatedOn: {
        type:Date,
        default:new Date()
    },
    status:Number,
    createdBy:mongoose.Schema.Types.ObjectId
})

module.exports = mongoose.model('abc',newTask)