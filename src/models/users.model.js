const {Schema,model} = require("mongoose");

const bcrypt = require("bcryptjs");

const userSchema = new Schema({
    Name : {type:String,required:true},
    Email : {type:String,required:true},
    Password : {type:String,required:true},
    Profile_Photo : {type:String,required:true},
    Roles : [{type:String,required:true}],
},{
    versionKey:false,
    timestamps:true,
});

userSchema.pre("save",function(next){
    if(!this.isModified("password")) return next();
    bcrypt.hash(this.password,10, (err, hash)=> {
        this.password = hash;
        return next();
    });
});

userSchema.methods.checkPassword = function(password){
    bcrypt.compare(this.password, password, function(err, res) {
        if(err) return err;
        return res;
    });
}

module.exports = new model("user",userSchema);