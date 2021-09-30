let dbTask = require('../models/task')

exports.allTask=(req,res)=>{
    dbTask.find({status:{$ne:-1},createdBy:req.decoded._id},(err,data)=>{
        if(err){
            res.json({
                success:false,
                msg:'error'
            })
        }else{
            res.json({
                success:true,
                msg:'All Tasks',
                data:data
            })
        }
    })
}
