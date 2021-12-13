const {Schema,model} = require("mongoose");

const movieSchema = new Schema({
    Name : {type:String,required:true},
    Actors : [{type:String,required:true}],
    Language : [{type:String,required:true}],
    Directors : [{type:String,required:true}],
    Poster : {type:String,required:true},
},{
    versionKey:false,
    timestamps:true,
});

module.exports = new model("movie",movieSchema);