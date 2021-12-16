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

router.get("/:showid",async(req,res)=>{
    try{
        const seats = await Seat.find({Show:{_id : req.params.showid}}).populate("Show").lean().exec();
        res.status(200).send(seats);
    }catch(e){
        res.status(500).send({"Message" : e.message,"Status" : "Failed"});
    }
});



module.exports = router;