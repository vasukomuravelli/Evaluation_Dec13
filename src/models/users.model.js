const {Schema,model} = require("mongoose");

const userSchema = new Schema({
    Name : {type:String,required:true},
    Email : {type:String,required:true},
    Password : {type:String,required:true},
    Profile_Photo : {type:String,required:true},
    roles : [{type:String,required:true}],
},{
    versionKey:false,
    timestamps:true,
});

module.exports = new model("user",userSchema);