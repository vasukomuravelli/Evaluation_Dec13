const express = require("express");

const User = require("../models/users.model");

const router = express.Router();

const Upload = require("../middleware/fileuploads");

router.get("",async(req,res)=>{
    try{
        const user = await User.find().lean().exec();
        res.status(200).json(user);
    }catch(e){
        res.status(500).send({"Message" : e.message,"Status" : "Failed"});
    }
})

router.delete("/:id",async(req,res)=>{
    try{
        const user = await User.findByIdAndDelete(req.params.id).lean().exec();
        res.status(200).json(user);
    }catch(e){
        res.status(500).send({"Message" : e.message,"Status" : "Failed"});
    }
});

router.patch("/:id",async(req,res)=>{
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec();
        res.status(200).json(user);
    }catch(e){
        res.status(500).send({"Message" : e.message,"Status" : "Failed"});
    }
})

module.exports = router;