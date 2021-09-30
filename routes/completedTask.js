let dbTask = require('../models/task')

exports.completedTask=(req,res)=>{
    dbTask.find({status:{$ne:0},createdBy:req.decoded._id},(err,data)=>{
        if(err){
            res.json({
                success:false,
                msg:'error'
            })
        }else{
            res.json({
                success:true,
                msg:'completed tasks',
                data:data
            })
        }
    })
}
