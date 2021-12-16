require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (token)=>{
    console.log("decoded");
    return new Promise((resolve,reject)=>{
        jwt.verify(token, process.env.token, function(err, decoded) {
            if(err) return reject(err);
            return resolve(decoded);
          });
    });
}

module.exports = async(req,res,next)=>{
    const bearerToken = req?.headers?.authorization;
    console.log(bearerToken);
    if( !bearerToken || ! bearerToken.startsWith("Bearer "))
        return res.status(500).json({
            Message : "Please enter a valid Token",
            Status : "Failed",
        });        
    let user;
    const token = bearerToken.split(' ')[1];
    try{
        user = await verifyToken(token);
    }catch(e){
        return res.status(500).send({message : e.message,Status:"Failed"});
    }

    if(! user){
        return res.status(500).json({
            Message : "Please enter a valid Token",
            Status : "Failed",
        });
    }
    req.user = user;

    return next();
}