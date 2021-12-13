const express = require("express");

const Seat = require("../models/seat.model");

const router = express.Router();

router.post("/",async(req,res)=>{
    try{
        const seats = await Seat.create(req.body);

        res.status(200).send(seats);
    }catch(e){
        res.status(500).send({"Message" : e.message,"Status" : "Failed"});
    }
})

router.get("/:seats",async(req,res)=>{
    try{
        const seats = await Seat.find({Show : {Total_Seats : {$gte : +(req.params.seats)}}}).populate(Show).lean().exec();
        res.status(200).send(seats);
    }catch(e){
        res.status(500).send({"Message" : e.message,"Status" : "Failed"});
    }
});

router.get("/:location",async(req,res)=>{
    try{
        const shows = await Show.find({Screen : {Location : req.params.location}}).populate(Movie).populate(Screen).lean().exec();
        res.status(200).send(shows);
    }catch(e){
        res.status(500).send({"Message" : e.message,"Status" : "Failed"});
    }
});

module.exports = router;