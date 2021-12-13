const express = require("express");

const Theatre = require("../models/theatres.model");

const router = express.Router();

router.post("/",async(req,res)=>{

    try{
        const theatre = await Theatre.create(req.body);
        
        res.status(201).send(theatre);
    }catch(e){
        res.status(500).send({"Message" : e.message,"Status" : "Failed"});
    }
});

router.get("/",async(req,res)=>{

    try{
        const theatre = await Theatre.find().lean().exec();
        
        res.status(201).send(theatre);
    }catch(e){
        res.status(500).send({"Message" : e.message,"Status" : "Failed"});
    }
});


module.exports = router;
