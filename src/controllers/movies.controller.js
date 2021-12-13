const express = require("express");

const Movie = require("../models/movies.model");

const router = express.Router();

const upload = require("../middleware/fileuploads");

const authenticate = require("../middleware/authenticate");

router.post("/",upload.single(Poster),authenticate,async(req,res)=>{

    try{
        const movie = await Movie.create({
            Name : req.body.Name,
            Actors : req.body.Actors,
            Language : req.body.Language,
            Directors : req.body.Directors,
            Poster : req.file.path,
        }); 
        
        res.status(201).send(movie);
    }catch(e){
        res.status(500).send({"Message" : e.message,"Status" : "Failed"});
    }
});

router.post("/:Actors",async(req,res)=>{
    try{
        const movie = await Movie.find({Actors : [req.params.Actors]}).lean().exec();

        res.status(200).send(movie);
    }catch(e){
        res.status(500).send({"Message" : e.message,"Status" : "Failed"});
    }
})

module.exports = router;
