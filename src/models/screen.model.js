const {Schema,model} = require("mongoose");

const Theatre = require("./theatres.model");

const screenSchema = new Schema({
    Name : {type:String,required:true},
    Theatre : {
        type:Schema.Types.ObjectId,
        ref:Theatre,
        required:true,
    }
},{
    versionKey:false,
    timestamps:true,
});

module.exports = new model("screen",screenSchema);