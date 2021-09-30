let jwt = require('jsonwebtoken')

let tokenVerify=(req,res,next)=>{
    let token = req.headers.token;
    if(!token){
        res.json({
            success:false,
            msg:'unauthorized user'
        })
    }else{
        jwt.verify(token,req.app.get('secret'),(err,decoded)=>{
            if(err){
                res.json({
                    success:false,
                    msg:'unauthorized access'
                })
            }else{
                req.decoded=decoded;
                next();
            }
        })
    }
}

module.exports=tokenVerify