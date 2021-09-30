let dbTask = require('../models/task')

exports.pendingTask=(req,res)=>{
    dbTask.find({status:{$ne:1},createdBy:req.decoded._id},(err,data)=>{
        if(err){
            res.json({
                success:false,
                msg:'error'
            })
        }else{
            res.json({
                success:true,
                msg:'pending tasks',
                data:data
            })
        }
    })
}
