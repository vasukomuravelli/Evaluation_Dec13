const {Schema,model} = require("mongoose");

const Movie = require("./movies.model");

const Screen = require("./screen.model");

const showSchema = new Schema({
    Timing : {type:String,required:true},
    Movie : {
        type:Schema.Types.ObjectId,
        ref:Movie,
        required:true,
    },
    Total_Seats : {type:Number,required:true},
    Screen : {
        type:Schema.Types.ObjectId,
        ref:Screen,
        required:true,
    }
},{
    versionKey:false,
    timestamps:true,
});

module.exports = new model("show",showSchema);