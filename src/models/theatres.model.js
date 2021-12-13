const {Schema,model} = require("mongoose");

const theatreSchema = new Schema({
    Name : {type:String,required:true},
    Location : {type:String,required:true}
},{
    versionKey:false,
    timestamps:true,
});

module.exports = new model("theatre",theatreSchema);