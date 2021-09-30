let dbTask = require('../models/task')

exports.delete = (req,res)=>{
    if(!req.body._id){
        res.json({
            success:false,
            msg:'please enter all details'
        })
    }else{
        dbTask.findByIdAndUpdate({_id:req.body._id},{$set:{status:-1}},(err,data)=>{
            if(err){
                res.json({
                    success:false,
                    msg:'task not deletd'
                })
            }else{
                res.json({
                    success:true,
                    msg:'task deleted'
                })
            }
        })
    }
}

