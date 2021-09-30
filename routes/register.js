let dbLogin = require('../models/login')

exports.register=(req,res)=>{
    if(!req.body.email||!req.body.password){
        res.json({
            success:false,
            msg:'plz send all details'
        })
    }else{
        dbLogin.findOne({email:req.body.email},(err,loginData)=>{
            if(err){
                res.json({
                    success:false,
                    msg:'plz try again after sometime'
                })
            }else if(!loginData || loginData==null){
                new dbLogin({
                    email:req.body.email,
                    password:req.body.password
                }).save((err,data)=>{
                    if(err){
                        res.json({
                            success:false,
                            msg:'plz try again after sometime'
                        })
                    }else{
                        res.json({
                            success:true,
                            msg:'you have successfully registered'
                        })
                    }
                })
            }else{
                res.json({
                    success:false,
                    msg:'you have already registered'
                })
            }
        })
    }
}