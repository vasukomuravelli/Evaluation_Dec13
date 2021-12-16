const express = require("express");

const Show = require("../models/shows.model");

const router = express.Router();

router.post("/",async(req,res)=>{
    try{
        const shows = await Show.create(req.body);
        res.status(200).send(shows);
    }catch(e){
        res.status(500).send({"Message" : e.message,"Status" : "Failed"});
    }
});

router.get("/",async(req,res)=>{
    try{
        const shows = await Show.find().populate("Movie").populate({path : "Screen", populate : {path : "Theatre"}}).lean().exec();
        res.status(200).send(shows);
    }catch(e){
        res.status(500).send({"Message" : e.message,"Status" : "Failed"});
    }
});

router.get("/:location",async(req,res)=>{
    try{
        const shows = await Show.find({Screen : {Theatre : {Location : req.params.location}}}).populate("Movie").populate({path : "Screen", populate : {path : "Theatre"}}).populate("Theatre").lean().exec();
        res.status(200).send(shows);
    }catch(e){
        res.status(500).send({"Message" : e.message,"Status" : "Failed"});
    }
});

module.exports = router;