let dbTask = require('../models/task')

let addTask=(req,res)=>{
    if(!req.body.task){
        res.json({
            success:false,
            msg:'all data not provided'
        })
    }else{
        let newTask=new dbTask({
        task:req.body.task,
        createdBy:req.decoded._id,
        status:0
        })
        newTask.save((err,data)=>{
            if(err){
                res.json({
                    success:false,
                    msg:'something went wrong'
                })
            }else{
                res.json({
                    success:true,
                    msg:'Task saved',
                    data:data
                })
            }
        })
    }
}

module.exports = addTask;
