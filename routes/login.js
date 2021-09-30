var dbLogin = require('../models/login')
var jwt=require('jsonwebtoken')

exports.login = (req,res)=>{
    if(!req.body.email||!req.body.password){
        res.json({
            success:false,
            msg:'please enter all details'
        })
    }else{
        dbLogin.findOne({email:req.body.email},(err,loginData)=>{
            if(err){
                res.json({
                    success:false,
                    msg:'plz try again'
                })
            }else if(!loginData||loginData==null){
                res.json({
                    success:false,
                    msg:'plz register first'
                })
            }else if(loginData.password!=req.body.password){
                res.json({
                    msg:'password incorrect'
                })
            }
            else{
                let tokenData={
                    _id: loginData._id
                }
                let token=jwt.sign(tokenData,req.app.get('secret'))
                res.json({
                    success:true,
                    msg:'successfully login',
                    token:token
                })
            }
        })
    }
}