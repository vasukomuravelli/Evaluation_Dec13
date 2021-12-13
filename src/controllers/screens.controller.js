const express = require("express");

const Screen = require("../models/screen.model");

const router = express.Router();

router.post("/",async(req,res)=>{

    try{
        const screen = await Screen.create(req.body);
        
        res.status(201).send(screen);
    }catch(e){
        res.status(500).send({"Message" : e.message,"Status" : "Failed"});
    }
});

router.get("/",async(req,res)=>{

    try{
        const screen = await Screen.find().lean().exec();
        
        res.status(201).send(screen);
    }catch(e){
        res.status(500).send({"Message" : e.message,"Status" : "Failed"});
    }
});


module.exports = router;
