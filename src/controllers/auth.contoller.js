const User = require("../models/users.model");

const jwt = require("jsonwebtoken");

require("dotenv").config();

let newToken = (a)=>{
    jwt.sign({user : a},process.env.token);
}

const register = async(req,res)=>{
    try{
        let user = await User.findOne({Email : req.body.Email}).lean().exec();
        if(!user){
            res.status(500).send({"Message" : "Please use different Email","Status" : "Failed"});
        }
        
        user = await User.create({
            "Name" : req.body.Name,
            "Email" : req.body.Email,
            "Password" : req.body.Password,
            "Profile_Photo" : req.file.path,
            "Roles" : req.body.Roles,
        });

        const token = newToken(user);

        res.status(201).json({user,token});
    }catch(e){
        res.status(500).send({"Message" : e.message,"Status" : "Failed"});
    }
}

const login = async(req,res)=>{
    try{
        let user = await User.findOne({"Email" : req.body.Email});

        if(!user){
            res.status(500).send({"Message" : "Please check your Email or Password","Status" : "Failed"});
        }

        const match = await user.checkPassword(req.body.Password);

        if(!match){
            res.status(500).send({"Message" : "Please check your Email or Password","Status" : "Failed"});
        }

        const token = newToken(user);

        res.status(201).json({user,token});

    }catch(e){
        res.status(500).send({"Message" : e.message,"Status" : "Failed"});
    }
}

module.exports = {register,login};