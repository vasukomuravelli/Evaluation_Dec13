const {Schema,model} = require("mongoose");

const Show = require("./shows.model");

const seatSchema = new Schema({
    Show : {
        type:Schema.Types.ObjectId,
        ref:Show,
        required:true,
    }
},{
    versionKey:false,
    timestamps:true,
});

module.exports = new model("seat",seatSchema);