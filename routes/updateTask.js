let dbTask = require('../models/task')

let updateTask = (req,res)=>{
    if(!req.body._id || !req.body.task){
        res.json({
            success:false,
            msg:'please provide all details'
        })
    }else{
        dbPerson.findOneAndUpdate({_id: req.body._id},{$set:{task:req.body.task,status:req.body.status}},(err,data)=>{
            if(err){
                res.json({
                    success:false,
                    msg:'something went wrong'
                })
            }else{
                res.json({
                    success:true,
                    msg:'task updated'
                })
            }
        })
    }
}

module.exports = updateTask